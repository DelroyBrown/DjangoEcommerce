/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    f = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = f.prototype.render
                    },
                    g = 1e-10,
                    h = c._internals,
                    i = h.isSelector,
                    j = h.isArray,
                    k = f.prototype = c.to({}, .1, {}),
                    l = [];
                f.version = "2.0.2", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), c.prototype.invalidate.call(this)
                }, k.updateTo = function(a, b) {
                    var d, e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var g = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || f)
                        for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
                    return this
                }, k.render = function(a, b, d) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var e, f, i, j, k, l, m, n, o, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._time,
                        r = this._totalTime,
                        s = this._cycle,
                        t = this._duration,
                        u = this._rawPrevTime;
                    if (a >= p - 1e-7 && a >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = t, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, f = "onComplete", d = d || this._timeline.autoRemoveChildren), 0 === t && (this._initted || !this.vars.lazy || d) && (this._startTime === this._timeline._duration && (a = 0), (0 > u || 0 >= a && a >= -1e-7 || u === g && "isPause" !== this.data) && u !== a && (d = !0, u > g && (f = "onReverseComplete")), this._rawPrevTime = n = !b || a || u === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === t && u > 0) && (f = "onReverseComplete", e = this._reversed), 0 > a && (this._active = !1, 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), this._rawPrevTime = n = !b || a || u === a ? a : g)), this._initted || (d = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (j = t + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * j, this._yoyo && 0 !== (1 & this._cycle) && (this._time = t - this._time, o = this._yoyoEase || this.vars.yoyoEase, o && (this._yoyoEase || (o !== !0 || this._initted ? this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o] : (o = this.vars.ease, this._yoyoEase = o = o ? o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase : c.defaultEase)), this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0)), this._time > t ? this._time = t : this._time < 0 && (this._time = 0)), this._easeType && !o ? (k = this._time / t, l = this._easeType, m = this._easePower, (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : this._time / t < .5 ? this.ratio = k / 2 : this.ratio = 1 - k / 2) : o || (this.ratio = this._ease.getRatio(this._time / t))), q === this._time && !d && s === this._cycle) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!d && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = q, this._totalTime = r, this._rawPrevTime = u, this._cycle = s, h.lazyTweens.push(this), void(this._lazy = [a, b]);
                        !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / t)
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== q && a >= 0 && (this._active = !0), 0 === r && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))), i = this._firstPT; i;) i.f ? i.t[i.p](i.c * this.ratio + i.s) : i.t[i.p] = i.c * this.ratio + i.s, i = i._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || (this._totalTime !== r || f) && this._callback("onUpdate")), this._cycle !== s && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), f && (!this._gc || d) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[f] && this._callback(f), 0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0))
                }, f.to = function(a, b, c) {
                    return new f(a, b, c)
                }, f.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
                }, f.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
                }, f.staggerTo = f.allTo = function(a, b, g, h, k, m, n) {
                    h = h || 0;
                    var o, p, q, r, s = 0,
                        t = [],
                        u = function() {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
                        },
                        v = g.cycle,
                        w = g.startAt && g.startAt.cycle;
                    for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
                        p = {};
                        for (r in g) p[r] = g[r];
                        if (v && (e(p, a, q), null != p.duration && (b = p.duration, delete p.duration)), w) {
                            w = p.startAt = {};
                            for (r in g.startAt) w[r] = g.startAt[r];
                            e(p.startAt, a, q)
                        }
                        p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
                    }
                    return t
                }, f.staggerFrom = f.allFrom = function(a, b, c, d, e, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
                }, f.staggerFromTo = f.allFromTo = function(a, b, c, d, e, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
                }, f.delayedCall = function(a, b, c, d, e) {
                    return new f(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        callbackScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        immediateRender: !1,
                        useFrames: e,
                        overwrite: 0
                    })
                }, f.set = function(a, b) {
                    return new f(a, 0, b)
                }, f.isTweening = function(a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var m = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    n = f.getAllTweens = function(b) {
                        return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
                    };
                f.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = n(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, f.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var e, g, k, l, m, n = h.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
                            for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (k in n)
                                for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
                        }
                    }
                };
                var o = function(a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return f.pauseAll = function(a, b, c) {
                    o(!0, a, b, c)
                }, f.resumeAll = function(a, b, c) {
                    o(!1, a, b, c)
                }, f.globalTimeScale = function(b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, k.totalDuration = function(a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, f
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function(a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    n = function(a, b, c) {
                        var d, e, f = a.cycle;
                        for (d in f) e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
                        delete a.cycle
                    },
                    o = g.pauseCallback = function() {},
                    p = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = d.prototype = new b;
                return d.version = "2.0.2", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function(a, b, d, e) {
                    var f = d.repeat && l.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, q.from = function(a, b, d, e) {
                    return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
                }, q.fromTo = function(a, b, d, e, f) {
                    var g = e.repeat && l.TweenMax || c;
                    return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
                    var l, o, q = new d({
                            onComplete: i,
                            onCompleteParams: j,
                            callbackScope: k,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        r = e.cycle;
                    for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
                    return this.add(q, g)
                }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, q.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, q.set = function(a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g, h, i = new d(a),
                        j = i._timeline;
                    for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
                    return j.add(i, 0), e && i.totalDuration(), i
                }, q.add = function(e, f, g, h) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), e._time && (j = Math.max(0, Math.min(e.totalDuration(), (this.rawTime() - e._startTime) * e._timeScale)), Math.abs(j - e._totalTime) > 1e-5 && e.render(j, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return this
                }, q.remove = function(b) {
                    if (b instanceof a) {
                        this._remove(b, !1);
                        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
                        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
                    }
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var d = b.length; --d > -1;) this.remove(b[d]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, q._remove = function(a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, q.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, q.insert = q.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, q.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, q.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, q.addPause = function(a, b, d, e) {
                    var f = c.delayedCall(0, o, d, e || this);
                    return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
                }, q.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, q.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, q._parseTimeOrLabel = function(b, c, d, e) {
                    var f, g;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (g = e.length; --g > -1;) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                    if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);
                    else {
                        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f
                    }
                    return Number(b) + c
                }, q.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, q.stop = function() {
                    return this.paused(!0)
                }, q.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, q.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, q.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, l, m, n = this._time,
                        o = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._startTime,
                        q = this._timeScale,
                        r = this._paused;
                    if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;
                    else if (1e-7 > a)
                        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (i = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !b) {
                            if (a >= n)
                                for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
                            else
                                for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
                            l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = a
                    }
                    if (this._time !== n && this._first || c || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n)
                            for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                                if (d._active || d._startTime <= n && !d._paused && !d._gc) {
                                    if (l === d) {
                                        for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                                        l = null, this.pause()
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                                }
                                d = g
                            }
                        this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
                    }
                }, q._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, q.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, q.getTweensOf = function(a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, q.recent = function() {
                    return this._recent
                }, q._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, q.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, q._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, q.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, q.invalidate = function() {
                    for (var b = this._first; b;) b.invalidate(), b = b._next;
                    return a.prototype.invalidate.call(this)
                }, q._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, q.totalTime = function(b, c, d) {
                    this._forcingPlayhead = !0;
                    var e = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, q.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, q.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
                }, q.paused = function(b) {
                    if (!b)
                        for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
                    return a.prototype.paused.apply(this, arguments)
                }, q.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, q.rawTime = function(a) {
                    return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale
                }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = 1e-10,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "2.0.2", k.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, k.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, k.removeCallback = function(a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function(b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }, k.tweenTo = function(a, c) {
                    c = c || {};
                    var d, e, f, g = {
                            ease: j,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        h = c.repeat && i.TweenMax || b;
                    for (e in c) g[e] = c[e];
                    return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new h(this, d, g), g.onStart = function() {
                        f.target.paused(!0), f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0), c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || [])
                    }, f
                }, k.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        callbackScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.isFromTo = 1, d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, k.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, i, j, k, l, m, n, o = this._time,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._duration,
                        r = this._totalTime,
                        s = this._startTime,
                        t = this._timeScale,
                        u = this._rawPrevTime,
                        v = this._paused,
                        w = this._cycle;
                    if (o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = q, a = q + 1e-4);
                    else if (1e-7 > a)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === q && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
                        else {
                            if (this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
                            a = 0, this._initted || (k = !0)
                        }
                    else if (0 === q && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = q + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time), this._time > q ? (this._time = q, a = q + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
                        if (a = this._time, a >= o || this._repeat && w !== this._cycle)
                            for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
                        else
                            for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
                        m && m._startTime < q && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            z = this._totalTime,
                            A = this._cycle,
                            B = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = w * q, this._cycle < w ? x = !x : this._totalTime += q, this._time = o, this._rawPrevTime = 0 === q ? u - 1e-4 : u, this._cycle = w, this._locked = !0, o = x ? 0 : q, this.render(o, b, 0 === q), b || this._gc || this.vars.onRepeat && (this._cycle = A, this._locked = !1, this._callback("onRepeat")), o !== this._time) return;
                        if (y && (this._cycle = w, this._locked = !0, o = x ? q + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !v) return;
                        this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
                    }
                    if (!(this._time !== o && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && (0 === this._totalTime && this._totalDuration || b || this._callback("onStart")), n = this._time, n >= o)
                        for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
                    else
                        for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
                            if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                                if (m === d) {
                                    for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                                    m = null, this.pause()
                                }
                                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                            }
                            d = i
                        }
                    this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
                }, k.getActive = function(a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (b[c].time < a) return b[c].name;
                    return null
                }, k.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function(a, b) {
                        return a.time - b.time
                    }), b
                }, k.invalidate = function() {
                    return this._locked = !1, a.prototype.invalidate.call(this)
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0
                }, k.totalDuration = function(b) {
                    return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, k.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) {
                        c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[0][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function(a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                } t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]),
                            c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q] || 0, d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                                    d = n[f][2], this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0, this._overwriteProps.push(d)
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (b < this._l1 && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                                    for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                                    this._s1 = l[e - 1], this._si = e
                                } else if (b < this._s1 && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x ? [
                                    ["x", "y", "rotation", j, !1]
                                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, g._overwriteProps.push("rotation")), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._mod = function(a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1;) b = a[c[d]], b && "function" == typeof b && (this._mod[c[d]] = b)
                }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    if (d = this._autoRotate)
                        for (c = d.length; --c > -1;) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "2.0.2", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
                var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
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
                    E = function(a, b) {
                        return b.toUpperCase()
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = {
                        style: {}
                    },
                    O = _gsScope.document || {
                        createElement: function() {
                            return N
                        }
                    },
                    P = function(a, b) {
                        return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = g._internals = {
                        _specialProps: i
                    },
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
                    }(),
                    V = function(a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(a) {
                        _gsScope.console && console.log(a)
                    },
                    X = "",
                    Y = "",
                    Z = function(a, b) {
                        b = b || Q;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
                    },
                    $ = ("undefined" != typeof window ? window : O.defaultView || {
                        getComputedStyle: function() {}
                    }).getComputedStyle,
                    _ = g.getStyle = function(a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
                    },
                    aa = S.convertToPixels = function(a, c, d, e, f) {
                        if ("px" === e || !e && "lineHeight" !== c) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e)
                            if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                    m[k ? "width" : "height"] = d + e
                                }
                                l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
                            }
                        else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
                        return o && (h /= 100), n ? -h : h
                    },
                    ba = S.calculateOffset = function(a, b, c) {
                        if ("absolute" !== _(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = _(a, "margin" + d, c);
                        return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
                    },
                    ca = function(a, b) {
                        var c, d, e, f = {};
                        if (b = b || $(a, null))
                            if (c = b.length)
                                for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else
                                for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
                    },
                    da = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    ea = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ga = function(a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                        if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ea[b],
                            f = e.length;
                        for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    ha = function(a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c, d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                            return a.join(",")
                        }
                        return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
                    },
                    ia = function(a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
                    },
                    ja = function(a, b) {
                        "function" == typeof a && (a = a(r, q));
                        var c = "string" == typeof a && "=" === a.charAt(1);
                        return "string" == typeof a && "v" === a.charAt(a.length - 2) && (a = (c ? a.substr(0, 2) : 0) + window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] * (parseFloat(c ? a.substr(2) : a) / 100)), null == a ? b : c ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
                    },
                    ka = function(a, b, c, d) {
                        var e, f, g, h, i, j = 1e-6;
                        return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
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
                        transparent: [255, 255, 255, 0]
                    },
                    ma = function(a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
                    },
                    na = g.parseColor = function(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
                            else {
                                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
                                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                                else if ("hsl" === a.substr(0, 3))
                                    if (c = m = a.match(s), b) {
                                        if (-1 !== a.indexOf("=")) return a.match(t)
                                    } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
                                else c = a.match(s) || la.transparent;
                                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
                            }
                        else c = la.black;
                        return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
                    },
                    oa = function(a, b) {
                        var c, d, e, f = a.match(pa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
                        return h + a.substr(g)
                    },
                    pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in la) pa += "|" + j + "\\b";
                pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function(a) {
                    var b, c = a[0] + " " + a[1];
                    pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
                }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var qa = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var e, f = b ? (a.match(pa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
                                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && I.test(a)) {
                                for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(u) || [], m = b.length, k > m--)
                                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
                            return h + b.join(j) + i
                        } : function(a) {
                            return a
                        }
                    },
                    ra = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    sa = (S._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
                        if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a)
                            for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                                if (c = i.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c[f] = e
                                    }
                                } else c[f] = c.s + c.xs0;
                                i = i._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    ta = (S._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = M;
                        for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, S.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    ua = function(a, b, c, d, e, f) {
                        var g = new ta(a, b, c, d - c, e, -1, f);
                        return g.b = c, g.e = g.xs0 = d, g
                    },
                    va = g.parseComplex = function(a, b, c, d, e, f, h, i, j, l) {
                        c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
                        var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
                            if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);
                            else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
                        else if (v = p.match(s)) {
                            if (w = u.match(t), !w || w.length !== v.length) return h;
                            for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
                            h["xs" + h.l] += p.substr(o)
                        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m]
                        }
                        return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
                    },
                    wa = 9;
                for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var xa = function(a, b) {
                        b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    ya = S._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
                    },
                    za = S._registerPluginProp = function(a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            ya(a, {
                                parser: function(a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                j = xa.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function(a, b, c, d, f, g, h) {
                    return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function(a, b, c) {
                    ya(a, {
                        parser: function(a, d, e, f, g, h, i) {
                            var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                            return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
                        },
                        priority: c
                    })
                }, g.useSVGTransformAttr = !0;
                var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ca = Z("transform"),
                    Da = X + "transform",
                    Ea = Z("transformOrigin"),
                    Fa = null !== Z("perspective"),
                    Ga = S.Transform = function() {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
                    },
                    Ha = _gsScope.SVGElement,
                    Ia = function(a, b, c) {
                        var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    Ja = O.documentElement || {},
                    Ka = function() {
                        var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
                        return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
                    }(),
                    La = function(a, b, c, d, e, f) {
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
                            w = Qa(a, !0);
                        v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
                            x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                            y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
                    },
                    Ma = function(a) {
                        var b, c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
                            b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
                        } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
                    },
                    Na = function(a) {
                        try {
                            return a.getBBox()
                        } catch (b) {
                            return Ma.call(a, !0)
                        }
                    },
                    Oa = function(a) {
                        return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a))
                    },
                    Pa = [1, 0, 0, 1, 0, 0],
                    Qa = function(a, b) {
                        var c, d, e, f, g, h, i = a._gsTransform || new Ga,
                            j = 1e5,
                            k = a.style;
                        if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;
                        for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
                    },
                    Ra = S.getTransform = function(a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
                            if (16 === f.length) {
                                var s, t, u, v, w, x = f[0],
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
                                m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
                            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
                            }
                            Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
                        }
                        return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function() {
                            Va(a.style, Ca)
                        }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function() {
                            a.removeAttribute("transform")
                        }))), m
                    },
                    Sa = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = (Math.cos(e) * d.scaleX * g | 0) / g,
                            i = (Math.sin(e) * d.scaleX * g | 0) / g,
                            j = (Math.sin(f) * -d.scaleY * g | 0) / g,
                            k = (Math.cos(f) * d.scaleY * g | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + q * d.xPercent / 100,
                                v = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > p ? 1 : -1;
                                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Ta = S.set3DTransformRatio = S.setTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
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
                        if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
                        if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
                        else {
                            if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            c = g = 1, d = f = 0
                        }
                        k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u;
                    };
                j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i) return f;
                        d._lastParsedTransform = i;
                        var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                        "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
                        var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
                            x = a.style,
                            y = 1e-6,
                            z = Ba.length,
                            A = i,
                            B = {},
                            C = "transformOrigin",
                            D = Ra(a, e, !0, A.parseTransform),
                            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                        if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, "rotationZ" in A && (A.rotation = A.rotationZ), E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", -1 !== E.indexOf("%") && (m.width = _(a, "width"), m.height = _(a, "height")), O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                        else if ("object" == typeof A) {
                            if (l = {
                                    scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                    scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                    scaleZ: ja(A.scaleZ, D.scaleZ),
                                    x: ja(A.x, D.x),
                                    y: ja(A.y, D.y),
                                    z: ja(A.z, D.z),
                                    xPercent: ja(A.xPercent, D.xPercent),
                                    yPercent: ja(A.yPercent, D.yPercent),
                                    perspective: ja(A.transformPerspective, D.perspective)
                                }, p = A.directionalRotation, null != p)
                                if ("object" == typeof p)
                                    for (m in p) A[m] = p[m];
                                else A.rotation = p;
                            "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
                        }
                        for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
                    },
                    prefix: !0
                }), ya("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ya("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, f, g, h) {
                        b = this.format(b);
                        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            z = a.style;
                        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: qa("0px 0px 0px 0px", !1, !0)
                }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, d, f, g) {
                        return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
                    },
                    prefix: !0,
                    formatter: qa("0px 0px", !1, !0)
                }), ya("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            o = e || $(a, null),
                            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: ha
                }), ya("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(a) {
                        return a += "", "co" === a.substr(0, 2) ? a : ha(-1 === a.indexOf(" ") ? a + " " + a : a)
                    }
                }), ya("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ya("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ya("transformStyle", {
                    prefix: !0
                }), ya("backfaceVisibility", {
                    prefix: !0
                }), ya("userSelect", {
                    prefix: !0
                }), ya("margin", {
                    parser: ra("marginTop,marginRight,marginBottom,marginLeft")
                }), ya("padding", {
                    parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ya("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), ya("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ya("autoRound,strictUnits", {
                    parser: function(a, b, c, d, e) {
                        return e
                    }
                }), ya("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, f, g) {
                        var h = _(a, "borderTopWidth", e, !1, "0px"),
                            i = this.format(b).split(" "),
                            j = i[0].replace(w, "");
                        return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                    },
                    color: !0,
                    formatter: function(a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
                    }
                }), ya("borderWidth", {
                    parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), ya("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e, f) {
                        var g = a.style,
                            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                        return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
                    }
                });
                var Ua = function(a) {
                    var b, c = this.t,
                        d = c.filter || _(this.data, "filter") || "",
                        e = this.s + this.c * a | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
                };
                ya("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h = parseFloat(_(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var Va = function(a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Wa = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                ya("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
                    }
                });
                var Xa = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f, g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) g.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
                        e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (ya("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
                j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h, j) {
                    if (!a.nodeType) return !1;
                    this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
                    var n, p, s, t, u, v, w, x, z, A = a.style;
                    if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
                        for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
                        x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
                    }
                    if (c) {
                        for (; p;) {
                            for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
                            (p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
                        }
                        this._firstPT = t
                    }
                    return !0
                }, j.parse = function(a, b, c, f) {
                    var g, h, j, l, m, n, o, p, s, t, u = a.style;
                    for (g in b) {
                        if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);
                        else {
                            if ("--" === g.substr(0, 2)) {
                                this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                continue
                            }
                            m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))
                        }
                        f && c && !c.plugin && (c.plugin = f)
                    }
                    return c
                }, j.setRatio = function(a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else - 1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (b = e.r(e.s + e.c), e.type) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next
                            }
                }, j._enableTransforms = function(a) {
                    this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
                };
                var Ya = function(a) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                j._addLazySet = function(a, b, c) {
                    var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Ya, d.data = this
                }, j._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, j._mod = function(a) {
                    for (var b = this._firstPT; b;) "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next
                }, j._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
                    return a.prototype._kill.call(this, f)
                };
                var Za = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Za(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h, i = b.to(a, c, d),
                        j = [i],
                        k = [],
                        l = [],
                        m = [],
                        n = b._internals.reservedProps;
                    for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
                        if (f = da(m[e], k[e], l[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) n[g] && (f[g] = d[g]);
                            h = {};
                            for (g in f) h[g] = k[e][g];
                            j.push(b.fromTo(m[e], c, h, f))
                        } return j
                }, a.activate([g]), g
            }, !0),
            function() {
                var a = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = function(a) {
                        var b = 1 > a ? Math.pow(10, (a + "").length - 2) : 1;
                        return function(c) {
                            return (Math.round(c / a) * a * b | 0) / b
                        }
                    },
                    c = function(a, b) {
                        for (; a;) a.f || a.blob || (a.m = b || Math.round), a = a._next
                    },
                    d = a.prototype;
                d._onInitAllProps = function() {
                    var a, d, e, f, g = this._tween,
                        h = g.vars.roundProps,
                        i = {},
                        j = g._propLookup.roundProps;
                    if ("object" != typeof h || h.push)
                        for ("string" == typeof h && (h = h.split(",")), e = h.length; --e > -1;) i[h[e]] = Math.round;
                    else
                        for (f in h) i[f] = b(h[f]);
                    for (f in i)
                        for (a = g._firstPT; a;) d = a._next, a.pg ? a.t._mod(i) : a.n === f && (2 === a.f && a.t ? c(a.t._firstPT, i[f]) : (this._add(a.t, f, a.s, a.c, i[f]), d && (d._prev = a._prev), a._prev ? a._prev._next = d : g._firstPT === a && (g._firstPT = d), a._next = a._prev = null, g._propLookup[f] = j)), a = d;
                    return !1
                }, d._add = function(a, b, c, d, e) {
                    this._addTween(a, b, c, c + d, b, e || Math.round), this._overwriteProps.push(b)
                }
            }(),
            function() {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.6.1",
                    init: function(a, b, c, d) {
                        var e, f;
                        if ("function" != typeof a.setAttribute) return !1;
                        for (e in b) f = b[e], "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(a, b, c, d) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var e, f, g, h, i, j, k = b.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (e in b) "useRadians" !== e && (h = b[e], "function" == typeof h && (h = h(d, a)), j = (h + "").split("_"), f = j[0], g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]()), h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - g, j.length && (f = j.join("_"), -1 !== f.indexOf("short") && (i %= k, i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * k) % k - (i / k | 0) * k : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * k) % k - (i / k | 0) * k)), (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e, f = _gsScope.GreenSockGlobals || _gsScope,
                    g = f.com.greensock,
                    h = 2 * Math.PI,
                    i = Math.PI / 2,
                    j = g._class,
                    k = function(b, c) {
                        var d = j("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    l = a.register || function() {},
                    m = function(a, b, c, d, e) {
                        var f = j("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return l(f, a), f
                    },
                    n = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    o = function(b, c) {
                        var d = j("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    p = m("Back", o("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), o("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), o("BackInOut", function(a) {
                        return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    q = j("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    r = q.prototype = new a;
                return r.constructor = q, r.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 === a ? 0 : 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, q.ease = new q(.7, .7), r.config = q.config = function(a, b, c) {
                    return new q(a, b, c)
                }, b = j("easing.SteppedEase", function(a, b) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + (b ? 0 : 1), this._p3 = b ? 1 : 0
                }, !0), r = b.prototype = new a, r.constructor = b, r.getRatio = function(a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), ((this._p2 * a | 0) + this._p3) * this._p1
                }, r.config = b.config = function(a, c) {
                    return new b(a, c)
                }, c = j("easing.ExpoScaleEase", function(a, b, c) {
                    this._p1 = Math.log(b / a), this._p2 = b - a, this._p3 = a, this._ease = c
                }, !0), r = c.prototype = new a, r.constructor = c, r.getRatio = function(a) {
                    return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
                }, r.config = c.config = function(a, b, d) {
                    return new c(a, b, d)
                }, d = j("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), m = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --m > -1;) c = o ? Math.random() : 1 / l * m, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : m % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new n(1, 1, null), m = l; --m > -1;) g = j[m], h = new n(g.x, g.y, h);
                    this._prev = new n(0, 0, 0 !== h.t ? h : h.next)
                }, !0), r = d.prototype = new a, r.constructor = d, r.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && a <= b.t;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, r.config = function(a) {
                    return new d(a)
                }, d.ease = new d, m("Bounce", k("BounceOut", function(a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), k("BounceIn", function(a) {
                    return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), k("BounceInOut", function(a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), m("Circ", k("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), k("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), k("CircInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), e = function(b, c, d) {
                    var e = j("easing." + b, function(a, b) {
                            this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                        return new e(a, b)
                    }, e
                }, m("Elastic", e("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
                }, .3), e("ElasticIn", function(a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
                }, .3), e("ElasticInOut", function(a) {
                    return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
                }, .45)), m("Expo", k("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), k("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), k("ExpoInOut", function(a) {
                    return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), m("Sine", k("SineOut", function(a) {
                    return Math.sin(a * i)
                }), k("SineIn", function(a) {
                    return -Math.cos(a * i) + 1
                }), k("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), j("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), l(f.SlowMo, "SlowMo", "ease,"), l(d, "RoughEase", "ease,"), l(b, "SteppedEase", "ease,"), p
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = a.GreenSockGlobals = a.GreenSockGlobals || a,
            f = e[b];
        if (f) return "undefined" != typeof module && module.exports && (module.exports = f), f;
        var g, h, i, j, k, l = function(a) {
                var b, c = a.split("."),
                    d = e;
                for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                return d
            },
            m = l("com.greensock"),
            n = 1e-10,
            o = function(a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            p = function() {},
            q = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            r = {},
            s = function(d, f, g, h) {
                this.sc = r[d] ? r[d].sc : [], r[d] = this, this.gsClass = null, this.func = g;
                var i = [];
                this.check = function(j) {
                    for (var k, m, n, o, p = f.length, q = p; --p > -1;)(k = r[f[p]] || new s(f[p], [])).gsClass ? (i[p] = k.gsClass, q--) : j && k.sc.push(this);
                    if (0 === q && g) {
                        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = l(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
                            if (e[n] = c[n] = o, "undefined" != typeof module && module.exports)
                                if (d === b) {
                                    module.exports = c[b] = o;
                                    for (p in c) o[p] = c[p]
                                } else c[b] && (c[b][n] = o);
                        else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                            return o
                        });
                        for (p = 0; p < this.sc.length; p++) this.sc[p].check()
                    }
                }, this.check(!0)
            },
            t = a._gsDefine = function(a, b, c, d) {
                return new s(a, b, c, d)
            },
            u = m._class = function(a, b, c) {
                return b = b || function() {}, t(a, [], function() {
                    return b
                }, c), b
            };
        t.globals = e;
        var v = [0, 0, 1, 1],
            w = u("easing.Ease", function(a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? v.concat(b) : v
            }, !0),
            x = w.map = {},
            y = w.register = function(a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
                    for (f = i[j], e = d ? u("easing." + f, null, !0) : m.easing[f] || {}, g = k.length; --g > -1;) h = k[g], x[f + "." + h] = x[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (i = w.prototype, i._calcEnd = !1, i.getRatio = function(a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, g = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], h = g.length; --h > -1;) i = g[h] + ",Power" + h, y(new w(null, null, 1, h), i, "easeOut", !0), y(new w(null, null, 2, h), i, "easeIn" + (0 === h ? ",easeNone" : "")), y(new w(null, null, 3, h), i, "easeInOut");
        x.linear = m.easing.Linear.easeIn, x.swing = m.easing.Quad.easeInOut;
        var z = u("events.EventDispatcher", function(a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        i = z.prototype, i.addEventListener = function(a, b, c, d, e) {
            e = e || 0;
            var f, g, h = this._listeners[a],
                i = 0;
            for (this !== j || k || j.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === i && f.pr < e && (i = g + 1);
            h.splice(i, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            })
        }, i.removeEventListener = function(a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, i.dispatchEvent = function(a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c))
        };
        var A = a.requestAnimationFrame,
            B = a.cancelAnimationFrame,
            C = Date.now || function() {
                return (new Date).getTime()
            },
            D = C();
        for (g = ["ms", "moz", "webkit", "o"], h = g.length; --h > -1 && !A;) A = a[g[h] + "RequestAnimationFrame"], B = a[g[h] + "CancelAnimationFrame"] || a[g[h] + "CancelRequestAnimationFrame"];
        u("Ticker", function(a, b) {
            var c, e, f, g, h, i = this,
                l = C(),
                m = b !== !1 && A ? "auto" : !1,
                o = 500,
                q = 33,
                r = "tick",
                s = function(a) {
                    var b, d, j = C() - D;
                    j > o && (l += j - q), D += j, i.time = (D - l) / 1e3, b = i.time - h, (!c || b > 0 || a === !0) && (i.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && i.dispatchEvent(r)
                };
            z.call(i), i.time = i.frame = 0, i.tick = function() {
                s(!0)
            }, i.lagSmoothing = function(a, b) {
                return arguments.length ? (o = a || 1 / n, void(q = Math.min(b, o, 0))) : 1 / n > o
            }, i.sleep = function() {
                null != f && (m && B ? B(f) : clearTimeout(f), e = p, f = null, i === j && (k = !1))
            }, i.wake = function(a) {
                null !== f ? i.sleep() : a ? l += -D + (D = C()) : i.frame > 10 && (D = C() - o + 5), e = 0 === c ? p : m && A ? A : function(a) {
                    return setTimeout(a, 1e3 * (h - i.time) + 1 | 0)
                }, i === j && (k = !0), s(2)
            }, i.fps = function(a) {
                return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void i.wake()) : c
            }, i.useRAF = function(a) {
                return arguments.length ? (i.sleep(), m = a, void i.fps(c)) : m
            }, i.fps(a), setTimeout(function() {
                "auto" === m && i.frame < 5 && "hidden" !== (d || {}).visibilityState && i.useRAF(!1)
            }, 1500)
        }), i = m.Ticker.prototype = new m.events.EventDispatcher, i.constructor = m.Ticker;
        var E = u("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, Y) {
                k || j.wake();
                var c = this.vars.useFrames ? X : Y;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        j = E.ticker = new m.Ticker, i = E.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
        var F = function() {
            k && C() - D > 2e3 && ("hidden" !== (d || {}).visibilityState || !j.lagSmoothing()) && j.wake();
            var a = setTimeout(F, 2e3);
            a.unref && a.unref()
        };
        F(), i.play = function(a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, i.pause = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, i.resume = function(a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, i.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, i.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, i.reverse = function(a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, i.render = function(a, b, c) {}, i.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, i.isActive = function() {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7
        }, i._enabled = function(a, b) {
            return k || j.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, i._kill = function(a, b) {
            return this._enabled(!1, !1)
        }, i.kill = function(a, b) {
            return this._kill(a, b), this
        }, i._uncache = function(a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, i._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, i._callback = function(a) {
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
                    c.apply(e, d)
            }
        }, i.eventCallback = function(a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = q(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, i.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, i.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, i.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, i.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, i.totalTime = function(a, b, c) {
            if (k || j.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (K.length && $(), this.render(a, b, !1), K.length && $())
            }
            return this
        }, i.progress = i.totalProgress = function(a, b) {
            var c = this.duration();
            return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
        }, i.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, i.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, i.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            var b, c;
            for (a = a || n, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) c._dirty = !0, c.totalDuration(), c = c.timeline;
            return this
        }, i.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, i.paused = function(a) {
            if (!arguments.length) return this._paused;
            var b, c, d = this._timeline;
            return a != this._paused && d && (k || a || j.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
        };
        var G = u("core.SimpleTimeline", function(a) {
            E.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        i = G.prototype = new E, i.constructor = G, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(a, b, c, d) {
            var e, f;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
                for (f = a._startTime; e && e._startTime > f;) e = e._prev;
            return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
        }, i._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, i.render = function(a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, i.rawTime = function() {
            return k || j.wake(), this._totalTime
        };
        var H = u("TweenLite", function(b, c, d) {
                if (E.call(this, c, d), this.render = H.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : H.selector(b) || b;
                var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                    i = this.vars.overwrite;
                if (this._overwrite = i = null == i ? W[H.defaultOverwrite] : "number" == typeof i ? i >> 0 : W[i], (h || b instanceof Array || b.push && q(b)) && "number" != typeof b[0])
                    for (this._targets = g = o(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(o(f))) : (this._siblings[e] = _(f, this, !1), 1 === i && this._siblings[e].length > 1 && ba(f, this, null, 1, this._siblings[e])) : (f = g[e--] = H.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                else this._propLookup = {}, this._siblings = _(b, this, !1), 1 === i && this._siblings.length > 1 && ba(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -n, this.render(Math.min(0, -this._delay)))
            }, !0),
            I = function(b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            },
            J = function(a, b) {
                var c, d = {};
                for (c in a) V[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!S[c] || S[c] && S[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        i = H.prototype = new E, i.constructor = H, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, H.version = "2.0.2", H.defaultEase = i._ease = new w(null, null, 1, 1), H.defaultOverwrite = "auto", H.ticker = j, H.autoSleep = 120, H.lagSmoothing = function(a, b) {
            j.lagSmoothing(a, b)
        }, H.selector = a.$ || a.jQuery || function(b) {
            var c = a.$ || a.jQuery;
            return c ? (H.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b)
        };
        var K = [],
            L = {},
            M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = /[\+-]=-?[\.\d]/,
            O = function(a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
            },
            P = function(a, b, c, d) {
                var e, f, g, h, i, j, k, l = [],
                    m = 0,
                    n = "",
                    o = 0;
                for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(M) || [], f = b.match(M) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0
                }), m += k.length;
                return n += b.substr(m), n && l.push(n), l.setRatio = O, N.test(b) && (l.end = null), l
            },
            Q = function(a, b, c, d, e, f, g, h, i) {
                "function" == typeof d && (d = d(i || 0, a));
                var j, k = typeof a[b],
                    l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                    m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
                    n = "string" == typeof d && "=" === d.charAt(1),
                    o = {
                        t: a,
                        p: b,
                        s: m,
                        f: "function" === k,
                        pg: 0,
                        n: e || b,
                        m: f ? "function" == typeof f ? f : Math.round : 0,
                        pr: 0,
                        c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
                    };
                return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = P(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || H.defaultStringFilter, o), o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0
                }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
            },
            R = H._internals = {
                isArray: q,
                isSelector: I,
                lazyTweens: K,
                blobDif: P
            },
            S = H._plugins = {},
            T = R.tweenLookup = {},
            U = 0,
            V = R.reservedProps = {
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
                yoyoEase: 1
            },
            W = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            X = E._rootFramesTimeline = new G,
            Y = E._rootTimeline = new G,
            Z = 30,
            $ = R.lazyRender = function() {
                var a, b = K.length;
                for (L = {}; --b > -1;) a = K[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                K.length = 0
            };
        Y._startTime = j.time, X._startTime = j.frame, Y._active = X._active = !0, setTimeout($, 1), E._updateRoot = H.render = function() {
            var a, b, c;
            if (K.length && $(), Y.render((j.time - Y._startTime) * Y._timeScale, !1, !1), X.render((j.frame - X._startTime) * X._timeScale, !1, !1), K.length && $(), j.frame >= Z) {
                Z = j.frame + (parseInt(H.autoSleep, 10) || 120);
                for (c in T) {
                    for (b = T[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete T[c]
                }
                if (c = Y._first, (!c || c._paused) && H.autoSleep && !X._first && 1 === j._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || j.sleep()
                }
            }
        }, j.addEventListener("tick", E._updateRoot);
        var _ = function(a, b, c) {
                var d, e, f = a._gsTweenID;
                if (T[f || (a._gsTweenID = f = "t" + U++)] || (T[f] = {
                        target: a,
                        tweens: []
                    }), b && (d = T[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return T[f].tweens
            },
            aa = function(a, b, c, d) {
                var e, f, g = a.vars.onOverwrite;
                return g && (e = g(a, b, c, d)), g = H.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
            },
            ba = function(a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, k = b._startTime + n,
                    l = [],
                    m = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ca(b, 0, o), 0 === ca(h, j, o) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h)));
                for (f = m; --f > -1;)
                    if (h = l[f], i = h._firstPT, 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted && i) {
                        if (2 !== d && !aa(h, b)) continue;
                        h._enabled(!1, !1) && (g = !0)
                    } return g
            },
            ca = function(a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * n > f - b ? n : (f += a.totalDuration() / a._timeScale / e) > b + n ? 0 : f - b - n
            };
        i._init = function() {
            var a, b, c, d, e, f, g = this.vars,
                h = this._overwrittenProps,
                i = this._duration,
                j = !!g.immediateRender,
                k = g.ease;
            if (g.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                for (d in g.startAt) e[d] = g.startAt[d];
                if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = H.to(this.target || {}, 0, e), j)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== i) return
            } else if (g.runBackwards && 0 !== i)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (j = !1), c = {};
                    for (d in g) V[d] && "autoCSS" !== d || (c[d] = g[d]);
                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = H.to(this.target, 0, c), j) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = k = k ? k instanceof w ? k : "function" == typeof k ? new w(k, g.easeParams) : x[k] || H.defaultEase : H.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
            if (b && H._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = g.onUpdate, this._initted = !0
        }, i._initProps = function(b, c, d, e, f) {
            var g, h, i, j, k, l;
            if (null == b) return !1;
            L[b._gsTweenID] && $(), this.vars.css || b.style && b !== a && b.nodeType && S.css && this.vars.autoCSS !== !1 && J(this.vars, b);
            for (g in this.vars)
                if (l = this.vars[g], V[g]) l && (l instanceof Array || l.push && q(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                else if (S[g] && (j = new S[g])._onInitTween(b, this.vars[g], this, f)) {
                for (this._firstPT = k = {
                        _next: this._firstPT,
                        t: j,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: g,
                        pg: 1,
                        pr: j._priority,
                        m: 0
                    }, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
                (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
            } else c[g] = Q.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
            return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && ba(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[b._gsTweenID] = !0), i)
        }, i.render = function(a, b, c) {
            var d, e, f, g, h = this._time,
                i = this._duration,
                j = this._rawPrevTime;
            if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === n && "isPause" !== this.data) && j !== a && (c = !0, j > n && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : n);
            else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== n || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : n)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var k = a / i,
                    l = this._easeType,
                    m = this._easePower;
                (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === m ? k *= k : 2 === m ? k *= k * k : 3 === m ? k *= k * k * k : 4 === m && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, K.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === n && g !== n && (this._rawPrevTime = 0))
            }
        }, i._kill = function(a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : H.selector(b) || b;
            var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline,
                n = this._firstPT;
            if ((q(b) || I(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;)
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (H.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if ((l || !a) && !aa(this, c, b, l)) return !1
                    }
                    for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && n && this._enabled(!1, !1)
                }
            }
            return i
        }, i.invalidate = function() {
            return this._notifyPluginsOfEnabled && H._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -n, this.render(Math.min(0, -this._delay))), this
        }, i._enabled = function(a, b) {
            if (k || j.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = _(d[c], this, !0);
                else this._siblings = _(this.target, this, !0)
            }
            return E.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? H._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, H.to = function(a, b, c) {
            return new H(a, b, c)
        }, H.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new H(a, b, c)
        }, H.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new H(a, b, d)
        }, H.delayedCall = function(a, b, c, d, e) {
            return new H(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                callbackScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }, H.set = function(a, b) {
            return new H(a, 0, b)
        }, H.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : H.selector(a) || a;
            var c, d, e, f;
            if ((q(a) || I(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(H.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else if (a._gsTweenID)
                for (d = _(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d || []
        }, H.killTweensOf = H.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = H.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var da = u("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = da.prototype
        }, !0);
        if (i = da.prototype, da.version = "1.19.0", da.API = 2, i._firstPT = null, i._addTween = Q, i.setRatio = O, i._kill = function(a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, i._mod = i._roundProps = function(a) {
                for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
            }, H._onPluginEvent = function(a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, da.activate = function(a) {
                for (var b = a.length; --b > -1;) a[b].API === da.API && (S[(new a[b])._propName] = a[b]);
                return !0
            }, t.plugin = function(a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    g = u("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                        da.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0),
                    h = g.prototype = new da(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, da.activate([g]), g
            }, g = a._gsQueue) {
            for (h = 0; h < g.length; h++) g[h]();
            for (i in r) r[i].func || a.console.log("GSAP encountered missing dependency: " + i)
        }
        k = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");




/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function o(t, e, r) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(t, e, r)
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var h = t.jQuery,
        a = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});




/*!
 * pixi.js - v5.1.5
 * Compiled Tue, 24 Sep 2019 04:07:05 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var PIXI = function(t) {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function i(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r = i(function(t, i) {
            ! function(t) {
                var e = t.Promise,
                    r = e && "resolve" in e && "reject" in e && "all" in e && "race" in e && function() {
                        var t;
                        return new e(function(e) {
                            t = e
                        }), "function" == typeof t
                    }();
                i ? (i.Promise = r ? e : w, i.Polyfill = w) : r || (t.Promise = w);
                var n = "pending",
                    o = "sealed",
                    s = "fulfilled",
                    a = "rejected",
                    h = function() {};

                function u(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                var l, c = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
                    d = [];

                function p() {
                    for (var t = 0; t < d.length; t++) d[t][0](d[t][1]);
                    d = [], l = !1
                }

                function f(t, e) {
                    d.push([t, e]), l || (l = !0, c(p, 0))
                }

                function v(t) {
                    var e = t.owner,
                        i = e.state_,
                        r = e.data_,
                        n = t[i],
                        o = t.then;
                    if ("function" == typeof n) {
                        i = s;
                        try {
                            r = n(r)
                        } catch (t) {
                            _(o, t)
                        }
                    }
                    g(o, r) || (i === s && m(o, r), i === a && _(o, r))
                }

                function g(t, e) {
                    var i;
                    try {
                        if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                        if (e && ("function" == typeof e || "object" == typeof e)) {
                            var r = e.then;
                            if ("function" == typeof r) return r.call(e, function(r) {
                                i || (i = !0, e !== r ? m(t, r) : y(t, r))
                            }, function(e) {
                                i || (i = !0, _(t, e))
                            }), !0
                        }
                    } catch (e) {
                        return i || _(t, e), !0
                    }
                    return !1
                }

                function m(t, e) {
                    t !== e && g(t, e) || y(t, e)
                }

                function y(t, e) {
                    t.state_ === n && (t.state_ = o, t.data_ = e, f(b, t))
                }

                function _(t, e) {
                    t.state_ === n && (t.state_ = o, t.data_ = e, f(T, t))
                }

                function x(t) {
                    var e = t.then_;
                    t.then_ = void 0;
                    for (var i = 0; i < e.length; i++) v(e[i])
                }

                function b(t) {
                    t.state_ = s, x(t)
                }

                function T(t) {
                    t.state_ = a, x(t)
                }

                function w(t) {
                    if ("function" != typeof t) throw new TypeError("Promise constructor takes a function argument");
                    if (this instanceof w == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    this.then_ = [],
                        function(t, e) {
                            function i(t) {
                                _(e, t)
                            }
                            try {
                                t(function(t) {
                                    m(e, t)
                                }, i)
                            } catch (t) {
                                i(t)
                            }
                        }(t, this)
                }
                w.prototype = {
                    constructor: w,
                    state_: n,
                    then_: null,
                    data_: void 0,
                    then: function(t, e) {
                        var i = {
                            owner: this,
                            then: new this.constructor(h),
                            fulfilled: t,
                            rejected: e
                        };
                        return this.state_ === s || this.state_ === a ? f(v, i) : this.then_.push(i), i.then
                    },
                    catch: function(t) {
                        return this.then(null, t)
                    }
                }, w.all = function(t) {
                    if (!u(t)) throw new TypeError("You must pass an array to Promise.all().");
                    return new this(function(e, i) {
                        var r = [],
                            n = 0;

                        function o(t) {
                            return n++,
                                function(i) {
                                    r[t] = i, --n || e(r)
                                }
                        }
                        for (var s, a = 0; a < t.length; a++)(s = t[a]) && "function" == typeof s.then ? s.then(o(a), i) : r[a] = s;
                        n || e(r)
                    })
                }, w.race = function(t) {
                    if (!u(t)) throw new TypeError("You must pass an array to Promise.race().");
                    return new this(function(e, i) {
                        for (var r, n = 0; n < t.length; n++)(r = t[n]) && "function" == typeof r.then ? r.then(e, i) : e(r)
                    })
                }, w.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === this ? t : new this(function(e) {
                        e(t)
                    })
                }, w.reject = function(t) {
                    return new this(function(e, i) {
                        i(t)
                    })
                }
            }("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : e)
        }),
        n = (r.Promise, r.Polyfill),
        o = Object.getOwnPropertySymbols,
        s = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
    var h = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, r, n = arguments, h = function(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), u = 1; u < arguments.length; u++) {
            for (var l in i = Object(n[u])) s.call(i, l) && (h[l] = i[l]);
            if (o) {
                r = o(i);
                for (var c = 0; c < r.length; c++) a.call(i, r[c]) && (h[r[c]] = i[r[c]])
            }
        }
        return h
    };
    window.Promise || (window.Promise = n), Object.assign || (Object.assign = h);
    var u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    if (Date.now && Date.prototype.getTime || (Date.now = function() {
            return (new Date).getTime()
        }), !u.performance || !u.performance.now) {
        var l = Date.now();
        u.performance || (u.performance = {}), u.performance.now = function() {
            return Date.now() - l
        }
    }
    for (var c = Date.now(), d = ["ms", "moz", "webkit", "o"], p = 0; p < d.length && !u.requestAnimationFrame; ++p) {
        var f = d[p];
        u.requestAnimationFrame = u[f + "RequestAnimationFrame"], u.cancelAnimationFrame = u[f + "CancelAnimationFrame"] || u[f + "CancelRequestAnimationFrame"]
    }
    u.requestAnimationFrame || (u.requestAnimationFrame = function(t) {
        if ("function" != typeof t) throw new TypeError(t + "is not a function");
        var e = Date.now(),
            i = 16 + c - e;
        return i < 0 && (i = 0), c = e, setTimeout(function() {
            c = Date.now(), t(performance.now())
        }, i)
    }), u.cancelAnimationFrame || (u.cancelAnimationFrame = function(t) {
        return clearTimeout(t)
    }), Math.sign || (Math.sign = function(t) {
        return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1
    }), Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array), window.Uint8Array || (window.Uint8Array = Array), window.Int32Array || (window.Int32Array = Array);
    var v = i(function(t) {
        ! function(e) {
            var i = /iPhone/i,
                r = /iPod/i,
                n = /iPad/i,
                o = /\bAndroid(?:.+)Mobile\b/i,
                s = /Android/i,
                a = /\bAndroid(?:.+)SD4930UR\b/i,
                h = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
                u = /Windows Phone/i,
                l = /\bWindows(?:.+)ARM\b/i,
                c = /BlackBerry/i,
                d = /BB10/i,
                p = /Opera Mini/i,
                f = /\b(CriOS|Chrome)(?:.+)Mobile/i,
                v = /Mobile(?:.+)Firefox\b/i;

            function g(t, e) {
                return t.test(e)
            }

            function m(t) {
                var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""),
                    m = e.split("[FBAN");
                void 0 !== m[1] && (e = m[0]), void 0 !== (m = e.split("Twitter"))[1] && (e = m[0]);
                var y = {
                    apple: {
                        phone: g(i, e) && !g(u, e),
                        ipod: g(r, e),
                        tablet: !g(i, e) && g(n, e) && !g(u, e),
                        device: (g(i, e) || g(r, e) || g(n, e)) && !g(u, e)
                    },
                    amazon: {
                        phone: g(a, e),
                        tablet: !g(a, e) && g(h, e),
                        device: g(a, e) || g(h, e)
                    },
                    android: {
                        phone: !g(u, e) && g(a, e) || !g(u, e) && g(o, e),
                        tablet: !g(u, e) && !g(a, e) && !g(o, e) && (g(h, e) || g(s, e)),
                        device: !g(u, e) && (g(a, e) || g(h, e) || g(o, e) || g(s, e)) || g(/\bokhttp\b/i, e)
                    },
                    windows: {
                        phone: g(u, e),
                        tablet: g(l, e),
                        device: g(u, e) || g(l, e)
                    },
                    other: {
                        blackberry: g(c, e),
                        blackberry10: g(d, e),
                        opera: g(p, e),
                        firefox: g(v, e),
                        chrome: g(f, e),
                        device: g(c, e) || g(d, e) || g(p, e) || g(v, e) || g(f, e)
                    }
                };
                return y.any = y.apple.device || y.android.device || y.windows.device || y.other.device, y.phone = y.apple.phone || y.android.phone || y.windows.phone, y.tablet = y.apple.tablet || y.android.tablet || y.windows.tablet, y
            }
            t.exports && "undefined" == typeof window ? t.exports = m : t.exports && "undefined" != typeof window ? (t.exports = m(), t.exports.isMobile = m) : e.isMobile = m()
        }(e)
    });
    v.isMobile;
    var g = {
            MIPMAP_TEXTURES: 1,
            ANISOTROPIC_LEVEL: 0,
            RESOLUTION: 1,
            FILTER_RESOLUTION: 1,
            SPRITE_MAX_TEXTURES: function(t) {
                var e = !0;
                if (v.tablet || v.phone) {
                    if (e = !1, v.apple.device) {
                        var i = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
                        i && parseInt(i[1], 10) >= 11 && (e = !0)
                    }
                    if (v.android.device) {
                        var r = navigator.userAgent.match(/Android\s([0-9.]*)/);
                        r && parseInt(r[1], 10) >= 7 && (e = !0)
                    }
                }
                return e ? t : 4
            }(32),
            SPRITE_BATCH_SIZE: 4096,
            RENDER_OPTIONS: {
                view: null,
                antialias: !1,
                forceFXAA: !1,
                autoDensity: !1,
                transparent: !1,
                backgroundColor: 0,
                clearBeforeRender: !0,
                preserveDrawingBuffer: !1,
                width: 800,
                height: 600,
                legacy: !1
            },
            GC_MODE: 0,
            GC_MAX_IDLE: 3600,
            GC_MAX_CHECK_COUNT: 600,
            WRAP_MODE: 33071,
            SCALE_MODE: 1,
            PRECISION_VERTEX: "highp",
            PRECISION_FRAGMENT: v.apple.device ? "highp" : "mediump",
            CAN_UPLOAD_SAME_BUFFER: !v.apple.device,
            CREATE_IMAGE_BITMAP: !1,
            ROUND_PIXELS: !1
        },
        m = i(function(t) {
            var e = Object.prototype.hasOwnProperty,
                i = "~";

            function r() {}

            function n(t, e, i) {
                this.fn = t, this.context = e, this.once = i || !1
            }

            function o(t, e, r, o, s) {
                if ("function" != typeof r) throw new TypeError("The listener must be a function");
                var a = new n(r, o || t, s),
                    h = i ? i + e : e;
                return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t
            }

            function s(t, e) {
                0 == --t._eventsCount ? t._events = new r : delete t._events[e]
            }

            function a() {
                this._events = new r, this._eventsCount = 0
            }
            Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (i = !1)), a.prototype.eventNames = function() {
                var t, r, n = [];
                if (0 === this._eventsCount) return n;
                for (r in t = this._events) e.call(t, r) && n.push(i ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, a.prototype.listeners = function(t) {
                var e = i ? i + t : t,
                    r = this._events[e];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var n = 0, o = r.length, s = new Array(o); n < o; n++) s[n] = r[n].fn;
                return s
            }, a.prototype.listenerCount = function(t) {
                var e = i ? i + t : t,
                    r = this._events[e];
                return r ? r.fn ? 1 : r.length : 0
            }, a.prototype.emit = function(t, e, r, n, o, s) {
                var a = arguments,
                    h = i ? i + t : t;
                if (!this._events[h]) return !1;
                var u, l, c = this._events[h],
                    d = arguments.length;
                if (c.fn) {
                    switch (c.once && this.removeListener(t, c.fn, void 0, !0), d) {
                        case 1:
                            return c.fn.call(c.context), !0;
                        case 2:
                            return c.fn.call(c.context, e), !0;
                        case 3:
                            return c.fn.call(c.context, e, r), !0;
                        case 4:
                            return c.fn.call(c.context, e, r, n), !0;
                        case 5:
                            return c.fn.call(c.context, e, r, n, o), !0;
                        case 6:
                            return c.fn.call(c.context, e, r, n, o, s), !0
                    }
                    for (l = 1, u = new Array(d - 1); l < d; l++) u[l - 1] = a[l];
                    c.fn.apply(c.context, u)
                } else {
                    var p, f = c.length;
                    for (l = 0; l < f; l++) switch (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), d) {
                        case 1:
                            c[l].fn.call(c[l].context);
                            break;
                        case 2:
                            c[l].fn.call(c[l].context, e);
                            break;
                        case 3:
                            c[l].fn.call(c[l].context, e, r);
                            break;
                        case 4:
                            c[l].fn.call(c[l].context, e, r, n);
                            break;
                        default:
                            if (!u)
                                for (p = 1, u = new Array(d - 1); p < d; p++) u[p - 1] = a[p];
                            c[l].fn.apply(c[l].context, u)
                    }
                }
                return !0
            }, a.prototype.on = function(t, e, i) {
                return o(this, t, e, i, !1)
            }, a.prototype.once = function(t, e, i) {
                return o(this, t, e, i, !0)
            }, a.prototype.removeListener = function(t, e, r, n) {
                var o = i ? i + t : t;
                if (!this._events[o]) return this;
                if (!e) return s(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== e || n && !a.once || r && a.context !== r || s(this, o);
                else {
                    for (var h = 0, u = [], l = a.length; h < l; h++)(a[h].fn !== e || n && !a[h].once || r && a[h].context !== r) && u.push(a[h]);
                    u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = i ? i + t : t, this._events[e] && s(this, e)) : (this._events = new r, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, t.exports = a
        }),
        y = x,
        _ = x;

    function x(t, e, i) {
        i = i || 2;
        var r, n, o, s, a, h, u, l = e && e.length,
            c = l ? e[0] * i : t.length,
            d = b(t, 0, c, i, !0),
            p = [];
        if (!d || d.next === d.prev) return p;
        if (l && (d = function(t, e, i, r) {
                var n, o, s, a, h, u = [];
                for (n = 0, o = e.length; n < o; n++) s = e[n] * r, a = n < o - 1 ? e[n + 1] * r : t.length, (h = b(t, s, a, r, !1)) === h.next && (h.steiner = !0), u.push(D(h));
                for (u.sort(A), n = 0; n < u.length; n++) O(u[n], i), i = T(i, i.next);
                return i
            }(t, e, d, i)), t.length > 80 * i) {
            r = o = t[0], n = s = t[1];
            for (var f = i; f < c; f += i)(a = t[f]) < r && (r = a), (h = t[f + 1]) < n && (n = h), a > o && (o = a), h > s && (s = h);
            u = 0 !== (u = Math.max(o - r, s - n)) ? 1 / u : 0
        }
        return w(d, p, i, r, n, u), p
    }

    function b(t, e, i, r, n) {
        var o, s;
        if (n === V(t, e, i, r) > 0)
            for (o = e; o < i; o += r) s = G(o, t[o], t[o + 1], s);
        else
            for (o = i - r; o >= e; o -= r) s = G(o, t[o], t[o + 1], s);
        return s && N(s, s.next) && (H(s), s = s.next), s
    }

    function T(t, e) {
        if (!t) return t;
        e || (e = t);
        var i, r = t;
        do {
            if (i = !1, r.steiner || !N(r, r.next) && 0 !== L(r.prev, r, r.next)) r = r.next;
            else {
                if (H(r), (r = e = r.prev) === r.next) break;
                i = !0
            }
        } while (i || r !== e);
        return e
    }

    function w(t, e, i, r, n, o, s) {
        if (t) {
            !s && o && function(t, e, i, r) {
                var n = t;
                do {
                    null === n.z && (n.z = M(n.x, n.y, e, i, r)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
                } while (n !== t);
                n.prevZ.nextZ = null, n.prevZ = null,
                    function(t) {
                        var e, i, r, n, o, s, a, h, u = 1;
                        do {
                            for (i = t, t = null, o = null, s = 0; i;) {
                                for (s++, r = i, a = 0, e = 0; e < u && (a++, r = r.nextZ); e++);
                                for (h = u; a > 0 || h > 0 && r;) 0 !== a && (0 === h || !r || i.z <= r.z) ? (n = i, i = i.nextZ, a--) : (n = r, r = r.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                                i = r
                            }
                            o.nextZ = null, u *= 2
                        } while (s > 1)
                    }(n)
            }(t, r, n, o);
            for (var a, h, u = t; t.prev !== t.next;)
                if (a = t.prev, h = t.next, o ? S(t, r, n, o) : E(t)) e.push(a.i / i), e.push(t.i / i), e.push(h.i / i), H(t), t = h.next, u = h.next;
                else if ((t = h) === u) {
                s ? 1 === s ? w(t = I(T(t), e, i), e, i, r, n, o, 2) : 2 === s && P(t, e, i, r, n, o) : w(T(t), e, i, r, n, o, 1);
                break
            }
        }
    }

    function E(t) {
        var e = t.prev,
            i = t,
            r = t.next;
        if (L(e, i, r) >= 0) return !1;
        for (var n = t.next.next; n !== t.prev;) {
            if (R(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && L(n.prev, n, n.next) >= 0) return !1;
            n = n.next
        }
        return !0
    }

    function S(t, e, i, r) {
        var n = t.prev,
            o = t,
            s = t.next;
        if (L(n, o, s) >= 0) return !1;
        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = M(a, h, e, i, r), d = M(u, l, e, i, r), p = t.prevZ, f = t.nextZ; p && p.z >= c && f && f.z <= d;) {
            if (p !== t.prev && p !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && L(p.prev, p, p.next) >= 0) return !1;
            if (p = p.prevZ, f !== t.prev && f !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && L(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        for (; p && p.z >= c;) {
            if (p !== t.prev && p !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && L(p.prev, p, p.next) >= 0) return !1;
            p = p.prevZ
        }
        for (; f && f.z <= d;) {
            if (f !== t.prev && f !== t.next && R(n.x, n.y, o.x, o.y, s.x, s.y, f.x, f.y) && L(f.prev, f, f.next) >= 0) return !1;
            f = f.nextZ
        }
        return !0
    }

    function I(t, e, i) {
        var r = t;
        do {
            var n = r.prev,
                o = r.next.next;
            !N(n, o) && B(n, r, r.next, o) && X(n, o) && X(o, n) && (e.push(n.i / i), e.push(r.i / i), e.push(o.i / i), H(r), H(r.next), r = t = o), r = r.next
        } while (r !== t);
        return T(r)
    }

    function P(t, e, i, r, n, o) {
        var s = t;
        do {
            for (var a = s.next.next; a !== s.prev;) {
                if (s.i !== a.i && F(s, a)) {
                    var h = j(s, a);
                    return s = T(s, s.next), h = T(h, h.next), w(s, e, i, r, n, o), void w(h, e, i, r, n, o)
                }
                a = a.next
            }
            s = s.next
        } while (s !== t)
    }

    function A(t, e) {
        return t.x - e.x
    }

    function O(t, e) {
        if (e = function(t, e) {
                var i, r = e,
                    n = t.x,
                    o = t.y,
                    s = -1 / 0;
                do {
                    if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                        var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (a <= n && a > s) {
                            if (s = a, a === n) {
                                if (o === r.y) return r;
                                if (o === r.next.y) return r.next
                            }
                            i = r.x < r.next.x ? r : r.next
                        }
                    }
                    r = r.next
                } while (r !== e);
                if (!i) return null;
                if (n === s) return i;
                var h, u = i,
                    l = i.x,
                    c = i.y,
                    d = 1 / 0;
                r = i;
                do {
                    n >= r.x && r.x >= l && n !== r.x && R(o < c ? n : s, o, l, c, o < c ? s : n, o, r.x, r.y) && (h = Math.abs(o - r.y) / (n - r.x), X(r, t) && (h < d || h === d && (r.x > i.x || r.x === i.x && C(i, r))) && (i = r, d = h)), r = r.next
                } while (r !== u);
                return i
            }(t, e)) {
            var i = j(e, t);
            T(i, i.next)
        }
    }

    function C(t, e) {
        return L(t.prev, t, e.prev) < 0 && L(e.next, t, t.next) < 0
    }

    function M(t, e, i, r, n) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }

    function D(t) {
        var e = t,
            i = t;
        do {
            (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
        } while (e !== t);
        return i
    }

    function R(t, e, i, r, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (r - a) - (i - s) * (e - a) >= 0 && (i - s) * (o - a) - (n - s) * (r - a) >= 0
    }

    function F(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
            var i = t;
            do {
                if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && B(i, i.next, t, e)) return !0;
                i = i.next
            } while (i !== t);
            return !1
        }(t, e) && (X(t, e) && X(e, t) && function(t, e) {
            var i = t,
                r = !1,
                n = (t.x + e.x) / 2,
                o = (t.y + e.y) / 2;
            do {
                i.y > o != i.next.y > o && i.next.y !== i.y && n < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next
            } while (i !== t);
            return r
        }(t, e) && (L(t.prev, t, e.prev) || L(t, e.prev, e)) || N(t, e) && L(t.prev, t, t.next) > 0 && L(e.prev, e, e.next) > 0)
    }

    function L(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }

    function N(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function B(t, e, i, r) {
        var n = k(L(t, e, i)),
            o = k(L(t, e, r)),
            s = k(L(i, r, t)),
            a = k(L(i, r, e));
        return n !== o && s !== a || (!(0 !== n || !U(t, i, e)) || (!(0 !== o || !U(t, r, e)) || (!(0 !== s || !U(i, t, r)) || !(0 !== a || !U(i, e, r)))))
    }

    function U(t, e, i) {
        return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
    }

    function k(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    }

    function X(t, e) {
        return L(t.prev, t, t.next) < 0 ? L(t, e, t.next) >= 0 && L(t, t.prev, e) >= 0 : L(t, e, t.prev) < 0 || L(t, t.next, e) < 0
    }

    function j(t, e) {
        var i = new z(t.i, t.x, t.y),
            r = new z(e.i, e.x, e.y),
            n = t.next,
            o = e.prev;
        return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, o.next = r, r.prev = o, r
    }

    function G(t, e, i, r) {
        var n = new z(t, e, i);
        return r ? (n.next = r.next, n.prev = r, r.next.prev = n, r.next = n) : (n.prev = n, n.next = n), n
    }

    function H(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function z(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function V(t, e, i, r) {
        for (var n = 0, o = e, s = i - r; o < i; o += r) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
        return n
    }
    x.deviation = function(t, e, i, r) {
        var n = e && e.length,
            o = n ? e[0] * i : t.length,
            s = Math.abs(V(t, 0, o, i));
        if (n)
            for (var a = 0, h = e.length; a < h; a++) {
                var u = e[a] * i,
                    l = a < h - 1 ? e[a + 1] * i : t.length;
                s -= Math.abs(V(t, u, l, i))
            }
        var c = 0;
        for (a = 0; a < r.length; a += 3) {
            var d = r[a] * i,
                p = r[a + 1] * i,
                f = r[a + 2] * i;
            c += Math.abs((t[d] - t[f]) * (t[p + 1] - t[d + 1]) - (t[d] - t[p]) * (t[f + 1] - t[d + 1]))
        }
        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
    }, x.flatten = function(t) {
        for (var e = t[0][0].length, i = {
                vertices: [],
                holes: [],
                dimensions: e
            }, r = 0, n = 0; n < t.length; n++) {
            for (var o = 0; o < t[n].length; o++)
                for (var s = 0; s < e; s++) i.vertices.push(t[n][o][s]);
            n > 0 && (r += t[n - 1].length, i.holes.push(r))
        }
        return i
    }, y.default = _;
    var Y = i(function(t, i) {
            ! function(r) {
                var n = i && !i.nodeType && i,
                    o = t && !t.nodeType && t,
                    s = "object" == typeof e && e;
                s.global !== s && s.window !== s && s.self !== s || (r = s);
                var a, h, u = 2147483647,
                    l = 36,
                    c = 1,
                    d = 26,
                    p = 38,
                    f = 700,
                    v = 72,
                    g = 128,
                    m = "-",
                    y = /^xn--/,
                    _ = /[^\x20-\x7E]/,
                    x = /[\x2E\u3002\uFF0E\uFF61]/g,
                    b = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    T = l - c,
                    w = Math.floor,
                    E = String.fromCharCode;

                function S(t) {
                    throw RangeError(b[t])
                }

                function I(t, e) {
                    for (var i = t.length, r = []; i--;) r[i] = e(t[i]);
                    return r
                }

                function P(t, e) {
                    var i = t.split("@"),
                        r = "";
                    return i.length > 1 && (r = i[0] + "@", t = i[1]), r + I((t = t.replace(x, ".")).split("."), e).join(".")
                }

                function A(t) {
                    for (var e, i, r = [], n = 0, o = t.length; n < o;)(e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (i = t.charCodeAt(n++))) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), n--) : r.push(e);
                    return r
                }

                function O(t) {
                    return I(t, function(t) {
                        var e = "";
                        return t > 65535 && (e += E((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += E(t)
                    }).join("")
                }

                function C(t, e) {
                    return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                }

                function M(t, e, i) {
                    var r = 0;
                    for (t = i ? w(t / f) : t >> 1, t += w(t / e); t > T * d >> 1; r += l) t = w(t / T);
                    return w(r + (T + 1) * t / (t + p))
                }

                function D(t) {
                    var e, i, r, n, o, s, a, h, p, f, y, _ = [],
                        x = t.length,
                        b = 0,
                        T = g,
                        E = v;
                    for ((i = t.lastIndexOf(m)) < 0 && (i = 0), r = 0; r < i; ++r) t.charCodeAt(r) >= 128 && S("not-basic"), _.push(t.charCodeAt(r));
                    for (n = i > 0 ? i + 1 : 0; n < x;) {
                        for (o = b, s = 1, a = l; n >= x && S("invalid-input"), ((h = (y = t.charCodeAt(n++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : l) >= l || h > w((u - b) / s)) && S("overflow"), b += h * s, !(h < (p = a <= E ? c : a >= E + d ? d : a - E)); a += l) s > w(u / (f = l - p)) && S("overflow"), s *= f;
                        E = M(b - o, e = _.length + 1, 0 == o), w(b / e) > u - T && S("overflow"), T += w(b / e), b %= e, _.splice(b++, 0, T)
                    }
                    return O(_)
                }

                function R(t) {
                    var e, i, r, n, o, s, a, h, p, f, y, _, x, b, T, I = [];
                    for (_ = (t = A(t)).length, e = g, i = 0, o = v, s = 0; s < _; ++s)(y = t[s]) < 128 && I.push(E(y));
                    for (r = n = I.length, n && I.push(m); r < _;) {
                        for (a = u, s = 0; s < _; ++s)(y = t[s]) >= e && y < a && (a = y);
                        for (a - e > w((u - i) / (x = r + 1)) && S("overflow"), i += (a - e) * x, e = a, s = 0; s < _; ++s)
                            if ((y = t[s]) < e && ++i > u && S("overflow"), y == e) {
                                for (h = i, p = l; !(h < (f = p <= o ? c : p >= o + d ? d : p - o)); p += l) T = h - f, b = l - f, I.push(E(C(f + T % b, 0))), h = w(T / b);
                                I.push(E(C(h, 0))), o = M(i, x, r == n), i = 0, ++r
                            }++ i, ++e
                    }
                    return I.join("")
                }
                if (a = {
                        version: "1.3.2",
                        ucs2: {
                            decode: A,
                            encode: O
                        },
                        decode: D,
                        encode: R,
                        toASCII: function(t) {
                            return P(t, function(t) {
                                return _.test(t) ? "xn--" + R(t) : t
                            })
                        },
                        toUnicode: function(t) {
                            return P(t, function(t) {
                                return y.test(t) ? D(t.slice(4).toLowerCase()) : t
                            })
                        }
                    }, n && o)
                    if (t.exports == n) o.exports = a;
                    else
                        for (h in a) a.hasOwnProperty(h) && (n[h] = a[h]);
                else r.punycode = a
            }(e)
        }),
        W = {
            isString: function(t) {
                return "string" == typeof t
            },
            isObject: function(t) {
                return "object" == typeof t && null !== t
            },
            isNull: function(t) {
                return null === t
            },
            isNullOrUndefined: function(t) {
                return null == t
            }
        };
    W.isString, W.isObject, W.isNull, W.isNullOrUndefined;

    function q(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    var Z = function(t, e, i, r) {
            e = e || "&", i = i || "=";
            var n = {};
            if ("string" != typeof t || 0 === t.length) return n;
            var o = /\+/g;
            t = t.split(e);
            var s = 1e3;
            r && "number" == typeof r.maxKeys && (s = r.maxKeys);
            var a = t.length;
            s > 0 && a > s && (a = s);
            for (var h = 0; h < a; ++h) {
                var u, l, c, d, p = t[h].replace(o, "%20"),
                    f = p.indexOf(i);
                f >= 0 ? (u = p.substr(0, f), l = p.substr(f + 1)) : (u = p, l = ""), c = decodeURIComponent(u), d = decodeURIComponent(l), q(n, c) ? Array.isArray(n[c]) ? n[c].push(d) : n[c] = [n[c], d] : n[c] = d
            }
            return n
        },
        K = function(t) {
            switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        },
        J = function(t, e, i, r) {
            return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map(function(r) {
                var n = encodeURIComponent(K(r)) + i;
                return Array.isArray(t[r]) ? t[r].map(function(t) {
                    return n + encodeURIComponent(K(t))
                }).join(e) : n + encodeURIComponent(K(t[r]))
            }).join(e) : r ? encodeURIComponent(K(r)) + i + encodeURIComponent(K(t)) : ""
        },
        Q = i(function(t, e) {
            e.decode = e.parse = Z, e.encode = e.stringify = J
        }),
        $ = (Q.decode, Q.parse, Q.encode, Q.stringify, mt),
        tt = function(t, e) {
            return mt(t, !1, !0).resolve(e)
        },
        et = function(t, e) {
            if (!t) return e;
            return mt(t, !1, !0).resolveObject(e)
        },
        it = function(t) {
            W.isString(t) && (t = mt(t));
            if (!(t instanceof nt)) return nt.prototype.format.call(t);
            return t.format()
        },
        rt = nt;

    function nt() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    var ot = /^([a-z0-9.+-]+:)/i,
        st = /:[0-9]*$/,
        at = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        ht = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        ut = ["'"].concat(ht),
        lt = ["%", "/", "?", ";", "#"].concat(ut),
        ct = ["/", "?", "#"],
        dt = /^[+a-z0-9A-Z_-]{0,63}$/,
        pt = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        ft = {
            javascript: !0,
            "javascript:": !0
        },
        vt = {
            javascript: !0,
            "javascript:": !0
        },
        gt = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };

    function mt(t, e, i) {
        if (t && W.isObject(t) && t instanceof nt) return t;
        var r = new nt;
        return r.parse(t, e, i), r
    }
    nt.prototype.parse = function(t, e, i) {
        if (!W.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var r = t.indexOf("?"),
            n = -1 !== r && r < t.indexOf("#") ? "?" : "#",
            o = t.split(n);
        o[0] = o[0].replace(/\\/g, "/");
        var s = t = o.join(n);
        if (s = s.trim(), !i && 1 === t.split("#").length) {
            var a = at.exec(s);
            if (a) return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = e ? Q.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var h = ot.exec(s);
        if (h) {
            var u = (h = h[0]).toLowerCase();
            this.protocol = u, s = s.substr(h.length)
        }
        if (i || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var l = "//" === s.substr(0, 2);
            !l || h && vt[h] || (s = s.substr(2), this.slashes = !0)
        }
        if (!vt[h] && (l || h && !gt[h])) {
            for (var c, d, p = -1, f = 0; f < ct.length; f++) {
                -1 !== (v = s.indexOf(ct[f])) && (-1 === p || v < p) && (p = v)
            } - 1 !== (d = -1 === p ? s.lastIndexOf("@") : s.lastIndexOf("@", p)) && (c = s.slice(0, d), s = s.slice(d + 1), this.auth = decodeURIComponent(c)), p = -1;
            for (f = 0; f < lt.length; f++) {
                var v; - 1 !== (v = s.indexOf(lt[f])) && (-1 === p || v < p) && (p = v)
            } - 1 === p && (p = s.length), this.host = s.slice(0, p), s = s.slice(p), this.parseHost(), this.hostname = this.hostname || "";
            var g = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!g)
                for (var m = this.hostname.split(/\./), y = (f = 0, m.length); f < y; f++) {
                    var _ = m[f];
                    if (_ && !_.match(dt)) {
                        for (var x = "", b = 0, T = _.length; b < T; b++) _.charCodeAt(b) > 127 ? x += "x" : x += _[b];
                        if (!x.match(dt)) {
                            var w = m.slice(0, f),
                                E = m.slice(f + 1),
                                S = _.match(pt);
                            S && (w.push(S[1]), E.unshift(S[2])), E.length && (s = "/" + E.join(".") + s), this.hostname = w.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = Y.toASCII(this.hostname));
            var I = this.port ? ":" + this.port : "",
                P = this.hostname || "";
            this.host = P + I, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
        }
        if (!ft[u])
            for (f = 0, y = ut.length; f < y; f++) {
                var A = ut[f];
                if (-1 !== s.indexOf(A)) {
                    var O = encodeURIComponent(A);
                    O === A && (O = escape(A)), s = s.split(A).join(O)
                }
            }
        var C = s.indexOf("#"); - 1 !== C && (this.hash = s.substr(C), s = s.slice(0, C));
        var M = s.indexOf("?");
        if (-1 !== M ? (this.search = s.substr(M), this.query = s.substr(M + 1), e && (this.query = Q.parse(this.query)), s = s.slice(0, M)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), gt[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            I = this.pathname || "";
            var D = this.search || "";
            this.path = I + D
        }
        return this.href = this.format(), this
    }, nt.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            i = this.pathname || "",
            r = this.hash || "",
            n = !1,
            o = "";
        this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && W.isObject(this.query) && Object.keys(this.query).length && (o = Q.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || gt[e]) && !1 !== n ? (n = "//" + (n || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), e + n + (i = i.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        })) + (s = s.replace("#", "%23")) + r
    }, nt.prototype.resolve = function(t) {
        return this.resolveObject(mt(t, !1, !0)).format()
    }, nt.prototype.resolveObject = function(t) {
        if (W.isString(t)) {
            var e = new nt;
            e.parse(t, !1, !0), t = e
        }
        for (var i = new nt, r = Object.keys(this), n = 0; n < r.length; n++) {
            var o = r[n];
            i[o] = this[o]
        }
        if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
        if (t.slashes && !t.protocol) {
            for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                var h = s[a];
                "protocol" !== h && (i[h] = t[h])
            }
            return gt[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
        }
        if (t.protocol && t.protocol !== i.protocol) {
            if (!gt[t.protocol]) {
                for (var u = Object.keys(t), l = 0; l < u.length; l++) {
                    var c = u[l];
                    i[c] = t[c]
                }
                return i.href = i.format(), i
            }
            if (i.protocol = t.protocol, t.host || vt[t.protocol]) i.pathname = t.pathname;
            else {
                for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift()););
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), i.pathname = d.join("/")
            }
            if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                var p = i.pathname || "",
                    f = i.search || "";
                i.path = p + f
            }
            return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
        }
        var v = i.pathname && "/" === i.pathname.charAt(0),
            g = t.host || t.pathname && "/" === t.pathname.charAt(0),
            m = g || v || i.host && t.pathname,
            y = m,
            _ = i.pathname && i.pathname.split("/") || [],
            x = (d = t.pathname && t.pathname.split("/") || [], i.protocol && !gt[i.protocol]);
        if (x && (i.hostname = "", i.port = null, i.host && ("" === _[0] ? _[0] = i.host : _.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), m = m && ("" === d[0] || "" === _[0])), g) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, _ = d;
        else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), i.search = t.search, i.query = t.query;
        else if (!W.isNullOrUndefined(t.search)) {
            if (x) i.hostname = i.host = _.shift(), (S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = S.shift(), i.host = i.hostname = S.shift());
            return i.search = t.search, i.query = t.query, W.isNull(i.pathname) && W.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
        }
        if (!_.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
        for (var b = _.slice(-1)[0], T = (i.host || t.host || _.length > 1) && ("." === b || ".." === b) || "" === b, w = 0, E = _.length; E >= 0; E--) "." === (b = _[E]) ? _.splice(E, 1) : ".." === b ? (_.splice(E, 1), w++) : w && (_.splice(E, 1), w--);
        if (!m && !y)
            for (; w--; w) _.unshift("..");
        !m || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), T && "/" !== _.join("/").substr(-1) && _.push("");
        var S, I = "" === _[0] || _[0] && "/" === _[0].charAt(0);
        x && (i.hostname = i.host = I ? "" : _.length ? _.shift() : "", (S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@")) && (i.auth = S.shift(), i.host = i.hostname = S.shift()));
        return (m = m || i.host && _.length) && !I && _.unshift(""), _.length ? i.pathname = _.join("/") : (i.pathname = null, i.path = null), W.isNull(i.pathname) && W.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
    }, nt.prototype.parseHost = function() {
        var t = this.host,
            e = st.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    };
    var yt = {
            parse: $,
            resolve: tt,
            resolveObject: et,
            format: it,
            Url: rt
        },
        _t = {
            WEBGL_LEGACY: 0,
            WEBGL: 1,
            WEBGL2: 2
        },
        xt = {
            UNKNOWN: 0,
            WEBGL: 1,
            CANVAS: 2
        },
        bt = {
            NORMAL: 0,
            ADD: 1,
            MULTIPLY: 2,
            SCREEN: 3,
            OVERLAY: 4,
            DARKEN: 5,
            LIGHTEN: 6,
            COLOR_DODGE: 7,
            COLOR_BURN: 8,
            HARD_LIGHT: 9,
            SOFT_LIGHT: 10,
            DIFFERENCE: 11,
            EXCLUSION: 12,
            HUE: 13,
            SATURATION: 14,
            COLOR: 15,
            LUMINOSITY: 16,
            NORMAL_NPM: 17,
            ADD_NPM: 18,
            SCREEN_NPM: 19,
            NONE: 20,
            SRC_OVER: 0,
            SRC_IN: 21,
            SRC_OUT: 22,
            SRC_ATOP: 23,
            DST_OVER: 24,
            DST_IN: 25,
            DST_OUT: 26,
            DST_ATOP: 27,
            ERASE: 26,
            SUBTRACT: 28
        },
        Tt = {
            POINTS: 0,
            LINES: 1,
            LINE_LOOP: 2,
            LINE_STRIP: 3,
            TRIANGLES: 4,
            TRIANGLE_STRIP: 5,
            TRIANGLE_FAN: 6
        },
        wt = {
            RGBA: 6408,
            RGB: 6407,
            ALPHA: 6406,
            LUMINANCE: 6409,
            LUMINANCE_ALPHA: 6410,
            DEPTH_COMPONENT: 6402,
            DEPTH_STENCIL: 34041
        },
        Et = {
            TEXTURE_2D: 3553,
            TEXTURE_CUBE_MAP: 34067,
            TEXTURE_2D_ARRAY: 35866,
            TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
            TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
            TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
            TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
            TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
            TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074
        },
        St = {
            UNSIGNED_BYTE: 5121,
            UNSIGNED_SHORT: 5123,
            UNSIGNED_SHORT_5_6_5: 33635,
            UNSIGNED_SHORT_4_4_4_4: 32819,
            UNSIGNED_SHORT_5_5_5_1: 32820,
            FLOAT: 5126,
            HALF_FLOAT: 36193
        },
        It = {
            LINEAR: 1,
            NEAREST: 0
        },
        Pt = {
            CLAMP: 33071,
            REPEAT: 10497,
            MIRRORED_REPEAT: 33648
        },
        At = {
            OFF: 0,
            POW2: 1,
            ON: 2
        },
        Ot = {
            AUTO: 0,
            MANUAL: 1
        },
        Ct = {
            LOW: "lowp",
            MEDIUM: "mediump",
            HIGH: "highp"
        };
    g.RETINA_PREFIX = /@([0-9\.]+)x/, g.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0;
    var Mt, Dt = !1,
        Rt = "5.1.5";

    function Ft(t) {
        if (!Dt) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var e = ["\n %c %c %c PixiJS " + Rt + " - âœ° " + t + " âœ°  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                window.console.log.apply(console, e)
            } else window.console && window.console.log("PixiJS " + Rt + " - " + t + " - http://www.pixijs.com/");
            Dt = !0
        }
    }

    function Lt() {
        return void 0 === Mt && (Mt = function() {
            var t = {
                stencil: !0,
                failIfMajorPerformanceCaveat: g.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
            };
            try {
                if (!window.WebGLRenderingContext) return !1;
                var e = document.createElement("canvas"),
                    i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                    r = !(!i || !i.getContextAttributes().stencil);
                if (i) {
                    var n = i.getExtension("WEBGL_lose_context");
                    n && n.loseContext()
                }
                return i = null, r
            } catch (t) {
                return !1
            }
        }()), Mt
    }

    function Nt(t, e) {
        return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
    }

    function Bt(t) {
        return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t)
    }

    function Ut(t) {
        return "string" == typeof t && "#" === t[0] && (t = t.substr(1)), parseInt(t, 16)
    }
    var kt = function() {
        for (var t = [], e = [], i = 0; i < 32; i++) t[i] = i, e[i] = i;
        t[bt.NORMAL_NPM] = bt.NORMAL, t[bt.ADD_NPM] = bt.ADD, t[bt.SCREEN_NPM] = bt.SCREEN, e[bt.NORMAL] = bt.NORMAL_NPM, e[bt.ADD] = bt.ADD_NPM, e[bt.SCREEN] = bt.SCREEN_NPM;
        var r = [];
        return r.push(e), r.push(t), r
    }();

    function Xt(t, e) {
        return kt[e ? 1 : 0][t]
    }

    function jt(t, e, i, r) {
        return i = i || new Float32Array(4), r || void 0 === r ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e) : (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i[3] = e, i
    }

    function Gt(t, e) {
        if (1 === e) return (255 * e << 24) + t;
        if (0 === e) return 0;
        var i = t >> 16 & 255,
            r = t >> 8 & 255,
            n = 255 & t;
        return (255 * e << 24) + ((i = i * e + .5 | 0) << 16) + ((r = r * e + .5 | 0) << 8) + (n = n * e + .5 | 0)
    }

    function Ht(t, e, i, r) {
        return (i = i || new Float32Array(4))[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, i[2] = (255 & t) / 255, (r || void 0 === r) && (i[0] *= e, i[1] *= e, i[2] *= e), i[3] = e, i
    }

    function zt(t, e) {
        void 0 === e && (e = null);
        var i = 6 * t;
        if ((e = e || new Uint16Array(i)).length !== i) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + i);
        for (var r = 0, n = 0; r < i; r += 6, n += 4) e[r + 0] = n + 0, e[r + 1] = n + 1, e[r + 2] = n + 2, e[r + 3] = n + 0, e[r + 4] = n + 2, e[r + 5] = n + 3;
        return e
    }

    function Vt(t, e, i) {
        var r, n = t.length;
        if (!(e >= n || 0 === i)) {
            var o = n - (i = e + i > n ? n - e : i);
            for (r = e; r < o; ++r) t[r] = t[r + i];
            t.length = o
        }
    }
    var Yt = 0;

    function Wt() {
        return ++Yt
    }

    function qt(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1
    }

    function Zt(t) {
        return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
    }

    function Kt(t) {
        return !(t & t - 1 || !t)
    }

    function Jt(t) {
        var e = (t > 65535) << 4,
            i = ((t >>>= e) > 255) << 3;
        return e |= i, e |= i = ((t >>>= i) > 15) << 2, (e |= i = ((t >>>= i) > 3) << 1) | (t >>>= i) >> 1
    }
    var Qt = {},
        $t = Object.create(null),
        te = Object.create(null);

    function ee(t) {
        var e, i, r, n = t.width,
            o = t.height,
            s = t.getContext("2d"),
            a = s.getImageData(0, 0, n, o).data,
            h = a.length,
            u = {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            l = null;
        for (e = 0; e < h; e += 4) 0 !== a[e + 3] && (i = e / 4 % n, r = ~~(e / 4 / n), null === u.top && (u.top = r), null === u.left ? u.left = i : i < u.left && (u.left = i), null === u.right ? u.right = i + 1 : u.right < i && (u.right = i + 1), null === u.bottom ? u.bottom = r : u.bottom < r && (u.bottom = r));
        return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, l = s.getImageData(u.left, u.top, n, o)), {
            height: o,
            width: n,
            data: l
        }
    }
    var ie = function(t, e, i) {
            this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || g.RESOLUTION, this.resize(t, e)
        },
        re = {
            width: {
                configurable: !0
            },
            height: {
                configurable: !0
            }
        };
    ie.prototype.clear = function() {
        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }, ie.prototype.resize = function(t, e) {
        this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
    }, ie.prototype.destroy = function() {
        this.context = null, this.canvas = null
    }, re.width.get = function() {
        return this.canvas.width
    }, re.width.set = function(t) {
        this.canvas.width = t
    }, re.height.get = function() {
        return this.canvas.height
    }, re.height.set = function(t) {
        this.canvas.height = t
    }, Object.defineProperties(ie.prototype, re);
    var ne, oe = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

    function se(t, e) {
        if (void 0 === e && (e = window.location), 0 === t.indexOf("data:")) return "";
        e = e || window.location, ne || (ne = document.createElement("a")), ne.href = t;
        var i = !(t = yt.parse(ne.href)).port && "" === e.port || t.port === e.port;
        return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
    }

    function ae(t, e) {
        var i = g.RETINA_PREFIX.exec(t);
        return i ? parseFloat(i[1]) : void 0 !== e ? e : 1
    }
    var he = {};

    function ue(t, e, i) {
        if (void 0 === i && (i = 3), !he[e]) {
            var r = (new Error).stack;
            void 0 === r ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (r = r.split("\n").splice(i).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), console.warn(r), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), console.warn(r))), he[e] = !0
        }
    }
    var le = {
            BaseTextureCache: te,
            CanvasRenderTarget: ie,
            DATA_URI: oe,
            ProgramCache: Qt,
            TextureCache: $t,
            clearTextureCache: function() {
                var t;
                for (t in $t) delete $t[t];
                for (t in te) delete te[t]
            },
            correctBlendMode: Xt,
            createIndicesForQuads: zt,
            decomposeDataUri: function(t) {
                var e = oe.exec(t);
                if (e) return {
                    mediaType: e[1] ? e[1].toLowerCase() : void 0,
                    subType: e[2] ? e[2].toLowerCase() : void 0,
                    charset: e[3] ? e[3].toLowerCase() : void 0,
                    encoding: e[4] ? e[4].toLowerCase() : void 0,
                    data: e[5]
                }
            },
            deprecation: ue,
            destroyTextureCache: function() {
                var t;
                for (t in $t) $t[t].destroy();
                for (t in te) te[t].destroy()
            },
            determineCrossOrigin: se,
            getResolutionOfUrl: ae,
            hex2rgb: Nt,
            hex2string: Bt,
            isPow2: Kt,
            isWebGLSupported: Lt,
            log2: Jt,
            nextPow2: Zt,
            premultiplyBlendMode: kt,
            premultiplyRgba: jt,
            premultiplyTint: Gt,
            premultiplyTintToRgba: Ht,
            removeItems: Vt,
            rgb2hex: function(t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
            },
            sayHello: Ft,
            sign: qt,
            skipHello: function() {
                Dt = !0
            },
            string2hex: Ut,
            trimCanvas: ee,
            uid: Wt,
            isMobile: v,
            EventEmitter: m,
            earcut: y,
            url: yt
        },
        ce = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
        };
    ce.prototype.clone = function() {
        return new ce(this.x, this.y)
    }, ce.prototype.copyFrom = function(t) {
        return this.set(t.x, t.y), this
    }, ce.prototype.copyTo = function(t) {
        return t.set(this.x, this.y), t
    }, ce.prototype.equals = function(t) {
        return t.x === this.x && t.y === this.y
    }, ce.prototype.set = function(t, e) {
        this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
    };
    var de = function(t, e, i, r) {
            void 0 === i && (i = 0), void 0 === r && (r = 0), this._x = i, this._y = r, this.cb = t, this.scope = e
        },
        pe = {
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            }
        };
    de.prototype.clone = function(t, e) {
        void 0 === t && (t = null), void 0 === e && (e = null);
        var i = t || this.cb,
            r = e || this.scope;
        return new de(i, r, this._x, this._y)
    }, de.prototype.set = function(t, e) {
        var i = t || 0,
            r = e || (0 !== e ? i : 0);
        this._x === i && this._y === r || (this._x = i, this._y = r, this.cb.call(this.scope))
    }, de.prototype.copyFrom = function(t) {
        return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
    }, de.prototype.copyTo = function(t) {
        return t.set(this._x, this._y), t
    }, de.prototype.equals = function(t) {
        return t.x === this._x && t.y === this._y
    }, pe.x.get = function() {
        return this._x
    }, pe.x.set = function(t) {
        this._x !== t && (this._x = t, this.cb.call(this.scope))
    }, pe.y.get = function() {
        return this._y
    }, pe.y.set = function(t) {
        this._y !== t && (this._y = t, this.cb.call(this.scope))
    }, Object.defineProperties(de.prototype, pe);
    var fe = 2 * Math.PI,
        ve = 180 / Math.PI,
        ge = Math.PI / 180,
        me = {
            POLY: 0,
            RECT: 1,
            CIRC: 2,
            ELIP: 3,
            RREC: 4
        },
        ye = function(t, e, i, r, n, o) {
            void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this.array = null
        },
        _e = {
            IDENTITY: {
                configurable: !0
            },
            TEMP_MATRIX: {
                configurable: !0
            }
        };
    ye.prototype.fromArray = function(t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
    }, ye.prototype.set = function(t, e, i, r, n, o) {
        return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this
    }, ye.prototype.toArray = function(t, e) {
        this.array || (this.array = new Float32Array(9));
        var i = e || this.array;
        return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
    }, ye.prototype.apply = function(t, e) {
        e = e || new ce;
        var i = t.x,
            r = t.y;
        return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
    }, ye.prototype.applyInverse = function(t, e) {
        e = e || new ce;
        var i = 1 / (this.a * this.d + this.c * -this.b),
            r = t.x,
            n = t.y;
        return e.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
    }, ye.prototype.translate = function(t, e) {
        return this.tx += t, this.ty += e, this
    }, ye.prototype.scale = function(t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
    }, ye.prototype.rotate = function(t) {
        var e = Math.cos(t),
            i = Math.sin(t),
            r = this.a,
            n = this.c,
            o = this.tx;
        return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this
    }, ye.prototype.append = function(t) {
        var e = this.a,
            i = this.b,
            r = this.c,
            n = this.d;
        return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
    }, ye.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
        return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this
    }, ye.prototype.prepend = function(t) {
        var e = this.tx;
        if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
            var i = this.a,
                r = this.c;
            this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
    }, ye.prototype.decompose = function(t) {
        var e = this.a,
            i = this.b,
            r = this.c,
            n = this.d,
            o = -Math.atan2(-r, n),
            s = Math.atan2(i, e),
            a = Math.abs(o + s);
        return a < 1e-5 || Math.abs(fe - a) < 1e-5 ? (t.rotation = s, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx, t.position.y = this.ty, t
    }, ye.prototype.invert = function() {
        var t = this.a,
            e = this.b,
            i = this.c,
            r = this.d,
            n = this.tx,
            o = t * r - e * i;
        return this.a = r / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this
    }, ye.prototype.identity = function() {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
    }, ye.prototype.clone = function() {
        var t = new ye;
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
    }, ye.prototype.copyTo = function(t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
    }, ye.prototype.copyFrom = function(t) {
        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
    }, _e.IDENTITY.get = function() {
        return new ye
    }, _e.TEMP_MATRIX.get = function() {
        return new ye
    }, Object.defineProperties(ye, _e);
    var xe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        be = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        Te = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        we = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        Ee = [],
        Se = [],
        Ie = Math.sign;
    ! function() {
        for (var t = 0; t < 16; t++) {
            var e = [];
            Ee.push(e);
            for (var i = 0; i < 16; i++)
                for (var r = Ie(xe[t] * xe[i] + Te[t] * be[i]), n = Ie(be[t] * xe[i] + we[t] * be[i]), o = Ie(xe[t] * Te[i] + Te[t] * we[i]), s = Ie(be[t] * Te[i] + we[t] * we[i]), a = 0; a < 16; a++)
                    if (xe[a] === r && be[a] === n && Te[a] === o && we[a] === s) {
                        e.push(a);
                        break
                    }
        }
        for (var h = 0; h < 16; h++) {
            var u = new ye;
            u.set(xe[h], be[h], Te[h], we[h], 0, 0), Se.push(u)
        }
    }();
    var Pe = {
            E: 0,
            SE: 1,
            S: 2,
            SW: 3,
            W: 4,
            NW: 5,
            N: 6,
            NE: 7,
            MIRROR_VERTICAL: 8,
            MAIN_DIAGONAL: 10,
            MIRROR_HORIZONTAL: 12,
            REVERSE_DIAGONAL: 14,
            uX: function(t) {
                return xe[t]
            },
            uY: function(t) {
                return be[t]
            },
            vX: function(t) {
                return Te[t]
            },
            vY: function(t) {
                return we[t]
            },
            inv: function(t) {
                return 8 & t ? 15 & t : 7 & -t
            },
            add: function(t, e) {
                return Ee[t][e]
            },
            sub: function(t, e) {
                return Ee[t][Pe.inv(e)]
            },
            rotate180: function(t) {
                return 4 ^ t
            },
            isVertical: function(t) {
                return 2 == (3 & t)
            },
            byDirection: function(t, e) {
                return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? Pe.S : Pe.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? Pe.E : Pe.W : e > 0 ? t > 0 ? Pe.SE : Pe.SW : t > 0 ? Pe.NE : Pe.NW
            },
            matrixAppendRotationInv: function(t, e, i, r) {
                void 0 === i && (i = 0), void 0 === r && (r = 0);
                var n = Se[Pe.inv(e)];
                n.tx = i, n.ty = r, t.append(n)
            }
        },
        Ae = function() {
            this.worldTransform = new ye, this.localTransform = new ye, this.position = new de(this.onChange, this, 0, 0), this.scale = new de(this.onChange, this, 1, 1), this.pivot = new de(this.onChange, this, 0, 0), this.skew = new de(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
        },
        Oe = {
            rotation: {
                configurable: !0
            }
        };
    Ae.prototype.onChange = function() {
        this._localID++
    }, Ae.prototype.updateSkew = function() {
        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
    }, Ae.prototype.updateLocalTransform = function() {
        var t = this.localTransform;
        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
    }, Ae.prototype.updateTransform = function(t) {
        var e = this.localTransform;
        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
            var i = t.worldTransform,
                r = this.worldTransform;
            r.a = e.a * i.a + e.b * i.c, r.b = e.a * i.b + e.b * i.d, r.c = e.c * i.a + e.d * i.c, r.d = e.c * i.b + e.d * i.d, r.tx = e.tx * i.a + e.ty * i.c + i.tx, r.ty = e.tx * i.b + e.ty * i.d + i.ty, this._parentID = t._worldID, this._worldID++
        }
    }, Ae.prototype.setFromMatrix = function(t) {
        t.decompose(this), this._localID++
    }, Oe.rotation.get = function() {
        return this._rotation
    }, Oe.rotation.set = function(t) {
        this._rotation !== t && (this._rotation = t, this.updateSkew())
    }, Object.defineProperties(Ae.prototype, Oe), Ae.IDENTITY = new Ae;
    var Ce = function(t, e, i, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = Number(t), this.y = Number(e), this.width = Number(i), this.height = Number(r), this.type = me.RECT
        },
        Me = {
            left: {
                configurable: !0
            },
            right: {
                configurable: !0
            },
            top: {
                configurable: !0
            },
            bottom: {
                configurable: !0
            }
        },
        De = {
            EMPTY: {
                configurable: !0
            }
        };
    Me.left.get = function() {
        return this.x
    }, Me.right.get = function() {
        return this.x + this.width
    }, Me.top.get = function() {
        return this.y
    }, Me.bottom.get = function() {
        return this.y + this.height
    }, De.EMPTY.get = function() {
        return new Ce(0, 0, 0, 0)
    }, Ce.prototype.clone = function() {
        return new Ce(this.x, this.y, this.width, this.height)
    }, Ce.prototype.copyFrom = function(t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
    }, Ce.prototype.copyTo = function(t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
    }, Ce.prototype.contains = function(t, e) {
        return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
    }, Ce.prototype.pad = function(t, e) {
        t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
    }, Ce.prototype.fit = function(t) {
        var e = Math.max(this.x, t.x),
            i = Math.min(this.x + this.width, t.x + t.width),
            r = Math.max(this.y, t.y),
            n = Math.min(this.y + this.height, t.y + t.height);
        this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0)
    }, Ce.prototype.ceil = function(t, e) {
        void 0 === t && (t = 1), void 0 === e && (e = .001);
        var i = Math.ceil((this.x + this.width - e) * t) / t,
            r = Math.ceil((this.y + this.height - e) * t) / t;
        this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y
    }, Ce.prototype.enlarge = function(t) {
        var e = Math.min(this.x, t.x),
            i = Math.max(this.x + this.width, t.x + t.width),
            r = Math.min(this.y, t.y),
            n = Math.max(this.y + this.height, t.y + t.height);
        this.x = e, this.width = i - e, this.y = r, this.height = n - r
    }, Object.defineProperties(Ce.prototype, Me), Object.defineProperties(Ce, De);
    var Re = function(t, e, i) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.radius = i, this.type = me.CIRC
    };
    Re.prototype.clone = function() {
        return new Re(this.x, this.y, this.radius)
    }, Re.prototype.contains = function(t, e) {
        if (this.radius <= 0) return !1;
        var i = this.radius * this.radius,
            r = this.x - t,
            n = this.y - e;
        return (r *= r) + (n *= n) <= i
    }, Re.prototype.getBounds = function() {
        return new Ce(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
    };
    var Fe = function(t, e, i, r) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.width = i, this.height = r, this.type = me.ELIP
    };
    Fe.prototype.clone = function() {
        return new Fe(this.x, this.y, this.width, this.height)
    }, Fe.prototype.contains = function(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var i = (t - this.x) / this.width,
            r = (e - this.y) / this.height;
        return (i *= i) + (r *= r) <= 1
    }, Fe.prototype.getBounds = function() {
        return new Ce(this.x - this.width, this.y - this.height, this.width, this.height)
    };
    var Le = function() {
        for (var t = arguments, e = [], i = arguments.length; i--;) e[i] = t[i];
        if (Array.isArray(e[0]) && (e = e[0]), e[0] instanceof ce) {
            for (var r = [], n = 0, o = e.length; n < o; n++) r.push(e[n].x, e[n].y);
            e = r
        }
        this.points = e, this.type = me.POLY, this.closeStroke = !0
    };
    Le.prototype.clone = function() {
        var t = new Le(this.points.slice());
        return t.closeStroke = this.closeStroke, t
    }, Le.prototype.contains = function(t, e) {
        for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; n < r; o = n++) {
            var s = this.points[2 * n],
                a = this.points[2 * n + 1],
                h = this.points[2 * o],
                u = this.points[2 * o + 1];
            a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (i = !i)
        }
        return i
    };
    var Ne = function(t, e, i, r, n) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === n && (n = 20), this.x = t, this.y = e, this.width = i, this.height = r, this.radius = n, this.type = me.RREC
    };
    Ne.prototype.clone = function() {
        return new Ne(this.x, this.y, this.width, this.height, this.radius)
    }, Ne.prototype.contains = function(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
            if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
            var i = t - (this.x + this.radius),
                r = e - (this.y + this.radius),
                n = this.radius * this.radius;
            if (i * i + r * r <= n) return !0;
            if ((i = t - (this.x + this.width - this.radius)) * i + r * r <= n) return !0;
            if (i * i + (r = e - (this.y + this.height - this.radius)) * r <= n) return !0;
            if ((i = t - (this.x + this.radius)) * i + r * r <= n) return !0
        }
        return !1
    }, g.SORTABLE_CHILDREN = !1;
    var Be = function() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null
    };
    Be.prototype.isEmpty = function() {
        return this.minX > this.maxX || this.minY > this.maxY
    }, Be.prototype.clear = function() {
        this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
    }, Be.prototype.getRectangle = function(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? Ce.EMPTY : ((t = t || new Ce(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
    }, Be.prototype.addPoint = function(t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
    }, Be.prototype.addQuad = function(t) {
        var e = this.minX,
            i = this.minY,
            r = this.maxX,
            n = this.maxY,
            o = t[0],
            s = t[1];
        e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, i = (s = t[3]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, i = (s = t[5]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, i = (s = t[7]) < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, this.minX = e, this.minY = i, this.maxX = r, this.maxY = n
    }, Be.prototype.addFrame = function(t, e, i, r, n) {
        var o = t.worldTransform,
            s = o.a,
            a = o.b,
            h = o.c,
            u = o.d,
            l = o.tx,
            c = o.ty,
            d = this.minX,
            p = this.minY,
            f = this.maxX,
            v = this.maxY,
            g = s * e + h * i + l,
            m = a * e + u * i + c;
        d = g < d ? g : d, p = m < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, d = (g = s * r + h * i + l) < d ? g : d, p = (m = a * r + u * i + c) < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, d = (g = s * e + h * n + l) < d ? g : d, p = (m = a * e + u * n + c) < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, d = (g = s * r + h * n + l) < d ? g : d, p = (m = a * r + u * n + c) < p ? m : p, f = g > f ? g : f, v = m > v ? m : v, this.minX = d, this.minY = p, this.maxX = f, this.maxY = v
    }, Be.prototype.addVertexData = function(t, e, i) {
        for (var r = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < i; a += 2) {
            var h = t[a],
                u = t[a + 1];
            r = h < r ? h : r, n = u < n ? u : n, o = h > o ? h : o, s = u > s ? u : s
        }
        this.minX = r, this.minY = n, this.maxX = o, this.maxY = s
    }, Be.prototype.addVertices = function(t, e, i, r) {
        for (var n = t.worldTransform, o = n.a, s = n.b, a = n.c, h = n.d, u = n.tx, l = n.ty, c = this.minX, d = this.minY, p = this.maxX, f = this.maxY, v = i; v < r; v += 2) {
            var g = e[v],
                m = e[v + 1],
                y = o * g + a * m + u,
                _ = h * m + s * g + l;
            c = y < c ? y : c, d = _ < d ? _ : d, p = y > p ? y : p, f = _ > f ? _ : f
        }
        this.minX = c, this.minY = d, this.maxX = p, this.maxY = f
    }, Be.prototype.addBounds = function(t) {
        var e = this.minX,
            i = this.minY,
            r = this.maxX,
            n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
    }, Be.prototype.addBoundsMask = function(t, e) {
        var i = t.minX > e.minX ? t.minX : e.minX,
            r = t.minY > e.minY ? t.minY : e.minY,
            n = t.maxX < e.maxX ? t.maxX : e.maxX,
            o = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (i <= n && r <= o) {
            var s = this.minX,
                a = this.minY,
                h = this.maxX,
                u = this.maxY;
            this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
        }
    }, Be.prototype.addBoundsArea = function(t, e) {
        var i = t.minX > e.x ? t.minX : e.x,
            r = t.minY > e.y ? t.minY : e.y,
            n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
            o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (i <= n && r <= o) {
            var s = this.minX,
                a = this.minY,
                h = this.maxX,
                u = this.maxY;
            this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
        }
    };
    var Ue = function(t) {
        function e() {
            t.call(this), this.tempDisplayObjectParent = null, this.transform = new Ae, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Be, this._boundsID = 0, this._lastBoundsID = -1, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._destroyed = !1, this.isSprite = !1
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            _tempDisplayObjectParent: {
                configurable: !0
            },
            x: {
                configurable: !0
            },
            y: {
                configurable: !0
            },
            worldTransform: {
                configurable: !0
            },
            localTransform: {
                configurable: !0
            },
            position: {
                configurable: !0
            },
            scale: {
                configurable: !0
            },
            pivot: {
                configurable: !0
            },
            skew: {
                configurable: !0
            },
            rotation: {
                configurable: !0
            },
            angle: {
                configurable: !0
            },
            zIndex: {
                configurable: !0
            },
            worldVisible: {
                configurable: !0
            },
            mask: {
                configurable: !0
            }
        };
        return e.mixin = function(t) {
            for (var i = Object.keys(t), r = 0; r < i.length; ++r) {
                var n = i[r];
                Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n))
            }
        }, i._tempDisplayObjectParent.get = function() {
            return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent
        }, e.prototype.updateTransform = function() {
            this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
        }, e.prototype._recursivePostUpdateTransform = function() {
            this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
        }, e.prototype.getBounds = function(t, e) {
            return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && (this.calculateBounds(), this._lastBoundsID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new Ce), e = this._boundsRect), this._bounds.getRectangle(e)
        }, e.prototype.getLocalBounds = function(t) {
            var e = this.transform,
                i = this.parent;
            this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new Ce), t = this._localBoundsRect);
            var r = this.getBounds(!1, t);
            return this.parent = i, this.transform = e, r
        }, e.prototype.toGlobal = function(t, e, i) {
            return void 0 === i && (i = !1), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
        }, e.prototype.toLocal = function(t, e, i, r) {
            return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
        }, e.prototype.render = function(t) {}, e.prototype.setParent = function(t) {
            if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
            return t.addChild(this), t
        }, e.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), this.position.x = t, this.position.y = e, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this
        }, e.prototype.destroy = function() {
            this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
        }, i.x.get = function() {
            return this.position.x
        }, i.x.set = function(t) {
            this.transform.position.x = t
        }, i.y.get = function() {
            return this.position.y
        }, i.y.set = function(t) {
            this.transform.position.y = t
        }, i.worldTransform.get = function() {
            return this.transform.worldTransform
        }, i.localTransform.get = function() {
            return this.transform.localTransform
        }, i.position.get = function() {
            return this.transform.position
        }, i.position.set = function(t) {
            this.transform.position.copyFrom(t)
        }, i.scale.get = function() {
            return this.transform.scale
        }, i.scale.set = function(t) {
            this.transform.scale.copyFrom(t)
        }, i.pivot.get = function() {
            return this.transform.pivot
        }, i.pivot.set = function(t) {
            this.transform.pivot.copyFrom(t)
        }, i.skew.get = function() {
            return this.transform.skew
        }, i.skew.set = function(t) {
            this.transform.skew.copyFrom(t)
        }, i.rotation.get = function() {
            return this.transform.rotation
        }, i.rotation.set = function(t) {
            this.transform.rotation = t
        }, i.angle.get = function() {
            return this.transform.rotation * ve
        }, i.angle.set = function(t) {
            this.transform.rotation = t * ge
        }, i.zIndex.get = function() {
            return this._zIndex
        }, i.zIndex.set = function(t) {
            this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
        }, i.worldVisible.get = function() {
            var t = this;
            do {
                if (!t.visible) return !1;
                t = t.parent
            } while (t);
            return !0
        }, i.mask.get = function() {
            return this._mask
        }, i.mask.set = function(t) {
            this._mask && (this._mask.renderable = !0, this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.renderable = !1, this._mask.isMask = !0)
        }, Object.defineProperties(e.prototype, i), e
    }(m);

    function ke(t, e) {
        return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex
    }
    Ue.prototype.displayObjectUpdateTransform = Ue.prototype.updateTransform;
    var Xe = function(t) {
        function e() {
            t.call(this), this.children = [], this.sortableChildren = g.SORTABLE_CHILDREN, this.sortDirty = !1
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            width: {
                configurable: !0
            },
            height: {
                configurable: !0
            }
        };
        return e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t) {
            var e = arguments,
                i = arguments.length;
            if (i > 1)
                for (var r = 0; r < i; r++) this.addChild(e[r]);
            else t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
            return t
        }, e.prototype.addChildAt = function(t, e) {
            if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
            return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
        }, e.prototype.swapChildren = function(t, e) {
            if (t !== e) {
                var i = this.getChildIndex(t),
                    r = this.getChildIndex(e);
                this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
            }
        }, e.prototype.getChildIndex = function(t) {
            var e = this.children.indexOf(t);
            if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
            return e
        }, e.prototype.setChildIndex = function(t, e) {
            if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
            var i = this.getChildIndex(t);
            Vt(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
        }, e.prototype.getChildAt = function(t) {
            if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t]
        }, e.prototype.removeChild = function(t) {
            var e = arguments,
                i = arguments.length;
            if (i > 1)
                for (var r = 0; r < i; r++) this.removeChild(e[r]);
            else {
                var n = this.children.indexOf(t);
                if (-1 === n) return null;
                t.parent = null, t.transform._parentID = -1, Vt(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t.emit("removed", this), this.emit("childRemoved", t, this, n)
            }
            return t
        }, e.prototype.removeChildAt = function(t) {
            var e = this.getChildAt(t);
            return e.parent = null, e.transform._parentID = -1, Vt(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
        }, e.prototype.removeChildren = function(t, e) {
            void 0 === t && (t = 0);
            var i, r = t,
                n = "number" == typeof e ? e : this.children.length,
                o = n - r;
            if (o > 0 && o <= n) {
                i = this.children.splice(r, o);
                for (var s = 0; s < i.length; ++s) i[s].parent = null, i[s].transform && (i[s].transform._parentID = -1);
                this._boundsID++, this.onChildrenChange(t);
                for (var a = 0; a < i.length; ++a) i[a].emit("removed", this), this.emit("childRemoved", i[a], this, a);
                return i
            }
            if (0 === o && 0 === this.children.length) return [];
            throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
        }, e.prototype.sortChildren = function() {
            for (var t = !1, e = 0, i = this.children.length; e < i; ++e) {
                var r = this.children[e];
                r._lastSortedIndex = e, t || 0 === r.zIndex || (t = !0)
            }
            t && this.children.length > 1 && this.children.sort(ke), this.sortDirty = !1
        }, e.prototype.updateTransform = function() {
            this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
            for (var t = 0, e = this.children.length; t < e; ++t) {
                var i = this.children[t];
                i.visible && i.updateTransform()
            }
        }, e.prototype.calculateBounds = function() {
            this._bounds.clear(), this._calculateBounds();
            for (var t = 0; t < this.children.length; t++) {
                var e = this.children[t];
                e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
            }
            this._lastBoundsID = this._boundsID
        }, e.prototype._calculateBounds = function() {}, e.prototype.render = function(t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);
                else {
                    this._render(t);
                    for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].render(t)
                }
        }, e.prototype.renderAdvanced = function(t) {
            t.batch.flush();
            var e = this.filters,
                i = this._mask;
            if (e) {
                this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                for (var r = 0; r < e.length; r++) e[r].enabled && this._enabledFilters.push(e[r]);
                this._enabledFilters.length && t.filter.push(this, this._enabledFilters)
            }
            i && t.mask.push(this, this._mask), this._render(t);
            for (var n = 0, o = this.children.length; n < o; n++) this.children[n].render(t);
            t.batch.flush(), i && t.mask.pop(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop()
        }, e.prototype._render = function(t) {}, e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this), this.sortDirty = !1;
            var i = "boolean" == typeof e ? e : e && e.children,
                r = this.removeChildren(0, this.children.length);
            if (i)
                for (var n = 0; n < r.length; ++n) r[n].destroy(e)
        }, i.width.get = function() {
            return this.scale.x * this.getLocalBounds().width
        }, i.width.set = function(t) {
            var e = this.getLocalBounds().width;
            this.scale.x = 0 !== e ? t / e : 1, this._width = t
        }, i.height.get = function() {
            return this.scale.y * this.getLocalBounds().height
        }, i.height.set = function(t) {
            var e = this.getLocalBounds().height;
            this.scale.y = 0 !== e ? t / e : 1, this._height = t
        }, Object.defineProperties(e.prototype, i), e
    }(Ue);
    Xe.prototype.containerUpdateTransform = Xe.prototype.updateTransform;
    var je = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: !1
    };
    Ue.mixin(je);
    var Ge = function(t) {
        this._hookDiv = null, (v.tablet || v.phone) && this.createTouchHook();
        var e = document.createElement("div");
        e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessibility = !1, window.addEventListener("keydown", this._onKeyDown, !1)
    };
    Ge.prototype.createTouchHook = function() {
        var t = this,
            e = document.createElement("button");
        e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function() {
            t.isMobileAccessibility = !0, t.activate(), t.destroyTouchHook()
        }), document.body.appendChild(e), this._hookDiv = e
    }, Ge.prototype.destroyTouchHook = function() {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
    }, Ge.prototype.activate = function() {
        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
    }, Ge.prototype.deactivate = function() {
        this.isActive && !this.isMobileAccessibility && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
    }, Ge.prototype.updateAccessibleObjects = function(t) {
        if (t.visible) {
            t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
            for (var e = t.children, i = 0; i < e.length; i++) this.updateAccessibleObjects(e[i])
        }
    }, Ge.prototype.update = function() {
        if (this.renderer.renderingToScreen) {
            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
            var t = this.renderer.view.getBoundingClientRect(),
                e = t.width / this.renderer.width,
                i = t.height / this.renderer.height,
                r = this.div;
            r.style.left = t.left + "px", r.style.top = t.top + "px", r.style.width = this.renderer.width + "px", r.style.height = this.renderer.height + "px";
            for (var n = 0; n < this.children.length; n++) {
                var o = this.children[n];
                if (o.renderId !== this.renderId) o._accessibleActive = !1, Vt(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate();
                else {
                    r = o._accessibleDiv;
                    var s = o.hitArea,
                        a = o.worldTransform;
                    o.hitArea ? (r.style.left = (a.tx + s.x * a.a) * e + "px", r.style.top = (a.ty + s.y * a.d) * i + "px", r.style.width = s.width * a.a * e + "px", r.style.height = s.height * a.d * i + "px") : (s = o.getBounds(), this.capHitArea(s), r.style.left = s.x * e + "px", r.style.top = s.y * i + "px", r.style.width = s.width * e + "px", r.style.height = s.height * i + "px", r.title !== o.accessibleTitle && null !== o.accessibleTitle && (r.title = o.accessibleTitle), r.getAttribute("aria-label") !== o.accessibleHint && null !== o.accessibleHint && r.setAttribute("aria-label", o.accessibleHint))
                }
            }
            this.renderId++
        }
    }, Ge.prototype.capHitArea = function(t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
    }, Ge.prototype.addChild = function(t) {
        var e = this.pool.pop();
        e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
    }, Ge.prototype._onClick = function(t) {
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "click", e.eventData), e.dispatchEvent(t.target.displayObject, "pointertap", e.eventData), e.dispatchEvent(t.target.displayObject, "tap", e.eventData)
    }, Ge.prototype._onFocus = function(t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
    }, Ge.prototype._onFocusOut = function(t) {
        t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
        var e = this.renderer.plugins.interaction;
        e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
    }, Ge.prototype._onKeyDown = function(t) {
        9 === t.keyCode && this.activate()
    }, Ge.prototype._onMouseMove = function(t) {
        0 === t.movementX && 0 === t.movementY || this.deactivate()
    }, Ge.prototype.destroy = function() {
        this.destroyTouchHook(), this.div = null;
        for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
        window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
    };
    var He = {
            AccessibilityManager: Ge,
            accessibleTarget: je
        },
        ze = function(t) {
            this.items = [], this._name = t, this._aliasCount = 0
        },
        Ve = {
            empty: {
                configurable: !0
            },
            name: {
                configurable: !0
            }
        };
    ze.prototype.emit = function(t, e, i, r, n, o, s, a) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        var h = this.name,
            u = this.items;
        this._aliasCount++;
        for (var l = 0, c = u.length; l < c; l++) u[l][h](t, e, i, r, n, o, s, a);
        return u === this.items && this._aliasCount--, this
    }, ze.prototype.ensureNonAliasedItems = function() {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
    }, ze.prototype.add = function(t) {
        return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
    }, ze.prototype.remove = function(t) {
        var e = this.items.indexOf(t);
        return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
    }, ze.prototype.contains = function(t) {
        return -1 !== this.items.indexOf(t)
    }, ze.prototype.removeAll = function() {
        return this.ensureNonAliasedItems(), this.items.length = 0, this
    }, ze.prototype.destroy = function() {
        this.removeAll(), this.items = null, this._name = null
    }, Ve.empty.get = function() {
        return 0 === this.items.length
    }, Ve.name.get = function() {
        return this._name
    }, Object.defineProperties(ze.prototype, Ve), ze.prototype.dispatch = ze.prototype.emit, ze.prototype.run = ze.prototype.emit, g.TARGET_FPMS = .06;
    var Ye = {
            INTERACTION: 50,
            HIGH: 25,
            NORMAL: 0,
            LOW: -25,
            UTILITY: -50
        },
        We = function(t, e, i, r) {
            void 0 === e && (e = null), void 0 === i && (i = 0), void 0 === r && (r = !1), this.fn = t, this.context = e, this.priority = i, this.once = r, this.next = null, this.previous = null, this._destroyed = !1
        };
    We.prototype.match = function(t, e) {
        return e = e || null, this.fn === t && this.context === e
    }, We.prototype.emit = function(t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        var e = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
    }, We.prototype.connect = function(t) {
        this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
    }, We.prototype.destroy = function(t) {
        void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        var e = this.next;
        return this.next = t ? null : e, this.previous = null, e
    };
    var qe = function() {
            var t = this;
            this._head = new We(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this.autoStart = !1, this.deltaTime = 1, this.deltaMS = 1 / g.TARGET_FPMS, this.elapsedMS = 1 / g.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._protected = !1, this._lastFrame = -1, this._tick = function(e) {
                t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
            }
        },
        Ze = {
            FPS: {
                configurable: !0
            },
            minFPS: {
                configurable: !0
            },
            maxFPS: {
                configurable: !0
            }
        },
        Ke = {
            shared: {
                configurable: !0
            },
            system: {
                configurable: !0
            }
        };
    qe.prototype._requestIfNeeded = function() {
        null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
    }, qe.prototype._cancelIfNeeded = function() {
        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
    }, qe.prototype._startIfPossible = function() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }, qe.prototype.add = function(t, e, i) {
        return void 0 === i && (i = Ye.NORMAL), this._addListener(new We(t, e, i))
    }, qe.prototype.addOnce = function(t, e, i) {
        return void 0 === i && (i = Ye.NORMAL), this._addListener(new We(t, e, i, !0))
    }, qe.prototype._addListener = function(t) {
        var e = this._head.next,
            i = this._head;
        if (e) {
            for (; e;) {
                if (t.priority > e.priority) {
                    t.connect(i);
                    break
                }
                i = e, e = e.next
            }
            t.previous || t.connect(i)
        } else t.connect(i);
        return this._startIfPossible(), this
    }, qe.prototype.remove = function(t, e) {
        for (var i = this._head.next; i;) i = i.match(t, e) ? i.destroy() : i.next;
        return this._head.next || this._cancelIfNeeded(), this
    }, qe.prototype.start = function() {
        this.started || (this.started = !0, this._requestIfNeeded())
    }, qe.prototype.stop = function() {
        this.started && (this.started = !1, this._cancelIfNeeded())
    }, qe.prototype.destroy = function() {
        if (!this._protected) {
            this.stop();
            for (var t = this._head.next; t;) t = t.destroy(!0);
            this._head.destroy(), this._head = null
        }
    }, qe.prototype.update = function(t) {
        var e;
        if (void 0 === t && (t = performance.now()), t > this.lastTime) {
            if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                var i = t - this._lastFrame | 0;
                if (i < this._minElapsedMS) return;
                this._lastFrame = t - i % this._minElapsedMS
            }
            this.deltaMS = e, this.deltaTime = this.deltaMS * g.TARGET_FPMS;
            for (var r = this._head, n = r.next; n;) n = n.emit(this.deltaTime);
            r.next || this._cancelIfNeeded()
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t
    }, Ze.FPS.get = function() {
        return 1e3 / this.elapsedMS
    }, Ze.minFPS.get = function() {
        return 1e3 / this._maxElapsedMS
    }, Ze.minFPS.set = function(t) {
        var e = Math.min(this.maxFPS, t),
            i = Math.min(Math.max(0, e) / 1e3, g.TARGET_FPMS);
        this._maxElapsedMS = 1 / i
    }, Ze.maxFPS.get = function() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
    }, Ze.maxFPS.set = function(t) {
        if (0 === t) this._minElapsedMS = 0;
        else {
            var e = Math.max(this.minFPS, t);
            this._minElapsedMS = 1 / (e / 1e3)
        }
    }, Ke.shared.get = function() {
        if (!qe._shared) {
            var t = qe._shared = new qe;
            t.autoStart = !0, t._protected = !0
        }
        return qe._shared
    }, Ke.system.get = function() {
        if (!qe._system) {
            var t = qe._system = new qe;
            t.autoStart = !0, t._protected = !0
        }
        return qe._system
    }, Object.defineProperties(qe.prototype, Ze), Object.defineProperties(qe, Ke);
    var Je = function() {};
    Je.init = function(t) {
        var e = this;
        t = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, t), Object.defineProperty(this, "ticker", {
            set: function(t) {
                this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, Ye.LOW)
            },
            get: function() {
                return this._ticker
            }
        }), this.stop = function() {
            e._ticker.stop()
        }, this.start = function() {
            e._ticker.start()
        }, this._ticker = null, this.ticker = t.sharedTicker ? qe.shared : new qe, t.autoStart && this.start()
    }, Je.destroy = function() {
        if (this._ticker) {
            var t = this._ticker;
            this.ticker = null, t.destroy()
        }
    };
    var Qe = function(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new ze("setRealSize", 2), this.onUpdate = new ze("update"), this.onError = new ze("onError", 1)
        },
        $e = {
            valid: {
                configurable: !0
            },
            width: {
                configurable: !0
            },
            height: {
                configurable: !0
            }
        };
    Qe.prototype.bind = function(t) {
        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.run(this._width, this._height)
    }, Qe.prototype.unbind = function(t) {
        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
    }, Qe.prototype.resize = function(t, e) {
        t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.run(t, e))
    }, $e.valid.get = function() {
        return !!this._width && !!this._height
    }, Qe.prototype.update = function() {
        this.destroyed || this.onUpdate.run()
    }, Qe.prototype.load = function() {
        return Promise.resolve()
    }, $e.width.get = function() {
        return this._width
    }, $e.height.get = function() {
        return this._height
    }, Qe.prototype.upload = function(t, e, i) {
        return !1
    }, Qe.prototype.style = function(t, e, i) {
        return !1
    }, Qe.prototype.dispose = function() {}, Qe.prototype.destroy = function() {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
    }, Object.defineProperties(Qe.prototype, $e);
    var ti = function(t) {
            function e(e) {
                var i = e.naturalWidth || e.videoWidth || e.width,
                    r = e.naturalHeight || e.videoHeight || e.height;
                t.call(this, i, r), this.source = e, this.noSubImage = !1
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.crossOrigin = function(t, e, i) {
                void 0 === i && 0 !== e.indexOf("data:") ? t.crossOrigin = se(e) : !1 !== i && (t.crossOrigin = "string" == typeof i ? i : "anonymous")
            }, e.prototype.upload = function(t, e, i, r) {
                var n = t.gl,
                    o = e.realWidth,
                    s = e.realHeight;
                return r = r || this.source, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), this.noSubImage || e.target !== n.TEXTURE_2D || i.width !== o || i.height !== s ? (i.width = o, i.height = s, n.texImage2D(e.target, 0, e.format, e.format, e.type, r)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, e.type, r), !0
            }, e.prototype.update = function() {
                if (!this.destroyed) {
                    var e = this.source.naturalWidth || this.source.videoWidth || this.source.width,
                        i = this.source.naturalHeight || this.source.videoHeight || this.source.height;
                    this.resize(e, i), t.prototype.update.call(this)
                }
            }, e.prototype.dispose = function() {
                this.source = null
            }, e
        }(Qe),
        ei = function(t) {
            function e(e, i) {
                if (i = i || {}, !(e instanceof HTMLImageElement)) {
                    var r = new Image;
                    t.crossOrigin(r, e, i.crossorigin), r.src = e, e = r
                }
                t.call(this, e), !e.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = e.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (void 0 !== i.createBitmap ? i.createBitmap : g.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap, this.premultiplyAlpha = !1 !== i.premultiplyAlpha, this.bitmap = null, this._load = null, !1 !== i.autoLoad && this.load()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function(t) {
                var e = this;
                return void 0 !== t && (this.createBitmap = t), this._load ? this._load : (this._load = new Promise(function(t) {
                    e.url = e.source.src;
                    var i = e.source,
                        r = function() {
                            e.destroyed || (i.onload = null, i.onerror = null, e.resize(i.width, i.height), e._load = null, e.createBitmap ? t(e.process()) : t(e))
                        };
                    i.complete && i.src ? r() : (i.onload = r, i.onerror = function(t) {
                        return e.onError.run(t)
                    })
                }), this._load)
            }, e.prototype.process = function() {
                var t = this;
                return null !== this._process ? this._process : null === this.bitmap && window.createImageBitmap ? (this._process = window.createImageBitmap(this.source, 0, 0, this.source.width, this.source.height, {
                    premultiplyAlpha: this.premultiplyAlpha ? "premultiply" : "none"
                }).then(function(e) {
                    return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t))
                }), this._process) : Promise.resolve(this)
            }, e.prototype.upload = function(e, i, r) {
                if (i.premultiplyAlpha = this.premultiplyAlpha, !this.createBitmap) return t.prototype.upload.call(this, e, i, r);
                if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
                if (t.prototype.upload.call(this, e, i, r, this.bitmap), !this.preserveBitmap) {
                    var n = !0;
                    for (var o in i._glTextures) {
                        var s = i._glTextures[o];
                        if (s !== r && s.dirtyId !== i.dirtyId) {
                            n = !1;
                            break
                        }
                    }
                    n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
                }
                return !0
            }, e.prototype.dispose = function() {
                this.source.onload = null, this.source.onerror = null, t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
            }, e
        }(ti),
        ii = [];

    function ri(t, e) {
        if (!t) return null;
        var i = "";
        if ("string" == typeof t) {
            var r = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
            r && (i = r[1].toLowerCase())
        }
        for (var n = ii.length - 1; n >= 0; --n) {
            var o = ii[n];
            if (o.test && o.test(t, i)) return new o(t, e)
        }
        return new ei(t, e)
    }
    var ni = function(t) {
            function e(e, i) {
                var r = i || {},
                    n = r.width,
                    o = r.height;
                if (!n || !o) throw new Error("BufferResource width or height invalid");
                t.call(this, n, o), this.data = e
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.upload = function(t, e, i) {
                var r = t.gl;
                return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), i.width === e.width && i.height === e.height ? r.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, i.height = e.height, r.texImage2D(e.target, 0, i.internalFormat, e.width, e.height, 0, e.format, i.type, this.data)), !0
            }, e.prototype.dispose = function() {
                this.data = null
            }, e.test = function(t) {
                return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
            }, e
        }(Qe),
        oi = {
            scaleMode: It.NEAREST,
            format: wt.RGBA,
            premultiplyAlpha: !1
        },
        si = function(t) {
            function e(e, i) {
                void 0 === e && (e = null), void 0 === i && (i = null), t.call(this);
                var r = (i = i || {}).premultiplyAlpha,
                    n = i.mipmap,
                    o = i.anisotropicLevel,
                    s = i.scaleMode,
                    a = i.width,
                    h = i.height,
                    u = i.wrapMode,
                    l = i.format,
                    c = i.type,
                    d = i.target,
                    p = i.resolution,
                    f = i.resourceOptions;
                !e || e instanceof Qe || ((e = ri(e, f)).internal = !0), this.width = a || 0, this.height = h || 0, this.resolution = p || g.RESOLUTION, this.mipmap = void 0 !== n ? n : g.MIPMAP_TEXTURES, this.anisotropicLevel = void 0 !== o ? o : g.ANISOTROPIC_LEVEL, this.wrapMode = u || g.WRAP_MODE, this.scaleMode = void 0 !== s ? s : g.SCALE_MODE, this.format = l || wt.RGBA, this.type = c || St.UNSIGNED_BYTE, this.target = d || Et.TEXTURE_2D, this.premultiplyAlpha = !1 !== r, this.uid = Wt(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = a > 0 && h > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this.setResource(e)
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                realWidth: {
                    configurable: !0
                },
                realHeight: {
                    configurable: !0
                }
            };
            return i.realWidth.get = function() {
                return Math.ceil(this.width * this.resolution - 1e-4)
            }, i.realHeight.get = function() {
                return Math.ceil(this.height * this.resolution - 1e-4)
            }, e.prototype.setStyle = function(t, e) {
                var i;
                return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, i = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, i = !0), i && this.dirtyStyleId++, this
            }, e.prototype.setSize = function(t, e, i) {
                return this.resolution = i || this.resolution, this.width = t, this.height = e, this._refreshPOT(), this.update(), this
            }, e.prototype.setRealSize = function(t, e, i) {
                return this.resolution = i || this.resolution, this.width = t / this.resolution, this.height = e / this.resolution, this._refreshPOT(), this.update(), this
            }, e.prototype._refreshPOT = function() {
                this.isPowerOfTwo = Kt(this.realWidth) && Kt(this.realHeight)
            }, e.prototype.setResolution = function(t) {
                var e = this.resolution;
                return e === t ? this : (this.resolution = t, this.valid && (this.width = this.width * e / t, this.height = this.height * e / t, this.emit("update", this)), this._refreshPOT(), this)
            }, e.prototype.setResource = function(t) {
                if (this.resource === t) return this;
                if (this.resource) throw new Error("Resource can be set only once");
                return t.bind(this), this.resource = t, this
            }, e.prototype.update = function() {
                this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
            }, e.prototype.onError = function(t) {
                this.emit("error", this, t)
            }, e.prototype.destroy = function() {
                this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete te[this.cacheId], delete $t[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
            }, e.prototype.dispose = function() {
                this.emit("dispose", this)
            }, e.from = function(t, i) {
                var r = null;
                "string" == typeof t ? r = t : (t._pixiId || (t._pixiId = "pixiid_" + Wt()), r = t._pixiId);
                var n = te[r];
                return n || ((n = new e(t, i)).cacheId = r, e.addToCache(n, r)), n
            }, e.fromBuffer = function(t, i, r, n) {
                t = t || new Float32Array(i * r * 4);
                var o = new ni(t, {
                        width: i,
                        height: r
                    }),
                    s = t instanceof Float32Array ? St.FLOAT : St.UNSIGNED_BYTE;
                return new e(o, Object.assign(oi, n || {
                    width: i,
                    height: r,
                    type: s
                }))
            }, e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), te[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), te[e] = t)
            }, e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = te[t];
                    if (e) {
                        var i = e.textureCacheIds.indexOf(t);
                        return i > -1 && e.textureCacheIds.splice(i, 1), delete te[t], e
                    }
                } else if (t && t.textureCacheIds) {
                    for (var r = 0; r < t.textureCacheIds.length; ++r) delete te[t.textureCacheIds[r]];
                    return t.textureCacheIds.length = 0, t
                }
                return null
            }, Object.defineProperties(e.prototype, i), e
        }(m);
    si._globalBatch = 0;
    var ai = function(t) {
            function e(e, i) {
                var r;
                i = i || {};
                var n = e;
                Array.isArray(e) && (r = e, n = e.length), t.call(this, i.width, i.height), this.items = [], this.itemDirtyIds = [];
                for (var o = 0; o < n; o++) {
                    var s = new si;
                    this.items.push(s), this.itemDirtyIds.push(-1)
                }
                if (this.length = n, this._load = null, r)
                    for (var a = 0; a < n; a++) this.addResourceAt(ri(r[a], i), a)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.dispose = function() {
                for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();
                this.items = null, this.itemDirtyIds = null, this._load = null
            }, e.prototype.addResourceAt = function(t, e) {
                if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
                return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
            }, e.prototype.bind = function(e) {
                t.prototype.bind.call(this, e), e.target = Et.TEXTURE_2D_ARRAY;
                for (var i = 0; i < this.length; i++) this.items[i].on("update", e.update, e)
            }, e.prototype.unbind = function(e) {
                t.prototype.unbind.call(this, e);
                for (var i = 0; i < this.length; i++) this.items[i].off("update", e.update, e)
            }, e.prototype.load = function() {
                var t = this;
                if (this._load) return this._load;
                var e = this.items.map(function(t) {
                        return t.resource
                    }),
                    i = e.map(function(t) {
                        return t.load()
                    });
                return this._load = Promise.all(i).then(function() {
                    var i = e[0],
                        r = i.width,
                        n = i.height;
                    return t.resize(r, n), Promise.resolve(t)
                }), this._load
            }, e.prototype.upload = function(t, e, i) {
                var r = this.length,
                    n = this.itemDirtyIds,
                    o = this.items,
                    s = t.gl;
                i.dirtyId < 0 && s.texImage3D(s.TEXTURE_2D_ARRAY, 0, e.format, this._width, this._height, r, 0, e.format, e.type, null);
                for (var a = 0; a < r; a++) {
                    var h = o[a];
                    n[a] < h.dirtyId && (n[a] = h.dirtyId, h.valid && s.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, a, h.resource.width, h.resource.height, 1, e.format, e.type, h.resource.source))
                }
                return !0
            }, e
        }(Qe),
        hi = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function(t) {
                var e = window.OffscreenCanvas;
                return !!(e && t instanceof e) || t instanceof HTMLCanvasElement
            }, e
        }(ti),
        ui = function(t) {
            function e(i, r) {
                if (r = r || {}, t.call(this, i, r), this.length !== e.SIDES) throw new Error("Invalid length. Got " + this.length + ", expected 6");
                for (var n = 0; n < e.SIDES; n++) this.items[n].target = Et.TEXTURE_CUBE_MAP_POSITIVE_X + n;
                !1 !== r.autoLoad && this.load()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function(e) {
                t.prototype.bind.call(this, e), e.target = Et.TEXTURE_CUBE_MAP
            }, e.prototype.upload = function(t, i, r) {
                for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                    var s = this.items[o];
                    n[o] < s.dirtyId && (n[o] = s.dirtyId, s.valid && s.resource.upload(t, s, r))
                }
                return !0
            }, e
        }(ai);
    ui.SIDES = 6;
    var li = function(t) {
        function e(e, i) {
            i = i || {}, t.call(this, document.createElement("canvas")), this._width = 0, this._height = 0, this.svg = e, this.scale = i.scale || 1, this._overrideWidth = i.width, this._overrideHeight = i.height, this._resolve = null, this._crossorigin = i.crossorigin, this._load = null, !1 !== i.autoLoad && this.load()
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function() {
            var t = this;
            return this._load ? this._load : (this._load = new Promise(function(e) {
                if (t._resolve = function() {
                        t.resize(t.source.width, t.source.height), e(t)
                    }, /^\<svg/.test(t.svg.trim())) {
                    if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                    t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)))
                }
                t._loadSvg()
            }), this._load)
        }, e.prototype._loadSvg = function() {
            var e = this,
                i = new Image;
            t.crossOrigin(i, this.svg, this._crossorigin), i.src = this.svg, i.onerror = function(t) {
                i.onerror = null, e.onError.run(t)
            }, i.onload = function() {
                var t = i.width,
                    r = i.height;
                if (!t || !r) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                var n = t * e.scale,
                    o = r * e.scale;
                (e._overrideWidth || e._overrideHeight) && (n = e._overrideWidth || e._overrideHeight / r * t, o = e._overrideHeight || e._overrideWidth / t * r), n = Math.round(n), o = Math.round(o);
                var s = e.source;
                s.width = n, s.height = o, s._pixiId = "canvas_" + Wt(), s.getContext("2d").drawImage(i, 0, 0, t, r, 0, 0, n, o), e._resolve(), e._resolve = null
            }
        }, e.getSize = function(t) {
            var i = e.SVG_SIZE.exec(t),
                r = {};
            return i && (r[i[1]] = Math.round(parseFloat(i[3])), r[i[5]] = Math.round(parseFloat(i[7]))), r
        }, e.prototype.dispose = function() {
            t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null
        }, e.test = function(t, e) {
            return "svg" === e || "string" == typeof t && 0 === t.indexOf("data:image/svg+xml;base64") || "string" == typeof t && 0 === t.indexOf("<svg")
        }, e
    }(ti);
    li.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
    var ci = function(t) {
        function e(e, i) {
            if (i = i || {}, !(e instanceof HTMLVideoElement)) {
                var r = document.createElement("video");
                r.setAttribute("preload", "auto"), r.setAttribute("webkit-playsinline", ""), r.setAttribute("playsinline", ""), "string" == typeof e && (e = [e]), t.crossOrigin(r, e[0].src || e[0], i.crossorigin);
                for (var n = 0; n < e.length; ++n) {
                    var o = document.createElement("source"),
                        s = e[n],
                        a = s.src,
                        h = s.mime,
                        u = (a = a || e[n]).split("?").shift().toLowerCase(),
                        l = u.substr(u.lastIndexOf(".") + 1);
                    h = h || "video/" + l, o.src = a, o.type = h, r.appendChild(o)
                }
                e = r
            }
            t.call(this, e), this.noSubImage = !0, this._autoUpdate = !0, this._isAutoUpdating = !1, this._updateFPS = i.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = !1 !== i.autoPlay, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), !1 !== i.autoLoad && this.load()
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            autoUpdate: {
                configurable: !0
            },
            updateFPS: {
                configurable: !0
            }
        };
        return e.prototype.update = function(e) {
            if (void 0 === e && (e = 0), !this.destroyed) {
                var i = qe.shared.elapsedMS * this.source.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - i), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this, e), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
            }
        }, e.prototype.load = function() {
            var t = this;
            if (this._load) return this._load;
            var e = this.source;
            return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise(function(i) {
                t.valid ? i(t) : (t._resolve = i, e.load())
            }), this._load
        }, e.prototype._onError = function() {
            this.source.removeEventListener("error", this._onError, !0), this.onError.run(event)
        }, e.prototype._isSourcePlaying = function() {
            var t = this.source;
            return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
        }, e.prototype._isSourceReady = function() {
            return 3 === this.source.readyState || 4 === this.source.readyState
        }, e.prototype._onPlayStart = function() {
            this.valid || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (qe.shared.add(this.update, this), this._isAutoUpdating = !0)
        }, e.prototype._onPlayStop = function() {
            this._isAutoUpdating && (qe.shared.remove(this.update, this), this._isAutoUpdating = !1)
        }, e.prototype._onCanPlay = function() {
            var t = this.source;
            t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
            var e = this.valid;
            this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
        }, e.prototype.dispose = function() {
            this._isAutoUpdating && qe.shared.remove(this.update, this), this.source && (this.source.removeEventListener("error", this._onError, !0), this.source.pause(), this.source.src = "", this.source.load()), t.prototype.dispose.call(this)
        }, i.autoUpdate.get = function() {
            return this._autoUpdate
        }, i.autoUpdate.set = function(t) {
            t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (qe.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (qe.shared.add(this.update, this), this._isAutoUpdating = !0))
        }, i.updateFPS.get = function() {
            return this._updateFPS
        }, i.updateFPS.set = function(t) {
            t !== this._updateFPS && (this._updateFPS = t)
        }, e.test = function(t, i) {
            return t instanceof HTMLVideoElement || e.TYPES.indexOf(i) > -1
        }, Object.defineProperties(e.prototype, i), e
    }(ti);
    ci.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
    var di = function(t) {
        function e() {
            t.apply(this, arguments)
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.test = function(t) {
            return !!window.createImageBitmap && t instanceof ImageBitmap
        }, e
    }(ti);
    ii.push(ei, di, hi, ci, li, ni, ui, ai);
    var pi = {
            INSTALLED: ii,
            autoDetectResource: ri,
            ArrayResource: ai,
            BufferResource: ni,
            CanvasResource: hi,
            CubeResource: ui,
            ImageResource: ei,
            ImageBitmapResource: di,
            SVGResource: li,
            VideoResource: ci,
            Resource: Qe,
            BaseImageResource: ti
        },
        fi = function(t) {
            this.renderer = t
        };
    fi.prototype.destroy = function() {
        this.renderer = null
    };
    var vi = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.upload = function(t, e, i) {
                var r = t.gl;
                return r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), i.width === e.width && i.height === e.height ? r.texSubImage2D(e.target, 0, 0, 0, e.width, e.height, e.format, e.type, this.data) : (i.width = e.width, i.height = e.height, r.texImage2D(e.target, 0, r.DEPTH_COMPONENT16, e.width, e.height, 0, e.format, e.type, this.data)), !0
            }, e
        }(ni),
        gi = function(t, e) {
            this.width = Math.ceil(t || 100), this.height = Math.ceil(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new ze("disposeFramebuffer", 2)
        },
        mi = {
            colorTexture: {
                configurable: !0
            }
        };
    mi.colorTexture.get = function() {
        return this.colorTextures[0]
    }, gi.prototype.addColorTexture = function(t, e) {
        return void 0 === t && (t = 0), this.colorTextures[t] = e || new si(null, {
            scaleMode: 0,
            resolution: 1,
            mipmap: !1,
            width: this.width,
            height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this
    }, gi.prototype.addDepthTexture = function(t) {
        return this.depthTexture = t || new si(new vi(null, {
            width: this.width,
            height: this.height
        }), {
            scaleMode: 0,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: !1,
            format: wt.DEPTH_COMPONENT,
            type: St.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this
    }, gi.prototype.enableDepth = function() {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
    }, gi.prototype.enableStencil = function() {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
    }, gi.prototype.resize = function(t, e) {
        if (t = Math.ceil(t), e = Math.ceil(e), t !== this.width || e !== this.height) {
            this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
            for (var i = 0; i < this.colorTextures.length; i++) {
                var r = this.colorTextures[i],
                    n = r.resolution;
                r.setSize(t / n, e / n)
            }
            if (this.depthTexture) {
                var o = this.depthTexture.resolution;
                this.depthTexture.setSize(t / o, e / o)
            }
        }
    }, gi.prototype.dispose = function() {
        this.disposeRunner.run(this, !1)
    }, Object.defineProperties(gi.prototype, mi);
    var yi = function(t) {
            function e(e) {
                "number" == typeof e && (e = {
                    width: arguments[0],
                    height: arguments[1],
                    scaleMode: arguments[2],
                    resolution: arguments[3]
                });
                t.call(this, null, e);
                var i = e || {},
                    r = i.width,
                    n = i.height;
                this.mipmap = !1, this.width = Math.ceil(r) || 100, this.height = Math.ceil(n) || 100, this.valid = !0, this._canvasRenderTarget = null, this.clearColor = [0, 0, 0, 0], this.framebuffer = new gi(this.width * this.resolution, this.height * this.resolution).addColorTexture(0, this), this.stencilMaskStack = [], this.filterStack = [{}]
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function(t, e) {
                t = Math.ceil(t), e = Math.ceil(e), this.framebuffer.resize(t * this.resolution, e * this.resolution)
            }, e.prototype.dispose = function() {
                this.framebuffer.dispose(), t.prototype.dispose.call(this)
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this, !0), this.framebuffer = null
            }, e
        }(si),
        _i = function() {
            this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
        };
    _i.prototype.set = function(t, e, i) {
        var r = e.width,
            n = e.height;
        if (i) {
            var o = t.width / 2 / r,
                s = t.height / 2 / n,
                a = t.x / r + o,
                h = t.y / n + s;
            i = Pe.add(i, Pe.NW), this.x0 = a + o * Pe.uX(i), this.y0 = h + s * Pe.uY(i), i = Pe.add(i, 2), this.x1 = a + o * Pe.uX(i), this.y1 = h + s * Pe.uY(i), i = Pe.add(i, 2), this.x2 = a + o * Pe.uX(i), this.y2 = h + s * Pe.uY(i), i = Pe.add(i, 2), this.x3 = a + o * Pe.uX(i), this.y3 = h + s * Pe.uY(i)
        } else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
    };
    var xi = new _i,
        bi = function(t) {
            function e(i, r, n, o, s, a) {
                if (t.call(this), this.noFrame = !1, r || (this.noFrame = !0, r = new Ce(0, 0, 1, 1)), i instanceof e && (i = i.baseTexture), this.baseTexture = i, this._frame = r, this.trim = o, this.valid = !1, this.requiresUpdate = !1, this._uvs = xi, this.uvMatrix = null, this.orig = n || r, this._rotate = Number(s || 0), !0 === s) this._rotate = 2;
                else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                this.defaultAnchor = a ? new ce(a.x, a.y) : new ce(0, 0), this._updateID = 0, this.textureCacheIds = [], i.valid ? this.noFrame ? i.valid && this.onBaseTextureUpdated(i) : this.frame = r : i.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && i.on("update", this.onBaseTextureUpdated, this)
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                resolution: {
                    configurable: !0
                },
                frame: {
                    configurable: !0
                },
                rotate: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
            return e.prototype.update = function() {
                this.baseTexture.resource && this.baseTexture.resource.update()
            }, e.prototype.onBaseTextureUpdated = function(t) {
                if (this.noFrame) {
                    if (!this.baseTexture.valid) return;
                    this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
                } else this.frame = this._frame;
                this.emit("update", this)
            }, e.prototype.destroy = function(t) {
                if (this.baseTexture) {
                    if (t) {
                        var i = this.baseTexture.resource;
                        i && $t[i.url] && e.removeFromCache(i.url), this.baseTexture.destroy()
                    }
                    this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
                }
                this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
            }, e.prototype.clone = function() {
                return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor)
            }, e.prototype.updateUvs = function() {
                this._uvs === xi && (this._uvs = new _i), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
            }, e.from = function(t, i) {
                void 0 === i && (i = {});
                var r = null;
                "string" == typeof t ? r = t : (t._pixiId || (t._pixiId = "pixiid_" + Wt()), r = t._pixiId);
                var n = $t[r];
                return n || (i.resolution || (i.resolution = ae(t)), (n = new e(new si(t, i))).baseTexture.cacheId = r, si.addToCache(n.baseTexture, r), e.addToCache(n, r)), n
            }, e.fromBuffer = function(t, i, r, n) {
                return new e(si.fromBuffer(t, i, r, n))
            }, e.fromLoader = function(t, i, r) {
                var n = new ei(t);
                n.url = i;
                var o = new e(new si(n, {
                    scaleMode: g.SCALE_MODE,
                    resolution: ae(i)
                }));
                return r || (r = i), si.addToCache(o.baseTexture, r), e.addToCache(o, r), r !== i && (si.addToCache(o.baseTexture, i), e.addToCache(o, i)), o
            }, e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), $t[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), $t[e] = t)
            }, e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = $t[t];
                    if (e) {
                        var i = e.textureCacheIds.indexOf(t);
                        return i > -1 && e.textureCacheIds.splice(i, 1), delete $t[t], e
                    }
                } else if (t && t.textureCacheIds) {
                    for (var r = 0; r < t.textureCacheIds.length; ++r) $t[t.textureCacheIds[r]] === t && delete $t[t.textureCacheIds[r]];
                    return t.textureCacheIds.length = 0, t
                }
                return null
            }, i.resolution.get = function() {
                return this.baseTexture.resolution
            }, i.frame.get = function() {
                return this._frame
            }, i.frame.set = function(t) {
                this._frame = t, this.noFrame = !1;
                var e = t.x,
                    i = t.y,
                    r = t.width,
                    n = t.height,
                    o = e + r > this.baseTexture.width,
                    s = i + n > this.baseTexture.height;
                if (o || s) {
                    var a = o && s ? "and" : "or",
                        h = "X: " + e + " + " + r + " = " + (e + r) + " > " + this.baseTexture.width,
                        u = "Y: " + i + " + " + n + " = " + (i + n) + " > " + this.baseTexture.height;
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u)
                }
                this.valid = r && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs()
            }, i.rotate.get = function() {
                return this._rotate
            }, i.rotate.set = function(t) {
                this._rotate = t, this.valid && this.updateUvs()
            }, i.width.get = function() {
                return this.orig.width
            }, i.height.get = function() {
                return this.orig.height
            }, Object.defineProperties(e.prototype, i), e
        }(m);

    function Ti(t) {
        t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
    }
    bi.EMPTY = new bi(new si), Ti(bi.EMPTY), Ti(bi.EMPTY.baseTexture), bi.WHITE = function() {
        var t = document.createElement("canvas");
        t.width = 16, t.height = 16;
        var e = t.getContext("2d");
        return e.fillStyle = "white", e.fillRect(0, 0, 16, 16), new bi(new si(new hi(t)))
    }(), Ti(bi.WHITE), Ti(bi.WHITE.baseTexture);
    var wi = function(t) {
            function e(e, i) {
                var r = null;
                if (!(e instanceof yi)) {
                    var n = arguments[1],
                        o = arguments[2],
                        s = arguments[3],
                        a = arguments[4];
                    console.warn("Please use RenderTexture.create(" + n + ", " + o + ") instead of the ctor directly."), r = arguments[0], i = null, e = new yi({
                        width: n,
                        height: o,
                        scaleMode: s,
                        resolution: a
                    })
                }
                t.call(this, e, i), this.legacyRenderer = r, this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.resize = function(t, e, i) {
                void 0 === i && (i = !0), t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i && this.baseTexture.resize(t, e), this.updateUvs()
            }, e.prototype.setResolution = function(t) {
                var e = this.baseTexture;
                e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
            }, e.create = function(t) {
                return "number" == typeof t && (t = {
                    width: t,
                    height: arguments[1],
                    scaleMode: arguments[2],
                    resolution: arguments[3]
                }), new e(new yi(t))
            }, e
        }(bi),
        Ei = function(t) {
            this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
        };
    Ei.prototype.createTexture = function(t, e) {
        var i = new yi(Object.assign({
            width: t,
            height: e,
            resolution: 1
        }, this.textureOptions));
        return new wi(i)
    }, Ei.prototype.getOptimalTexture = function(t, e, i) {
        void 0 === i && (i = 1);
        var r = Ei.SCREEN_KEY;
        t *= i, e *= i, this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight || (r = (65535 & (t = Zt(t))) << 16 | 65535 & (e = Zt(e))), this.texturePool[r] || (this.texturePool[r] = []);
        var n = this.texturePool[r].pop();
        return n || (n = this.createTexture(t, e)), n.filterPoolKey = r, n.setResolution(i), n
    }, Ei.prototype.getFilterTexture = function(t, e) {
        var i = this.getOptimalTexture(t.width, t.height, e || t.resolution);
        return i.filterFrame = t.filterFrame, i
    }, Ei.prototype.returnTexture = function(t) {
        var e = t.filterPoolKey;
        t.filterFrame = null, this.texturePool[e].push(t)
    }, Ei.prototype.returnFilterTexture = function(t) {
        this.returnTexture(t)
    }, Ei.prototype.clear = function(t) {
        if (t = !1 !== t)
            for (var e in this.texturePool) {
                var i = this.texturePool[e];
                if (i)
                    for (var r = 0; r < i.length; r++) i[r].destroy(!0)
            }
        this.texturePool = {}
    }, Ei.prototype.setScreenSize = function(t) {
        if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
            var e = Ei.SCREEN_KEY,
                i = this.texturePool[e];
            if (this.enableFullScreen = t.width > 0 && t.height > 0, i)
                for (var r = 0; r < i.length; r++) i[r].destroy(!0);
            this.texturePool[e] = [], this._pixelsWidth = t.width, this._pixelsHeight = t.height
        }
    }, Ei.SCREEN_KEY = "screen";
    var Si = function(t, e, i, r, n, o, s) {
        void 0 === i && (i = !1), void 0 === r && (r = 5126), this.buffer = t, this.size = e, this.normalized = i, this.type = r, this.stride = n, this.start = o, this.instance = s
    };
    Si.prototype.destroy = function() {
        this.buffer = null
    }, Si.from = function(t, e, i, r, n) {
        return new Si(t, e, i, r, n)
    };
    var Ii = 0,
        Pi = function(t, e, i) {
            void 0 === e && (e = !0), void 0 === i && (i = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = e, this.id = Ii++, this.disposeRunner = new ze("disposeBuffer", 2)
        };

    function Ai(t) {
        if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";
        if (2 === t.BYTES_PER_ELEMENT) {
            if (t instanceof Uint16Array) return "Uint16Array"
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";
        return null
    }
    Pi.prototype.update = function(t) {
        this.data = t || this.data, this._updateID++
    }, Pi.prototype.dispose = function() {
        this.disposeRunner.run(this, !1)
    }, Pi.prototype.destroy = function() {
        this.dispose(), this.data = null
    }, Pi.from = function(t) {
        return t instanceof Array && (t = new Float32Array(t)), new Pi(t)
    };
    var Oi = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array
    };
    var Ci = {
            5126: 4,
            5123: 2,
            5121: 1
        },
        Mi = 0,
        Di = {
            Float32Array: Float32Array,
            Uint32Array: Uint32Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array
        },
        Ri = function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = Mi++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new ze("disposeGeometry", 2), this.refCount = 0
        };
    Ri.prototype.addAttribute = function(t, e, i, r, n, o, s, a) {
        if (void 0 === r && (r = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
        e.data || (e instanceof Array && (e = new Float32Array(e)), e = new Pi(e));
        var h = t.split("|");
        if (h.length > 1) {
            for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, i, r, n);
            return this
        }
        var l = this.buffers.indexOf(e);
        return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new Si(l, i, r, n, o, s, a), this.instanced = this.instanced || a, this
    }, Ri.prototype.getAttribute = function(t) {
        return this.attributes[t]
    }, Ri.prototype.getBuffer = function(t) {
        return this.buffers[this.getAttribute(t).buffer]
    }, Ri.prototype.addIndex = function(t) {
        return t.data || (t instanceof Array && (t = new Uint16Array(t)), t = new Pi(t)), t.index = !0, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this
    }, Ri.prototype.getIndex = function() {
        return this.indexBuffer
    }, Ri.prototype.interleave = function() {
        if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
        var t, e = [],
            i = [],
            r = new Pi;
        for (t in this.attributes) {
            var n = this.attributes[t],
                o = this.buffers[n.buffer];
            e.push(o.data), i.push(n.size * Ci[n.type] / 4), n.buffer = 0
        }
        for (r.data = function(t, e) {
                for (var i = 0, r = 0, n = {}, o = 0; o < t.length; o++) r += e[o], i += t[o].length;
                for (var s = new ArrayBuffer(4 * i), a = null, h = 0, u = 0; u < t.length; u++) {
                    var l = e[u],
                        c = t[u],
                        d = Ai(c);
                    n[d] || (n[d] = new Oi[d](s)), a = n[d];
                    for (var p = 0; p < c.length; p++) a[(p / l | 0) * r + h + p % l] = c[p];
                    h += l
                }
                return new Float32Array(s)
            }(e, i), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
        return this.buffers = [r], this.indexBuffer && this.buffers.push(this.indexBuffer), this
    }, Ri.prototype.getSize = function() {
        for (var t in this.attributes) {
            var e = this.attributes[t];
            return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
        }
        return 0
    }, Ri.prototype.dispose = function() {
        this.disposeRunner.run(this, !1)
    }, Ri.prototype.destroy = function() {
        this.dispose(), this.buffers = null, this.indexBuffer.destroy(), this.attributes = null
    }, Ri.prototype.clone = function() {
        for (var t = new Ri, e = 0; e < this.buffers.length; e++) t.buffers[e] = new Pi(this.buffers[e].data.slice());
        for (var i in this.attributes) {
            var r = this.attributes[i];
            t.attributes[i] = new Si(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance)
        }
        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.index = !0), t
    }, Ri.merge = function(t) {
        for (var e, i = new Ri, r = [], n = [], o = [], s = 0; s < t.length; s++) {
            e = t[s];
            for (var a = 0; a < e.buffers.length; a++) n[a] = n[a] || 0, n[a] += e.buffers[a].data.length, o[a] = 0
        }
        for (var h = 0; h < e.buffers.length; h++) r[h] = new(Di[Ai(e.buffers[h].data)])(n[h]), i.buffers[h] = new Pi(r[h]);
        for (var u = 0; u < t.length; u++) {
            e = t[u];
            for (var l = 0; l < e.buffers.length; l++) r[l].set(e.buffers[l].data, o[l]), o[l] += e.buffers[l].data.length
        }
        if (i.attributes = e.attributes, e.indexBuffer) {
            i.indexBuffer = i.buffers[e.buffers.indexOf(e.indexBuffer)], i.indexBuffer.index = !0;
            for (var c = 0, d = 0, p = 0, f = 0, v = 0; v < e.buffers.length; v++)
                if (e.buffers[v] !== e.indexBuffer) {
                    f = v;
                    break
                } for (var g in e.attributes) {
                var m = e.attributes[g];
                (0 | m.buffer) === f && (d += m.size * Ci[m.type] / 4)
            }
            for (var y = 0; y < t.length; y++) {
                for (var _ = t[y].indexBuffer.data, x = 0; x < _.length; x++) i.indexBuffer.data[x + p] += c;
                c += e.buffers[f].data.length / d, p += _.length
            }
        }
        return i
    };
    var Fi = function(t) {
            function e() {
                t.call(this), this.addAttribute("aVertexPosition", [0, 0, 1, 0, 1, 1, 0, 1]).addIndex([0, 1, 3, 2])
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Ri),
        Li = function(t) {
            function e() {
                t.call(this), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new Pi(this.vertices), this.uvBuffer = new Pi(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.map = function(t, e) {
                var i = 0,
                    r = 0;
                return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this.invalidate(), this
            }, e.prototype.invalidate = function() {
                return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
            }, e
        }(Ri),
        Ni = 0,
        Bi = function(t, e) {
            this.uniforms = t, this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Ni++, this.static = !!e
        };
    Bi.prototype.update = function() {
        this.dirtyId++
    }, Bi.prototype.add = function(t, e, i) {
        this.uniforms[t] = new Bi(e, i)
    }, Bi.from = function(t, e) {
        return new Bi(t, e)
    };
    var Ui = function() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.sourceFrame = new Ce, this.destinationFrame = new Ce, this.filters = []
    };
    Ui.prototype.clear = function() {
        this.target = null, this.filters = null, this.renderTexture = null
    };
    var ki = function(t) {
            function e(e) {
                t.call(this, e), this.defaultFilterStack = [{}], this.texturePool = new Ei, this.texturePool.setScreenSize(e.view), this.statePool = [], this.quad = new Fi, this.quadUv = new Li, this.tempRect = new Ce, this.activeState = {}, this.globalUniforms = new Bi({
                    outputFrame: this.tempRect,
                    inputSize: new Float32Array(4),
                    inputPixel: new Float32Array(4),
                    inputClamp: new Float32Array(4),
                    resolution: 1,
                    filterArea: new Float32Array(4),
                    filterClamp: new Float32Array(4)
                }, !0), this._pixelsWidth = e.view.width, this._pixelsHeight = e.view.height
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e) {
                for (var i = this.renderer, r = this.defaultFilterStack, n = this.statePool.pop() || new Ui, o = e[0].resolution, s = e[0].padding, a = e[0].autoFit, h = e[0].legacy, u = 1; u < e.length; u++) {
                    var l = e[u];
                    o = Math.min(o, l.resolution), s = Math.max(s, l.padding), a = a || l.autoFit, h = h || l.legacy
                }
                1 === r.length && (this.defaultFilterStack[0].renderTexture = i.renderTexture.current), r.push(n), n.resolution = o, n.legacy = h, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(s), a && n.sourceFrame.fit(this.renderer.renderTexture.sourceFrame), n.sourceFrame.ceil(o), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, o), n.filters = e, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height, n.renderTexture.filterFrame = n.sourceFrame, i.renderTexture.bind(n.renderTexture, n.sourceFrame), i.renderTexture.clear()
            }, e.prototype.pop = function() {
                var t = this.defaultFilterStack,
                    e = t.pop(),
                    i = e.filters;
                this.activeState = e;
                var r = this.globalUniforms.uniforms;
                r.outputFrame = e.sourceFrame, r.resolution = e.resolution;
                var n = r.inputSize,
                    o = r.inputPixel,
                    s = r.inputClamp;
                if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = n[0] * e.resolution, o[1] = n[1] * e.resolution, o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * n[2] - .5 * o[2], s[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
                    var a = r.filterArea;
                    a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp
                }
                this.globalUniforms.update();
                var h = t[t.length - 1];
                if (1 === i.length) i[0].apply(this, e.renderTexture, h.renderTexture, !1, e), this.returnFilterTexture(e.renderTexture);
                else {
                    var u = e.renderTexture,
                        l = this.getOptimalFilterTexture(u.width, u.height, e.resolution);
                    l.filterFrame = u.filterFrame;
                    var c = 0;
                    for (c = 0; c < i.length - 1; ++c) {
                        i[c].apply(this, u, l, !0, e);
                        var d = u;
                        u = l, l = d
                    }
                    i[c].apply(this, u, h.renderTexture, !1, e), this.returnFilterTexture(u), this.returnFilterTexture(l)
                }
                e.clear(), this.statePool.push(e)
            }, e.prototype.applyFilter = function(t, e, i, r) {
                var n = this.renderer;
                n.renderTexture.bind(i, i ? i.filterFrame : null), r && n.renderTexture.clear(), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.state.set(t.state), n.shader.bind(t), t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(Tt.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(Tt.TRIANGLE_STRIP))
            }, e.prototype.calculateSpriteMatrix = function(t, e) {
                var i = this.activeState,
                    r = i.sourceFrame,
                    n = i.destinationFrame,
                    o = e._texture.orig,
                    s = t.set(n.width, 0, 0, n.height, r.x, r.y),
                    a = e.worldTransform.copyTo(ye.TEMP_MATRIX);
                return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s
            }, e.prototype.destroy = function() {
                this.texturePool.clear(!1)
            }, e.prototype.getOptimalFilterTexture = function(t, e, i) {
                return void 0 === i && (i = 1), this.texturePool.getOptimalTexture(t, e, i)
            }, e.prototype.getFilterTexture = function(t, e) {
                if ("number" == typeof t) {
                    var i = t;
                    t = e, e = i
                }
                t = t || this.activeState.renderTexture;
                var r = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution);
                return r.filterFrame = t.filterFrame, r
            }, e.prototype.returnFilterTexture = function(t) {
                this.texturePool.returnTexture(t)
            }, e.prototype.emptyPool = function() {
                this.texturePool.clear(!0)
            }, e.prototype.resize = function() {
                this.texturePool.setScreenSize(this.renderer.view)
            }, e
        }(fi),
        Xi = function(t) {
            this.renderer = t
        };
    Xi.prototype.flush = function() {}, Xi.prototype.destroy = function() {
        this.renderer = null
    }, Xi.prototype.start = function() {}, Xi.prototype.stop = function() {
        this.flush()
    }, Xi.prototype.render = function(t) {};
    var ji = function(t) {
        function e(e) {
            t.call(this, e), this.emptyRenderer = new Xi(e), this.currentRenderer = this.emptyRenderer
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setObjectRenderer = function(t) {
            this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
        }, e.prototype.flush = function() {
            this.setObjectRenderer(this.emptyRenderer)
        }, e.prototype.reset = function() {
            this.setObjectRenderer(this.emptyRenderer)
        }, e
    }(fi);
    g.PREFER_ENV = v.any ? _t.WEBGL : _t.WEBGL2;
    var Gi = 0,
        Hi = function(t) {
            function e(e) {
                t.call(this, e), this.webGLVersion = 1, this.extensions = {}, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), e.view.addEventListener("webglcontextlost", this.handleContextLost, !1), e.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                isLost: {
                    configurable: !0
                }
            };
            return i.isLost.get = function() {
                return !this.gl || this.gl.isContextLost()
            }, e.prototype.contextChange = function(t) {
                this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = Gi++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext()
            }, e.prototype.initFromContext = function(t) {
                this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = Gi++, this.renderer.runners.contextChange.run(t)
            }, e.prototype.initFromOptions = function(t) {
                var e = this.createContext(this.renderer.view, t);
                this.initFromContext(e)
            }, e.prototype.createContext = function(t, e) {
                var i;
                if (g.PREFER_ENV >= _t.WEBGL2 && (i = t.getContext("webgl2", e)), i) this.webGLVersion = 2;
                else if (this.webGLVersion = 1, !(i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                return this.gl = i, this.getExtensions(), i
            }, e.prototype.getExtensions = function() {
                var t = this.gl;
                1 === this.webGLVersion ? Object.assign(this.extensions, {
                    drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                    depthTexture: t.getExtension("WEBKIT_WEBGL_depth_texture"),
                    loseContext: t.getExtension("WEBGL_lose_context"),
                    vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
                    anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                    uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                    floatTexture: t.getExtension("OES_texture_float"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: t.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
                }) : 2 === this.webGLVersion && Object.assign(this.extensions, {
                    anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
                    colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
                    floatTextureLinear: t.getExtension("OES_texture_float_linear")
                })
            }, e.prototype.handleContextLost = function(t) {
                t.preventDefault()
            }, e.prototype.handleContextRestored = function() {
                this.renderer.runners.contextChange.run(this.gl)
            }, e.prototype.destroy = function() {
                var t = this.renderer.view;
                t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
            }, e.prototype.postrender = function() {
                this.gl.flush()
            }, e.prototype.validateContext = function(t) {
                t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
            }, Object.defineProperties(e.prototype, i), e
        }(fi),
        zi = function(t) {
            function e(e) {
                t.call(this, e), this.managedFramebuffers = [], this.unknownFramebuffer = new gi(10, 10)
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                size: {
                    configurable: !0
                }
            };
            return e.prototype.contextChange = function() {
                var t = this.gl = this.renderer.gl;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new Ce, this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
                    var e = this.renderer.context.extensions.drawBuffers,
                        i = this.renderer.context.extensions.depthTexture;
                    g.PREFER_ENV === _t.WEBGL_LEGACY && (e = null, i = null), e ? t.drawBuffers = function(t) {
                        return e.drawBuffersWEBGL(t)
                    } : (this.hasMRT = !1, t.drawBuffers = function() {}), i || (this.writeDepthTexture = !1)
                }
            }, e.prototype.bind = function(t, e) {
                var i = this.gl;
                if (t) {
                    var r = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                    this.current !== t && (this.current = t, i.bindFramebuffer(i.FRAMEBUFFER, r.framebuffer)), r.dirtyId !== t.dirtyId && (r.dirtyId = t.dirtyId, r.dirtyFormat !== t.dirtyFormat ? (r.dirtyFormat = t.dirtyFormat, this.updateFramebuffer(t)) : r.dirtySize !== t.dirtySize && (r.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
                    for (var n = 0; n < t.colorTextures.length; n++) t.colorTextures[n].texturePart ? this.renderer.texture.unbind(t.colorTextures[n].texture) : this.renderer.texture.unbind(t.colorTextures[n]);
                    t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, t.width, t.height)
                } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
            }, e.prototype.setViewport = function(t, e, i, r) {
                var n = this.viewport;
                n.width === i && n.height === r && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = i, n.height = r, this.gl.viewport(t, e, i, r))
            }, i.size.get = function() {
                return this.current ? {
                    x: 0,
                    y: 0,
                    width: this.current.width,
                    height: this.current.height
                } : {
                    x: 0,
                    y: 0,
                    width: this.renderer.width,
                    height: this.renderer.height
                }
            }, e.prototype.clear = function(t, e, i, r) {
                var n = this.gl;
                n.clearColor(t, e, i, r), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
            }, e.prototype.initFramebuffer = function(t) {
                var e = {
                    framebuffer: this.gl.createFramebuffer(),
                    stencil: null,
                    dirtyId: 0,
                    dirtyFormat: 0,
                    dirtySize: 0
                };
                return t.glFramebuffers[this.CONTEXT_UID] = e, this.managedFramebuffers.push(t), t.disposeRunner.add(this), e
            }, e.prototype.resizeFramebuffer = function(t) {
                var e = this.gl,
                    i = t.glFramebuffers[this.CONTEXT_UID];
                i.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
                for (var r = t.colorTextures, n = 0; n < r.length; n++) this.renderer.texture.bind(r[n], 0);
                t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0)
            }, e.prototype.updateFramebuffer = function(t) {
                var e = this.gl,
                    i = t.glFramebuffers[this.CONTEXT_UID],
                    r = t.colorTextures.length;
                e.drawBuffers || (r = Math.min(r, 1));
                for (var n = [], o = 0; o < r; o++) {
                    var s = t.colorTextures[o];
                    s.texturePart ? (this.renderer.texture.bind(s.texture, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_CUBE_MAP_NEGATIVE_X + s.side, s.texture._glTextures[this.CONTEXT_UID].texture, 0)) : (this.renderer.texture.bind(s, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_2D, s._glTextures[this.CONTEXT_UID].texture, 0)), n.push(e.COLOR_ATTACHMENT0 + o)
                }
                if ((n.length > 1 && e.drawBuffers(n), t.depthTexture) && this.writeDepthTexture) {
                    var a = t.depthTexture;
                    this.renderer.texture.bind(a, 0), e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a._glTextures[this.CONTEXT_UID].texture, 0)
                }
                i.stencil || !t.stencil && !t.depth || (i.stencil = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, i.stencil), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height), t.depthTexture || e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, i.stencil))
            }, e.prototype.disposeFramebuffer = function(t, e) {
                var i = t.glFramebuffers[this.CONTEXT_UID],
                    r = this.gl;
                if (i) {
                    delete t.glFramebuffers[this.CONTEXT_UID];
                    var n = this.managedFramebuffers.indexOf(t);
                    n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (r.deleteFramebuffer(i.framebuffer), i.stencil && r.deleteRenderbuffer(i.stencil))
                }
            }, e.prototype.disposeAll = function(t) {
                var e = this.managedFramebuffers;
                this.managedFramebuffers = [];
                for (var i = 0; i < e.length; i++) this.disposeFramebuffer(e[i], t)
            }, e.prototype.forceStencil = function() {
                var t = this.current;
                if (t) {
                    var e = t.glFramebuffers[this.CONTEXT_UID];
                    if (e && !e.stencil) {
                        t.enableStencil();
                        var i = t.width,
                            r = t.height,
                            n = this.gl,
                            o = n.createRenderbuffer();
                        n.bindRenderbuffer(n.RENDERBUFFER, o), n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, i, r), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
                    }
                }
            }, e.prototype.reset = function() {
                this.current = this.unknownFramebuffer, this.viewport = new Ce
            }, Object.defineProperties(e.prototype, i), e
        }(fi),
        Vi = function(t) {
            this.buffer = t, this.updateID = -1, this.byteLength = -1, this.refCount = 0
        },
        Yi = {
            5126: 4,
            5123: 2,
            5121: 1
        },
        Wi = function(t) {
            function e(e) {
                t.call(this, e), this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.boundBuffers = {}, this.managedGeometries = {}, this.managedBuffers = {}
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function() {
                this.disposeAll(!0);
                var t = this.gl = this.renderer.gl,
                    e = this.renderer.context;
                if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, !t.createVertexArray) {
                    var i = this.renderer.context.extensions.vertexArrayObject;
                    g.PREFER_ENV === _t.WEBGL_LEGACY && (i = null), i ? (t.createVertexArray = function() {
                        return i.createVertexArrayOES()
                    }, t.bindVertexArray = function(t) {
                        return i.bindVertexArrayOES(t)
                    }, t.deleteVertexArray = function(t) {
                        return i.deleteVertexArrayOES(t)
                    }) : (this.hasVao = !1, t.createVertexArray = function() {}, t.bindVertexArray = function() {}, t.deleteVertexArray = function() {})
                }
                if (!t.vertexAttribDivisor) {
                    var r = t.getExtension("ANGLE_instanced_arrays");
                    r ? (t.vertexAttribDivisor = function(t, e) {
                        return r.vertexAttribDivisorANGLE(t, e)
                    }, t.drawElementsInstanced = function(t, e, i, n, o) {
                        return r.drawElementsInstancedANGLE(t, e, i, n, o)
                    }, t.drawArraysInstanced = function(t, e, i, n) {
                        return r.drawArraysInstancedANGLE(t, e, i, n)
                    }) : this.hasInstance = !1
                }
                this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex
            }, e.prototype.bind = function(t, e) {
                e = e || this.renderer.shader.shader;
                var i = this.gl,
                    r = t.glVertexArrayObjects[this.CONTEXT_UID];
                r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {});
                var n = r[e.program.id] || this.initGeometryVao(t, e.program);
                this._activeGeometry = t, this._activeVao !== n && (this._activeVao = n, this.hasVao ? i.bindVertexArray(n) : this.activateVao(t, e.program)), this.updateBuffers()
            }, e.prototype.reset = function() {
                this.unbind()
            }, e.prototype.updateBuffers = function() {
                for (var t = this._activeGeometry, e = this.gl, i = 0; i < t.buffers.length; i++) {
                    var r = t.buffers[i],
                        n = r._glBuffers[this.CONTEXT_UID];
                    if (r._updateID !== n.updateID) {
                        n.updateID = r._updateID;
                        var o = r.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                        if (e.bindBuffer(o, n.buffer), this._boundBuffer = n, n.byteLength >= r.data.byteLength) e.bufferSubData(o, 0, r.data);
                        else {
                            var s = r.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                            n.byteLength = r.data.byteLength, e.bufferData(o, r.data, s)
                        }
                    }
                }
            }, e.prototype.checkCompatibility = function(t, e) {
                var i = t.attributes,
                    r = e.attributeData;
                for (var n in r)
                    if (!i[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute')
            }, e.prototype.getSignature = function(t, e) {
                var i = t.attributes,
                    r = e.attributeData,
                    n = ["g", t.id];
                for (var o in i) r[o] && n.push(o);
                return n.join("-")
            }, e.prototype.initGeometryVao = function(t, e) {
                this.checkCompatibility(t, e);
                var i = this.gl,
                    r = this.CONTEXT_UID,
                    n = this.getSignature(t, e),
                    o = t.glVertexArrayObjects[this.CONTEXT_UID],
                    s = o[n];
                if (s) return o[e.id] = s, s;
                var a = t.buffers,
                    h = t.attributes,
                    u = {},
                    l = {};
                for (var c in a) u[c] = 0, l[c] = 0;
                for (var d in h) !h[d].size && e.attributeData[d] ? h[d].size = e.attributeData[d].size : h[d].size || console.warn("PIXI Geometry attribute '" + d + "' size cannot be determined (likely the bound shader does not have the attribute)"), u[h[d].buffer] += h[d].size * Yi[h[d].type];
                for (var p in h) {
                    var f = h[p],
                        v = f.size;
                    void 0 === f.stride && (u[f.buffer] === v * Yi[f.type] ? f.stride = 0 : f.stride = u[f.buffer]), void 0 === f.start && (f.start = l[f.buffer], l[f.buffer] += v * Yi[f.type])
                }
                s = i.createVertexArray(), i.bindVertexArray(s);
                for (var g = 0; g < a.length; g++) {
                    var m = a[g];
                    m._glBuffers[r] || (m._glBuffers[r] = new Vi(i.createBuffer()), this.managedBuffers[m.id] = m, m.disposeRunner.add(this)), m._glBuffers[r].refCount++
                }
                return this.activateVao(t, e), this._activeVao = s, o[e.id] = s, o[n] = s, s
            }, e.prototype.disposeBuffer = function(t, e) {
                if (this.managedBuffers[t.id]) {
                    delete this.managedBuffers[t.id];
                    var i = t._glBuffers[this.CONTEXT_UID],
                        r = this.gl;
                    t.disposeRunner.remove(this), i && (e || r.deleteBuffer(i.buffer), delete t._glBuffers[this.CONTEXT_UID])
                }
            }, e.prototype.disposeGeometry = function(t, e) {
                if (this.managedGeometries[t.id]) {
                    delete this.managedGeometries[t.id];
                    var i = t.glVertexArrayObjects[this.CONTEXT_UID],
                        r = this.gl,
                        n = t.buffers;
                    if (t.disposeRunner.remove(this), i) {
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o]._glBuffers[this.CONTEXT_UID];
                            s.refCount--, 0 !== s.refCount || e || this.disposeBuffer(n[o], e)
                        }
                        if (!e)
                            for (var a in i)
                                if ("g" === a[0]) {
                                    var h = i[a];
                                    this._activeVao === h && this.unbind(), r.deleteVertexArray(h)
                                } delete t.glVertexArrayObjects[this.CONTEXT_UID]
                    }
                }
            }, e.prototype.disposeAll = function(t) {
                for (var e = Object.keys(this.managedGeometries), i = 0; i < e.length; i++) this.disposeGeometry(this.managedGeometries[e[i]], t);
                e = Object.keys(this.managedBuffers);
                for (var r = 0; r < e.length; r++) this.disposeBuffer(this.managedBuffers[e[r]], t)
            }, e.prototype.activateVao = function(t, e) {
                var i = this.gl,
                    r = this.CONTEXT_UID,
                    n = t.buffers,
                    o = t.attributes;
                t.indexBuffer && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.indexBuffer._glBuffers[r].buffer);
                var s = null;
                for (var a in o) {
                    var h = o[a],
                        u = n[h.buffer]._glBuffers[r];
                    if (e.attributeData[a]) {
                        s !== u && (i.bindBuffer(i.ARRAY_BUFFER, u.buffer), s = u);
                        var l = e.attributeData[a].location;
                        if (i.enableVertexAttribArray(l), i.vertexAttribPointer(l, h.size, h.type || i.FLOAT, h.normalized, h.stride, h.start), h.instance) {
                            if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                            i.vertexAttribDivisor(l, 1)
                        }
                    }
                }
            }, e.prototype.draw = function(t, e, i, r) {
                var n = this.gl,
                    o = this._activeGeometry;
                if (o.indexBuffer) {
                    var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                        a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                    2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (i || 0) * s, r || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (i || 0) * s) : console.warn("unsupported index buffer type: uint32")
                } else o.instanced ? n.drawArraysInstanced(t, i, e || o.getSize(), r || 1) : n.drawArrays(t, i, e || o.getSize());
                return this
            }, e.prototype.unbind = function() {
                this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
            }, e
        }(fi);

    function qi(t, e, i, r) {
        var n = Zi(t, t.VERTEX_SHADER, e),
            o = Zi(t, t.FRAGMENT_SHADER, i),
            s = t.createProgram();
        if (t.attachShader(s, n), t.attachShader(s, o), r)
            for (var a in r) t.bindAttribLocation(s, r[a], a);
        return t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(s, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(s)), t.deleteProgram(s), s = null), t.deleteShader(n), t.deleteShader(o), s
    }

    function Zi(t, e, i) {
        var r = t.createShader(e);
        return t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.warn(i), console.error(t.getShaderInfoLog(r)), null)
    }

    function Ki(t, e) {
        switch (t) {
            case "float":
                return 0;
            case "vec2":
                return new Float32Array(2 * e);
            case "vec3":
                return new Float32Array(3 * e);
            case "vec4":
                return new Float32Array(4 * e);
            case "int":
            case "sampler2D":
            case "sampler2DArray":
                return 0;
            case "ivec2":
                return new Int32Array(2 * e);
            case "ivec3":
                return new Int32Array(3 * e);
            case "ivec4":
                return new Int32Array(4 * e);
            case "bool":
                return !1;
            case "bvec2":
                return Ji(2 * e);
            case "bvec3":
                return Ji(3 * e);
            case "bvec4":
                return Ji(4 * e);
            case "mat2":
                return new Float32Array([1, 0, 0, 1]);
            case "mat3":
                return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            case "mat4":
                return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
        }
        return null
    }

    function Ji(t) {
        for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
        return e
    }
    var Qi, $i = {},
        tr = $i;

    function er() {
        if (tr === $i || tr.isContextLost()) {
            var t, e = document.createElement("canvas");
            g.PREFER_ENV >= _t.WEBGL2 && (t = e.getContext("webgl2", {})), t || ((t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {})) ? t.getExtension("WEBGL_draw_buffers") : t = null), tr = t
        }
        return tr
    }

    function ir(t, e, i) {
        if ("precision" !== t.substring(0, 9)) {
            var r = e;
            return e === Ct.HIGH && i !== Ct.HIGH && (r = Ct.MEDIUM), "precision " + r + " float;\n" + t
        }
        return i !== Ct.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t
    }
    var rr = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1
    };

    function nr(t) {
        return rr[t]
    }
    var or = null,
        sr = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D",
            SAMPLER_CUBE: "samplerCube",
            SAMPLER_2D_ARRAY: "sampler2DArray"
        };

    function ar(t, e) {
        if (!or) {
            var i = Object.keys(sr);
            or = {};
            for (var r = 0; r < i.length; ++r) {
                var n = i[r];
                or[t[n]] = sr[n]
            }
        }
        return or[e]
    }
    var hr = {
            float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
            vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
            vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
            vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
            int: "gl.uniform1i(location, v)",
            ivec2: "gl.uniform2i(location, v[0], v[1])",
            ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            bool: "gl.uniform1i(location, v)",
            bvec2: "gl.uniform2i(location, v[0], v[1])",
            bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
            bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            sampler2D: "gl.uniform1i(location, v)",
            samplerCube: "gl.uniform1i(location, v)",
            sampler2DArray: "gl.uniform1i(location, v)"
        },
        ur = {
            float: "gl.uniform1fv(location, v)",
            vec2: "gl.uniform2fv(location, v)",
            vec3: "gl.uniform3fv(location, v)",
            vec4: "gl.uniform4fv(location, v)",
            mat4: "gl.uniformMatrix4fv(location, false, v)",
            mat3: "gl.uniformMatrix3fv(location, false, v)",
            mat2: "gl.uniformMatrix2fv(location, false, v)",
            int: "gl.uniform1iv(location, v)",
            ivec2: "gl.uniform2iv(location, v)",
            ivec3: "gl.uniform3iv(location, v)",
            ivec4: "gl.uniform4iv(location, v)",
            bool: "gl.uniform1iv(location, v)",
            bvec2: "gl.uniform2iv(location, v)",
            bvec3: "gl.uniform3iv(location, v)",
            bvec4: "gl.uniform4iv(location, v)",
            sampler2D: "gl.uniform1iv(location, v)",
            samplerCube: "gl.uniform1iv(location, v)",
            sampler2DArray: "gl.uniform1iv(location, v)"
        };
    var lr, cr = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

    function dr(t, e) {
        if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        for (var i = e.createShader(e.FRAGMENT_SHADER);;) {
            var r = cr.replace(/%forloop%/gi, pr(t));
            if (e.shaderSource(i, r), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) break;
            t = t / 2 | 0
        }
        return t
    }

    function pr(t) {
        for (var e = "", i = 0; i < t; ++i) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
        return e
    }
    var fr = 0,
        vr = {},
        gr = function t(e, i, r) {
            void 0 === r && (r = "pixi-shader"), this.id = fr++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = i || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (r = r.replace(/\s+/g, "-"), vr[r] ? (vr[r]++, r += "-" + vr[r]) : vr[r] = 1, this.vertexSrc = "#define SHADER_NAME " + r + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + r + "\n" + this.fragmentSrc, this.vertexSrc = ir(this.vertexSrc, g.PRECISION_VERTEX, Ct.HIGH), this.fragmentSrc = ir(this.fragmentSrc, g.PRECISION_FRAGMENT, function() {
                if (!Qi) {
                    Qi = Ct.MEDIUM;
                    var t = er();
                    if (t && t.getShaderPrecisionFormat) {
                        var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
                        Qi = e.precision ? Ct.HIGH : Ct.MEDIUM
                    }
                }
                return Qi
            }())), this.extractData(this.vertexSrc, this.fragmentSrc), this.glPrograms = {}, this.syncUniforms = null
        },
        mr = {
            defaultVertexSrc: {
                configurable: !0
            },
            defaultFragmentSrc: {
                configurable: !0
            }
        };
    gr.prototype.extractData = function(t, e) {
        var i = er();
        if (i) {
            var r = qi(i, t, e);
            this.attributeData = this.getAttributeData(r, i), this.uniformData = this.getUniformData(r, i), i.deleteProgram(r)
        } else this.uniformData = {}, this.attributeData = {}
    }, gr.prototype.getAttributeData = function(t, e) {
        for (var i = {}, r = [], n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; o < n; o++) {
            var s = e.getActiveAttrib(t, o),
                a = ar(e, s.type),
                h = {
                    type: a,
                    name: s.name,
                    size: nr(a),
                    location: 0
                };
            i[s.name] = h, r.push(h)
        }
        r.sort(function(t, e) {
            return t.name > e.name ? 1 : -1
        });
        for (var u = 0; u < r.length; u++) r[u].location = u;
        return i
    }, gr.prototype.getUniformData = function(t, e) {
        for (var i = {}, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < r; n++) {
            var o = e.getActiveUniform(t, n),
                s = o.name.replace(/\[.*?\]/, ""),
                a = o.name.match(/\[.*?\]/, ""),
                h = ar(e, o.type);
            i[s] = {
                type: h,
                size: o.size,
                isArray: a,
                value: Ki(h, o.size)
            }
        }
        return i
    }, mr.defaultVertexSrc.get = function() {
        return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
    }, mr.defaultFragmentSrc.get = function() {
        return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
    }, gr.from = function(t, e, i) {
        var r = t + e,
            n = Qt[r];
        return n || (Qt[r] = n = new gr(t, e, i)), n
    }, Object.defineProperties(gr, mr);
    var yr = function(t, e) {
            for (var i in this.program = t, this.uniformGroup = e ? e instanceof Bi ? e : new Bi(e) : new Bi({}), t.uniformData) this.uniformGroup.uniforms[i] instanceof Array && (this.uniformGroup.uniforms[i] = new Float32Array(this.uniformGroup.uniforms[i]))
        },
        _r = {
            uniforms: {
                configurable: !0
            }
        };
    yr.prototype.checkUniformExists = function(t, e) {
        if (e.uniforms[t]) return !0;
        for (var i in e.uniforms) {
            var r = e.uniforms[i];
            if (r.group && this.checkUniformExists(t, r)) return !0
        }
        return !1
    }, yr.prototype.destroy = function() {
        this.uniformGroup = null
    }, _r.uniforms.get = function() {
        return this.uniformGroup.uniforms
    }, yr.from = function(t, e, i) {
        var r = gr.from(t, e);
        return new yr(r, i)
    }, Object.defineProperties(yr.prototype, _r);
    var xr = function() {
            this.data = 0, this.blendMode = bt.NORMAL, this.polygonOffset = 0, this.blend = !0
        },
        br = {
            blend: {
                configurable: !0
            },
            offsets: {
                configurable: !0
            },
            culling: {
                configurable: !0
            },
            depthTest: {
                configurable: !0
            },
            clockwiseFrontFace: {
                configurable: !0
            },
            blendMode: {
                configurable: !0
            },
            polygonOffset: {
                configurable: !0
            }
        };
    br.blend.get = function() {
        return !!(1 & this.data)
    }, br.blend.set = function(t) {
        !!(1 & this.data) !== t && (this.data ^= 1)
    }, br.offsets.get = function() {
        return !!(2 & this.data)
    }, br.offsets.set = function(t) {
        !!(2 & this.data) !== t && (this.data ^= 2)
    }, br.culling.get = function() {
        return !!(4 & this.data)
    }, br.culling.set = function(t) {
        !!(4 & this.data) !== t && (this.data ^= 4)
    }, br.depthTest.get = function() {
        return !!(8 & this.data)
    }, br.depthTest.set = function(t) {
        !!(8 & this.data) !== t && (this.data ^= 8)
    }, br.clockwiseFrontFace.get = function() {
        return !!(16 & this.data)
    }, br.clockwiseFrontFace.set = function(t) {
        !!(16 & this.data) !== t && (this.data ^= 16)
    }, br.blendMode.get = function() {
        return this._blendMode
    }, br.blendMode.set = function(t) {
        this.blend = t !== bt.NONE, this._blendMode = t
    }, br.polygonOffset.get = function() {
        return this._polygonOffset
    }, br.polygonOffset.set = function(t) {
        this.offsets = !!t, this._polygonOffset = t
    }, xr.for2d = function() {
        var t = new xr;
        return t.depthTest = !1, t.blend = !0, t
    }, Object.defineProperties(xr.prototype, br);
    var Tr = function(t) {
        function e(i, r, n) {
            var o = gr.from(i || e.defaultVertexSrc, r || e.defaultFragmentSrc);
            t.call(this, o, n), this.padding = 0, this.resolution = g.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0, this.legacy = !!this.program.attributeData.aTextureCoord, this.state = new xr
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
                blendMode: {
                    configurable: !0
                }
            },
            r = {
                defaultVertexSrc: {
                    configurable: !0
                },
                defaultFragmentSrc: {
                    configurable: !0
                }
            };
        return e.prototype.apply = function(t, e, i, r, n) {
            t.applyFilter(this, e, i, r, n)
        }, i.blendMode.get = function() {
            return this.state.blendMode
        }, i.blendMode.set = function(t) {
            this.state.blendMode = t
        }, r.defaultVertexSrc.get = function() {
            return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
        }, r.defaultFragmentSrc.get = function() {
            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
        }, Object.defineProperties(e.prototype, i), Object.defineProperties(e, r), e
    }(yr);
    Tr.SOURCE_KEY_MAP = {};
    var wr = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
        Er = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
        Sr = new ye,
        Ir = function(t, e) {
            this._texture = t, this.mapCoord = new ye, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._updateID = -1, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1
        },
        Pr = {
            texture: {
                configurable: !0
            }
        };
    Pr.texture.get = function() {
        return this._texture
    }, Pr.texture.set = function(t) {
        this._texture = t, this._updateID = -1
    }, Ir.prototype.multiplyUvs = function(t, e) {
        void 0 === e && (e = t);
        for (var i = this.mapCoord, r = 0; r < t.length; r += 2) {
            var n = t[r],
                o = t[r + 1];
            e[r] = n * i.a + o * i.c + i.tx, e[r + 1] = n * i.b + o * i.d + i.ty
        }
        return e
    }, Ir.prototype.update = function(t) {
        var e = this._texture;
        if (!e || !e.valid) return !1;
        if (!t && this._updateID === e._updateID) return !1;
        this._updateID = e._updateID;
        var i = e._uvs;
        this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
        var r = e.orig,
            n = e.trim;
        n && (Sr.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Sr));
        var o = e.baseTexture,
            s = this.uClampFrame,
            a = this.clampMargin / o.resolution,
            h = this.clampOffset;
        return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0
    }, Object.defineProperties(Ir.prototype, Pr);
    var Ar = function(t) {
            function e(e) {
                var i = new ye;
                t.call(this, wr, Er), e.renderable = !1, this.maskSprite = e, this.maskMatrix = i
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.apply = function(t, e, i, r) {
                var n = this.maskSprite,
                    o = this.maskSprite.texture;
                o.valid && (o.transform || (o.transform = new Ir(o, 0)), o.transform.update(), this.uniforms.npmAlpha = o.baseTexture.premultiplyAlpha ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.transform.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.transform.uClampFrame, t.applyFilter(this, e, i, r))
            }, e
        }(Tr),
        Or = function(t) {
            function e(e) {
                t.call(this, e), this.scissor = !1, this.scissorData = null, this.scissorRenderTarget = null, this.enableScissor = !1, this.alphaMaskPool = [], this.alphaMaskIndex = 0
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.push = function(t, e) {
                if (e.isSprite) this.pushSpriteMask(t, e);
                else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencil.stencilMaskStack.length && e.isFastRect()) {
                    var i = e.worldTransform,
                        r = Math.atan2(i.b, i.a);
                    (r = Math.round(r * (180 / Math.PI))) % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
                } else this.pushStencilMask(e)
            }, e.prototype.pop = function(t, e) {
                e.isSprite ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencil.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
            }, e.prototype.pushSpriteMask = function(t, e) {
                var i = this.alphaMaskPool[this.alphaMaskIndex];
                i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new Ar(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e;
                var r = t.filterArea;
                t.filterArea = e.getBounds(!0), this.renderer.filter.push(t, i), t.filterArea = r, this.alphaMaskIndex++
            }, e.prototype.popSpriteMask = function() {
                this.renderer.filter.pop(), this.alphaMaskIndex--
            }, e.prototype.pushStencilMask = function(t) {
                this.renderer.batch.flush(), this.renderer.stencil.pushStencil(t)
            }, e.prototype.popStencilMask = function() {
                this.renderer.stencil.popStencil()
            }, e.prototype.pushScissorMask = function(t, e) {
                e.renderable = !0;
                var i = this.renderer._activeRenderTarget,
                    r = e.getBounds();
                r.fit(i.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                var n = this.renderer.resolution;
                this.renderer.gl.scissor(r.x * n, (i.root ? i.size.height - r.y - r.height : r.y) * n, r.width * n, r.height * n), this.scissorRenderTarget = i, this.scissorData = e, this.scissor = !0
            }, e.prototype.popScissorMask = function() {
                this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                var t = this.renderer.gl;
                t.disable(t.SCISSOR_TEST)
            }, e
        }(fi),
        Cr = function(t) {
            function e(e) {
                t.call(this, e), this.stencilMaskStack = []
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setMaskStack = function(t) {
                var e = this.renderer.gl,
                    i = this.stencilMaskStack.length;
                this.stencilMaskStack = t, t.length !== i && (0 === t.length ? e.disable(e.STENCIL_TEST) : (e.enable(e.STENCIL_TEST), this._useCurrent()))
            }, e.prototype.pushStencil = function(t) {
                var e = this.renderer.gl,
                    i = this.stencilMaskStack.length;
                0 === i && (this.renderer.framebuffer.forceStencil(), e.enable(e.STENCIL_TEST)), this.stencilMaskStack.push(t), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.EQUAL, i, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.INCR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent()
            }, e.prototype.popStencil = function() {
                var t = this.renderer.gl,
                    e = this.stencilMaskStack.pop();
                0 === this.stencilMaskStack.length ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent())
            }, e.prototype._useCurrent = function() {
                var t = this.renderer.gl;
                t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
            }, e.prototype._getBitwiseMask = function() {
                return (1 << this.stencilMaskStack.length) - 1
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this, this), this.stencilMaskStack = null
            }, e
        }(fi),
        Mr = function(t) {
            function e(e) {
                t.call(this, e), this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new ye, this.transform = null
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.update = function(t, e, i, r) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, r), this.transform && this.projectionMatrix.append(this.transform);
                var n = this.renderer;
                n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
            }, e.prototype.calculateProjection = function(t, e, i, r) {
                var n = this.projectionMatrix;
                r ? (n.a = 1 / t.width * 2 * i, n.d = -1 / t.height * 2 * i, n.tx = -1 - e.x * n.a, n.ty = 1 - e.y * n.d) : (n.a = 1 / t.width * 2 * i, n.d = 1 / t.height * 2 * i, n.tx = -1 - e.x * n.a, n.ty = -1 - e.y * n.d)
            }, e.prototype.setTransform = function() {}, e
        }(fi),
        Dr = new Ce,
        Rr = function(t) {
            function e(e) {
                t.call(this, e), this.clearColor = e._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new Ce, this.destinationFrame = new Ce
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.bind = function(t, e, i) {
                void 0 === t && (t = null), this.current = t;
                var r, n = this.renderer;
                if (t) {
                    var o = t.baseTexture;
                    r = o.resolution, i || (Dr.width = o.realWidth, Dr.height = o.realHeight, i = Dr), e || (e = i), this.renderer.framebuffer.bind(o.framebuffer, i), this.renderer.projection.update(i, e, r, !1), this.renderer.stencil.setMaskStack(o.stencilMaskStack)
                } else r = this.renderer.resolution, i || (Dr.width = n.width, Dr.height = n.height, i = Dr), e || (e = i), n.framebuffer.bind(null, i), this.renderer.projection.update(i, e, r, !0), this.renderer.stencil.setMaskStack(this.defaultMaskStack);
                this.sourceFrame.copyFrom(e), this.destinationFrame.x = i.x / r, this.destinationFrame.y = i.y / r, this.destinationFrame.width = i.width / r, this.destinationFrame.height = i.height / r, e === i && this.sourceFrame.copyFrom(this.destinationFrame)
            }, e.prototype.clear = function(t) {
                t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor, this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3])
            }, e.prototype.resize = function() {
                this.bind(null)
            }, e.prototype.reset = function() {
                this.bind(null)
            }, e
        }(fi),
        Fr = function(t, e) {
            this.program = t, this.uniformData = e, this.uniformGroups = {}
        };
    Fr.prototype.destroy = function() {
        this.uniformData = null, this.uniformGroups = null, this.program = null
    };
    var Lr = 0,
        Nr = function(t) {
            function e(e) {
                t.call(this, e), this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this.id = Lr++
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.systemCheck = function() {
                if (! function() {
                        if ("boolean" == typeof lr) return lr;
                        try {
                            var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                            lr = !0 === t({
                                a: "b"
                            }, "a", "b")
                        } catch (t) {
                            lr = !1
                        }
                        return lr
                    }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
            }, e.prototype.contextChange = function(t) {
                this.gl = t, this.reset()
            }, e.prototype.bind = function(t, e) {
                t.uniforms.globals = this.renderer.globalUniforms;
                var i = t.program,
                    r = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(t);
                return this.shader = t, this.program !== i && (this.program = i, this.gl.useProgram(r.program)), e || this.syncUniformGroup(t.uniformGroup), r
            }, e.prototype.setUniforms = function(t) {
                var e = this.shader.program,
                    i = e.glPrograms[this.renderer.CONTEXT_UID];
                e.syncUniforms(i.uniformData, t, this.renderer)
            }, e.prototype.syncUniformGroup = function(t) {
                var e = this.getglProgram();
                t.static && t.dirtyId === e.uniformGroups[t.id] || (e.uniformGroups[t.id] = t.dirtyId, this.syncUniforms(t, e))
            }, e.prototype.syncUniforms = function(t, e) {
                (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer)
            }, e.prototype.createSyncGroups = function(t) {
                var e = this.getSignature(t, this.shader.program.uniformData);
                return this.cache[e] || (this.cache[e] = function(t, e) {
                    var i = 0,
                        r = "var v = null;\n    var cv = null\n    var gl = renderer.gl";
                    for (var n in t.uniforms) {
                        var o = e[n];
                        o ? "float" === o.type && 1 === o.size ? r += "\n            if(uv." + n + " !== ud." + n + ".value)\n            {\n                ud." + n + ".value = uv." + n + "\n                gl.uniform1f(ud." + n + ".location, uv." + n + ")\n            }\n" : "sampler2D" !== o.type && "samplerCube" !== o.type && "sampler2DArray" !== o.type || 1 !== o.size || o.isArray ? "mat3" === o.type && 1 === o.size ? void 0 !== t.uniforms[n].a ? r += "\n                gl.uniformMatrix3fv(ud." + n + ".location, false, uv." + n + ".toArray(true));\n                \n" : r += "\n                gl.uniformMatrix3fv(ud." + n + ".location, false, uv." + n + ");\n                \n" : "vec2" === o.type && 1 === o.size ? void 0 !== t.uniforms[n].x ? r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud." + n + ".location, v.x, v.y);\n                }\n" : r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud." + n + ".location, v[0], v[1]);\n                }\n                \n" : "vec4" === o.type && 1 === o.size ? void 0 !== t.uniforms[n].width ? r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud." + n + ".location, v.x, v.y, v.width, v.height)\n                }\n" : r += "\n                cv = ud." + n + ".value;\n                v = uv." + n + ";\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud." + n + ".location, v[0], v[1], v[2], v[3])\n                }\n                \n" : r += "\n            cv = ud." + n + ".value;\n            v = uv." + n + ";\n            " + (1 === o.size ? hr : ur)[o.type].replace("location", "ud." + n + ".location") + ";\n" : (r += "\n            renderer.texture.bind(uv." + n + ", " + i + ");\n\n            if(ud." + n + ".value !== " + i + ")\n            {\n                ud." + n + ".value = " + i + ";\n                gl.uniform1i(ud." + n + ".location, " + i + ");\n; // eslint-disable-line max-len\n            }\n", i++) : t.uniforms[n].group && (r += "\n                    renderer.shader.syncUniformGroup(uv." + n + ");\n                ")
                    }
                    return new Function("ud", "uv", "renderer", r)
                }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
            }, e.prototype.getSignature = function(t, e) {
                var i = t.uniforms,
                    r = [];
                for (var n in i) r.push(n), e[n] && r.push(e[n].type);
                return r.join("-")
            }, e.prototype.getglProgram = function() {
                return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
            }, e.prototype.generateShader = function(t) {
                var e = this.gl,
                    i = t.program,
                    r = {};
                for (var n in i.attributeData) r[n] = i.attributeData[n].location;
                var o = qi(e, i.vertexSrc, i.fragmentSrc, r),
                    s = {};
                for (var a in i.uniformData) {
                    var h = i.uniformData[a];
                    s[a] = {
                        location: e.getUniformLocation(o, a),
                        value: Ki(h.type, h.size)
                    }
                }
                var u = new Fr(o, s);
                return i.glPrograms[this.renderer.CONTEXT_UID] = u, u
            }, e.prototype.reset = function() {
                this.program = null, this.shader = null
            }, e.prototype.destroy = function() {
                this.destroyed = !0
            }, e
        }(fi);
    var Br = 0,
        Ur = 1,
        kr = 2,
        Xr = 3,
        jr = 4,
        Gr = function(t) {
            function e(e) {
                t.call(this, e), this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = bt.NONE, this._blendEq = !1, this.map = [], this.map[Br] = this.setBlend, this.map[Ur] = this.setOffset, this.map[kr] = this.setCullFace, this.map[Xr] = this.setDepthTest, this.map[jr] = this.setFrontFace, this.checks = [], this.defaultState = new xr, this.defaultState.blend = !0, this.defaultState.depth = !0
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function(t) {
                this.gl = t, this.blendModes = function(t, e) {
                    return void 0 === e && (e = []), e[bt.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.ADD] = [t.ONE, t.ONE], e[bt.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.NONE] = [0, 0], e[bt.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[bt.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[bt.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[bt.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[bt.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[bt.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[bt.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[bt.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[bt.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[bt.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e
                }(t), this.set(this.defaultState), this.reset()
            }, e.prototype.set = function(t) {
                if (t = t || this.defaultState, this.stateId !== t.data) {
                    for (var e = this.stateId ^ t.data, i = 0; e;) 1 & e && this.map[i].call(this, !!(t.data & 1 << i)), e >>= 1, i++;
                    this.stateId = t.data
                }
                for (var r = 0; r < this.checks.length; r++) this.checks[r](this, t)
            }, e.prototype.forceState = function(t) {
                t = t || this.defaultState;
                for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
                for (var i = 0; i < this.checks.length; i++) this.checks[i](this, t);
                this.stateId = t.data
            }, e.prototype.setBlend = function(t) {
                this.updateCheck(e.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND)
            }, e.prototype.setOffset = function(t) {
                this.updateCheck(e.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
            }, e.prototype.setDepthTest = function(t) {
                this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
            }, e.prototype.setCullFace = function(t) {
                this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
            }, e.prototype.setFrontFace = function(t) {
                this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
            }, e.prototype.setBlendMode = function(t) {
                if (t !== this.blendMode) {
                    this.blendMode = t;
                    var e = this.blendModes[t],
                        i = this.gl;
                    2 === e.length ? i.blendFunc(e[0], e[1]) : i.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, i.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD))
                }
            }, e.prototype.setPolygonOffset = function(t, e) {
                this.gl.polygonOffset(t, e)
            }, e.prototype.reset = function() {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(0), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
            }, e.prototype.updateCheck = function(t, e) {
                var i = this.checks.indexOf(t);
                e && -1 === i ? this.checks.push(t) : e || -1 === i || this.checks.splice(i, 1)
            }, e.checkBlendMode = function(t, e) {
                t.setBlendMode(e.blendMode)
            }, e.checkPolygonOffset = function(t, e) {
                t.setPolygonOffset(e.polygonOffset, 0)
            }, e
        }(fi),
        Hr = function(t) {
            function e(e) {
                t.call(this, e), this.count = 0, this.checkCount = 0, this.maxIdle = g.GC_MAX_IDLE, this.checkCountMax = g.GC_MAX_CHECK_COUNT, this.mode = g.GC_MODE
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.postrender = function() {
                this.count++, this.mode !== Ot.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
            }, e.prototype.run = function() {
                for (var t = this.renderer.texture, e = t.managedTextures, i = !1, r = 0; r < e.length; r++) {
                    var n = e[r];
                    !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[r] = null, i = !0)
                }
                if (i) {
                    for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
                    e.length = o
                }
            }, e.prototype.unload = function(t) {
                var e = this.renderer.textureSystem;
                t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture);
                for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i])
            }, e
        }(fi),
        zr = function(t) {
            this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = 6408, this.internalFormat = 5121
        },
        Vr = function(t) {
            function e(e) {
                t.call(this, e), this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new si
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function() {
                var t = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion;
                var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                this.boundTextures.length = e;
                for (var i = 0; i < e; i++) this.boundTextures[i] = null;
                this.emptyTextures = {};
                var r = new zr(t.createTexture());
                t.bindTexture(t.TEXTURE_2D, r.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = r, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new zr(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
                for (var n = 0; n < 6; n++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
                for (var o = 0; o < this.boundTextures.length; o++) this.bind(null, o)
            }, e.prototype.bind = function(t, e) {
                void 0 === e && (e = 0);
                var i = this.gl;
                if (t) {
                    if ((t = t.baseTexture || t).valid) {
                        t.touched = this.renderer.textureGC.count;
                        var r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                        this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), this.boundTextures[e] !== t && i.bindTexture(t.target, r.texture), r.dirtyId !== t.dirtyId && this.updateTexture(t), this.boundTextures[e] = t
                    }
                } else this.currentLocation !== e && (this.currentLocation = e, i.activeTexture(i.TEXTURE0 + e)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[e] = null
            }, e.prototype.reset = function() {
                this._unknownBoundTextures = !0, this.currentLocation = -1;
                for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
            }, e.prototype.unbind = function(t) {
                var e = this.gl,
                    i = this.boundTextures;
                if (this._unknownBoundTextures) {
                    this._unknownBoundTextures = !1;
                    for (var r = 0; r < i.length; r++) i[r] === this.unknownTexture && this.bind(null, r)
                }
                for (var n = 0; n < i.length; n++) i[n] === t && (this.currentLocation !== n && (e.activeTexture(e.TEXTURE0 + n), this.currentLocation = n), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[t.target].texture), i[n] = null)
            }, e.prototype.initTexture = function(t) {
                var e = new zr(this.gl.createTexture());
                return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
            }, e.prototype.initTextureType = function(t, e) {
                if (e.internalFormat = t.format, e.type = t.type, 2 === this.webGLVersion) {
                    var i = this.renderer.gl;
                    t.type === i.FLOAT && t.format === i.RGBA && (e.internalFormat = i.RGBA32F), t.type === St.HALF_FLOAT && (e.type = i.HALF_FLOAT), e.type === i.HALF_FLOAT && t.format === i.RGBA && (e.internalFormat = i.RGBA16F)
                }
            }, e.prototype.updateTexture = function(t) {
                var e = t._glTextures[this.CONTEXT_UID];
                if (e) {
                    var i = this.renderer;
                    if (this.initTextureType(t, e), t.resource && t.resource.upload(i, t, e));
                    else {
                        var r = t.realWidth,
                            n = t.realHeight,
                            o = i.gl;
                        (e.width !== r || e.height !== n || e.dirtyId < 0) && (e.width = r, e.height = n, o.texImage2D(t.target, 0, e.internalFormat, r, n, 0, t.format, e.type, null))
                    }
                    t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId
                }
            }, e.prototype.destroyTexture = function(t, e) {
                var i = this.gl;
                if ((t = t.baseTexture || t)._glTextures[this.CONTEXT_UID] && (this.unbind(t), i.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
                    var r = this.managedTextures.indexOf(t); - 1 !== r && Vt(this.managedTextures, r, 1)
                }
            }, e.prototype.updateTextureStyle = function(t) {
                var e = t._glTextures[this.CONTEXT_UID];
                e && (t.mipmap !== At.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? (e.mipmap = t.mipmap >= 1, e.wrapMode = t.wrapMode) : (e.mipmap = 0, e.wrapMode = Pt.CLAMP), t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId)
            }, e.prototype.setStyle = function(t, e) {
                var i = this.gl;
                if (e.mipmap && i.generateMipmap(t.target), i.texParameteri(t.target, i.TEXTURE_WRAP_S, e.wrapMode), i.texParameteri(t.target, i.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
                    i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
                    var r = this.renderer.context.extensions.anisotropicFiltering;
                    if (r && t.anisotropicLevel > 0 && t.scaleMode === It.LINEAR) {
                        var n = Math.min(t.anisotropicLevel, i.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                        i.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n)
                    }
                } else i.texParameteri(t.target, i.TEXTURE_MIN_FILTER, t.scaleMode ? i.LINEAR : i.NEAREST);
                i.texParameteri(t.target, i.TEXTURE_MAG_FILTER, t.scaleMode ? i.LINEAR : i.NEAREST)
            }, e
        }(fi),
        Yr = {
            FilterSystem: ki,
            BatchSystem: ji,
            ContextSystem: Hi,
            FramebufferSystem: zi,
            GeometrySystem: Wi,
            MaskSystem: Or,
            StencilSystem: Cr,
            ProjectionSystem: Mr,
            RenderTextureSystem: Rr,
            ShaderSystem: Nr,
            StateSystem: Gr,
            TextureGCSystem: Hr,
            TextureSystem: Vr
        },
        Wr = new ye,
        qr = function(t) {
            function e(e, i) {
                t.call(this), (i = Object.assign({}, g.RENDER_OPTIONS, i)).roundPixels && (g.ROUND_PIXELS = i.roundPixels, ue("5.0.0", "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS", 2)), this.options = i, this.type = xt.UNKNOWN, this.screen = new Ce(0, 0, i.width, i.height), this.view = i.view || document.createElement("canvas"), this.resolution = i.resolution || g.RESOLUTION, this.transparent = i.transparent, this.autoDensity = i.autoDensity || i.autoResize || !1, this.preserveDrawingBuffer = i.preserveDrawingBuffer, this.clearBeforeRender = i.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = i.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = new Xe, this._lastObjectRendered = this._tempDisplayObjectParent, this.plugins = {}
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                backgroundColor: {
                    configurable: !0
                }
            };
            return e.prototype.initPlugins = function(t) {
                for (var e in t) this.plugins[e] = new t[e](this)
            }, i.width.get = function() {
                return this.view.width
            }, i.height.get = function() {
                return this.view.height
            }, e.prototype.resize = function(t, e) {
                this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoDensity && (this.view.style.width = t + "px", this.view.style.height = e + "px")
            }, e.prototype.generateTexture = function(t, e, i, r) {
                0 === (r = r || t.getLocalBounds()).width && (r.width = 1), 0 === r.height && (r.height = 1);
                var n = wi.create(0 | r.width, 0 | r.height, e, i);
                return Wr.tx = -r.x, Wr.ty = -r.y, this.render(t, n, !1, Wr, !!t.parent), n
            }, e.prototype.destroy = function(t) {
                for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
                t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.plugins = null, this.type = xt.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoDensity = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
            }, i.backgroundColor.get = function() {
                return this._backgroundColor
            }, i.backgroundColor.set = function(t) {
                this._backgroundColor = t, this._backgroundColorString = Bt(t), Nt(t, this._backgroundColorRgba)
            }, Object.defineProperties(e.prototype, i), e
        }(m),
        Zr = function(t) {
            function e(i) {
                void 0 === i && (i = {}), t.call(this, "WebGL", i), i = this.options, this.type = xt.WEBGL, this.gl = null, this.CONTEXT_UID = 0, this.runners = {
                    destroy: new ze("destroy"),
                    contextChange: new ze("contextChange", 1),
                    reset: new ze("reset"),
                    update: new ze("update"),
                    postrender: new ze("postrender"),
                    prerender: new ze("prerender"),
                    resize: new ze("resize", 2)
                }, this.globalUniforms = new Bi({
                    projectionMatrix: new ye
                }, !0), this.addSystem(Or, "mask").addSystem(Hi, "context").addSystem(Gr, "state").addSystem(Nr, "shader").addSystem(Vr, "texture").addSystem(Wi, "geometry").addSystem(zi, "framebuffer").addSystem(Cr, "stencil").addSystem(Mr, "projection").addSystem(Hr, "textureGC").addSystem(ki, "filter").addSystem(Rr, "renderTexture").addSystem(ji, "batch"), this.initPlugins(e.__plugins), i.context ? this.context.initFromContext(i.context) : this.context.initFromOptions({
                    alpha: this.transparent,
                    antialias: i.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: i.preserveDrawingBuffer,
                    powerPreference: this.options.powerPreference
                }), this.renderingToScreen = !0, Ft(2 === this.context.webGLVersion ? "WebGL 2" : "WebGL 1"), this.resize(this.options.width, this.options.height)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.create = function(t) {
                if (Lt()) return new e(t);
                throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')
            }, e.prototype.addSystem = function(t, e) {
                e || (e = t.name);
                var i = new t(this);
                if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');
                for (var r in this[e] = i, this.runners) this.runners[r].add(i);
                return this
            }, e.prototype.render = function(t, e, i, r, n) {
                if (this.renderingToScreen = !e, this.runners.prerender.run(), this.emit("prerender"), this.projection.transform = r, !this.context.isLost) {
                    if (e || (this._lastObjectRendered = t), !n) {
                        var o = t.parent;
                        t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
                    }
                    this.renderTexture.bind(e), this.batch.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), e && e.baseTexture.update(), this.runners.postrender.run(), this.projection.transform = null, this.emit("postrender")
                }
            }, e.prototype.resize = function(e, i) {
                t.prototype.resize.call(this, e, i), this.runners.resize.run(e, i)
            }, e.prototype.reset = function() {
                return this.runners.reset.run(), this
            }, e.prototype.clear = function() {
                this.framebuffer.bind(), this.framebuffer.clear()
            }, e.prototype.destroy = function(e) {
                for (var i in this.runners.destroy.run(), this.runners) this.runners[i].destroy();
                t.prototype.destroy.call(this, e), this.gl = null
            }, e.registerPlugin = function(t, i) {
                e.__plugins = e.__plugins || {}, e.__plugins[t] = i
            }, e
        }(qr);

    function Kr(t) {
        return Zr.create(t)
    }
    var Jr = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        Qr = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        $r = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.from = function(t, i) {
                return new e(new ui(t, i))
            }, e
        }(si),
        tn = function() {
            this.textures = [], this.ids = [], this.blend = 0, this.textureCount = 0, this.start = 0, this.size = 0, this.type = 4
        },
        en = function(t) {
            this.rawBinaryData = new ArrayBuffer(t), this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
        },
        rn = {
            int8View: {
                configurable: !0
            },
            uint8View: {
                configurable: !0
            },
            int16View: {
                configurable: !0
            },
            uint16View: {
                configurable: !0
            },
            int32View: {
                configurable: !0
            }
        };
    rn.int8View.get = function() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
    }, rn.uint8View.get = function() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
    }, rn.int16View.get = function() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
    }, rn.uint16View.get = function() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
    }, rn.int32View.get = function() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
    }, en.prototype.view = function(t) {
        return this[t + "View"]
    }, en.prototype.destroy = function() {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
    }, en.sizeOf = function(t) {
        switch (t) {
            case "int8":
            case "uint8":
                return 1;
            case "int16":
            case "uint16":
                return 2;
            case "int32":
            case "uint32":
            case "float32":
                return 4;
            default:
                throw new Error(t + " isn't a valid view type")
        }
    }, Object.defineProperties(en.prototype, rn);
    var nn = function(t) {
            function e(e) {
                t.call(this, e), this.shaderGenerator = null, this.geometryClass = null, this.vertexSize = null, this.state = xr.for2d(), this.size = 8e3, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._drawCalls = [];
                for (var i = 0; i < this.size / 4; i++) this._drawCalls[i] = new tn;
                this._aBuffers = {}, this._iBuffers = {}, this.MAX_TEXTURES = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contextChange = function() {
                var t = this.renderer.gl;
                g.PREFER_ENV === _t.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), g.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = dr(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass
            }, e.prototype.onPrerender = function() {
                this._flushId = 0
            }, e.prototype.render = function(t) {
                t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedElements[this._bufferSize++] = t)
            }, e.prototype.flush = function() {
                if (0 !== this._vertexCount) {
                    var t, e, i = this.getAttributeBuffer(this._vertexCount),
                        r = this.getIndexBuffer(this._indexCount),
                        n = this.renderer.gl,
                        o = this._bufferedElements,
                        s = this._drawCalls,
                        a = this.MAX_TEXTURES,
                        h = this._packedGeometries,
                        u = this.vertexSize,
                        l = this.renderer.textureGC.count,
                        c = 0,
                        d = 0,
                        p = 0,
                        f = s[0],
                        v = 0,
                        m = -1;
                    f.textureCount = 0, f.start = 0, f.blend = m;
                    var y, _ = ++si._globalBatch;
                    for (y = 0; y < this._bufferSize; ++y) {
                        var x = o[y];
                        o[y] = null, t = x._texture.baseTexture;
                        var b = kt[t.premultiplyAlpha ? 1 : 0][x.blendMode];
                        m !== b && (m = b, e = null, p = a, _++), e !== t && (e = t, t._batchEnabled !== _ && (p === a && (_++, p = 0, f.size = d - f.start, (f = s[v++]).textureCount = 0, f.blend = m, f.start = d), t.touched = l, t._batchEnabled = _, t._id = p, f.textures[f.textureCount++] = t, p++)), this.packInterleavedGeometry(x, i, r, c, d), c += x.vertexData.length / 2 * u, d += x.indices.length
                    }
                    si._globalBatch = _, f.size = d - f.start, g.CAN_UPLOAD_SAME_BUFFER ? (h[this._flushId]._buffer.update(i.rawBinaryData, 0), h[this._flushId]._indexBuffer.update(r, 0), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, h[this._flushId] = new this.geometryClass), h[this._flushId]._buffer.update(i.rawBinaryData, 0), h[this._flushId]._indexBuffer.update(r, 0), this.renderer.geometry.bind(h[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
                    var T = this.renderer.texture,
                        w = this.renderer.state;
                    for (y = 0; y < v; y++) {
                        for (var E = s[y], S = E.textureCount, I = 0; I < S; I++) T.bind(E.textures[I], I), E.textures[I] = null;
                        w.setBlendMode(E.blend), n.drawElements(E.type, E.size, n.UNSIGNED_SHORT, 2 * E.start)
                    }
                    this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0
                }
            }, e.prototype.start = function() {
                this.renderer.state.set(this.state), this.renderer.shader.bind(this._shader), g.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
            }, e.prototype.stop = function() {
                this.flush()
            }, e.prototype.destroy = function() {
                for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
                this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._drawCalls = null, this._shader && (this._shader.destroy(), this._shader = null), t.prototype.destroy.call(this)
            }, e.prototype.getAttributeBuffer = function(t) {
                var e = Zt(Math.ceil(t / 8)),
                    i = Jt(e),
                    r = 8 * e;
                this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
                var n = this._aBuffers[r];
                return n || (this._aBuffers[r] = n = new en(r * this.vertexSize * 4)), n
            }, e.prototype.getIndexBuffer = function(t) {
                var e = Zt(Math.ceil(t / 12)),
                    i = Jt(e),
                    r = 12 * e;
                this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
                var n = this._iBuffers[i];
                return n || (this._iBuffers[i] = n = new Uint16Array(r)), n
            }, e.prototype.packInterleavedGeometry = function(t, e, i, r, n) {
                for (var o = e.uint32View, s = e.float32View, a = r / this.vertexSize, h = t.uvs, u = t.indices, l = t.vertexData, c = t._texture.baseTexture._id, d = Math.min(t.worldAlpha, 1), p = d < 1 && t._texture.baseTexture.premultiplyAlpha ? Gt(t._tintRGB, d) : t._tintRGB + (255 * d << 24), f = 0; f < l.length; f += 2) s[r++] = l[f], s[r++] = l[f + 1], s[r++] = h[f], s[r++] = h[f + 1], o[r++] = p, s[r++] = c;
                for (var v = 0; v < u.length; v++) i[n++] = a + u[v]
            }, e
        }(Xi),
        on = function(t, e) {
            if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
            if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".')
        };
    on.prototype.generateShader = function(t) {
        if (!this.programCache[t]) {
            for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = i;
            this.defaultGroupCache[t] = Bi.from({
                uSamplers: e
            }, !0);
            var r = this.fragTemplate;
            r = (r = r.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new gr(this.vertexSrc, r)
        }
        var n = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new ye,
            default: this.defaultGroupCache[t]
        };
        return new yr(this.programCache[t], n)
    }, on.prototype.generateSampleSrc = function(t) {
        var e = "";
        e += "\n", e += "\n";
        for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(vTextureId < " + i + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
        return e += "\n", e += "\n"
    };
    var sn = function(t) {
            function e(e) {
                void 0 === e && (e = !1), t.call(this), this._buffer = new Pi(null, e, !1), this._indexBuffer = new Pi(null, e, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, St.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, St.FLOAT).addAttribute("aColor", this._buffer, 4, !0, St.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, St.FLOAT).addIndex(this._indexBuffer)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Ri),
        an = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        hn = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
        un = function() {},
        ln = {
            defaultVertexSrc: {
                configurable: !0
            },
            defaultFragmentTemplate: {
                configurable: !0
            }
        };
    un.create = function(t) {
        var e = Object.assign({
                vertex: an,
                fragment: hn,
                geometryClass: sn,
                vertexSize: 6
            }, t),
            i = e.vertex,
            r = e.fragment,
            n = e.vertexSize,
            o = e.geometryClass;
        return function(t) {
            function e(e) {
                t.call(this, e), this.shaderGenerator = new on(i, r), this.geometryClass = o, this.vertexSize = n
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(nn)
    }, ln.defaultVertexSrc.get = function() {
        return an
    }, ln.defaultFragmentTemplate.get = function() {
        return hn
    }, Object.defineProperties(un, ln);
    var cn = un.create(),
        dn = new Ce,
        pn = function(t) {
            this.renderer = t, t.extract = this
        };
    pn.prototype.image = function(t, e, i) {
        var r = new Image;
        return r.src = this.base64(t, e, i), r
    }, pn.prototype.base64 = function(t, e, i) {
        return this.canvas(t).toDataURL(e, i)
    }, pn.prototype.canvas = function(t) {
        var e, i, r, n = this.renderer,
            o = !1,
            s = !1;
        t && (t instanceof wi ? r = t : (r = this.renderer.generateTexture(t), s = !0)), r ? (e = r.baseTexture.resolution, i = r.frame, o = !1, n.renderTexture.bind(r)) : (e = this.renderer.resolution, o = !0, (i = dn).width = this.renderer.width, i.height = this.renderer.height, n.renderTexture.bind(null));
        var a = Math.floor(i.width * e),
            h = Math.floor(i.height * e),
            u = new ie(a, h, 1),
            l = new Uint8Array(4 * a * h),
            c = n.gl;
        c.readPixels(i.x * e, i.y * e, a, h, c.RGBA, c.UNSIGNED_BYTE, l);
        var d = u.context.getImageData(0, 0, a, h);
        return pn.arrayPostDivide(l, d.data), u.context.putImageData(d, 0, 0), o && (u.context.scale(1, -1), u.context.drawImage(u.canvas, 0, -h)), s && r.destroy(!0), u.canvas
    }, pn.prototype.pixels = function(t) {
        var e, i, r, n = this.renderer,
            o = !1;
        t && (t instanceof wi ? r = t : (r = this.renderer.generateTexture(t), o = !0)), r ? (e = r.baseTexture.resolution, i = r.frame, n.renderTexture.bind(r)) : (e = n.resolution, (i = dn).width = n.width, i.height = n.height, n.renderTexture.bind(null));
        var s = i.width * e,
            a = i.height * e,
            h = new Uint8Array(4 * s * a),
            u = n.gl;
        return u.readPixels(i.x * e, i.y * e, s, a, u.RGBA, u.UNSIGNED_BYTE, h), o && r.destroy(!0), pn.arrayPostDivide(h, h), h
    }, pn.prototype.destroy = function() {
        this.renderer.extract = null, this.renderer = null
    }, pn.arrayPostDivide = function(t, e) {
        for (var i = 0; i < t.length; i += 4) {
            var r = e[i + 3] = t[i + 3];
            0 !== r ? (e[i] = Math.round(Math.min(255 * t[i] / r, 255)), e[i + 1] = Math.round(Math.min(255 * t[i + 1] / r, 255)), e[i + 2] = Math.round(Math.min(255 * t[i + 2] / r, 255))) : (e[i] = t[i], e[i + 1] = t[i + 1], e[i + 2] = t[i + 2])
        }
    };
    var fn = {
            Extract: pn
        },
        vn = function() {
            this.global = new ce, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
        },
        gn = {
            pointerId: {
                configurable: !0
            }
        };
    gn.pointerId.get = function() {
        return this.identifier
    }, vn.prototype.getLocalPosition = function(t, e, i) {
        return t.worldTransform.applyInverse(i || this.global, e)
    }, vn.prototype.copyEvent = function(t) {
        t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0
    }, vn.prototype.reset = function() {
        this.isPrimary = !1
    }, Object.defineProperties(vn.prototype, gn);
    var mn = function() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
    };
    mn.prototype.stopPropagation = function() {
        this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget
    }, mn.prototype.reset = function() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null
    };
    var yn = function t(e) {
            this._pointerId = e, this._flags = t.FLAGS.NONE
        },
        _n = {
            pointerId: {
                configurable: !0
            },
            flags: {
                configurable: !0
            },
            none: {
                configurable: !0
            },
            over: {
                configurable: !0
            },
            rightDown: {
                configurable: !0
            },
            leftDown: {
                configurable: !0
            }
        };
    yn.prototype._doSet = function(t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t
    }, _n.pointerId.get = function() {
        return this._pointerId
    }, _n.flags.get = function() {
        return this._flags
    }, _n.flags.set = function(t) {
        this._flags = t
    }, _n.none.get = function() {
        return this._flags === this.constructor.FLAGS.NONE
    }, _n.over.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.OVER)
    }, _n.over.set = function(t) {
        this._doSet(this.constructor.FLAGS.OVER, t)
    }, _n.rightDown.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
    }, _n.rightDown.set = function(t) {
        this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
    }, _n.leftDown.get = function() {
        return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
    }, _n.leftDown.set = function(t) {
        this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
    }, Object.defineProperties(yn.prototype, _n), yn.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
    });
    var xn = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
            return "pointer" === this.cursor
        },
        set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
        },
        cursor: null,
        get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
        },
        _trackedPointers: void 0
    };
    Ue.mixin(xn);
    var bn = 1,
        Tn = {
            target: null,
            data: {
                global: null
            }
        },
        wn = function(t) {
            function e(e, i) {
                t.call(this), i = i || {}, this.renderer = e, this.autoPreventDefault = void 0 === i.autoPreventDefault || i.autoPreventDefault, this.interactionFrequency = i.interactionFrequency || 10, this.mouse = new vn, this.mouse.identifier = bn, this.mouse.global.set(-999999), this.activeInteractionData = {}, this.activeInteractionData[bn] = this.mouse, this.interactionDataPool = [], this.eventData = new mn, this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.mouseOverRenderer = !1, this.supportsTouchEvents = "ontouchstart" in window, this.supportsPointerEvents = !!window.PointerEvent, this.onPointerUp = this.onPointerUp.bind(this), this.processPointerUp = this.processPointerUp.bind(this), this.onPointerCancel = this.onPointerCancel.bind(this), this.processPointerCancel = this.processPointerCancel.bind(this), this.onPointerDown = this.onPointerDown.bind(this), this.processPointerDown = this.processPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.processPointerMove = this.processPointerMove.bind(this), this.onPointerOut = this.onPointerOut.bind(this), this.processPointerOverOut = this.processPointerOverOut.bind(this), this.onPointerOver = this.onPointerOver.bind(this), this.cursorStyles = {
                    default: "inherit",
                    pointer: "pointer"
                }, this.currentCursorMode = null, this.cursor = null, this._tempPoint = new ce, this.resolution = 1, this.delayedEvents = [], this.setTargetElement(this.renderer.view, this.renderer.resolution)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.hitTest = function(t, e) {
                return Tn.target = null, Tn.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(Tn, e, null, !0), Tn.target
            }, e.prototype.setTargetElement = function(t, e) {
                void 0 === e && (e = 1), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
            }, e.prototype.addEvents = function() {
                this.interactionDOMElement && (qe.system.add(this.update, this, Ye.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
            }, e.prototype.removeEvents = function() {
                this.interactionDOMElement && (qe.system.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
            }, e.prototype.update = function(t) {
                if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement))
                    if (this.didMove) this.didMove = !1;
                    else {
                        for (var e in this.cursor = null, this.activeInteractionData)
                            if (this.activeInteractionData.hasOwnProperty(e)) {
                                var i = this.activeInteractionData[e];
                                if (i.originalEvent && "touch" !== i.pointerType) {
                                    var r = this.configureInteractionEventForDOMEvent(this.eventData, i.originalEvent, i);
                                    this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                                }
                            } this.setCursorMode(this.cursor)
                    }
            }, e.prototype.setCursorMode = function(t) {
                if (t = t || "default", this.currentCursorMode !== t) {
                    this.currentCursorMode = t;
                    var e = this.cursorStyles[t];
                    if (e) switch (typeof e) {
                        case "string":
                            this.interactionDOMElement.style.cursor = e;
                            break;
                        case "function":
                            e(t);
                            break;
                        case "object":
                            Object.assign(this.interactionDOMElement.style, e)
                    } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
                }
            }, e.prototype.dispatchEvent = function(t, e, i) {
                i.stopPropagationHint && t !== i.stopsPropagatingAt || (i.currentTarget = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
            }, e.prototype.delayDispatchEvent = function(t, e, i) {
                this.delayedEvents.push({
                    displayObject: t,
                    eventString: e,
                    eventData: i
                })
            }, e.prototype.mapPositionToPoint = function(t, e, i) {
                var r;
                r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                var n = 1 / this.resolution;
                t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) * n, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * n
            }, e.prototype.processInteractive = function(t, e, i, r, n, o) {
                if (!e || !e.visible) return !1;
                var s = t.data.global,
                    a = !1,
                    h = n = e.interactive || n,
                    u = !0;
                if (e.hitArea ? (r && (e.worldTransform.applyInverse(s, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? a = !0 : (r = !1, u = !1)), h = !1) : e._mask && r && (e._mask.containsPoint && e._mask.containsPoint(s) || (r = !1)), u && e.interactiveChildren && e.children)
                    for (var l = e.children, c = l.length - 1; c >= 0; c--) {
                        var d = l[c],
                            p = this.processInteractive(t, d, i, r, h, !0);
                        if (p) {
                            if (!d.parent) continue;
                            h = !1, p && (t.target && (r = !1), a = !0)
                        }
                    }
                n && (r && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(s) && (a = !0), e.interactive && (a && !t.target && (t.target = e), i && i(t, e, !!a)));
                var f = this.delayedEvents;
                if (f.length && !o) {
                    t.stopPropagationHint = !1;
                    var v = f.length;
                    this.delayedEvents = [];
                    for (var g = 0; g < v; g++) {
                        var m = f[g],
                            y = m.displayObject,
                            _ = m.eventString,
                            x = m.eventData;
                        x.stopsPropagatingAt === y && (x.stopPropagationHint = !0), this.dispatchEvent(y, _, x)
                    }
                }
                return a
            }, e.prototype.onPointerDown = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    if (this.autoPreventDefault && e[0].isNormalized)(t.cancelable || !("cancelable" in t)) && t.preventDefault();
                    for (var i = e.length, r = 0; r < i; r++) {
                        var n = e[r],
                            o = this.getInteractionDataForPointerId(n),
                            s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);
                        else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                            var a = 2 === n.button;
                            this.emit(a ? "rightdown" : "mousedown", this.eventData)
                        }
                    }
                }
            }, e.prototype.processPointerDown = function(t, e, i) {
                var r = t.data,
                    n = t.data.identifier;
                if (i)
                    if (e.trackedPointers[n] || (e.trackedPointers[n] = new yn(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === r.pointerType) this.dispatchEvent(e, "touchstart", t);
                    else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
                    var o = 2 === r.button;
                    o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
                }
            }, e.prototype.onPointerComplete = function(t, e, i) {
                for (var r = this.normalizeToPointerData(t), n = r.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
                    var a = r[s],
                        h = this.getInteractionDataForPointerId(a),
                        u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);
                    if (u.data.originalEvent = t, this.processInteractive(u, this.renderer._lastObjectRendered, i, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
                        var l = 2 === a.button;
                        this.emit(l ? "rightup" + o : "mouseup" + o, u)
                    } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId, h))
                }
            }, e.prototype.onPointerCancel = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
            }, e.prototype.processPointerCancel = function(t, e) {
                var i = t.data,
                    r = t.data.identifier;
                void 0 !== e.trackedPointers[r] && (delete e.trackedPointers[r], this.dispatchEvent(e, "pointercancel", t), "touch" === i.pointerType && this.dispatchEvent(e, "touchcancel", t))
            }, e.prototype.onPointerUp = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
            }, e.prototype.processPointerUp = function(t, e, i) {
                var r = t.data,
                    n = t.data.identifier,
                    o = e.trackedPointers[n],
                    s = "touch" === r.pointerType,
                    a = "mouse" === r.pointerType || "pen" === r.pointerType,
                    h = !1;
                if (a) {
                    var u = 2 === r.button,
                        l = yn.FLAGS,
                        c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                        d = void 0 !== o && o.flags & c;
                    i ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1)
                }
                i ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n]
            }, e.prototype.onPointerMove = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, this.cursor = null);
                    for (var i = e.length, r = 0; r < i; r++) {
                        var n = e[r],
                            o = this.getInteractionDataForPointerId(n),
                            s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
                    }
                    "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
                }
            }, e.prototype.processPointerMove = function(t, e, i) {
                var r = t.data,
                    n = "touch" === r.pointerType,
                    o = "mouse" === r.pointerType || "pen" === r.pointerType;
                o && this.processPointerOverOut(t, e, i), this.moveWhenInside && !i || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
            }, e.prototype.onPointerOut = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t)[0];
                    "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                    var i = this.getInteractionDataForPointerId(e),
                        r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
                    r.data.originalEvent = e, this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", r), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", r) : this.releaseInteractionDataForPointerId(i.identifier)
                }
            }, e.prototype.processPointerOverOut = function(t, e, i) {
                var r = t.data,
                    n = t.data.identifier,
                    o = "mouse" === r.pointerType || "pen" === r.pointerType,
                    s = e.trackedPointers[n];
                i && !s && (s = e.trackedPointers[n] = new yn(n)), void 0 !== s && (i && this.mouseOverRenderer ? (s.over || (s.over = !0, this.delayDispatchEvent(e, "pointerover", t), o && this.delayDispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]))
            }, e.prototype.onPointerOver = function(t) {
                var e = this.normalizeToPointerData(t)[0],
                    i = this.getInteractionDataForPointerId(e),
                    r = this.configureInteractionEventForDOMEvent(this.eventData, e, i);
                r.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", r), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", r)
            }, e.prototype.getInteractionDataForPointerId = function(t) {
                var e, i = t.pointerId;
                return i === bn || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[i] ? e = this.activeInteractionData[i] : ((e = this.interactionDataPool.pop() || new vn).identifier = i, this.activeInteractionData[i] = e), e.copyEvent(t), e
            }, e.prototype.releaseInteractionDataForPointerId = function(t) {
                var e = this.activeInteractionData[t];
                e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
            }, e.prototype.configureInteractionEventForDOMEvent = function(t, e, i) {
                return t.data = i, this.mapPositionToPoint(i.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = i.global.x, e.globalY = i.global.y), i.originalEvent = e, t.reset(), t
            }, e.prototype.normalizeToPointerData = function(t) {
                var e = [];
                if (this.supportsTouchEvents && t instanceof TouchEvent)
                    for (var i = 0, r = t.changedTouches.length; i < r; i++) {
                        var n = t.changedTouches[i];
                        void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n)
                    } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent ? e.push(t) : (void 0 === t.isPrimary && (t.isPrimary = !0), void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), void 0 === t.pointerId && (t.pointerId = bn), void 0 === t.pressure && (t.pressure = .5), void 0 === t.twist && (t.twist = 0), void 0 === t.tangentialPressure && (t.tangentialPressure = 0), t.isNormalized = !0, e.push(t));
                return e
            }, e.prototype.destroy = function() {
                this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
            }, e
        }(m),
        En = {
            InteractionData: vn,
            InteractionEvent: mn,
            InteractionManager: wn,
            InteractionTrackingData: yn,
            interactiveTarget: xn
        },
        Sn = {
            adaptive: !0,
            maxLength: 10,
            minSegments: 8,
            maxSegments: 2048,
            _segmentsCount: function(t, e) {
                if (void 0 === e && (e = 20), !this.adaptive) return e;
                var i = Math.ceil(t / this.maxLength);
                return i < this.minSegments ? i = this.minSegments : i > this.maxSegments && (i = this.maxSegments), i
            }
        },
        In = function() {
            this.reset()
        };
    In.prototype.clone = function() {
        var t = new In;
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
    }, In.prototype.reset = function() {
        this.color = 16777215, this.alpha = 1, this.texture = bi.WHITE, this.matrix = null, this.visible = !1
    }, In.prototype.destroy = function() {
        this.texture = null, this.matrix = null
    };
    var Pn = function(t, e, i, r) {
        void 0 === e && (e = null), void 0 === i && (i = null), void 0 === r && (r = null), this.shape = t, this.lineStyle = i, this.fillStyle = e, this.matrix = r, this.type = t.type, this.points = [], this.holes = []
    };
    Pn.prototype.clone = function() {
        return new Pn(this.shape, this.fillStyle, this.lineStyle, this.matrix)
    }, Pn.prototype.destroy = function() {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
    };
    var An = {
        build: function(t) {
            var e, i, r = t.shape,
                n = t.points,
                o = r.x,
                s = r.y;
            if (n.length = 0, t.type === me.CIRC ? (e = r.radius, i = r.radius) : (e = r.width, i = r.height), 0 !== e && 0 !== i) {
                var a = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(r.width + r.height));
                a /= 2.3;
                for (var h = 2 * Math.PI / a, u = 0; u < a; u++) n.push(o + Math.sin(-h * u) * e, s + Math.cos(-h * u) * i);
                n.push(n[0], n[1])
            }
        },
        triangulate: function(t, e) {
            var i = t.points,
                r = e.points,
                n = e.indices,
                o = r.length / 2,
                s = o;
            r.push(t.shape.x, t.shape.y);
            for (var a = 0; a < i.length; a += 2) r.push(i[a], i[a + 1]), n.push(o++, s, o)
        }
    };

    function On(t, e) {
        t.lineStyle.native ? function(t, e) {
            var i = 0,
                r = t.shape,
                n = t.points || r.points,
                o = r.type !== me.POLY || r.closeStroke;
            if (0 === n.length) return;
            var s = e.points,
                a = e.indices,
                h = n.length / 2,
                u = s.length / 2,
                l = u;
            for (s.push(n[0], n[1]), i = 1; i < h; i++) s.push(n[2 * i], n[2 * i + 1]), a.push(l, l + 1), l++;
            o && a.push(l, u)
        }(t, e) : function(t, e) {
            var i = t.shape,
                r = t.points || i.points.slice(),
                n = e.closePointEps;
            if (0 === r.length) return;
            var o = t.lineStyle,
                s = new ce(r[0], r[1]),
                a = new ce(r[r.length - 2], r[r.length - 1]),
                h = i.type !== me.POLY || i.closeStroke,
                u = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;
            if (h) {
                r = r.slice(), u && (r.pop(), r.pop(), a.set(r[r.length - 2], r[r.length - 1]));
                var l = a.x + .5 * (s.x - a.x),
                    c = a.y + .5 * (s.y - a.y);
                r.unshift(l, c), r.push(l, c)
            }
            var d = e.points,
                p = r.length / 2,
                f = r.length,
                v = d.length / 2,
                g = o.width / 2,
                m = r[0],
                y = r[1],
                _ = r[2],
                x = r[3],
                b = 0,
                T = 0,
                w = -(y - x),
                E = m - _,
                S = 0,
                I = 0,
                P = 0,
                A = 0,
                O = Math.sqrt(w * w + E * E);
            w /= O, E /= O, w *= g, E *= g;
            var C = o.alignment,
                M = 2 * (1 - C),
                D = 2 * C;
            d.push(m - w * M, y - E * M), d.push(m + w * D, y + E * D);
            for (var R = 1; R < p - 1; ++R) {
                m = r[2 * (R - 1)], y = r[2 * (R - 1) + 1], _ = r[2 * R], x = r[2 * R + 1], b = r[2 * (R + 1)], T = r[2 * (R + 1) + 1], w = -(y - x), E = m - _, O = Math.sqrt(w * w + E * E), w /= O, E /= O, w *= g, E *= g, S = -(x - T), I = _ - b, O = Math.sqrt(S * S + I * I), S /= O, I /= O;
                var F = -E + y - (-E + x),
                    L = -w + _ - (-w + m),
                    N = (-w + m) * (-E + x) - (-w + _) * (-E + y),
                    B = -(I *= g) + T - (-I + x),
                    U = -(S *= g) + _ - (-S + b),
                    k = (-S + b) * (-I + x) - (-S + _) * (-I + T),
                    X = F * U - B * L;
                if (Math.abs(X) < .1) X += 10.1, d.push(_ - w * M, x - E * M), d.push(_ + w * D, x + E * D);
                else {
                    var j = (L * k - U * N) / X,
                        G = (B * N - F * k) / X,
                        H = (j - _) * (j - _) + (G - x) * (G - x);
                    H > 196 * g * g ? (P = w - S, A = E - I, O = Math.sqrt(P * P + A * A), P /= O, A /= O, P *= g, A *= g, d.push(_ - P * M, x - A * M), d.push(_ + P * D, x + A * D), d.push(_ - P * D * M, x - A * M), f++) : (d.push(_ + (j - _) * M, x + (G - x) * M), d.push(_ - (j - _) * D, x - (G - x) * D))
                }
            }
            m = r[2 * (p - 2)], y = r[2 * (p - 2) + 1], _ = r[2 * (p - 1)], x = r[2 * (p - 1) + 1], w = -(y - x), E = m - _, O = Math.sqrt(w * w + E * E), w /= O, E /= O, w *= g, E *= g, d.push(_ - w * M, x - E * M), d.push(_ + w * D, x + E * D);
            for (var z = e.indices, V = 0; V < f - 2; ++V) z.push(v, v + 1, v + 2), v++
        }(t, e)
    }
    var Cn = {
            build: function(t) {
                t.points = t.shape.points.slice()
            },
            triangulate: function(t, e) {
                var i = t.points,
                    r = t.holes,
                    n = e.points,
                    o = e.indices;
                if (i.length >= 6) {
                    for (var s = [], a = 0; a < r.length; a++) {
                        var h = r[a];
                        s.push(i.length / 2), i = i.concat(h.points)
                    }
                    var u = y(i, s, 2);
                    if (!u) return;
                    for (var l = n.length / 2, c = 0; c < u.length; c += 3) o.push(u[c] + l), o.push(u[c + 1] + l), o.push(u[c + 2] + l);
                    for (var d = 0; d < i.length; d++) n.push(i[d])
                }
            }
        },
        Mn = {
            build: function(t) {
                var e = t.shape,
                    i = t.points,
                    r = e.x,
                    n = e.y,
                    o = e.width,
                    s = e.height,
                    a = e.radius;
                i.length = 0, Rn(r, n + a, r, n, r + a, n, i), Rn(r + o - a, n, r + o, n, r + o, n + a, i), Rn(r + o, n + s - a, r + o, n + s, r + o - a, n + s, i), Rn(r + a, n + s, r, n + s, r, n + s - a, i)
            },
            triangulate: function(t, e) {
                for (var i = t.points, r = e.points, n = e.indices, o = r.length / 2, s = y(i, null, 2), a = 0, h = s.length; a < h; a += 3) n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);
                for (var u = 0, l = i.length; u < l; u++) r.push(i[u], i[++u])
            }
        };

    function Dn(t, e, i) {
        return t + (e - t) * i
    }

    function Rn(t, e, i, r, n, o, s) {
        void 0 === s && (s = []);
        for (var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, v = 0; f <= 20; ++f) h = Dn(t, i, v = f / 20), u = Dn(e, r, v), l = Dn(i, n, v), c = Dn(r, o, v), d = Dn(h, l, v), p = Dn(u, c, v), a.push(d, p);
        return a
    }
    var Fn = [],
        Ln = [],
        Nn = new ce,
        Bn = {};
    Bn[me.POLY] = Cn, Bn[me.CIRC] = An, Bn[me.ELIP] = An, Bn[me.RECT] = {
        build: function(t) {
            var e = t.shape,
                i = e.x,
                r = e.y,
                n = e.width,
                o = e.height,
                s = t.points;
            s.length = 0, s.push(i, r, i + n, r, i + n, r + o, i, r + o)
        },
        triangulate: function(t, e) {
            var i = t.points,
                r = e.points,
                n = r.length / 2;
            r.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]), e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
        }
    }, Bn[me.RREC] = Mn;
    var Un = function() {
            this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
        },
        kn = function(t) {
            function e() {
                t.call(this), this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.dirty = 0, this.batchDirty = -1, this.cacheDirty = -1, this.clearDirty = 0, this.drawCalls = [], this.batches = [], this.shapeIndex = 0, this._bounds = new Be, this.boundsDirty = -1, this.boundsPadding = 0, this.batchable = !1, this.indicesUint16 = null, this.uvsFloat32 = null, this.closePointEps = 1e-4
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                bounds: {
                    configurable: !0
                }
            };
            return i.bounds.get = function() {
                return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
            }, e.prototype.invalidate = function() {
                this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
                for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].textures.length = 0, Ln.push(this.drawCalls[t]);
                this.drawCalls.length = 0;
                for (var e = 0; e < this.batches.length; e++) {
                    var i = this.batches[e];
                    i.start = 0, i.attribStart = 0, i.style = null, Fn.push(i)
                }
                this.batches.length = 0
            }, e.prototype.clear = function() {
                return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
            }, e.prototype.drawShape = function(t, e, i, r) {
                var n = new Pn(t, e, i, r);
                return this.graphicsData.push(n), this.dirty++, this
            }, e.prototype.drawHole = function(t, e) {
                if (!this.graphicsData.length) return null;
                var i = new Pn(t, null, null, e),
                    r = this.graphicsData[this.graphicsData.length - 1];
                return i.lineStyle = r.lineStyle, r.holes.push(i), this.dirty++, this
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e);
                for (var i = 0; i < this.graphicsData.length; ++i) this.graphicsData[i].destroy();
                this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
            }, e.prototype.containsPoint = function(t) {
                for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
                    var r = e[i];
                    if (r.fillStyle.visible && (r.shape && (r.matrix ? r.matrix.applyInverse(t, Nn) : Nn.copyFrom(t), r.shape.contains(Nn.x, Nn.y)))) {
                        if (r.holes)
                            for (var n = 0; n < r.holes.length; n++) {
                                if (r.holes[n].shape.contains(Nn.x, Nn.y)) return !1
                            }
                        return !0
                    }
                }
                return !1
            }, e.prototype.updateBatches = function() {
                if (this.dirty !== this.cacheDirty)
                    if (0 !== this.graphicsData.length) {
                        if (this.dirty !== this.cacheDirty)
                            for (var t = 0; t < this.graphicsData.length; t++) {
                                var e = this.graphicsData[t];
                                if (e.fillStyle && !e.fillStyle.texture.baseTexture.valid) return;
                                if (e.lineStyle && !e.lineStyle.texture.baseTexture.valid) return
                            }
                        this.cacheDirty = this.dirty;
                        var i = this.uvs,
                            r = null,
                            n = null,
                            o = 0,
                            s = !1;
                        if (this.batches.length > 0) {
                            var a = (r = this.batches[this.batches.length - 1]).style;
                            n = a.texture.baseTexture, o = a.color + a.alpha, s = !!a.native
                        }
                        for (var h = this.shapeIndex; h < this.graphicsData.length; h++) {
                            this.shapeIndex++;
                            var u = this.graphicsData[h],
                                l = Bn[u.type],
                                c = u.fillStyle,
                                d = u.lineStyle;
                            l.build(u), u.matrix && this.transformPoints(u.points, u.matrix);
                            for (var p = 0; p < 2; p++) {
                                var f = 0 === p ? c : d;
                                if (f.visible) {
                                    var v = f.texture.baseTexture,
                                        g = this.indices.length,
                                        m = this.points.length / 2;
                                    !r || n === v && o === f.color + f.alpha && s === !!f.native || (r.size = g - r.start, r.attribSize = m - r.attribStart, r.size > 0 && (r = null)), r || (r = Fn.pop() || new Un, this.batches.push(r), v.wrapMode = Pt.REPEAT, n = v, o = f.color + f.alpha, s = f.native, r.style = f, r.start = g, r.attribStart = m);
                                    var y = this.points.length / 2;
                                    if (0 === p) u.holes.length ? (this.processHoles(u.holes), Cn.triangulate(u, this)) : l.triangulate(u, this);
                                    else {
                                        On(u, this);
                                        for (var _ = 0; _ < u.holes.length; _++) On(u.holes[_], this)
                                    }
                                    var x = this.points.length / 2 - y;
                                    this.addUvs(this.points, i, f.texture, y, x, f.matrix)
                                }
                            }
                        }
                        var b = this.indices.length,
                            T = this.points.length / 2;
                        if (r)
                            if (r.size = b - r.start, r.attribSize = T - r.attribStart, this.indicesUint16 = new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable) {
                                this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
                                for (var w = 0; w < this.batches.length; w++)
                                    for (var E = this.batches[w], S = 0; S < E.size; S++) {
                                        var I = E.start + S;
                                        this.indicesUint16[I] = this.indicesUint16[I] - E.attribStart
                                    }
                            } else this.buildDrawCalls();
                        else this.batchable = !0
                    } else this.batchable = !0
            }, e.prototype.isBatchable = function() {
                for (var t = this.batches, i = 0; i < t.length; i++)
                    if (t[i].style.native) return !1;
                return this.points.length < 2 * e.BATCHABLE_SIZE
            }, e.prototype.buildDrawCalls = function() {
                for (var t = ++si._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].textures.length = 0, Ln.push(this.drawCalls[e]);
                this.drawCalls.length = 0;
                var i = this.uvs,
                    r = this.colors,
                    n = this.textureIds,
                    o = Ln.pop() || new tn;
                o.textureCount = 0, o.start = 0, o.size = 0, o.type = Tt.TRIANGLES;
                var s = 0,
                    a = null,
                    h = 0,
                    u = !1,
                    l = Tt.TRIANGLES,
                    c = 0;
                this.drawCalls.push(o);
                for (var d = 0; d < this.batches.length; d++) {
                    var p = this.batches[d],
                        f = p.style,
                        v = f.texture.baseTexture;
                    u !== !!f.native && (l = (u = f.native) ? Tt.LINES : Tt.TRIANGLES, a = null, s = 8, t++), a !== v && (a = v, v._batchEnabled !== t && (8 === s && (t++, s = 0, o.size > 0 && (o = Ln.pop() || new tn, this.drawCalls.push(o)), o.start = c, o.size = 0, o.textureCount = 0, o.type = l), v.touched = 1, v._batchEnabled = t, v._id = s, v.wrapMode = 10497, o.textures[o.textureCount++] = v, s++)), o.size += p.size, c += p.size, h = v._id, this.addColors(r, f.color, f.alpha, p.attribSize), this.addTextureIds(n, h, p.attribSize)
                }
                si._globalBatch = t;
                for (var g = this.points, m = new ArrayBuffer(3 * g.length * 4), y = new Float32Array(m), _ = new Uint32Array(m), x = 0, b = 0; b < g.length / 2; b++) y[x++] = g[2 * b], y[x++] = g[2 * b + 1], y[x++] = i[2 * b], y[x++] = i[2 * b + 1], _[x++] = r[b], y[x++] = n[b];
                this._buffer.update(m), this._indexBuffer.update(this.indicesUint16)
            }, e.prototype.processHoles = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    Bn[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix)
                }
            }, e.prototype.calculateBounds = function() {
                var t = 1 / 0,
                    e = -1 / 0,
                    i = 1 / 0,
                    r = -1 / 0;
                if (this.graphicsData.length)
                    for (var n = null, o = 0, s = 0, a = 0, h = 0, u = 0; u < this.graphicsData.length; u++) {
                        var l = this.graphicsData[u],
                            c = l.type,
                            d = l.lineStyle ? l.lineStyle.width : 0;
                        if (n = l.shape, c === me.RECT || c === me.RREC) o = n.x - d / 2, s = n.y - d / 2, t = o < t ? o : t, e = o + (a = n.width + d) > e ? o + a : e, i = s < i ? s : i, r = s + (h = n.height + d) > r ? s + h : r;
                        else if (c === me.CIRC) o = n.x, s = n.y, t = o - (a = n.radius + d / 2) < t ? o - a : t, e = o + a > e ? o + a : e, i = s - (h = n.radius + d / 2) < i ? s - h : i, r = s + h > r ? s + h : r;
                        else if (c === me.ELIP) o = n.x, s = n.y, t = o - (a = n.width + d / 2) < t ? o - a : t, e = o + a > e ? o + a : e, i = s - (h = n.height + d / 2) < i ? s - h : i, r = s + h > r ? s + h : r;
                        else
                            for (var p = n.points, f = 0, v = 0, g = 0, m = 0, y = 0, _ = 0, x = 0, b = 0, T = 0; T + 2 < p.length; T += 2) o = p[T], s = p[T + 1], f = p[T + 2], v = p[T + 3], g = Math.abs(f - o), m = Math.abs(v - s), h = d, (a = Math.sqrt(g * g + m * m)) < 1e-9 || (t = (x = (f + o) / 2) - (y = (h / a * m + g) / 2) < t ? x - y : t, e = x + y > e ? x + y : e, i = (b = (v + s) / 2) - (_ = (h / a * g + m) / 2) < i ? b - _ : i, r = b + _ > r ? b + _ : r)
                    } else t = 0, e = 0, i = 0, r = 0;
                var w = this.boundsPadding;
                this._bounds.minX = t - w, this._bounds.maxX = e + w, this._bounds.minY = i - w, this._bounds.maxY = r + w
            }, e.prototype.transformPoints = function(t, e) {
                for (var i = 0; i < t.length / 2; i++) {
                    var r = t[2 * i],
                        n = t[2 * i + 1];
                    t[2 * i] = e.a * r + e.c * n + e.tx, t[2 * i + 1] = e.b * r + e.d * n + e.ty
                }
            }, e.prototype.addColors = function(t, e, i, r) {
                for (var n = Gt((e >> 16) + (65280 & e) + ((255 & e) << 16), i); r-- > 0;) t.push(n)
            }, e.prototype.addTextureIds = function(t, e, i) {
                for (; i-- > 0;) t.push(e)
            }, e.prototype.addUvs = function(t, e, i, r, n, o) {
                for (var s = 0, a = e.length, h = i.frame; s < n;) {
                    var u = t[2 * (r + s)],
                        l = t[2 * (r + s) + 1];
                    if (o) {
                        var c = o.a * u + o.c * l + o.tx;
                        l = o.b * u + o.d * l + o.ty, u = c
                    }
                    s++, e.push(u / h.width, l / h.height)
                }
                var d = i.baseTexture;
                (h.width < d.width || h.height < d.height) && this.adjustUvs(e, i, a, n)
            }, e.prototype.adjustUvs = function(t, e, i, r) {
                for (var n = e.baseTexture, o = i + 2 * r, s = e.frame, a = s.width / n.width, h = s.height / n.height, u = s.x / s.width, l = s.y / s.height, c = Math.floor(t[i] + 1e-6), d = Math.floor(t[i + 1] + 1e-6), p = i + 2; p < o; p += 2) c = Math.min(c, Math.floor(t[p] + 1e-6)), d = Math.min(d, Math.floor(t[p + 1] + 1e-6));
                u -= c, l -= d;
                for (var f = i; f < o; f += 2) t[f] = (t[f] + u) * a, t[f + 1] = (t[f + 1] + l) * h
            }, Object.defineProperties(e.prototype, i), e
        }(sn);
    kn.BATCHABLE_SIZE = 100;
    var Xn = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.clone = function() {
                var t = new e;
                return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t
            }, e.prototype.reset = function() {
                t.prototype.reset.call(this), this.color = 0, this.width = 0, this.alignment = .5, this.native = !1
            }, e
        }(In),
        jn = function() {};
    jn.curveLength = function(t, e, i, r, n, o, s, a) {
        for (var h = 0, u = 0, l = 0, c = 0, d = 0, p = 0, f = 0, v = 0, g = 0, m = 0, y = 0, _ = t, x = e, b = 1; b <= 10; ++b) m = _ - (v = (f = (p = (d = 1 - (u = b / 10)) * d) * d) * t + 3 * p * u * i + 3 * d * (l = u * u) * n + (c = l * u) * s), y = x - (g = f * e + 3 * p * u * r + 3 * d * l * o + c * a), _ = v, x = g, h += Math.sqrt(m * m + y * y);
        return h
    }, jn.curveTo = function(t, e, i, r, n, o, s) {
        var a = s[s.length - 2],
            h = s[s.length - 1];
        s.length -= 2;
        var u = Sn._segmentsCount(jn.curveLength(a, h, t, e, i, r, n, o)),
            l = 0,
            c = 0,
            d = 0,
            p = 0,
            f = 0;
        s.push(a, h);
        for (var v = 1, g = 0; v <= u; ++v) d = (c = (l = 1 - (g = v / u)) * l) * l, f = (p = g * g) * g, s.push(d * a + 3 * c * g * t + 3 * l * p * i + f * n, d * h + 3 * c * g * e + 3 * l * p * r + f * o)
    };
    var Gn = function() {};
    Gn.curveLength = function(t, e, i, r, n, o) {
        var s = t - 2 * i + n,
            a = e - 2 * r + o,
            h = 2 * i - 2 * t,
            u = 2 * r - 2 * e,
            l = 4 * (s * s + a * a),
            c = 4 * (s * h + a * u),
            d = h * h + u * u,
            p = 2 * Math.sqrt(l + c + d),
            f = Math.sqrt(l),
            v = 2 * l * f,
            g = 2 * Math.sqrt(d),
            m = c / f;
        return (v * p + f * c * (p - g) + (4 * d * l - c * c) * Math.log((2 * f + m + p) / (m + g))) / (4 * v)
    }, Gn.curveTo = function(t, e, i, r, n) {
        for (var o = n[n.length - 2], s = n[n.length - 1], a = Sn._segmentsCount(Gn.curveLength(o, s, t, e, i, r)), h = 0, u = 0, l = 1; l <= a; ++l) {
            var c = l / a;
            h = o + (t - o) * c, u = s + (e - s) * c, n.push(h + (t + (i - t) * c - h) * c, u + (e + (r - e) * c - u) * c)
        }
    };
    var Hn = function() {};
    Hn.curveTo = function(t, e, i, r, n, o) {
        var s = o[o.length - 2],
            a = o[o.length - 1] - e,
            h = s - t,
            u = r - e,
            l = i - t,
            c = Math.abs(a * l - h * u);
        if (c < 1e-8 || 0 === n) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;
        var d = a * a + h * h,
            p = u * u + l * l,
            f = a * u + h * l,
            v = n * Math.sqrt(d) / c,
            g = n * Math.sqrt(p) / c,
            m = v * f / d,
            y = g * f / p,
            _ = v * l + g * h,
            x = v * u + g * a,
            b = h * (g + m),
            T = a * (g + m),
            w = l * (v + y),
            E = u * (v + y);
        return {
            cx: _ + t,
            cy: x + e,
            radius: n,
            startAngle: Math.atan2(T - x, b - _),
            endAngle: Math.atan2(E - x, w - _),
            anticlockwise: h * u > l * a
        }
    }, Hn.arc = function(t, e, i, r, n, o, s, a, h) {
        for (var u = s - o, l = Sn._segmentsCount(Math.abs(u) * n, 40 * Math.ceil(Math.abs(u) / fe)), c = u / (2 * l), d = 2 * c, p = Math.cos(c), f = Math.sin(c), v = l - 1, g = v % 1 / v, m = 0; m <= v; ++m) {
            var y = c + o + d * (m + g * m),
                _ = Math.cos(y),
                x = -Math.sin(y);
            h.push((p * _ + f * x) * n + i, (p * -x + f * _) * n + r)
        }
    };
    var zn = function(t) {
            function e(e, i, r, n, o, s) {
                o = o || n / 2;
                for (var a = -1 * Math.PI / 2 + s, h = 2 * r, u = fe / h, l = [], c = 0; c < h; c++) {
                    var d = c % 2 ? o : n,
                        p = c * u + a;
                    l.push(e + d * Math.cos(p), i + d * Math.sin(p))
                }
                t.call(this, l)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Le),
        Vn = new Float32Array(3),
        Yn = {},
        Wn = function(t) {
            function e(e) {
                void 0 === e && (e = null), t.call(this), this.geometry = e || new kn, this.geometry.refCount++, this.shader = null, this.state = xr.for2d(), this._fillStyle = new In, this._lineStyle = new Xn, this._matrix = null, this._holeMode = !1, this.currentPath = null, this.batches = [], this.batchTint = -1, this.vertexData = null, this._transformID = -1, this.batchDirty = -1, this.pluginName = "batch", this.tint = 16777215, this.blendMode = bt.NORMAL
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                blendMode: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                },
                fill: {
                    configurable: !0
                },
                line: {
                    configurable: !0
                }
            };
            return e.prototype.clone = function() {
                return this.finishPoly(), new e(this.geometry)
            }, i.blendMode.set = function(t) {
                this.state.blendMode = t
            }, i.blendMode.get = function() {
                return this.state.blendMode
            }, i.tint.get = function() {
                return this._tint
            }, i.tint.set = function(t) {
                this._tint = t
            }, i.fill.get = function() {
                return this._fillStyle
            }, i.line.get = function() {
                return this._lineStyle
            }, e.prototype.lineStyle = function(t, e, i, r, n) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = .5), void 0 === n && (n = !1), this.lineTextureStyle(t, bi.WHITE, e, i, null, r, n), this
            }, e.prototype.lineTextureStyle = function(t, e, i, r, n, o, s) {
                void 0 === t && (t = 0), void 0 === e && (e = bi.WHITE), void 0 === i && (i = 16777215), void 0 === r && (r = 1), void 0 === n && (n = null), void 0 === o && (o = .5), void 0 === s && (s = !1), this.currentPath && this.startPoly();
                var a = t > 0 && r > 0;
                return a ? (n && (n = n.clone()).invert(), Object.assign(this._lineStyle, {
                    color: i,
                    width: t,
                    alpha: r,
                    matrix: n,
                    texture: e,
                    alignment: o,
                    native: s,
                    visible: a
                })) : this._lineStyle.reset(), this
            }, e.prototype.startPoly = function() {
                if (this.currentPath) {
                    var t = this.currentPath.points,
                        e = this.currentPath.points.length;
                    e > 2 && (this.drawShape(this.currentPath), this.currentPath = new Le, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
                } else this.currentPath = new Le, this.currentPath.closeStroke = !1
            }, e.prototype.finishPoly = function() {
                this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
            }, e.prototype.moveTo = function(t, e) {
                return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
            }, e.prototype.lineTo = function(t, e) {
                this.currentPath || this.moveTo(0, 0);
                var i = this.currentPath.points,
                    r = i[i.length - 2],
                    n = i[i.length - 1];
                return r === t && n === e || i.push(t, e), this
            }, e.prototype._initCurve = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
            }, e.prototype.quadraticCurveTo = function(t, e, i, r) {
                this._initCurve();
                var n = this.currentPath.points;
                return 0 === n.length && this.moveTo(0, 0), Gn.curveTo(t, e, i, r, n), this
            }, e.prototype.bezierCurveTo = function(t, e, i, r, n, o) {
                return this._initCurve(), jn.curveTo(t, e, i, r, n, o, this.currentPath.points), this
            }, e.prototype.arcTo = function(t, e, i, r, n) {
                this._initCurve(t, e);
                var o = this.currentPath.points,
                    s = Hn.curveTo(t, e, i, r, n, o);
                if (s) {
                    var a = s.cx,
                        h = s.cy,
                        u = s.radius,
                        l = s.startAngle,
                        c = s.endAngle,
                        d = s.anticlockwise;
                    this.arc(a, h, u, l, c, d)
                }
                return this
            }, e.prototype.arc = function(t, e, i, r, n, o) {
                if (void 0 === o && (o = !1), r === n) return this;
                if (!o && n <= r ? n += fe : o && r <= n && (r += fe), 0 === n - r) return this;
                var s = t + Math.cos(r) * i,
                    a = e + Math.sin(r) * i,
                    h = this.geometry.closePointEps,
                    u = this.currentPath ? this.currentPath.points : null;
                if (u) {
                    var l = Math.abs(u[u.length - 2] - s),
                        c = Math.abs(u[u.length - 1] - a);
                    l < h && c < h || u.push(s, a)
                } else this.moveTo(s, a), u = this.currentPath.points;
                return Hn.arc(s, a, t, e, i, r, n, o, u), this
            }, e.prototype.beginFill = function(t, e) {
                return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill(bi.WHITE, t, e)
            }, e.prototype.beginTextureFill = function(t, e, i, r) {
                void 0 === t && (t = bi.WHITE), void 0 === e && (e = 16777215), void 0 === i && (i = 1), void 0 === r && (r = null), this.currentPath && this.startPoly();
                var n = i > 0;
                return n ? (r && (r = r.clone()).invert(), Object.assign(this._fillStyle, {
                    color: e,
                    alpha: i,
                    texture: t,
                    matrix: r,
                    visible: n
                })) : this._fillStyle.reset(), this
            }, e.prototype.endFill = function() {
                return this.finishPoly(), this._fillStyle.reset(), this
            }, e.prototype.drawRect = function(t, e, i, r) {
                return this.drawShape(new Ce(t, e, i, r))
            }, e.prototype.drawRoundedRect = function(t, e, i, r, n) {
                return this.drawShape(new Ne(t, e, i, r, n))
            }, e.prototype.drawCircle = function(t, e, i) {
                return this.drawShape(new Re(t, e, i))
            }, e.prototype.drawEllipse = function(t, e, i, r) {
                return this.drawShape(new Fe(t, e, i, r))
            }, e.prototype.drawPolygon = function(t) {
                var e = arguments,
                    i = t,
                    r = !0;
                if (i.points && (r = i.closeStroke, i = i.points), !Array.isArray(i)) {
                    i = new Array(arguments.length);
                    for (var n = 0; n < i.length; ++n) i[n] = e[n]
                }
                var o = new Le(i);
                return o.closeStroke = r, this.drawShape(o), this
            }, e.prototype.drawShape = function(t) {
                return this._holeMode ? this.geometry.drawHole(t, this._matrix) : this.geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
            }, e.prototype.drawStar = function(t, e, i, r, n, o) {
                return void 0 === o && (o = 0), this.drawPolygon(new zn(t, e, i, r, n, o))
            }, e.prototype.clear = function() {
                return this.geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._matrix = null, this._holeMode = !1, this.currentPath = null, this
            }, e.prototype.isFastRect = function() {
                return !1
            }, e.prototype._render = function(t) {
                this.finishPoly();
                var e = this.geometry;
                e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
            }, e.prototype._populateBatches = function() {
                var t = this.geometry,
                    e = this.blendMode;
                this.batches = [], this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.vertexData = new Float32Array(t.points);
                for (var i = 0, r = t.batches.length; i < r; i++) {
                    var n = t.batches[i],
                        o = n.style.color,
                        s = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                        a = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
                        h = {
                            vertexData: s,
                            blendMode: e,
                            indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
                            uvs: a,
                            _batchRGB: Nt(o),
                            _tintRGB: o,
                            _texture: n.style.texture,
                            alpha: n.style.alpha,
                            worldAlpha: 1
                        };
                    this.batches[i] = h
                }
            }, e.prototype._renderBatched = function(t) {
                if (this.batches.length) {
                    t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                    for (var e = 0, i = this.batches.length; e < i; e++) {
                        var r = this.batches[e];
                        r.worldAlpha = this.worldAlpha * r.alpha, t.plugins[this.pluginName].render(r)
                    }
                }
            }, e.prototype._renderDirect = function(t) {
                var e = this._resolveDirectShader(t),
                    i = this.geometry,
                    r = this.tint,
                    n = this.worldAlpha,
                    o = e.uniforms,
                    s = i.drawCalls;
                o.translationMatrix = this.transform.worldTransform, o.tint[0] = (r >> 16 & 255) / 255 * n, o.tint[1] = (r >> 8 & 255) / 255 * n, o.tint[2] = (255 & r) / 255 * n, o.tint[3] = n, t.shader.bind(e), t.geometry.bind(i, e), t.state.set(this.state);
                for (var a = 0, h = s.length; a < h; a++) this._renderDrawCallDirect(t, i.drawCalls[a])
            }, e.prototype._renderDrawCallDirect = function(t, e) {
                for (var i = e.textureCount, r = 0; r < i; r++) t.texture.bind(e.textures[r], r);
                t.geometry.draw(e.type, e.size, e.start)
            }, e.prototype._resolveDirectShader = function(t) {
                var e = this.shader,
                    i = this.pluginName;
                if (!e) {
                    if (!Yn[i]) {
                        for (var r = new Int32Array(16), n = 0; n < 16; n++) r[n] = n;
                        var o = {
                                tint: new Float32Array([1, 1, 1, 1]),
                                translationMatrix: new ye,
                                default: Bi.from({
                                    uSamplers: r
                                }, !0)
                            },
                            s = t.plugins[i]._shader.program;
                        Yn[i] = new yr(s, o)
                    }
                    e = Yn[i]
                }
                return e
            }, e.prototype._calculateBounds = function() {
                this.finishPoly();
                var t = this.geometry.bounds;
                this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
            }, e.prototype.containsPoint = function(t) {
                return this.worldTransform.applyInverse(t, e._TEMP_POINT), this.geometry.containsPoint(e._TEMP_POINT)
            }, e.prototype.calculateTints = function() {
                if (this.batchTint !== this.tint) {
                    this.batchTint = this.tint;
                    for (var t = Nt(this.tint, Vn), e = 0; e < this.batches.length; e++) {
                        var i = this.batches[e],
                            r = i._batchRGB,
                            n = (t[0] * r[0] * 255 << 16) + (t[1] * r[1] * 255 << 8) + (0 | t[2] * r[2] * 255);
                        i._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16)
                    }
                }
            }, e.prototype.calculateVertices = function() {
                if (this._transformID !== this.transform._worldID) {
                    this._transformID = this.transform._worldID;
                    for (var t = this.transform.worldTransform, e = t.a, i = t.b, r = t.c, n = t.d, o = t.tx, s = t.ty, a = this.geometry.points, h = this.vertexData, u = 0, l = 0; l < a.length; l += 2) {
                        var c = a[l],
                            d = a[l + 1];
                        h[u++] = e * c + r * d + o, h[u++] = n * d + i * c + s
                    }
                }
            }, e.prototype.closePath = function() {
                var t = this.currentPath;
                return t && (t.closeStroke = !0), this
            }, e.prototype.setMatrix = function(t) {
                return this._matrix = t, this
            }, e.prototype.beginHole = function() {
                return this.finishPoly(), this._holeMode = !0, this
            }, e.prototype.endHole = function() {
                return this.finishPoly(), this._holeMode = !1, this
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this.geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, t.prototype.destroy.call(this, e)
            }, Object.defineProperties(e.prototype, i), e
        }(Xe);
    Wn._TEMP_POINT = new ce;
    var qn = new ce,
        Zn = new Uint16Array([0, 1, 2, 0, 2, 3]),
        Kn = function(t) {
            function e(e) {
                t.call(this), this._anchor = new de(this._onAnchorUpdate, this, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = bt.NORMAL, this.shader = null, this._cachedTint = 16777215, this.uvs = null, this.texture = e || bi.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = Zn, this.size = 4, this.start = 0, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = g.ROUND_PIXELS
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                roundPixels: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                anchor: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                },
                texture: {
                    configurable: !0
                }
            };
            return e.prototype._onTextureUpdate = function() {
                this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = qt(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = qt(this.scale.y) * this._height / this._texture.orig.height)
            }, e.prototype._onAnchorUpdate = function() {
                this._transformID = -1, this._transformTrimmedID = -1
            }, e.prototype.calculateVertices = function() {
                var t = this._texture;
                if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
                    this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
                    var e = this.transform.worldTransform,
                        i = e.a,
                        r = e.b,
                        n = e.c,
                        o = e.d,
                        s = e.tx,
                        a = e.ty,
                        h = this.vertexData,
                        u = t.trim,
                        l = t.orig,
                        c = this._anchor,
                        d = 0,
                        p = 0,
                        f = 0,
                        v = 0;
                    if (u ? (d = (p = u.x - c._x * l.width) + u.width, f = (v = u.y - c._y * l.height) + u.height) : (d = (p = -c._x * l.width) + l.width, f = (v = -c._y * l.height) + l.height), h[0] = i * p + n * v + s, h[1] = o * v + r * p + a, h[2] = i * d + n * v + s, h[3] = o * v + r * d + a, h[4] = i * d + n * f + s, h[5] = o * f + r * d + a, h[6] = i * p + n * f + s, h[7] = o * f + r * p + a, this._roundPixels)
                        for (var g = 0; g < 8; g++) h[g] = Math.round(h[g])
                }
            }, e.prototype.calculateTrimmedVertices = function() {
                if (this.vertexTrimmedData) {
                    if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                } else this.vertexTrimmedData = new Float32Array(8);
                this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                var t = this._texture,
                    e = this.vertexTrimmedData,
                    i = t.orig,
                    r = this._anchor,
                    n = this.transform.worldTransform,
                    o = n.a,
                    s = n.b,
                    a = n.c,
                    h = n.d,
                    u = n.tx,
                    l = n.ty,
                    c = -r._x * i.width,
                    d = c + i.width,
                    p = -r._y * i.height,
                    f = p + i.height;
                e[0] = o * c + a * p + u, e[1] = h * p + s * c + l, e[2] = o * d + a * p + u, e[3] = h * p + s * d + l, e[4] = o * d + a * f + u, e[5] = h * f + s * d + l, e[6] = o * c + a * f + u, e[7] = h * f + s * c + l
            }, e.prototype._render = function(t) {
                this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
            }, e.prototype._calculateBounds = function() {
                var t = this._texture.trim,
                    e = this._texture.orig;
                !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
            }, e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new Ce), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }, e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, qn);
                var e = this._texture.orig.width,
                    i = this._texture.orig.height,
                    r = -e * this.anchor.x,
                    n = 0;
                return qn.x >= r && qn.x < r + e && (n = -i * this.anchor.y, qn.y >= n && qn.y < n + i)
            }, e.prototype.destroy = function(e) {
                if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
                    var i = "boolean" == typeof e ? e : e && e.baseTexture;
                    this._texture.destroy(!!i)
                }
                this._texture = null, this.shader = null
            }, e.from = function(t, i) {
                return new e(t instanceof bi ? t : bi.from(t, i))
            }, i.roundPixels.set = function(t) {
                this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
            }, i.roundPixels.get = function() {
                return this._roundPixels
            }, i.width.get = function() {
                return Math.abs(this.scale.x) * this._texture.orig.width
            }, i.width.set = function(t) {
                var e = qt(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width, this._width = t
            }, i.height.get = function() {
                return Math.abs(this.scale.y) * this._texture.orig.height
            }, i.height.set = function(t) {
                var e = qt(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height, this._height = t
            }, i.anchor.get = function() {
                return this._anchor
            }, i.anchor.set = function(t) {
                this._anchor.copyFrom(t)
            }, i.tint.get = function() {
                return this._tint
            }, i.tint.set = function(t) {
                this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
            }, i.texture.get = function() {
                return this._texture
            }, i.texture.set = function(t) {
                this._texture !== t && (this._texture = t || bi.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
            }, Object.defineProperties(e.prototype, i), e
        }(Xe),
        Jn = {
            LINEAR_VERTICAL: 0,
            LINEAR_HORIZONTAL: 1
        },
        Qn = {
            align: "left",
            breakWords: !1,
            dropShadow: !1,
            dropShadowAlpha: 1,
            dropShadowAngle: Math.PI / 6,
            dropShadowBlur: 0,
            dropShadowColor: "black",
            dropShadowDistance: 5,
            fill: "black",
            fillGradientType: Jn.LINEAR_VERTICAL,
            fillGradientStops: [],
            fontFamily: "Arial",
            fontSize: 26,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            letterSpacing: 0,
            lineHeight: 0,
            lineJoin: "miter",
            miterLimit: 10,
            padding: 0,
            stroke: "black",
            strokeThickness: 0,
            textBaseline: "alphabetic",
            trim: !1,
            whiteSpace: "pre",
            wordWrap: !1,
            wordWrapWidth: 100,
            leading: 0
        },
        $n = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
        to = function(t) {
            this.styleID = 0, this.reset(), no(this, t, t)
        },
        eo = {
            align: {
                configurable: !0
            },
            breakWords: {
                configurable: !0
            },
            dropShadow: {
                configurable: !0
            },
            dropShadowAlpha: {
                configurable: !0
            },
            dropShadowAngle: {
                configurable: !0
            },
            dropShadowBlur: {
                configurable: !0
            },
            dropShadowColor: {
                configurable: !0
            },
            dropShadowDistance: {
                configurable: !0
            },
            fill: {
                configurable: !0
            },
            fillGradientType: {
                configurable: !0
            },
            fillGradientStops: {
                configurable: !0
            },
            fontFamily: {
                configurable: !0
            },
            fontSize: {
                configurable: !0
            },
            fontStyle: {
                configurable: !0
            },
            fontVariant: {
                configurable: !0
            },
            fontWeight: {
                configurable: !0
            },
            letterSpacing: {
                configurable: !0
            },
            lineHeight: {
                configurable: !0
            },
            leading: {
                configurable: !0
            },
            lineJoin: {
                configurable: !0
            },
            miterLimit: {
                configurable: !0
            },
            padding: {
                configurable: !0
            },
            stroke: {
                configurable: !0
            },
            strokeThickness: {
                configurable: !0
            },
            textBaseline: {
                configurable: !0
            },
            trim: {
                configurable: !0
            },
            whiteSpace: {
                configurable: !0
            },
            wordWrap: {
                configurable: !0
            },
            wordWrapWidth: {
                configurable: !0
            }
        };

    function io(t) {
        return "number" == typeof t ? Bt(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
    }

    function ro(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e) t[e] = io(t[e]);
            return t
        }
        return io(t)
    }

    function no(t, e, i) {
        for (var r in i) Array.isArray(e[r]) ? t[r] = e[r].slice() : t[r] = e[r]
    }
    to.prototype.clone = function() {
        var t = {};
        return no(t, this, Qn), new to(t)
    }, to.prototype.reset = function() {
        no(this, Qn, Qn)
    }, eo.align.get = function() {
        return this._align
    }, eo.align.set = function(t) {
        this._align !== t && (this._align = t, this.styleID++)
    }, eo.breakWords.get = function() {
        return this._breakWords
    }, eo.breakWords.set = function(t) {
        this._breakWords !== t && (this._breakWords = t, this.styleID++)
    }, eo.dropShadow.get = function() {
        return this._dropShadow
    }, eo.dropShadow.set = function(t) {
        this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
    }, eo.dropShadowAlpha.get = function() {
        return this._dropShadowAlpha
    }, eo.dropShadowAlpha.set = function(t) {
        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
    }, eo.dropShadowAngle.get = function() {
        return this._dropShadowAngle
    }, eo.dropShadowAngle.set = function(t) {
        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
    }, eo.dropShadowBlur.get = function() {
        return this._dropShadowBlur
    }, eo.dropShadowBlur.set = function(t) {
        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
    }, eo.dropShadowColor.get = function() {
        return this._dropShadowColor
    }, eo.dropShadowColor.set = function(t) {
        var e = ro(t);
        this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
    }, eo.dropShadowDistance.get = function() {
        return this._dropShadowDistance
    }, eo.dropShadowDistance.set = function(t) {
        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
    }, eo.fill.get = function() {
        return this._fill
    }, eo.fill.set = function(t) {
        var e = ro(t);
        this._fill !== e && (this._fill = e, this.styleID++)
    }, eo.fillGradientType.get = function() {
        return this._fillGradientType
    }, eo.fillGradientType.set = function(t) {
        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
    }, eo.fillGradientStops.get = function() {
        return this._fillGradientStops
    }, eo.fillGradientStops.set = function(t) {
        (function(t, e) {
            if (!Array.isArray(t) || !Array.isArray(e)) return !1;
            if (t.length !== e.length) return !1;
            for (var i = 0; i < t.length; ++i)
                if (t[i] !== e[i]) return !1;
            return !0
        })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
    }, eo.fontFamily.get = function() {
        return this._fontFamily
    }, eo.fontFamily.set = function(t) {
        this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
    }, eo.fontSize.get = function() {
        return this._fontSize
    }, eo.fontSize.set = function(t) {
        this._fontSize !== t && (this._fontSize = t, this.styleID++)
    }, eo.fontStyle.get = function() {
        return this._fontStyle
    }, eo.fontStyle.set = function(t) {
        this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
    }, eo.fontVariant.get = function() {
        return this._fontVariant
    }, eo.fontVariant.set = function(t) {
        this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
    }, eo.fontWeight.get = function() {
        return this._fontWeight
    }, eo.fontWeight.set = function(t) {
        this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
    }, eo.letterSpacing.get = function() {
        return this._letterSpacing
    }, eo.letterSpacing.set = function(t) {
        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
    }, eo.lineHeight.get = function() {
        return this._lineHeight
    }, eo.lineHeight.set = function(t) {
        this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
    }, eo.leading.get = function() {
        return this._leading
    }, eo.leading.set = function(t) {
        this._leading !== t && (this._leading = t, this.styleID++)
    }, eo.lineJoin.get = function() {
        return this._lineJoin
    }, eo.lineJoin.set = function(t) {
        this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
    }, eo.miterLimit.get = function() {
        return this._miterLimit
    }, eo.miterLimit.set = function(t) {
        this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
    }, eo.padding.get = function() {
        return this._padding
    }, eo.padding.set = function(t) {
        this._padding !== t && (this._padding = t, this.styleID++)
    }, eo.stroke.get = function() {
        return this._stroke
    }, eo.stroke.set = function(t) {
        var e = ro(t);
        this._stroke !== e && (this._stroke = e, this.styleID++)
    }, eo.strokeThickness.get = function() {
        return this._strokeThickness
    }, eo.strokeThickness.set = function(t) {
        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
    }, eo.textBaseline.get = function() {
        return this._textBaseline
    }, eo.textBaseline.set = function(t) {
        this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
    }, eo.trim.get = function() {
        return this._trim
    }, eo.trim.set = function(t) {
        this._trim !== t && (this._trim = t, this.styleID++)
    }, eo.whiteSpace.get = function() {
        return this._whiteSpace
    }, eo.whiteSpace.set = function(t) {
        this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
    }, eo.wordWrap.get = function() {
        return this._wordWrap
    }, eo.wordWrap.set = function(t) {
        this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
    }, eo.wordWrapWidth.get = function() {
        return this._wordWrapWidth
    }, eo.wordWrapWidth.set = function(t) {
        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
    }, to.prototype.toFontString = function() {
        var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
            e = this.fontFamily;
        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
        for (var i = e.length - 1; i >= 0; i--) {
            var r = e[i].trim();
            !/([\"\'])[^\'\"]+\1/.test(r) && $n.indexOf(r) < 0 && (r = '"' + r + '"'), e[i] = r
        }
        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
    }, Object.defineProperties(to.prototype, eo);
    var oo = function(t, e, i, r, n, o, s, a, h) {
        this.text = t, this.style = e, this.width = i, this.height = r, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = h
    };
    oo.measureText = function(t, e, i, r) {
        void 0 === r && (r = oo._canvas), i = null == i ? e.wordWrap : i;
        var n = e.toFontString(),
            o = oo.measureFont(n);
        0 === o.fontSize && (o.fontSize = e.fontSize, o.ascent = e.fontSize);
        var s = r.getContext("2d");
        s.font = n;
        for (var a = (i ? oo.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/), h = new Array(a.length), u = 0, l = 0; l < a.length; l++) {
            var c = s.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
            h[l] = c, u = Math.max(u, c)
        }
        var d = u + e.strokeThickness;
        e.dropShadow && (d += e.dropShadowDistance);
        var p = e.lineHeight || o.fontSize + e.strokeThickness,
            f = Math.max(p, o.fontSize + e.strokeThickness) + (a.length - 1) * (p + e.leading);
        return e.dropShadow && (f += e.dropShadowDistance), new oo(t, e, d, f, a, h, p + e.leading, u, o)
    }, oo.wordWrap = function(t, e, i) {
        void 0 === i && (i = oo._canvas);
        for (var r = i.getContext("2d"), n = 0, o = "", s = "", a = {}, h = e.letterSpacing, u = e.whiteSpace, l = oo.collapseSpaces(u), c = oo.collapseNewlines(u), d = !l, p = e.wordWrapWidth + h, f = oo.tokenize(t), v = 0; v < f.length; v++) {
            var g = f[v];
            if (oo.isNewline(g)) {
                if (!c) {
                    s += oo.addLine(o), d = !l, o = "", n = 0;
                    continue
                }
                g = " "
            }
            if (l) {
                var m = oo.isBreakingSpace(g),
                    y = oo.isBreakingSpace(o[o.length - 1]);
                if (m && y) continue
            }
            var _ = oo.getFromCache(g, h, a, r);
            if (_ > p)
                if ("" !== o && (s += oo.addLine(o), o = "", n = 0), oo.canBreakWords(g, e.breakWords))
                    for (var x = g.split(""), b = 0; b < x.length; b++) {
                        for (var T = x[b], w = 1; x[b + w];) {
                            var E = x[b + w],
                                S = T[T.length - 1];
                            if (oo.canBreakChars(S, E, g, b, e.breakWords)) break;
                            T += E, w++
                        }
                        b += T.length - 1;
                        var I = oo.getFromCache(T, h, a, r);
                        I + n > p && (s += oo.addLine(o), d = !1, o = "", n = 0), o += T, n += I
                    } else {
                        o.length > 0 && (s += oo.addLine(o), o = "", n = 0);
                        var P = v === f.length - 1;
                        s += oo.addLine(g, !P), d = !1, o = "", n = 0
                    } else _ + n > p && (d = !1, s += oo.addLine(o), o = "", n = 0), (o.length > 0 || !oo.isBreakingSpace(g) || d) && (o += g, n += _)
        }
        return s += oo.addLine(o, !1)
    }, oo.addLine = function(t, e) {
        return void 0 === e && (e = !0), t = oo.trimRight(t), t = e ? t + "\n" : t
    }, oo.getFromCache = function(t, e, i, r) {
        var n = i[t];
        if (void 0 === n) {
            var o = t.length * e;
            n = r.measureText(t).width + o, i[t] = n
        }
        return n
    }, oo.collapseSpaces = function(t) {
        return "normal" === t || "pre-line" === t
    }, oo.collapseNewlines = function(t) {
        return "normal" === t
    }, oo.trimRight = function(t) {
        if ("string" != typeof t) return "";
        for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            if (!oo.isBreakingSpace(i)) break;
            t = t.slice(0, -1)
        }
        return t
    }, oo.isNewline = function(t) {
        return "string" == typeof t && oo._newlines.indexOf(t.charCodeAt(0)) >= 0
    }, oo.isBreakingSpace = function(t) {
        return "string" == typeof t && oo._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
    }, oo.tokenize = function(t) {
        var e = [],
            i = "";
        if ("string" != typeof t) return e;
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            oo.isBreakingSpace(n) || oo.isNewline(n) ? ("" !== i && (e.push(i), i = ""), e.push(n)) : i += n
        }
        return "" !== i && e.push(i), e
    }, oo.canBreakWords = function(t, e) {
        return e
    }, oo.canBreakChars = function(t, e, i, r, n) {
        return !0
    }, oo.measureFont = function(t) {
        if (oo._fonts[t]) return oo._fonts[t];
        var e = {},
            i = oo._canvas,
            r = oo._context;
        r.font = t;
        var n = oo.METRICS_STRING + oo.BASELINE_SYMBOL,
            o = Math.ceil(r.measureText(n).width),
            s = Math.ceil(r.measureText(oo.BASELINE_SYMBOL).width),
            a = 2 * s;
        s = s * oo.BASELINE_MULTIPLIER | 0, i.width = o, i.height = a, r.fillStyle = "#f00", r.fillRect(0, 0, o, a), r.font = t, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, s);
        var h = r.getImageData(0, 0, o, a).data,
            u = h.length,
            l = 4 * o,
            c = 0,
            d = 0,
            p = !1;
        for (c = 0; c < s; ++c) {
            for (var f = 0; f < l; f += 4)
                if (255 !== h[d + f]) {
                    p = !0;
                    break
                } if (p) break;
            d += l
        }
        for (e.ascent = s - c, d = u - l, p = !1, c = a; c > s; --c) {
            for (var v = 0; v < l; v += 4)
                if (255 !== h[d + v]) {
                    p = !0;
                    break
                } if (p) break;
            d -= l
        }
        return e.descent = c - s, e.fontSize = e.ascent + e.descent, oo._fonts[t] = e, e
    }, oo.clearMetrics = function(t) {
        void 0 === t && (t = ""), t ? delete oo._fonts[t] : oo._fonts = {}
    };
    var so = function() {
        try {
            var t = new OffscreenCanvas(0, 0);
            return t.getContext("2d") ? t : document.createElement("canvas")
        } catch (t) {
            return document.createElement("canvas")
        }
    }();
    so.width = so.height = 10, oo._canvas = so, oo._context = so.getContext("2d"), oo._fonts = {}, oo.METRICS_STRING = "|Ã‰qÃ…", oo.BASELINE_SYMBOL = "M", oo.BASELINE_MULTIPLIER = 1.4, oo._newlines = [10, 13], oo._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
    var ao = {
            texture: !0,
            children: !1,
            baseTexture: !0
        },
        ho = function(t) {
            function e(e, i, r) {
                (r = r || document.createElement("canvas")).width = 3, r.height = 3;
                var n = bi.from(r);
                n.orig = new Ce, n.trim = new Ce, t.call(this, n), this.canvas = r, this.context = this.canvas.getContext("2d"), this._resolution = g.RESOLUTION, this._autoResolution = !0, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = i, this.localStyleID = -1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                style: {
                    configurable: !0
                },
                text: {
                    configurable: !0
                },
                resolution: {
                    configurable: !0
                }
            };
            return e.prototype.updateText = function(t) {
                var e = this._style;
                if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                    this._font = this._style.toFontString();
                    var i, r, n = this.context,
                        o = oo.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
                        s = o.width,
                        a = o.height,
                        h = o.lines,
                        u = o.lineHeight,
                        l = o.lineWidths,
                        c = o.maxLineWidth,
                        d = o.fontProperties;
                    this.canvas.width = Math.ceil((Math.max(1, s) + 2 * e.padding) * this._resolution), this.canvas.height = Math.ceil((Math.max(1, a) + 2 * e.padding) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = e.strokeThickness, n.textBaseline = e.textBaseline, n.lineJoin = e.lineJoin, n.miterLimit = e.miterLimit;
                    for (var p = e.dropShadow ? 2 : 1, f = 0; f < p; ++f) {
                        var v = e.dropShadow && 0 === f,
                            g = v ? 2 * a : 0,
                            m = g * this.resolution;
                        if (v) {
                            n.fillStyle = "black", n.strokeStyle = "black";
                            var y = e.dropShadowColor,
                                _ = Nt("number" == typeof y ? y : Ut(y));
                            n.shadowColor = "rgba(" + 255 * _[0] + "," + 255 * _[1] + "," + 255 * _[2] + "," + e.dropShadowAlpha + ")", n.shadowBlur = e.dropShadowBlur, n.shadowOffsetX = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, n.shadowOffsetY = Math.sin(e.dropShadowAngle) * e.dropShadowDistance + m
                        } else n.fillStyle = this._generateFillStyle(e, h), n.strokeStyle = e.stroke, n.shadowColor = 0, n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;
                        for (var x = 0; x < h.length; x++) i = e.strokeThickness / 2, r = e.strokeThickness / 2 + x * u + d.ascent, "right" === e.align ? i += c - l[x] : "center" === e.align && (i += (c - l[x]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(h[x], i + e.padding, r + e.padding - g, !0), e.fill && this.drawLetterSpacing(h[x], i + e.padding, r + e.padding - g)
                    }
                    this.updateTexture()
                }
            }, e.prototype.drawLetterSpacing = function(t, e, i, r) {
                void 0 === r && (r = !1);
                var n = this._style.letterSpacing;
                if (0 !== n)
                    for (var o = e, s = Array.from ? Array.from(t) : t.split(""), a = this.context.measureText(t).width, h = 0, u = 0; u < s.length; ++u) {
                        var l = s[u];
                        r ? this.context.strokeText(l, o, i) : this.context.fillText(l, o, i), o += a - (h = this.context.measureText(t.substring(u + 1)).width) + n, a = h
                    } else r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i)
            }, e.prototype.updateTexture = function() {
                var t = this.canvas;
                if (this._style.trim) {
                    var e = ee(t);
                    e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
                }
                var i = this._texture,
                    r = this._style,
                    n = r.trim ? 0 : r.padding,
                    o = i.baseTexture;
                i.trim.width = i._frame.width = Math.ceil(t.width / this._resolution), i.trim.height = i._frame.height = Math.ceil(t.height / this._resolution), i.trim.x = -n, i.trim.y = -n, i.orig.width = i._frame.width - 2 * n, i.orig.height = i._frame.height - 2 * n, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), this.dirty = !1
            }, e.prototype._render = function(e) {
                this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._render.call(this, e)
            }, e.prototype.getLocalBounds = function(e) {
                return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
            }, e.prototype._calculateBounds = function() {
                this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
            }, e.prototype._onStyleChange = function() {
                this.dirty = !0
            }, e.prototype._generateFillStyle = function(t, e) {
                if (!Array.isArray(t.fill)) return t.fill;
                if (1 === t.fill.length) return t.fill[0];
                var i, r, n, o, s = Math.ceil(this.canvas.width / this._resolution),
                    a = Math.ceil(this.canvas.height / this._resolution),
                    h = t.fill.slice(),
                    u = t.fillGradientStops.slice();
                if (!u.length)
                    for (var l = h.length + 1, c = 1; c < l; ++c) u.push(c / l);
                if (h.unshift(t.fill[0]), u.unshift(0), h.push(t.fill[t.fill.length - 1]), u.push(1), t.fillGradientType === Jn.LINEAR_VERTICAL) {
                    i = this.context.createLinearGradient(s / 2, 0, s / 2, a), r = (h.length + 1) * e.length, n = 0;
                    for (var d = 0; d < e.length; d++) {
                        n += 1;
                        for (var p = 0; p < h.length; p++) o = "number" == typeof u[p] ? u[p] / e.length + d / e.length : n / r, i.addColorStop(o, h[p]), n++
                    }
                } else {
                    i = this.context.createLinearGradient(0, a / 2, s, a / 2), r = h.length + 1, n = 1;
                    for (var f = 0; f < h.length; f++) o = "number" == typeof u[f] ? u[f] : n / r, i.addColorStop(o, h[f]), n++
                }
                return i
            }, e.prototype.destroy = function(e) {
                "boolean" == typeof e && (e = {
                    children: e
                }), e = Object.assign({}, ao, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null
            }, i.width.get = function() {
                return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
            }, i.width.set = function(t) {
                this.updateText(!0);
                var e = qt(this.scale.x) || 1;
                this.scale.x = e * t / this._texture.orig.width, this._width = t
            }, i.height.get = function() {
                return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
            }, i.height.set = function(t) {
                this.updateText(!0);
                var e = qt(this.scale.y) || 1;
                this.scale.y = e * t / this._texture.orig.height, this._height = t
            }, i.style.get = function() {
                return this._style
            }, i.style.set = function(t) {
                t = t || {}, this._style = t instanceof to ? t : new to(t), this.localStyleID = -1, this.dirty = !0
            }, i.text.get = function() {
                return this._text
            }, i.text.set = function(t) {
                t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
            }, i.resolution.get = function() {
                return this._resolution
            }, i.resolution.set = function(t) {
                this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
            }, Object.defineProperties(e.prototype, i), e
        }(Kn);
    g.UPLOADS_PER_FRAME = 4;
    var uo = function(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0
    };
    uo.prototype.beginFrame = function() {
        this.itemsLeft = this.maxItemsPerFrame
    }, uo.prototype.allowedToUpload = function() {
        return this.itemsLeft-- > 0
    };
    var lo = function(t) {
        var e = this;
        this.limiter = new uo(g.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
            e.queue && e.prepareItems()
        }, this.registerFindHook(mo), this.registerFindHook(yo), this.registerFindHook(co), this.registerFindHook(po), this.registerFindHook(fo), this.registerUploadHook(vo), this.registerUploadHook(go)
    };

    function co(t, e) {
        var i = !1;
        if (t && t._textures && t._textures.length)
            for (var r = 0; r < t._textures.length; r++)
                if (t._textures[r] instanceof bi) {
                    var n = t._textures[r].baseTexture; - 1 === e.indexOf(n) && (e.push(n), i = !0)
                } return i
    }

    function po(t, e) {
        return t instanceof si && (-1 === e.indexOf(t) && e.push(t), !0)
    }

    function fo(t, e) {
        if (t._texture && t._texture instanceof bi) {
            var i = t._texture.baseTexture;
            return -1 === e.indexOf(i) && e.push(i), !0
        }
        return !1
    }

    function vo(t, e) {
        return e instanceof ho && (e.updateText(!0), !0)
    }

    function go(t, e) {
        if (e instanceof to) {
            var i = e.toFontString();
            return oo.measureFont(i), !0
        }
        return !1
    }

    function mo(t, e) {
        if (t instanceof ho) {
            -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
            var i = t._texture.baseTexture;
            return -1 === e.indexOf(i) && e.push(i), !0
        }
        return !1
    }

    function yo(t, e) {
        return t instanceof to && (-1 === e.indexOf(t) && e.push(t), !0)
    }
    lo.prototype.upload = function(t, e) {
        "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, qe.system.addOnce(this.tick, this, Ye.UTILITY))) : e && e()
    }, lo.prototype.tick = function() {
        setTimeout(this.delayedTick, 0)
    }, lo.prototype.prepareItems = function() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
            var t = this.queue[0],
                e = !1;
            if (t && !t._destroyed)
                for (var i = 0, r = this.uploadHooks.length; i < r; i++)
                    if (this.uploadHooks[i](this.uploadHookHelper, t)) {
                        this.queue.shift(), e = !0;
                        break
                    } e || this.queue.shift()
        }
        if (this.queue.length) qe.system.addOnce(this.tick, this, Ye.UTILITY);
        else {
            this.ticking = !1;
            var n = this.completes.slice(0);
            this.completes.length = 0;
            for (var o = 0, s = n.length; o < s; o++) n[o]()
        }
    }, lo.prototype.registerFindHook = function(t) {
        return t && this.addHooks.push(t), this
    }, lo.prototype.registerUploadHook = function(t) {
        return t && this.uploadHooks.push(t), this
    }, lo.prototype.add = function(t) {
        for (var e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++);
        if (t instanceof Xe)
            for (var r = t.children.length - 1; r >= 0; r--) this.add(t.children[r]);
        return this
    }, lo.prototype.destroy = function() {
        this.ticking && qe.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
    };
    var _o = function(t) {
        function e(e) {
            t.call(this, e), this.uploadHookHelper = this.renderer, this.registerFindHook(To), this.registerUploadHook(xo), this.registerUploadHook(bo)
        }
        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
    }(lo);

    function xo(t, e) {
        return e instanceof si && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
    }

    function bo(t, e) {
        return e instanceof Wn && ((e.dirty || e.clearDirty || !e._webGL[t.plugins.graphics.CONTEXT_UID]) && t.plugins.graphics.updateGraphics(e), !0)
    }

    function To(t, e) {
        return t instanceof Wn && (e.push(t), !0)
    }
    var wo = function(t) {
        this.maxMilliseconds = t, this.frameStart = 0
    };
    wo.prototype.beginFrame = function() {
        this.frameStart = Date.now()
    }, wo.prototype.allowedToUpload = function() {
        return Date.now() - this.frameStart < this.maxMilliseconds
    };
    var Eo = {
            BasePrepare: lo,
            CountLimiter: uo,
            Prepare: _o,
            TimeLimiter: wo
        },
        So = function t(e) {
            var i = this;
            e = Object.assign({
                forceCanvas: !1
            }, e), this.renderer = Kr(e), this.stage = new Xe, t._plugins.forEach(function(t) {
                t.init.call(i, e)
            })
        },
        Io = {
            view: {
                configurable: !0
            },
            screen: {
                configurable: !0
            }
        };
    So.registerPlugin = function(t) {
        So._plugins.push(t)
    }, So.prototype.render = function() {
        this.renderer.render(this.stage)
    }, Io.view.get = function() {
        return this.renderer.view
    }, Io.screen.get = function() {
        return this.renderer.screen
    }, So.prototype.destroy = function(t, e) {
        var i = this,
            r = So._plugins.slice(0);
        r.reverse(), r.forEach(function(t) {
            t.destroy.call(i)
        }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null
    }, Object.defineProperties(So.prototype, Io), So._plugins = [];
    var Po = function() {};
    Po.init = function(t) {
        var e = this;
        Object.defineProperty(this, "resizeTo", {
            set: function(t) {
                window.removeEventListener("resize", this.resize), this._resizeTo = t, t && (window.addEventListener("resize", this.resize), this.resize())
            },
            get: function() {
                return this._resizeTo
            }
        }), this.resize = function() {
            e._resizeTo && (e._resizeTo === window ? e.renderer.resize(window.innerWidth, window.innerHeight) : e.renderer.resize(e._resizeTo.clientWidth, e._resizeTo.clientHeight))
        }, this._resizeTo = null, this.resizeTo = t.resizeTo || null
    }, Po.destroy = function() {
        this.resizeTo = null, this.resize = null
    }, So.registerPlugin(Po);
    var Ao = function(t, e) {
            e = e || {};
            for (var i = {
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[i.key[o]] = r[o] || "";
            return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function(t, e, r) {
                e && (n[i.q.name][e] = r)
            }), n
        },
        Oo = function(t) {
            return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
        }(i(function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, i, r) {
                    return i && t(e.prototype, i), r && t(e, r), e
                }
            }();

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var n = function() {
                function t(e, i, n) {
                    void 0 === i && (i = !1), r(this, t), this._fn = e, this._once = i, this._thisArg = n, this._next = this._prev = this._owner = null
                }
                return i(t, [{
                    key: "detach",
                    value: function() {
                        return null !== this._owner && (this._owner.detach(this), !0)
                    }
                }]), t
            }();

            function o(t, e) {
                return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
            }
            var s = function() {
                function t() {
                    r(this, t), this._head = this._tail = void 0
                }
                return i(t, [{
                    key: "handlers",
                    value: function() {
                        var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                            e = this._head;
                        if (t) return !!e;
                        for (var i = []; e;) i.push(e), e = e._next;
                        return i
                    }
                }, {
                    key: "has",
                    value: function(t) {
                        if (!(t instanceof n)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                        return t._owner === this
                    }
                }, {
                    key: "dispatch",
                    value: function() {
                        var t = arguments,
                            e = this._head;
                        if (!e) return !1;
                        for (; e;) e._once && this.detach(e), e._fn.apply(e._thisArg, t), e = e._next;
                        return !0
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                        return o(this, new n(t, !1, e))
                    }
                }, {
                    key: "once",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                        return o(this, new n(t, !0, e))
                    }
                }, {
                    key: "detach",
                    value: function(t) {
                        if (!(t instanceof n)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                        return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
                    }
                }, {
                    key: "detachAll",
                    value: function() {
                        var t = this._head;
                        if (!t) return this;
                        for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                        return this
                    }
                }]), t
            }();
            s.MiniSignalBinding = n, e.default = s, t.exports = e.default
        }));

    function Co() {}

    function Mo(t, e, i, r) {
        var n = 0,
            o = t.length;
        ! function s(a) {
            a || n === o ? i && i(a) : r ? setTimeout(function() {
                e(t[n++], s)
            }, 1) : e(t[n++], s)
        }()
    }

    function Do(t) {
        return function() {
            if (null === t) throw new Error("Callback was already called.");
            var e = t;
            t = null, e.apply(this, arguments)
        }
    }

    function Ro(t, e) {
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var i = 0,
            r = {
                _tasks: [],
                concurrency: e,
                saturated: Co,
                unsaturated: Co,
                buffer: e / 4,
                empty: Co,
                drain: Co,
                error: Co,
                started: !1,
                paused: !1,
                push: function(t, e) {
                    n(t, !1, e)
                },
                kill: function() {
                    i = 0, r.drain = Co, r.started = !1, r._tasks = []
                },
                unshift: function(t, e) {
                    n(t, !0, e)
                },
                process: function() {
                    for (; !r.paused && i < r.concurrency && r._tasks.length;) {
                        var e = r._tasks.shift();
                        0 === r._tasks.length && r.empty(), (i += 1) === r.concurrency && r.saturated(), t(e.data, Do(o(e)))
                    }
                },
                length: function() {
                    return r._tasks.length
                },
                running: function() {
                    return i
                },
                idle: function() {
                    return r._tasks.length + i === 0
                },
                pause: function() {
                    !0 !== r.paused && (r.paused = !0)
                },
                resume: function() {
                    if (!1 !== r.paused) {
                        r.paused = !1;
                        for (var t = 1; t <= r.concurrency; t++) r.process()
                    }
                }
            };

        function n(t, e, i) {
            if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
            if (r.started = !0, null == t && r.idle()) setTimeout(function() {
                return r.drain()
            }, 1);
            else {
                var n = {
                    data: t,
                    callback: "function" == typeof i ? i : Co
                };
                e ? r._tasks.unshift(n) : r._tasks.push(n), setTimeout(function() {
                    return r.process()
                }, 1)
            }
        }

        function o(t) {
            return function() {
                i -= 1, t.callback.apply(t, arguments), null != arguments[0] && r.error(arguments[0], t.data), i <= r.concurrency - r.buffer && r.unsaturated(), r.idle() && r.drain(), r.process()
            }
        }
        return r
    }
    var Fo = {};

    function Lo(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function No(t, e, i) {
        return e && Lo(t.prototype, e), i && Lo(t, i), t
    }
    var Bo = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
        Uo = null;

    function ko() {}
    var Xo = function() {
        function t(e, i, r) {
            if ("string" != typeof e || "string" != typeof i) throw new Error("Both name and url are required for constructing a resource.");
            r = r || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === i.indexOf("data:")), this.name = e, this.url = i, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.timeout = r.timeout || 0, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = ko, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new Oo, this.onProgress = new Oo, this.onComplete = new Oo, this.onAfterMiddleware = new Oo
        }
        t.setExtensionLoadType = function(e, i) {
            jo(t._loadTypeMap, e, i)
        }, t.setExtensionXhrType = function(e, i) {
            jo(t._xhrTypeMap, e, i)
        };
        var e = t.prototype;
        return e.complete = function() {
            this._clearEvents(), this._finish()
        }, e.abort = function(e) {
            if (!this.error) {
                if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                else if (this.xdr) this.xdr.abort();
                else if (this.data)
                    if (this.data.src) this.data.src = t.EMPTY_GIF;
                    else
                        for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                this._finish()
            }
        }, e.load = function(e) {
            var i = this;
            if (!this.isLoading)
                if (this.isComplete) e && setTimeout(function() {
                    return e(i)
                }, 1);
                else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                    case t.LOAD_TYPE.IMAGE:
                        this.type = t.TYPE.IMAGE, this._loadElement("image");
                        break;
                    case t.LOAD_TYPE.AUDIO:
                        this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                        break;
                    case t.LOAD_TYPE.VIDEO:
                        this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                        break;
                    case t.LOAD_TYPE.XHR:
                    default:
                        Bo && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
        }, e._hasFlag = function(t) {
            return 0 != (this._flags & t)
        }, e._setFlag = function(t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t
        }, e._clearEvents = function() {
            clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
        }, e._finish = function() {
            if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
        }, e._loadElement = function(t) {
            this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
        }, e._loadSourceElement = function(t) {
            if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                    if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url))
                    for (var e = this.metadata.mimeType, i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i], Array.isArray(e) ? e[i] : e));
                else {
                    var r = this.metadata.mimeType;
                    this.data.appendChild(this._createSource(t, this.url, Array.isArray(r) ? r[0] : r))
                }
                this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            } else this.abort("Unsupported element: " + t)
        }, e._loadXhr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var e = this.xhr = new XMLHttpRequest;
            e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
        }, e._loadXdr = function() {
            "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
            var t = this.xhr = new XDomainRequest;
            t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                return t.send()
            }, 1)
        }, e._createSource = function(t, e, i) {
            i || (i = t + "/" + this._getExtension(e));
            var r = document.createElement("source");
            return r.src = e, r.type = i, r
        }, e._onError = function(t) {
            this.abort("Failed to load element using: " + t.target.nodeName)
        }, e._onProgress = function(t) {
            t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
        }, e._onTimeout = function() {
            this.abort("Load timed out.")
        }, e._xhrOnError = function() {
            var t = this.xhr;
            this.abort(Go(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
        }, e._xhrOnTimeout = function() {
            var t = this.xhr;
            this.abort(Go(t) + " Request timed out.")
        }, e._xhrOnAbort = function() {
            var t = this.xhr;
            this.abort(Go(t) + " Request was aborted by the user.")
        }, e._xhrOnLoad = function() {
            var e = this.xhr,
                i = "",
                r = void 0 === e.status ? 200 : e.status;
            if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (i = e.responseText), 0 === r && (i.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? r = 200 : 1223 === r && (r = 204), 2 === (r / 100 | 0)) {
                if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = i, this.type = t.TYPE.TEXT;
                else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(i), this.type = t.TYPE.JSON
                } catch (t) {
                    return void this.abort("Error trying to parse loaded json: " + t)
                } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (window.DOMParser) {
                        var n = new DOMParser;
                        this.data = n.parseFromString(i, "text/xml")
                    } else {
                        var o = document.createElement("div");
                        o.innerHTML = i, this.data = o
                    }
                    this.type = t.TYPE.XML
                } catch (t) {
                    return void this.abort("Error trying to parse loaded xml: " + t)
                } else this.data = e.response || i;
                this.complete()
            } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL)
        }, e._determineCrossOrigin = function(t, e) {
            if (0 === t.indexOf("data:")) return "";
            if (window.origin !== window.location.origin) return "anonymous";
            e = e || window.location, Uo || (Uo = document.createElement("a")), Uo.href = t;
            var i = !(t = Ao(Uo.href, {
                    strictMode: !0
                })).port && "" === e.port || t.port === e.port,
                r = t.protocol ? t.protocol + ":" : "";
            return t.host === e.hostname && i && r === e.protocol ? "" : "anonymous"
        }, e._determineXhrType = function() {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
        }, e._determineLoadType = function() {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
        }, e._getExtension = function() {
            var t = this.url,
                e = "";
            if (this.isDataUrl) {
                var i = t.indexOf("/");
                e = t.substring(i + 1, t.indexOf(";", i))
            } else {
                var r = t.indexOf("?"),
                    n = t.indexOf("#"),
                    o = Math.min(r > -1 ? r : t.length, n > -1 ? n : t.length);
                e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
            }
            return e.toLowerCase()
        }, e._getMimeFromXhrType = function(e) {
            switch (e) {
                case t.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                case t.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                case t.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                case t.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                case t.XHR_RESPONSE_TYPE.DEFAULT:
                case t.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain"
            }
        }, No(t, [{
            key: "isDataUrl",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
            }
        }, {
            key: "isComplete",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
            }
        }, {
            key: "isLoading",
            get: function() {
                return this._hasFlag(t.STATUS_FLAGS.LOADING)
            }
        }]), t
    }();

    function jo(t, e, i) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
    }

    function Go(t) {
        return t.toString().replace("object ", "")
    }
    Xo.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
    }, Xo.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
    }, Xo.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    }, Xo.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    }, Xo._loadTypeMap = {
        gif: Xo.LOAD_TYPE.IMAGE,
        png: Xo.LOAD_TYPE.IMAGE,
        bmp: Xo.LOAD_TYPE.IMAGE,
        jpg: Xo.LOAD_TYPE.IMAGE,
        jpeg: Xo.LOAD_TYPE.IMAGE,
        tif: Xo.LOAD_TYPE.IMAGE,
        tiff: Xo.LOAD_TYPE.IMAGE,
        webp: Xo.LOAD_TYPE.IMAGE,
        tga: Xo.LOAD_TYPE.IMAGE,
        svg: Xo.LOAD_TYPE.IMAGE,
        "svg+xml": Xo.LOAD_TYPE.IMAGE,
        mp3: Xo.LOAD_TYPE.AUDIO,
        ogg: Xo.LOAD_TYPE.AUDIO,
        wav: Xo.LOAD_TYPE.AUDIO,
        mp4: Xo.LOAD_TYPE.VIDEO,
        webm: Xo.LOAD_TYPE.VIDEO
    }, Xo._xhrTypeMap = {
        xhtml: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        html: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: Xo.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: Xo.XHR_RESPONSE_TYPE.BLOB,
        png: Xo.XHR_RESPONSE_TYPE.BLOB,
        bmp: Xo.XHR_RESPONSE_TYPE.BLOB,
        jpg: Xo.XHR_RESPONSE_TYPE.BLOB,
        jpeg: Xo.XHR_RESPONSE_TYPE.BLOB,
        tif: Xo.XHR_RESPONSE_TYPE.BLOB,
        tiff: Xo.XHR_RESPONSE_TYPE.BLOB,
        webp: Xo.XHR_RESPONSE_TYPE.BLOB,
        tga: Xo.XHR_RESPONSE_TYPE.BLOB,
        json: Xo.XHR_RESPONSE_TYPE.JSON,
        text: Xo.XHR_RESPONSE_TYPE.TEXT,
        txt: Xo.XHR_RESPONSE_TYPE.TEXT,
        ttf: Xo.XHR_RESPONSE_TYPE.BUFFER,
        otf: Xo.XHR_RESPONSE_TYPE.BUFFER
    }, Xo.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    var Ho = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var zo = window.URL || window.webkitURL;
    var Vo = {
            caching: function(t, e) {
                var i = this;
                Fo[t.url] ? (t.data = Fo[t.url], t.complete()) : t.onComplete.once(function() {
                    return Fo[i.url] = i.data
                }), e()
            },
            parsing: function(t, e) {
                if (t.data) {
                    if (t.xhr && t.xhrType === Xo.XHR_RESPONSE_TYPE.BLOB)
                        if (window.Blob && "string" != typeof t.data) {
                            if (0 === t.data.type.indexOf("image")) {
                                var i = zo.createObjectURL(t.data);
                                return t.blob = t.data, t.data = new Image, t.data.src = i, t.type = Xo.TYPE.IMAGE, void(t.data.onload = function() {
                                    zo.revokeObjectURL(i), t.data.onload = null, e()
                                })
                            }
                        } else {
                            var r = t.xhr.getResponseHeader("content-type");
                            if (r && 0 === r.indexOf("image")) return t.data = new Image, t.data.src = "data:" + r + ";base64," + function(t) {
                                for (var e = "", i = 0; i < t.length;) {
                                    for (var r = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < r.length; ++o) i < t.length ? r[o] = 255 & t.charCodeAt(i++) : r[o] = 0;
                                    switch (n[0] = r[0] >> 2, n[1] = (3 & r[0]) << 4 | r[1] >> 4, n[2] = (15 & r[1]) << 2 | r[2] >> 6, n[3] = 63 & r[2], i - (t.length - 1)) {
                                        case 2:
                                            n[3] = 64, n[2] = 64;
                                            break;
                                        case 1:
                                            n[3] = 64
                                    }
                                    for (var s = 0; s < n.length; ++s) e += Ho.charAt(n[s])
                                }
                                return e
                            }(t.xhr.responseText), t.type = Xo.TYPE.IMAGE, void(t.data.onload = function() {
                                t.data.onload = null, e()
                            })
                        } e()
                } else e()
            }
        },
        Yo = /(#[\w-]+)?$/,
        Wo = function() {
            function t(e, i) {
                var r = this;
                void 0 === e && (e = ""), void 0 === i && (i = 10), this.baseUrl = e, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, e) {
                    return r._loadResource(t, e)
                }, this._queue = Ro(this._boundLoadResource, i), this._queue.pause(), this.resources = {}, this.onProgress = new Oo, this.onError = new Oo, this.onLoad = new Oo, this.onStart = new Oo, this.onComplete = new Oo;
                for (var n = 0; n < t._defaultBeforeMiddleware.length; ++n) this.pre(t._defaultBeforeMiddleware[n]);
                for (var o = 0; o < t._defaultAfterMiddleware.length; ++o) this.use(t._defaultAfterMiddleware[o])
            }
            var e = t.prototype;
            return e.add = function(t, e, i, r) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) this.add(t[n]);
                    return this
                }
                if ("object" == typeof t && (r = e || t.callback || t.onComplete, i = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof i && (r = i, i = null), this.loading && (!i || !i.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                if (e = this._prepareUrl(e), this.resources[t] = new Xo(t, e, i), "function" == typeof r && this.resources[t].onAfterMiddleware.once(r), this.loading) {
                    for (var o = i.parentResource, s = [], a = 0; a < o.children.length; ++a) o.children[a].isComplete || s.push(o.children[a]);
                    var h = o.progressChunk * (s.length + 1) / (s.length + 2);
                    o.children.push(this.resources[t]), o.progressChunk = h;
                    for (var u = 0; u < s.length; ++u) s[u].progressChunk = h;
                    this.resources[t].progressChunk = h
                }
                return this._queue.push(this.resources[t]), this
            }, e.pre = function(t) {
                return this._beforeMiddleware.push(t), this
            }, e.use = function(t) {
                return this._afterMiddleware.push(t), this
            }, e.reset = function() {
                for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                    var e = this.resources[t];
                    e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                }
                return this.resources = {}, this
            }, e.load = function(t) {
                if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                if (this._queue.idle()) this._onStart(), this._onComplete();
                else {
                    for (var e = 100 / this._queue._tasks.length, i = 0; i < this._queue._tasks.length; ++i) this._queue._tasks[i].data.progressChunk = e;
                    this._onStart(), this._queue.resume()
                }
                return this
            }, e._prepareUrl = function(t) {
                var e, i = Ao(t, {
                    strictMode: !0
                });
                if (e = i.protocol || !i.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                    var r = Yo.exec(e)[0]; - 1 !== (e = e.substr(0, e.length - r.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += r
                }
                return e
            }, e._loadResource = function(t, e) {
                var i = this;
                t._dequeue = e, Mo(this._beforeMiddleware, function(e, r) {
                    e.call(i, t, function() {
                        r(t.isComplete ? {} : null)
                    })
                }, function() {
                    t.isComplete ? i._onLoad(t) : (t._onLoadBinding = t.onComplete.once(i._onLoad, i), t.load())
                }, !0)
            }, e._onStart = function() {
                this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
            }, e._onComplete = function() {
                this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
            }, e._onLoad = function(t) {
                var e = this;
                t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), Mo(this._afterMiddleware, function(i, r) {
                    i.call(e, t, r)
                }, function() {
                    t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                }, !0)
            }, No(t, [{
                key: "concurrency",
                get: function() {
                    return this._queue.concurrency
                },
                set: function(t) {
                    this._queue.concurrency = t
                }
            }]), t
        }();
    Wo._defaultBeforeMiddleware = [], Wo._defaultAfterMiddleware = [], Wo.pre = function(t) {
        return Wo._defaultBeforeMiddleware.push(t), Wo
    }, Wo.use = function(t) {
        return Wo._defaultAfterMiddleware.push(t), Wo
    };
    var qo = function() {};
    qo.use = function(t, e) {
        t.data && t.type === Xo.TYPE.IMAGE && (t.texture = bi.fromLoader(t.data, t.url, t.name)), e()
    };
    var Zo = function(t) {
        function e(i, r) {
            var n = this;
            t.call(this, i, r), m.call(this);
            for (var o = 0; o < e._plugins.length; ++o) {
                var s = e._plugins[o],
                    a = s.pre,
                    h = s.use;
                a && this.pre(a), h && this.use(h)
            }
            this.onStart.add(function(t) {
                return n.emit("start", t)
            }), this.onProgress.add(function(t, e) {
                return n.emit("progress", t, e)
            }), this.onError.add(function(t, e, i) {
                return n.emit("error", t, e, i)
            }), this.onLoad.add(function(t, e) {
                return n.emit("load", t, e)
            }), this.onComplete.add(function(t, e) {
                return n.emit("complete", t, e)
            }), this._protected = !1
        }
        t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
        var i = {
            shared: {
                configurable: !0
            }
        };
        return e.prototype.destroy = function() {
            this._protected || (this.removeAllListeners(), this.reset())
        }, i.shared.get = function() {
            var t = e._shared;
            return t || ((t = new e)._protected = !0, e._shared = t), t
        }, Object.defineProperties(e, i), e
    }(Wo);
    Object.assign(Zo.prototype, m.prototype), Zo._plugins = [], Zo.registerPlugin = function(t) {
        return Zo._plugins.push(t), t.add && t.add(), Zo
    }, Zo.registerPlugin({
        use: Vo.parsing
    }), Zo.registerPlugin(qo);
    var Ko = function() {};
    Ko.init = function(t) {
        t = Object.assign({
            sharedLoader: !1
        }, t), this.loader = t.sharedLoader ? Zo.shared : new Zo
    }, Ko.destroy = function() {
        this.loader && (this.loader.destroy(), this.loader = null)
    };
    var Jo = Xo,
        Qo = function(t) {
            function e(e, i, r, n) {
                void 0 === e && (e = 1500), void 0 === r && (r = 16384), void 0 === n && (n = !1), t.call(this);
                r > 16384 && (r = 16384), this._properties = [!1, !0, !1, !1, !1], this._maxSize = e, this._batchSize = r, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = bt.NORMAL, this.autoResize = n, this.roundPixels = !0, this.baseTexture = null, this.setProperties(i), this._tint = 0, this.tintRgb = new Float32Array(4), this.tint = 16777215
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                tint: {
                    configurable: !0
                }
            };
            return e.prototype.setProperties = function(t) {
                t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
            }, e.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            }, i.tint.get = function() {
                return this._tint
            }, i.tint.set = function(t) {
                this._tint = t, Nt(t, this.tintRgb)
            }, e.prototype.render = function(t) {
                var e = this;
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function() {
                    return e.onChildrenChange(0)
                })), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
            }, e.prototype.onChildrenChange = function(t) {
                for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
                this._bufferUpdateIDs[e] = ++this._updateID
            }, e.prototype.dispose = function() {
                if (this._buffers) {
                    for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                    this._buffers = null
                }
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
            }, Object.defineProperties(e.prototype, i), e
        }(Xe),
        $o = function(t, e, i) {
            this.geometry = new Ri, this.indexBuffer = null, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
            for (var r = 0; r < t.length; ++r) {
                var n = t[r];
                n = {
                    attributeName: n.attributeName,
                    size: n.size,
                    uploadFunction: n.uploadFunction,
                    type: n.type || St.FLOAT,
                    offset: n.offset
                }, e[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
            }
            this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
        };
    $o.prototype.initBuffers = function() {
        var t = this.geometry,
            e = 0;
        this.indexBuffer = new Pi(zt(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
        for (var i = 0; i < this.dynamicProperties.length; ++i) {
            var r = this.dynamicProperties[i];
            r.offset = e, e += r.size, this.dynamicStride += r.size
        }
        var n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(n), this.dynamicDataUint32 = new Uint32Array(n), this.dynamicBuffer = new Pi(this.dynamicData, !1, !1);
        var o = 0;
        this.staticStride = 0;
        for (var s = 0; s < this.staticProperties.length; ++s) {
            var a = this.staticProperties[s];
            a.offset = o, o += a.size, this.staticStride += a.size
        }
        var h = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(h), this.staticDataUint32 = new Uint32Array(h), this.staticBuffer = new Pi(this.staticData, !0, !1);
        for (var u = 0; u < this.dynamicProperties.length; ++u) {
            var l = this.dynamicProperties[u];
            t.addAttribute(l.attributeName, this.dynamicBuffer, 0, l.type === St.UNSIGNED_BYTE, l.type, 4 * this.dynamicStride, 4 * l.offset)
        }
        for (var c = 0; c < this.staticProperties.length; ++c) {
            var d = this.staticProperties[c];
            t.addAttribute(d.attributeName, this.staticBuffer, 0, d.type === St.UNSIGNED_BYTE, d.type, 4 * this.staticStride, 4 * d.offset)
        }
    }, $o.prototype.uploadDynamic = function(t, e, i) {
        for (var r = 0; r < this.dynamicProperties.length; r++) {
            var n = this.dynamicProperties[r];
            n.uploadFunction(t, e, i, n.type === St.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
        }
        this.dynamicBuffer._updateID++
    }, $o.prototype.uploadStatic = function(t, e, i) {
        for (var r = 0; r < this.staticProperties.length; r++) {
            var n = this.staticProperties[r];
            n.uploadFunction(t, e, i, n.type === St.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
        }
        this.staticBuffer._updateID++
    }, $o.prototype.destroy = function() {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
    };
    var ts = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
        es = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
        is = function(t) {
            function e(e) {
                t.call(this, e), this.shader = null, this.properties = null, this.tempMatrix = new ye, this.properties = [{
                    attributeName: "aVertexPosition",
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attributeName: "aPositionCoord",
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attributeName: "aRotation",
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attributeName: "aTextureCoord",
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attributeName: "aColor",
                    size: 1,
                    type: St.UNSIGNED_BYTE,
                    uploadFunction: this.uploadTint,
                    offset: 0
                }], this.shader = yr.from(ts, es, {})
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function(t) {
                var e = t.children,
                    i = t._maxSize,
                    r = t._batchSize,
                    n = this.renderer,
                    o = e.length;
                if (0 !== o) {
                    o > i && !t.autoResize && (o = i);
                    var s = t._buffers;
                    s || (s = t._buffers = this.generateBuffers(t));
                    var a = e[0]._texture.baseTexture;
                    this.renderer.state.setBlendMode(Xt(t.blendMode, a.premultiplyAlpha));
                    var h = n.gl,
                        u = t.worldTransform.copyTo(this.tempMatrix);
                    u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = jt(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.premultiplyAlpha), this.shader.uniforms.uSampler = a, this.renderer.shader.bind(this.shader);
                    for (var l = !1, c = 0, d = 0; c < o; c += r, d += 1) {
                        var p = o - c;
                        p > r && (p = r), d >= s.length && s.push(this._generateOneMoreBuffer(t));
                        var f = s[d];
                        f.uploadDynamic(e, c, p);
                        var v = t._bufferUpdateIDs[d] || 0;
                        (l = l || f._updateID < v) && (f._updateID = t._updateID, f.uploadStatic(e, c, p)), n.geometry.bind(f.geometry), h.drawElements(h.TRIANGLES, 6 * p, h.UNSIGNED_SHORT, 0)
                    }
                }
            }, e.prototype.generateBuffers = function(t) {
                for (var e = [], i = t._maxSize, r = t._batchSize, n = t._properties, o = 0; o < i; o += r) e.push(new $o(this.properties, n, r));
                return e
            }, e.prototype._generateOneMoreBuffer = function(t) {
                var e = t._batchSize,
                    i = t._properties;
                return new $o(this.properties, i, e)
            }, e.prototype.uploadVertices = function(t, e, i, r, n, o) {
                for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < i; ++l) {
                    var c = t[e + l],
                        d = c._texture,
                        p = c.scale.x,
                        f = c.scale.y,
                        v = d.trim,
                        g = d.orig;
                    v ? (s = (a = v.x - c.anchor.x * g.width) + v.width, h = (u = v.y - c.anchor.y * g.height) + v.height) : (s = g.width * (1 - c.anchor.x), a = g.width * -c.anchor.x, h = g.height * (1 - c.anchor.y), u = g.height * -c.anchor.y), r[o] = a * p, r[o + 1] = u * f, r[o + n] = s * p, r[o + n + 1] = u * f, r[o + 2 * n] = s * p, r[o + 2 * n + 1] = h * f, r[o + 3 * n] = a * p, r[o + 3 * n + 1] = h * f, o += 4 * n
                }
            }, e.prototype.uploadPosition = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; s++) {
                    var a = t[e + s].position;
                    r[o] = a.x, r[o + 1] = a.y, r[o + n] = a.x, r[o + n + 1] = a.y, r[o + 2 * n] = a.x, r[o + 2 * n + 1] = a.y, r[o + 3 * n] = a.x, r[o + 3 * n + 1] = a.y, o += 4 * n
                }
            }, e.prototype.uploadRotation = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; s++) {
                    var a = t[e + s].rotation;
                    r[o] = a, r[o + n] = a, r[o + 2 * n] = a, r[o + 3 * n] = a, o += 4 * n
                }
            }, e.prototype.uploadUvs = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (r[o] = a.x0, r[o + 1] = a.y0, r[o + n] = a.x1, r[o + n + 1] = a.y1, r[o + 2 * n] = a.x2, r[o + 2 * n + 1] = a.y2, r[o + 3 * n] = a.x3, r[o + 3 * n + 1] = a.y3, o += 4 * n) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + 2 * n] = 0, r[o + 2 * n + 1] = 0, r[o + 3 * n] = 0, r[o + 3 * n + 1] = 0, o += 4 * n)
                }
            }, e.prototype.uploadTint = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; ++s) {
                    var a = t[e + s],
                        h = a._texture.baseTexture.premultiplyAlpha,
                        u = a.alpha,
                        l = u < 1 && h ? Gt(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
                    r[o] = l, r[o + n] = l, r[o + 2 * n] = l, r[o + 3 * n] = l, o += 4 * n
                }
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
            }, e
        }(Xi),
        rs = function(t, e, i) {
            void 0 === i && (i = null), this.baseTexture = t, this.textures = {}, this.animations = {}, this.data = e, this.resolution = this._updateResolution(i || (this.baseTexture.resource ? this.baseTexture.resource.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
        },
        ns = {
            BATCH_SIZE: {
                configurable: !0
            }
        };
    ns.BATCH_SIZE.get = function() {
        return 1e3
    }, rs.prototype._updateResolution = function(t) {
        var e = this.data.meta.scale,
            i = ae(t, null);
        return null === i && (i = void 0 !== e ? parseFloat(e) : 1), 1 !== i && this.baseTexture.setResolution(i), i
    }, rs.prototype.parse = function(t) {
        this._batchIndex = 0, this._callback = t, this._frameKeys.length <= rs.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
    }, rs.prototype._processFrames = function(t) {
        for (var e = t, i = rs.BATCH_SIZE; e - t < i && e < this._frameKeys.length;) {
            var r = this._frameKeys[e],
                n = this._frames[r],
                o = n.frame;
            if (o) {
                var s = null,
                    a = null,
                    h = !1 !== n.trimmed && n.sourceSize ? n.sourceSize : n.frame,
                    u = new Ce(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                s = n.rotated ? new Ce(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : new Ce(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), !1 !== n.trimmed && n.spriteSourceSize && (a = new Ce(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[r] = new bi(this.baseTexture, s, u, a, n.rotated ? 2 : 0, n.anchor), bi.addToCache(this.textures[r], r)
            }
            e++
        }
    }, rs.prototype._processAnimations = function() {
        var t = this.data.animations || {};
        for (var e in t) {
            this.animations[e] = [];
            for (var i = 0; i < t[e].length; i++) {
                var r = t[e][i];
                this.animations[e].push(this.textures[r])
            }
        }
    }, rs.prototype._parseComplete = function() {
        var t = this._callback;
        this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
    }, rs.prototype._nextBatch = function() {
        var t = this;
        this._processFrames(this._batchIndex * rs.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
            t._batchIndex * rs.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : (t._processAnimations(), t._parseComplete())
        }, 0)
    }, rs.prototype.destroy = function(t) {
        for (var e in void 0 === t && (t = !1), this.textures) this.textures[e].destroy();
        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null
    }, Object.defineProperties(rs, ns);
    var os = function() {};
    os.use = function(t, e) {
        var i = t.name + "_image";
        if (t.data && t.type === Jo.TYPE.JSON && t.data.frames && !this.resources[i]) {
            var r = {
                    crossOrigin: t.crossOrigin,
                    metadata: t.metadata.imageMetadata,
                    parentResource: t
                },
                n = os.getResourcePath(t, this.baseUrl);
            this.add(i, n, r, function(i) {
                if (i.error) e(i.error);
                else {
                    var r = new rs(i.texture.baseTexture, t.data, t.url);
                    r.parse(function() {
                        t.spritesheet = r, t.textures = r.textures, e()
                    })
                }
            })
        } else e()
    }, os.getResourcePath = function(t, e) {
        return t.isDataUrl ? t.data.meta.image : yt.resolve(t.url.replace(e, ""), t.data.meta.image)
    };
    var ss = new ce,
        as = function(t) {
            function e(e, i, r) {
                void 0 === i && (i = 100), void 0 === r && (r = 100), t.call(this, e), this.tileTransform = new Ae, this._width = i, this._height = r, this._canvasPattern = null, this.uvMatrix = e.uvMatrix || new Ir(e), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                clampMargin: {
                    configurable: !0
                },
                tileScale: {
                    configurable: !0
                },
                tilePosition: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
            return i.clampMargin.get = function() {
                return this.uvMatrix.clampMargin
            }, i.clampMargin.set = function(t) {
                this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
            }, i.tileScale.get = function() {
                return this.tileTransform.scale
            }, i.tileScale.set = function(t) {
                this.tileTransform.scale.copyFrom(t)
            }, i.tilePosition.get = function() {
                return this.tileTransform.position
            }, i.tilePosition.set = function(t) {
                this.tileTransform.position.copyFrom(t)
            }, e.prototype._onTextureUpdate = function() {
                this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215
            }, e.prototype._render = function(t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
            }, e.prototype._calculateBounds = function() {
                var t = this._width * -this._anchor._x,
                    e = this._height * -this._anchor._y,
                    i = this._width * (1 - this._anchor._x),
                    r = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, i, r)
            }, e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new Ce), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }, e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, ss);
                var e = this._width,
                    i = this._height,
                    r = -e * this.anchor._x;
                if (ss.x >= r && ss.x < r + e) {
                    var n = -i * this.anchor._y;
                    if (ss.y >= n && ss.y < n + i) return !0
                }
                return !1
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null
            }, e.from = function(t, i, r) {
                return new e(bi.from(t), i, r)
            }, e.fromFrame = function(t, i, r) {
                var n = $t[t];
                if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new e(n, i, r)
            }, e.fromImage = function(t, i, r, n) {
                return n && "object" != typeof n && (n = {
                    scaleMode: arguments[4],
                    resourceOptions: {
                        crossorigin: arguments[3]
                    }
                }), new e(bi.from(t, n), i, r)
            }, i.width.get = function() {
                return this._width
            }, i.width.set = function(t) {
                this._width = t
            }, i.height.get = function() {
                return this._height
            }, i.height.set = function(t) {
                this._height = t
            }, Object.defineProperties(e.prototype, i), e
        }(Kn),
        hs = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        us = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n",
        ls = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
        cs = new ye,
        ds = function(t) {
            function e(e) {
                t.call(this, e);
                var i = {
                    globals: this.renderer.globalUniforms
                };
                this.shader = yr.from(hs, us, i), this.simpleShader = yr.from(hs, ls, i), this.quad = new Li
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.render = function(t) {
                var e = this.renderer,
                    i = this.quad,
                    r = i.vertices;
                r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((r = i.uvs)[0] = r[6] = -t.anchor.x, r[1] = r[3] = -t.anchor.y, r[2] = r[4] = 1 - t.anchor.x, r[5] = r[7] = 1 - t.anchor.y), i.invalidate();
                var n = t._texture,
                    o = n.baseTexture,
                    s = t.tileTransform.localTransform,
                    a = t.uvMatrix,
                    h = o.isPowerOfTwo && n.frame.width === o.width && n.frame.height === o.height;
                h && (o._glTextures[e.CONTEXT_UID] ? h = o.wrapMode !== Pt.CLAMP : o.wrapMode === Pt.CLAMP && (o.wrapMode = Pt.REPEAT));
                var u = h ? this.simpleShader : this.shader,
                    l = n.width,
                    c = n.height,
                    d = t._width,
                    p = t._height;
                cs.set(s.a * l / d, s.b * l / p, s.c * c / d, s.d * c / p, s.tx / d, s.ty / p), cs.invert(), h ? cs.prepend(a.mapCoord) : (u.uniforms.uMapCoord = a.mapCoord.toArray(!0), u.uniforms.uClampFrame = a.uClampFrame, u.uniforms.uClampOffset = a.uClampOffset), u.uniforms.uTransform = cs.toArray(!0), u.uniforms.uColor = Ht(t.tint, t.worldAlpha, u.uniforms.uColor, o.premultiplyAlpha), u.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), u.uniforms.uSampler = n, e.shader.bind(u), e.geometry.bind(i), e.state.setBlendMode(Xt(t.blendMode, o.premultiplyAlpha)), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
            }, e
        }(Xi),
        ps = function(t) {
            function e(e, i) {
                var r = this;
                void 0 === i && (i = {}), t.call(this), this._textWidth = 0, this._textHeight = 0, this._glyphs = [], this._font = {
                    tint: void 0 !== i.tint ? i.tint : 16777215,
                    align: i.align || "left",
                    name: null,
                    size: 0
                }, this.font = i.font, this._text = e, this._maxWidth = 0, this._maxLineHeight = 0, this._letterSpacing = 0, this._anchor = new de(function() {
                    r.dirty = !0
                }, this, 0, 0), this.dirty = !1, this.roundPixels = g.ROUND_PIXELS, this.updateText()
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                tint: {
                    configurable: !0
                },
                align: {
                    configurable: !0
                },
                anchor: {
                    configurable: !0
                },
                font: {
                    configurable: !0
                },
                text: {
                    configurable: !0
                },
                maxWidth: {
                    configurable: !0
                },
                maxLineHeight: {
                    configurable: !0
                },
                textWidth: {
                    configurable: !0
                },
                letterSpacing: {
                    configurable: !0
                },
                textHeight: {
                    configurable: !0
                }
            };
            return e.prototype.updateText = function() {
                for (var t = e.fonts[this._font.name], i = this._font.size / t.size, r = new ce, n = [], o = [], s = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ", a = s.length, h = this._maxWidth * t.size / this._font.size, u = null, l = 0, c = 0, d = 0, p = -1, f = 0, v = 0, g = 0, m = 0; m < a; m++) {
                    var y = s.charCodeAt(m),
                        _ = s.charAt(m);
                    if (/(?:\s)/.test(_) && (p = m, f = l), "\r" !== _ && "\n" !== _) {
                        var x = t.chars[y];
                        x && (u && x.kerning[u] && (r.x += x.kerning[u]), n.push({
                            texture: x.texture,
                            line: d,
                            charCode: y,
                            position: new ce(r.x + x.xOffset + this._letterSpacing / 2, r.y + x.yOffset)
                        }), r.x += x.xAdvance + this._letterSpacing, l = r.x, g = Math.max(g, x.yOffset + x.texture.height), u = y, -1 !== p && h > 0 && r.x > h && (Vt(n, 1 + p - ++v, 1 + m - p), m = p, p = -1, o.push(f), c = Math.max(c, f), d++, r.x = 0, r.y += t.lineHeight, u = null))
                    } else o.push(l), c = Math.max(c, l), ++d, ++v, r.x = 0, r.y += t.lineHeight, u = null
                }
                var b = s.charAt(s.length - 1);
                "\r" !== b && "\n" !== b && (/(?:\s)/.test(b) && (l = f), o.push(l), c = Math.max(c, l));
                for (var T = [], w = 0; w <= d; w++) {
                    var E = 0;
                    "right" === this._font.align ? E = c - o[w] : "center" === this._font.align && (E = (c - o[w]) / 2), T.push(E)
                }
                for (var S = n.length, I = this.tint, P = 0; P < S; P++) {
                    var A = this._glyphs[P];
                    A ? A.texture = n[P].texture : ((A = new Kn(n[P].texture)).roundPixels = this.roundPixels, this._glyphs.push(A)), A.position.x = (n[P].position.x + T[n[P].line]) * i, A.position.y = n[P].position.y * i, A.scale.x = A.scale.y = i, A.tint = I, A.parent || this.addChild(A)
                }
                for (var O = S; O < this._glyphs.length; ++O) this.removeChild(this._glyphs[O]);
                if (this._textWidth = c * i, this._textHeight = (r.y + t.lineHeight) * i, 0 !== this.anchor.x || 0 !== this.anchor.y)
                    for (var C = 0; C < S; C++) this._glyphs[C].x -= this._textWidth * this.anchor.x, this._glyphs[C].y -= this._textHeight * this.anchor.y;
                this._maxLineHeight = g * i
            }, e.prototype.updateTransform = function() {
                this.validate(), this.containerUpdateTransform()
            }, e.prototype.getLocalBounds = function() {
                return this.validate(), t.prototype.getLocalBounds.call(this)
            }, e.prototype.validate = function() {
                this.dirty && (this.updateText(), this.dirty = !1)
            }, i.tint.get = function() {
                return this._font.tint
            }, i.tint.set = function(t) {
                this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
            }, i.align.get = function() {
                return this._font.align
            }, i.align.set = function(t) {
                this._font.align = t || "left", this.dirty = !0
            }, i.anchor.get = function() {
                return this._anchor
            }, i.anchor.set = function(t) {
                "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t)
            }, i.font.get = function() {
                return this._font
            }, i.font.set = function(t) {
                t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
            }, i.text.get = function() {
                return this._text
            }, i.text.set = function(t) {
                t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
            }, i.maxWidth.get = function() {
                return this._maxWidth
            }, i.maxWidth.set = function(t) {
                this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
            }, i.maxLineHeight.get = function() {
                return this.validate(), this._maxLineHeight
            }, i.textWidth.get = function() {
                return this.validate(), this._textWidth
            }, i.letterSpacing.get = function() {
                return this._letterSpacing
            }, i.letterSpacing.set = function(t) {
                this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
            }, i.textHeight.get = function() {
                return this.validate(), this._textHeight
            }, e.registerFont = function(t, i) {
                var r = {},
                    n = t.getElementsByTagName("info")[0],
                    o = t.getElementsByTagName("common")[0],
                    s = t.getElementsByTagName("page"),
                    a = ae(s[0].getAttribute("file"), g.RESOLUTION),
                    h = {};
                r.font = n.getAttribute("face"), r.size = parseInt(n.getAttribute("size"), 10), r.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / a, r.chars = {}, i instanceof bi && (i = [i]);
                for (var u = 0; u < s.length; u++) {
                    var l = s[u].getAttribute("id"),
                        c = s[u].getAttribute("file");
                    h[l] = i instanceof Array ? i[u] : i[c]
                }
                for (var d = t.getElementsByTagName("char"), p = 0; p < d.length; p++) {
                    var f = d[p],
                        v = parseInt(f.getAttribute("id"), 10),
                        m = f.getAttribute("page") || 0,
                        y = new Ce(parseInt(f.getAttribute("x"), 10) / a + h[m].frame.x / a, parseInt(f.getAttribute("y"), 10) / a + h[m].frame.y / a, parseInt(f.getAttribute("width"), 10) / a, parseInt(f.getAttribute("height"), 10) / a);
                    r.chars[v] = {
                        xOffset: parseInt(f.getAttribute("xoffset"), 10) / a,
                        yOffset: parseInt(f.getAttribute("yoffset"), 10) / a,
                        xAdvance: parseInt(f.getAttribute("xadvance"), 10) / a,
                        kerning: {},
                        texture: new bi(h[m].baseTexture, y),
                        page: m
                    }
                }
                for (var _ = t.getElementsByTagName("kerning"), x = 0; x < _.length; x++) {
                    var b = _[x],
                        T = parseInt(b.getAttribute("first"), 10) / a,
                        w = parseInt(b.getAttribute("second"), 10) / a,
                        E = parseInt(b.getAttribute("amount"), 10) / a;
                    r.chars[w] && (r.chars[w].kerning[T] = E)
                }
                return e.fonts[r.font] = r, r
            }, Object.defineProperties(e.prototype, i), e
        }(Xe);
    ps.fonts = {};
    var fs = function() {};
    fs.parse = function(t, e) {
        t.bitmapFont = ps.registerFont(t.data, e)
    }, fs.add = function() {
        Jo.setExtensionXhrType("fnt", Jo.XHR_RESPONSE_TYPE.DOCUMENT)
    }, fs.dirname = function(t) {
        var e = t.replace(/\/$/, "").replace(/\/[^\/]*$/, "");
        return e === t ? "." : "" === e ? "/" : e
    }, fs.use = function(t, e) {
        if (t.data && t.type === Jo.TYPE.XML)
            if (0 !== t.data.getElementsByTagName("page").length && 0 !== t.data.getElementsByTagName("info").length && null !== t.data.getElementsByTagName("info")[0].getAttribute("face")) {
                var i = t.isDataUrl ? "" : fs.dirname(t.url);
                t.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/")), (i = i.replace(this.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/");
                for (var r = t.data.getElementsByTagName("page"), n = {}, o = function(i) {
                        n[i.metadata.pageFile] = i.texture, Object.keys(n).length === r.length && (fs.parse(t, n), e())
                    }, s = 0; s < r.length; ++s) {
                    var a = r[s].getAttribute("file"),
                        h = i + a,
                        u = !1;
                    for (var l in this.resources) {
                        var c = this.resources[l];
                        if (c.url === h) {
                            c.metadata.pageFile = a, c.texture ? o(c) : c.onAfterMiddleware.add(o), u = !0;
                            break
                        }
                    }
                    if (!u) {
                        var d = {
                            crossOrigin: t.crossOrigin,
                            loadType: Jo.LOAD_TYPE.IMAGE,
                            metadata: Object.assign({
                                pageFile: a
                            }, t.metadata.imageMetadata),
                            parentResource: t
                        };
                        this.add(h, d, o)
                    }
                }
            } else e();
        else e()
    };
    var vs = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
        gs = function(t) {
            function e(e) {
                void 0 === e && (e = 1), t.call(this, Jr, vs, {
                    uAlpha: 1
                }), this.alpha = e
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                alpha: {
                    configurable: !0
                }
            };
            return i.alpha.get = function() {
                return this.uniforms.uAlpha
            }, i.alpha.set = function(t) {
                this.uniforms.uAlpha = t
            }, Object.defineProperties(e.prototype, i), e
        }(Tr),
        ms = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n    \n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n    \n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n    \n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
    var ys = {
            5: [.153388, .221461, .250301],
            7: [.071303, .131514, .189879, .214607],
            9: [.028532, .067234, .124009, .179044, .20236],
            11: [.0093, .028002, .065984, .121703, .175713, .198596],
            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        },
        _s = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
    var xs = function(t) {
            function e(e, i, r, n, o) {
                var s = function(t, e) {
                        var i, r = Math.ceil(t / 2),
                            n = ms,
                            o = "";
                        i = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                        for (var s = 0; s < t; s++) {
                            var a = i.replace("%index%", s);
                            o += a = a.replace("%sampleIndex%", s - (r - 1) + ".0"), o += "\n"
                        }
                        return n = (n = n.replace("%blur%", o)).replace("%size%", t)
                    }(o = o || 5, e),
                    a = function(t) {
                        for (var e, i = ys[t], r = i.length, n = _s, o = "", s = 0; s < t; s++) {
                            var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s);
                            e = s, s >= r && (e = t - s - 1), o += a = a.replace("%value%", i[e]), o += "\n"
                        }
                        return n = (n = n.replace("%blur%", o)).replace("%size%", t)
                    }(o);
                t.call(this, s, a), this.horizontal = e, this.resolution = n || g.RESOLUTION, this._quality = 0, this.quality = r || 4, this.blur = i || 8
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                blur: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                }
            };
            return e.prototype.apply = function(t, e, i, r) {
                if (i ? this.horizontal ? this.uniforms.strength = 1 / i.width * (i.width / e.width) : this.uniforms.strength = 1 / i.height * (i.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r);
                else {
                    var n = t.getFilterTexture(),
                        o = t.renderer,
                        s = e,
                        a = n;
                    this.state.blend = !1, t.applyFilter(this, s, a, !1);
                    for (var h = 1; h < this.passes - 1; h++) {
                        o.renderTexture.bind(s, s.filterFrame), this.uniforms.uSampler = a;
                        var u = a;
                        a = s, s = u, o.shader.bind(this), o.geometry.draw(5)
                    }
                    this.state.blend = !0, t.applyFilter(this, a, i, r), t.returnFilterTexture(n)
                }
            }, i.blur.get = function() {
                return this.strength
            }, i.blur.set = function(t) {
                this.padding = 1 + 2 * Math.abs(t), this.strength = t
            }, i.quality.get = function() {
                return this._quality
            }, i.quality.set = function(t) {
                this._quality = t, this.passes = t
            }, Object.defineProperties(e.prototype, i), e
        }(Tr),
        bs = function(t) {
            function e(e, i, r, n) {
                t.call(this), this.blurXFilter = new xs(!0, e, i, r, n), this.blurYFilter = new xs(!1, e, i, r, n), this.resolution = r || g.RESOLUTION, this.quality = i || 4, this.blur = e || 8, this.repeatEdgePixels = !1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                blur: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                },
                blurX: {
                    configurable: !0
                },
                blurY: {
                    configurable: !0
                },
                blendMode: {
                    configurable: !0
                },
                repeatEdgePixels: {
                    configurable: !0
                }
            };
            return e.prototype.apply = function(t, e, i, r) {
                var n = Math.abs(this.blurXFilter.strength),
                    o = Math.abs(this.blurYFilter.strength);
                if (n && o) {
                    var s = t.getFilterTexture();
                    this.blurXFilter.apply(t, e, s, !0), this.blurYFilter.apply(t, s, i, r), t.returnFilterTexture(s)
                } else o ? this.blurYFilter.apply(t, e, i, r) : this.blurXFilter.apply(t, e, i, r)
            }, e.prototype.updatePadding = function() {
                this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
            }, i.blur.get = function() {
                return this.blurXFilter.blur
            }, i.blur.set = function(t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
            }, i.quality.get = function() {
                return this.blurXFilter.quality
            }, i.quality.set = function(t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t
            }, i.blurX.get = function() {
                return this.blurXFilter.blur
            }, i.blurX.set = function(t) {
                this.blurXFilter.blur = t, this.updatePadding()
            }, i.blurY.get = function() {
                return this.blurYFilter.blur
            }, i.blurY.set = function(t) {
                this.blurYFilter.blur = t, this.updatePadding()
            }, i.blendMode.get = function() {
                return this.blurYFilter.blendMode
            }, i.blendMode.set = function(t) {
                this.blurYFilter.blendMode = t
            }, i.repeatEdgePixels.get = function() {
                return this._repeatEdgePixels
            }, i.repeatEdgePixels.set = function(t) {
                this._repeatEdgePixels = t, this.updatePadding()
            }, Object.defineProperties(e.prototype, i), e
        }(Tr),
        Ts = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
        ws = function(t) {
            function e() {
                var e = {
                    m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
                    uAlpha: 1
                };
                t.call(this, Qr, Ts, e), this.alpha = 1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                matrix: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                }
            };
            return e.prototype._loadMatrix = function(t, e) {
                void 0 === e && (e = !1);
                var i = t;
                e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
            }, e.prototype._multiply = function(t, e, i) {
                return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19], t
            }, e.prototype._colorMatrix = function(t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, e.prototype.brightness = function(t, e) {
                var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.greyscale = function(t, e) {
                var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.blackAndWhite = function(t) {
                this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.hue = function(t, e) {
                t = (t || 0) / 180 * Math.PI;
                var i = Math.cos(t),
                    r = Math.sin(t),
                    n = 1 / 3,
                    o = (0, Math.sqrt)(n),
                    s = [i + (1 - i) * n, n * (1 - i) - o * r, n * (1 - i) + o * r, 0, 0, n * (1 - i) + o * r, i + n * (1 - i), n * (1 - i) - o * r, 0, 0, n * (1 - i) - o * r, n * (1 - i) + o * r, i + n * (1 - i), 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(s, e)
            }, e.prototype.contrast = function(t, e) {
                var i = (t || 0) + 1,
                    r = -.5 * (i - 1),
                    n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, e.prototype.saturate = function(t, e) {
                void 0 === t && (t = 0);
                var i = 2 * t / 3 + 1,
                    r = -.5 * (i - 1),
                    n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, e.prototype.desaturate = function() {
                this.saturate(-1)
            }, e.prototype.negative = function(t) {
                this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.sepia = function(t) {
                this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.technicolor = function(t) {
                this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
            }, e.prototype.polaroid = function(t) {
                this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.toBGR = function(t) {
                this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.kodachrome = function(t) {
                this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
            }, e.prototype.browni = function(t) {
                this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
            }, e.prototype.vintage = function(t) {
                this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
            }, e.prototype.colorTone = function(t, e, i, r, n) {
                var o = ((i = i || 16770432) >> 16 & 255) / 255,
                    s = (i >> 8 & 255) / 255,
                    a = (255 & i) / 255,
                    h = ((r = r || 3375104) >> 16 & 255) / 255,
                    u = (r >> 8 & 255) / 255,
                    l = (255 & r) / 255,
                    c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, h, u, l, e = e || .15, 0, o - h, s - u, a - l, 0, 0];
                this._loadMatrix(c, n)
            }, e.prototype.night = function(t, e) {
                var i = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.predator = function(t, e) {
                var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.lsd = function(t) {
                this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
            }, e.prototype.reset = function() {
                this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
            }, i.matrix.get = function() {
                return this.uniforms.m
            }, i.matrix.set = function(t) {
                this.uniforms.m = t
            }, i.alpha.get = function() {
                return this.uniforms.uAlpha
            }, i.alpha.set = function(t) {
                this.uniforms.uAlpha = t
            }, Object.defineProperties(e.prototype, i), e
        }(Tr);
    ws.prototype.grayscale = ws.prototype.greyscale;
    var Es = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
        Ss = "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
        Is = function(t) {
            function e(e, i) {
                var r = new ye;
                e.renderable = !1, t.call(this, Es, Ss, {
                    mapSampler: e._texture,
                    filterMatrix: r,
                    scale: {
                        x: 1,
                        y: 1
                    },
                    rotation: new Float32Array([1, 0, 0, 1])
                }), this.maskSprite = e, this.maskMatrix = r, null == i && (i = 20), this.scale = new ce(i, i)
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                map: {
                    configurable: !0
                }
            };
            return e.prototype.apply = function(t, e, i, r) {
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
                var n = this.maskSprite.transform.worldTransform,
                    o = Math.sqrt(n.a * n.a + n.b * n.b),
                    s = Math.sqrt(n.c * n.c + n.d * n.d);
                0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / s, this.uniforms.rotation[3] = n.d / s), t.applyFilter(this, e, i, r)
            }, i.map.get = function() {
                return this.uniforms.mapSampler
            }, i.map.set = function(t) {
                this.uniforms.mapSampler = t
            }, Object.defineProperties(e.prototype, i), e
        }(Tr),
        Ps = "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
        As = 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
        Os = function(t) {
            function e() {
                t.call(this, Ps, As)
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
        }(Tr),
        Cs = "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
        Ms = function(t) {
            function e(e, i) {
                void 0 === e && (e = .5), void 0 === i && (i = Math.random()), t.call(this, Qr, Cs, {
                    uNoise: 0,
                    uSeed: 0
                }), this.noise = e, this.seed = i
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                noise: {
                    configurable: !0
                },
                seed: {
                    configurable: !0
                }
            };
            return i.noise.get = function() {
                return this.uniforms.uNoise
            }, i.noise.set = function(t) {
                this.uniforms.uNoise = t
            }, i.seed.get = function() {
                return this.uniforms.uSeed
            }, i.seed.set = function(t) {
                this.uniforms.uSeed = t
            }, Object.defineProperties(e.prototype, i), e
        }(Tr),
        Ds = new ye;
    Ue.prototype._cacheAsBitmap = !1, Ue.prototype._cacheData = !1;
    var Rs = function() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
    };
    Object.defineProperties(Ue.prototype, {
        cacheAsBitmap: {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(t) {
                var e;
                this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new Rs), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea))
            }
        }
    }), Ue.prototype._renderCached = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
    }, Ue.prototype._initCachedDisplayObject = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.alpha;
            this.alpha = 1, t.batch.flush();
            var i = this.getLocalBounds().clone();
            if (this.filters) {
                var r = this.filters[0].padding;
                i.pad(r)
            }
            i.ceil(g.RESOLUTION);
            var n = t.renderTexture.current,
                o = t.renderTexture.sourceFrame,
                s = t.projection.transform,
                a = wi.create(i.width, i.height),
                h = "cacheAsBitmap_" + Wt();
            this._cacheData.textureCacheId = h, si.addToCache(a.baseTexture, h), bi.addToCache(a, h);
            var u = Ds;
            u.tx = -i.x, u.ty = -i.y, this.transform.worldTransform.identity(), this.render = this._cacheData.originalRender, t.render(this, a, !0, u, !0), t.projection.transform = s, t.renderTexture.bind(n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var l = new Kn(a);
            l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -i.x / i.width, l.anchor.y = -i.y / i.height, l.alpha = e, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l)
        }
    }, Ue.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
    }, Ue.prototype._initCachedDisplayObjectCanvas = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(),
                i = this.alpha;
            this.alpha = 1;
            var r = t.context;
            e.ceil(g.RESOLUTION);
            var n = wi.create(e.width, e.height),
                o = "cacheAsBitmap_" + Wt();
            this._cacheData.textureCacheId = o, si.addToCache(n.baseTexture, o), bi.addToCache(n, o);
            var s = Ds;
            this.transform.localTransform.copyTo(s), s.invert(), s.tx -= e.x, s.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, s, !1), t.context = r, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var a = new Kn(n);
            a.transform.worldTransform = this.transform.worldTransform, a.anchor.x = -e.x / e.width, a.anchor.y = -e.y / e.height, a.alpha = i, a._bounds = this._bounds, this._cacheData.sprite = a, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = a.containsPoint.bind(a)
        }
    }, Ue.prototype._calculateCachedBounds = function() {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._lastBoundsID = this._boundsID
    }, Ue.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds()
    }, Ue.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, si.removeFromCache(this._cacheData.textureCacheId), bi.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
    }, Ue.prototype._cacheAsBitmapDestroy = function(t) {
        this.cacheAsBitmap = !1, this.destroy(t)
    }, Ue.prototype.name = null, Xe.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++)
            if (this.children[e].name === t) return this.children[e];
        return null
    }, Ue.prototype.getGlobalPosition = function(t, e) {
        return void 0 === t && (t = new ce), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
    };
    var Fs = "5.0.0";
    var Ls = function(t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
    };
    Ls.prototype.update = function(t) {
        if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
            this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
            var e = this.uvBuffer.data;
            this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
        }
    };
    var Ns = new ce,
        Bs = new Le,
        Us = function(t) {
            function e(e, i, r, n) {
                void 0 === n && (n = Tt.TRIANGLES), t.call(this), this.geometry = e, e.refCount++, this.shader = i, this.state = r || xr.for2d(), this.drawMode = n, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = 0, this._transformID = -1, this.tint = 16777215, this.blendMode = bt.NORMAL, this._roundPixels = g.ROUND_PIXELS, this.batchUvs = null
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                uvBuffer: {
                    configurable: !0
                },
                verticesBuffer: {
                    configurable: !0
                },
                material: {
                    configurable: !0
                },
                blendMode: {
                    configurable: !0
                },
                roundPixels: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                },
                texture: {
                    configurable: !0
                }
            };
            return i.uvBuffer.get = function() {
                return this.geometry.buffers[1]
            }, i.verticesBuffer.get = function() {
                return this.geometry.buffers[0]
            }, i.material.set = function(t) {
                this.shader = t
            }, i.material.get = function() {
                return this.shader
            }, i.blendMode.set = function(t) {
                this.state.blendMode = t
            }, i.blendMode.get = function() {
                return this.state.blendMode
            }, i.roundPixels.set = function(t) {
                this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
            }, i.roundPixels.get = function() {
                return this._roundPixels
            }, i.tint.get = function() {
                return this.shader.tint
            }, i.tint.set = function(t) {
                this.shader.tint = t
            }, i.texture.get = function() {
                return this.shader.texture
            }, i.texture.set = function(t) {
                this.shader.texture = t
            }, e.prototype._render = function(t) {
                var i = this.geometry.buffers[0].data;
                this.shader.batchable && this.drawMode === Tt.TRIANGLES && i.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t)
            }, e.prototype._renderDefault = function(t) {
                var e = this.shader;
                e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.program.uniformData.translationMatrix && (e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0)), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
            }, e.prototype._renderToBatch = function(t) {
                var e = this.geometry;
                this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = this.shader._tintRGB, this._texture = this.shader.texture;
                var i = this.material.pluginName;
                t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this)
            }, e.prototype.calculateVertices = function() {
                var t = this.geometry,
                    e = t.buffers[0].data;
                if (t.vertexDirtyId !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                    this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
                    for (var i = this.transform.worldTransform, r = i.a, n = i.b, o = i.c, s = i.d, a = i.tx, h = i.ty, u = this.vertexData, l = 0; l < u.length / 2; l++) {
                        var c = e[2 * l],
                            d = e[2 * l + 1];
                        u[2 * l] = r * c + o * d + a, u[2 * l + 1] = n * c + s * d + h
                    }
                    if (this._roundPixels)
                        for (var p = 0; p < u.length; p++) u[p] = Math.round(u[p]);
                    this.vertexDirty = t.vertexDirtyId
                }
            }, e.prototype.calculateUvs = function() {
                var t = this.geometry.buffers[1];
                this.shader.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Ls(t, this.shader.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
            }, e.prototype._calculateBounds = function() {
                this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
            }, e.prototype.containsPoint = function(t) {
                if (!this.getBounds().contains(t.x, t.y)) return !1;
                this.worldTransform.applyInverse(t, Ns);
                for (var e = this.geometry.getBuffer("aVertexPosition").data, i = Bs.points, r = this.geometry.getIndex().data, n = r.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
                    var a = 2 * r[s],
                        h = 2 * r[s + 1],
                        u = 2 * r[s + 2];
                    if (i[0] = e[a], i[1] = e[a + 1], i[2] = e[h], i[3] = e[h + 1], i[4] = e[u], i[5] = e[u + 1], Bs.contains(Ns.x, Ns.y)) return !0
                }
                return !1
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), this.geometry.refCount--, 0 === this.geometry.refCount && this.geometry.dispose(), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
            }, Object.defineProperties(e.prototype, i), e
        }(Xe);
    Us.BATCHABLE_SIZE = 100;
    var ks = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
        Xs = "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
        js = function(t) {
            function e(e, i) {
                var r = {
                    uSampler: e,
                    alpha: 1,
                    uTextureMatrix: ye.IDENTITY,
                    uColor: new Float32Array([1, 1, 1, 1])
                };
                (i = Object.assign({
                    tint: 16777215,
                    alpha: 1,
                    pluginName: "batch"
                }, i)).uniforms && Object.assign(r, i.uniforms), t.call(this, i.program || gr.from(ks, Xs), r), this._colorDirty = !1, this.uvMatrix = new Ir(e), this.batchable = void 0 === i.program, this.pluginName = i.pluginName, this.tint = i.tint, this.alpha = i.alpha
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                texture: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                },
                tint: {
                    configurable: !0
                }
            };
            return i.texture.get = function() {
                return this.uniforms.uSampler
            }, i.texture.set = function(t) {
                this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t)
            }, i.alpha.set = function(t) {
                t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
            }, i.alpha.get = function() {
                return this._alpha
            }, i.tint.set = function(t) {
                t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0)
            }, i.tint.get = function() {
                return this._tint
            }, e.prototype.update = function() {
                if (this._colorDirty) {
                    this._colorDirty = !1;
                    var t = this.texture.baseTexture;
                    Ht(this._tint, this._alpha, this.uniforms.uColor, t.premultiplyAlpha)
                }
                this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
            }, Object.defineProperties(e.prototype, i), e
        }(yr),
        Gs = function(t) {
            function e(e, i, r) {
                t.call(this);
                var n = new Pi(e),
                    o = new Pi(i, !0),
                    s = new Pi(r, !0, !0);
                this.addAttribute("aVertexPosition", n, 2, !1, St.FLOAT).addAttribute("aTextureCoord", o, 2, !1, St.FLOAT).addIndex(s), this._updateId = -1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                vertexDirtyId: {
                    configurable: !0
                }
            };
            return i.vertexDirtyId.get = function() {
                return this.buffers[0]._updateID
            }, Object.defineProperties(e.prototype, i), e
        }(Ri),
        Hs = function(t) {
            function e(e, i, r, n) {
                void 0 === e && (e = 100), void 0 === i && (i = 100), void 0 === r && (r = 10), void 0 === n && (n = 10), t.call(this), this.segWidth = r, this.segHeight = n, this.width = e, this.height = i, this.build()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function() {
                for (var t = this.segWidth * this.segHeight, e = [], i = [], r = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, h = 0; h < t; h++) {
                    var u = h % this.segWidth,
                        l = h / this.segWidth | 0;
                    e.push(u * s, l * a), i.push(u / n, l / o)
                }
                for (var c = n * o, d = 0; d < c; d++) {
                    var p = d % n,
                        f = d / n | 0,
                        v = f * this.segWidth + p,
                        g = f * this.segWidth + p + 1,
                        m = (f + 1) * this.segWidth + p,
                        y = (f + 1) * this.segWidth + p + 1;
                    r.push(v, g, m, g, y, m)
                }
                this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(i), this.indexBuffer.data = new Uint16Array(r), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
            }, e
        }(Gs),
        zs = function(t) {
            function e(e, i) {
                void 0 === e && (e = 200), t.call(this, new Float32Array(4 * i.length), new Float32Array(4 * i.length), new Uint16Array(6 * (i.length - 1))), this.points = i, this.width = e, this.build()
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.build = function() {
                var t = this.points;
                if (t) {
                    var e = this.getBuffer("aVertexPosition"),
                        i = this.getBuffer("aTextureCoord"),
                        r = this.getIndex();
                    if (!(t.length < 1)) {
                        e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), i.data = new Float32Array(4 * t.length), r.data = new Uint16Array(6 * (t.length - 1)));
                        var n = i.data,
                            o = r.data;
                        n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
                        for (var s = t.length, a = 0; a < s; a++) {
                            var h = 4 * a,
                                u = a / (s - 1);
                            n[h] = u, n[h + 1] = 0, n[h + 2] = u, n[h + 3] = 1
                        }
                        for (var l = 0, c = 0; c < s - 1; c++) {
                            var d = 2 * c;
                            o[l++] = d, o[l++] = d + 1, o[l++] = d + 2, o[l++] = d + 2, o[l++] = d + 1, o[l++] = d + 3
                        }
                        i.update(), r.update(), this.updateVertices()
                    }
                }
            }, e.prototype.updateVertices = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    for (var e, i = t[0], r = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
                        var h = t[a],
                            u = 4 * a;
                        n = -((e = a < t.length - 1 ? t[a + 1] : h).x - i.x), r = e.y - i.y;
                        var l = Math.sqrt(r * r + n * n),
                            c = this.width / 2;
                        r /= l, n /= l, r *= c, n *= c, o[u] = h.x + r, o[u + 1] = h.y + n, o[u + 2] = h.x - r, o[u + 3] = h.y - n, i = h
                    }
                    this.buffers[0].update()
                }
            }, e.prototype.update = function() {
                this.updateVertices()
            }, e
        }(Gs),
        Vs = function(t) {
            function e(e, i) {
                var r = new zs(e.height, i),
                    n = new js(e);
                t.call(this, r, n), this.autoUpdate = !0
            }
            return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype._render = function(e) {
                (this.autoUpdate || this.geometry.width !== this.shader.texture.height) && (this.geometry.width = this.shader.texture.height, this.geometry.update()), t.prototype._render.call(this, e)
            }, e
        }(Us),
        Ys = function(t) {
            function e(e, i, r) {
                var n = new Hs(e.width, e.height, i, r),
                    o = new js(bi.WHITE);
                t.call(this, n, o), this.texture = e
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                texture: {
                    configurable: !0
                }
            };
            return e.prototype.textureUpdated = function() {
                this._textureID = this.shader.texture._updateID, this.geometry.width = this.shader.texture.width, this.geometry.height = this.shader.texture.height, this.geometry.build()
            }, i.texture.set = function(t) {
                this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
            }, i.texture.get = function() {
                return this.shader.texture
            }, e.prototype._render = function(e) {
                this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e)
            }, Object.defineProperties(e.prototype, i), e
        }(Us),
        Ws = function(t) {
            function e(e, i, r, n, o) {
                void 0 === e && (e = bi.EMPTY);
                var s = new Gs(i, r, n);
                s.getBuffer("aVertexPosition").static = !1;
                var a = new js(e);
                t.call(this, s, a, null, o), this.autoUpdate = !0
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                vertices: {
                    configurable: !0
                }
            };
            return i.vertices.get = function() {
                return this.geometry.getBuffer("aVertexPosition").data
            }, i.vertices.set = function(t) {
                this.geometry.getBuffer("aVertexPosition").data = t
            }, e.prototype._render = function(e) {
                this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e)
            }, Object.defineProperties(e.prototype, i), e
        }(Us),
        qs = 10,
        Zs = function(t) {
            function e(e, i, r, n, o) {
                t.call(this, bi.WHITE, 4, 4), this._origWidth = e.orig.width, this._origHeight = e.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = void 0 !== i ? i : qs, this._rightWidth = void 0 !== n ? n : qs, this._topHeight = void 0 !== r ? r : qs, this._bottomHeight = void 0 !== o ? o : qs, this.texture = e
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                vertices: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                },
                leftWidth: {
                    configurable: !0
                },
                rightWidth: {
                    configurable: !0
                },
                topHeight: {
                    configurable: !0
                },
                bottomHeight: {
                    configurable: !0
                }
            };
            return e.prototype.textureUpdated = function() {
                this._textureID = this.shader.texture._updateID, this._refresh()
            }, i.vertices.get = function() {
                return this.geometry.getBuffer("aVertexPosition").data
            }, i.vertices.set = function(t) {
                this.geometry.getBuffer("aVertexPosition").data = t
            }, e.prototype.updateHorizontalVertices = function() {
                var t = this.vertices,
                    e = this._topHeight + this._bottomHeight,
                    i = this._height > e ? 1 : this._height / e;
                t[9] = t[11] = t[13] = t[15] = this._topHeight * i, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * i, t[25] = t[27] = t[29] = t[31] = this._height
            }, e.prototype.updateVerticalVertices = function() {
                var t = this.vertices,
                    e = this._leftWidth + this._rightWidth,
                    i = this._width > e ? 1 : this._width / e;
                t[2] = t[10] = t[18] = t[26] = this._leftWidth * i, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * i, t[6] = t[14] = t[22] = t[30] = this._width
            }, i.width.get = function() {
                return this._width
            }, i.width.set = function(t) {
                this._width = t, this._refresh()
            }, i.height.get = function() {
                return this._height
            }, i.height.set = function(t) {
                this._height = t, this._refresh()
            }, i.leftWidth.get = function() {
                return this._leftWidth
            }, i.leftWidth.set = function(t) {
                this._leftWidth = t, this._refresh()
            }, i.rightWidth.get = function() {
                return this._rightWidth
            }, i.rightWidth.set = function(t) {
                this._rightWidth = t, this._refresh()
            }, i.topHeight.get = function() {
                return this._topHeight
            }, i.topHeight.set = function(t) {
                this._topHeight = t, this._refresh()
            }, i.bottomHeight.get = function() {
                return this._bottomHeight
            }, i.bottomHeight.set = function(t) {
                this._bottomHeight = t, this._refresh()
            }, e.prototype._refresh = function() {
                var t = this.texture,
                    e = this.geometry.buffers[1].data;
                this._origWidth = t.orig.width, this._origHeight = t.orig.height;
                var i = 1 / this._origWidth,
                    r = 1 / this._origHeight;
                e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = i * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - i * this._rightWidth, e[9] = e[11] = e[13] = e[15] = r * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
            }, Object.defineProperties(e.prototype, i), e
        }(Ys),
        Ks = function(t) {
            function e(e, i) {
                t.call(this, e[0] instanceof bi ? e[0] : e[0].texture), this._textures = null, this._durations = null, this.textures = e, this._autoUpdate = !1 !== i, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this.playing = !1
            }
            t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
            var i = {
                totalFrames: {
                    configurable: !0
                },
                textures: {
                    configurable: !0
                },
                currentFrame: {
                    configurable: !0
                }
            };
            return e.prototype.stop = function() {
                this.playing && (this.playing = !1, this._autoUpdate && qe.shared.remove(this.update, this))
            }, e.prototype.play = function() {
                this.playing || (this.playing = !0, this._autoUpdate && qe.shared.add(this.update, this, Ye.HIGH))
            }, e.prototype.gotoAndStop = function(t) {
                this.stop();
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture()
            }, e.prototype.gotoAndPlay = function(t) {
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
            }, e.prototype.update = function(t) {
                var e = this.animationSpeed * t,
                    i = this.currentFrame;
                if (null !== this._durations) {
                    var r = this._currentTime % 1 * this._durations[this.currentFrame];
                    for (r += e / 60 * 1e3; r < 0;) this._currentTime--, r += this._durations[this.currentFrame];
                    var n = Math.sign(this.animationSpeed * t);
                    for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) r -= this._durations[this.currentFrame] * n, this._currentTime += n;
                    this._currentTime += r / this._durations[this.currentFrame]
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > i && this.onLoop()), this.updateTexture())
            }, e.prototype.updateTexture = function() {
                this._texture = this._textures[this.currentFrame], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame)
            }, e.prototype.destroy = function(e) {
                this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
            }, e.fromFrames = function(t) {
                for (var i = [], r = 0; r < t.length; ++r) i.push(bi.from(t[r]));
                return new e(i)
            }, e.fromImages = function(t) {
                for (var i = [], r = 0; r < t.length; ++r) i.push(bi.from(t[r]));
                return new e(i)
            }, i.totalFrames.get = function() {
                return this._textures.length
            }, i.textures.get = function() {
                return this._textures
            }, i.textures.set = function(t) {
                if (t[0] instanceof bi) this._textures = t, this._durations = null;
                else {
                    this._textures = [], this._durations = [];
                    for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                }
                this.gotoAndStop(0), this.updateTexture()
            }, i.currentFrame.get = function() {
                var t = Math.floor(this._currentTime) % this._textures.length;
                return t < 0 && (t += this._textures.length), t
            }, Object.defineProperties(e.prototype, i), e
        }(Kn);
    Zr.registerPlugin("accessibility", Ge), Zr.registerPlugin("extract", pn), Zr.registerPlugin("interaction", wn), Zr.registerPlugin("particle", is), Zr.registerPlugin("prepare", _o), Zr.registerPlugin("batch", cn), Zr.registerPlugin("tilingSprite", ds), Zo.registerPlugin(fs), Zo.registerPlugin(os), So.registerPlugin(Je), So.registerPlugin(Ko);
    var Js = {
        AlphaFilter: gs,
        BlurFilter: bs,
        BlurFilterPass: xs,
        ColorMatrixFilter: ws,
        DisplacementFilter: Is,
        FXAAFilter: Os,
        NoiseFilter: Ms
    };
    return t.AbstractBatchRenderer = nn, t.AbstractRenderer = qr, t.AnimatedSprite = Ks, t.AppLoaderPlugin = Ko, t.Application = So, t.Attribute = Si, t.BLEND_MODES = bt, t.BaseRenderTexture = yi, t.BaseTexture = si, t.BatchDrawCall = tn, t.BatchGeometry = sn, t.BatchPluginFactory = un, t.BatchRenderer = cn, t.BatchShaderGenerator = on, t.BitmapFontLoader = fs, t.BitmapText = ps, t.Bounds = Be, t.Buffer = Pi, t.Circle = Re, t.Container = Xe, t.CubeTexture = $r, t.DEG_TO_RAD = ge, t.DRAW_MODES = Tt, t.DisplayObject = Ue, t.ENV = _t, t.Ellipse = Fe, t.FORMATS = wt, t.FillStyle = In, t.Filter = Tr, t.Framebuffer = gi, t.GC_MODES = Ot, t.GLProgram = Fr, t.GLTexture = si, t.GRAPHICS_CURVES = Sn, t.Geometry = Ri, t.Graphics = Wn, t.GraphicsData = Pn, t.GraphicsGeometry = kn, t.GroupD8 = Pe, t.LineStyle = Xn, t.Loader = Zo, t.LoaderResource = Jo, t.MIPMAP_MODES = At, t.Matrix = ye, t.Mesh = Us, t.MeshBatchUvs = Ls, t.MeshGeometry = Gs, t.MeshMaterial = js, t.NineSlicePlane = Zs, t.ObjectRenderer = Xi, t.ObservablePoint = de, t.PI_2 = fe, t.PRECISION = Ct, t.ParticleContainer = Qo, t.ParticleRenderer = is, t.PlaneGeometry = Hs, t.Point = ce, t.Polygon = Le, t.Program = gr, t.Quad = Fi, t.QuadUv = Li, t.RAD_TO_DEG = ve, t.RENDERER_TYPE = xt, t.Rectangle = Ce, t.RenderTexture = wi, t.RenderTexturePool = Ei, t.Renderer = Zr, t.RopeGeometry = zs, t.RoundedRectangle = Ne, t.Runner = ze, t.SCALE_MODES = It, t.SHAPES = me, t.Shader = yr, t.SimpleMesh = Ws, t.SimplePlane = Ys, t.SimpleRope = Vs, t.Sprite = Kn, t.SpriteMaskFilter = Ar, t.Spritesheet = rs, t.SpritesheetLoader = os, t.State = xr, t.System = fi, t.TARGETS = Et, t.TEXT_GRADIENT = Jn, t.TYPES = St, t.Text = ho, t.TextMetrics = oo, t.TextStyle = to, t.Texture = bi, t.TextureLoader = qo, t.TextureMatrix = Ir, t.TextureUvs = _i, t.Ticker = qe, t.TickerPlugin = Je, t.TilingSprite = as, t.TilingSpriteRenderer = ds, t.Transform = Ae, t.UPDATE_PRIORITY = Ye, t.UniformGroup = Bi, t.VERSION = "5.1.5", t.ViewableBuffer = en, t.WRAP_MODES = Pt, t.accessibility = He, t.autoDetectRenderer = Kr, t.checkMaxIfStatementsInShader = dr, t.defaultFilterVertex = Qr, t.defaultVertex = Jr, t.extract = fn, t.filters = Js, t.interaction = En, t.isMobile = v, t.prepare = Eo, t.resources = pi, t.settings = g, t.systems = Yr, t.useDeprecated = function() {
        var t = this;
        Object.defineProperties(t, {
            SVG_SIZE: {
                get: function() {
                    return ue(Fs, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"), t.SVGResource.SVG_SIZE
                }
            },
            TransformStatic: {
                get: function() {
                    return ue(Fs, "PIXI.TransformStatic class has been removed, use PIXI.Transform"), t.Transform
                }
            },
            TransformBase: {
                get: function() {
                    return ue(Fs, "PIXI.TransformBase class has been removed, use PIXI.Transform"), t.Transform
                }
            },
            TRANSFORM_MODE: {
                get: function() {
                    return ue(Fs, "PIXI.TRANSFORM_MODE property has been removed"), {
                        STATIC: 0,
                        DYNAMIC: 1
                    }
                }
            },
            WebGLRenderer: {
                get: function() {
                    return ue(Fs, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"), t.Renderer
                }
            },
            CanvasRenderTarget: {
                get: function() {
                    return ue(Fs, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"), t.utils.CanvasRenderTarget
                }
            },
            loader: {
                get: function() {
                    return ue(Fs, "PIXI.loader instance has moved to PIXI.Loader.shared"), t.Loader.shared
                }
            },
            FilterManager: {
                get: function() {
                    return ue(Fs, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"), t.systems.FilterSystem
                }
            }
        }), t.extras = {}, Object.defineProperties(t.extras, {
            TilingSprite: {
                get: function() {
                    return ue(Fs, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"), t.TilingSprite
                }
            },
            TilingSpriteRenderer: {
                get: function() {
                    return ue(Fs, "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"), t.TilingSpriteRenderer
                }
            },
            AnimatedSprite: {
                get: function() {
                    return ue(Fs, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"), t.AnimatedSprite
                }
            },
            BitmapText: {
                get: function() {
                    return ue(Fs, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"), t.BitmapText
                }
            }
        }), Object.defineProperties(t.utils, {
            getSvgSize: {
                get: function() {
                    return ue(Fs, "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"), t.SVGResource.getSize
                }
            }
        }), t.mesh = {}, Object.defineProperties(t.mesh, {
            Mesh: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"), t.SimpleMesh
                }
            },
            NineSlicePlane: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"), t.NineSlicePlane
                }
            },
            Plane: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"), t.SimplePlane
                }
            },
            Rope: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"), t.SimpleRope
                }
            },
            RawMesh: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"), t.Mesh
                }
            },
            CanvasMeshRenderer: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"), t.CanvasMeshRenderer
                }
            },
            MeshRenderer: {
                get: function() {
                    return ue(Fs, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"), t.MeshRenderer
                }
            }
        }), t.particles = {}, Object.defineProperties(t.particles, {
            ParticleContainer: {
                get: function() {
                    return ue(Fs, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"), t.ParticleContainer
                }
            },
            ParticleRenderer: {
                get: function() {
                    return ue(Fs, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"), t.ParticleRenderer
                }
            }
        }), t.ticker = {}, Object.defineProperties(t.ticker, {
            Ticker: {
                get: function() {
                    return ue(Fs, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"), t.Ticker
                }
            },
            shared: {
                get: function() {
                    return ue(Fs, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"), t.Ticker.shared
                }
            }
        }), t.loaders = {}, Object.defineProperties(t.loaders, {
            Loader: {
                get: function() {
                    return ue(Fs, "PIXI.loaders.Loader class has moved to PIXI.Loader"), t.Loader
                }
            },
            Resource: {
                get: function() {
                    return ue(Fs, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"), t.LoaderResource
                }
            },
            bitmapFontParser: {
                get: function() {
                    return ue(Fs, "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"), t.BitmapFontLoader.use
                }
            },
            parseBitmapFontData: {
                get: function() {
                    return ue(Fs, "PIXI.loaders.parseBitmapFontData function has moved to PIXI.BitmapFontLoader.parse"), t.BitmapFontLoader.parse
                }
            },
            spritesheetParser: {
                get: function() {
                    return ue(Fs, "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"), t.SpritesheetLoader.use
                }
            },
            getResourcePath: {
                get: function() {
                    return ue(Fs, "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"), t.SpritesheetLoader.getResourcePath
                }
            }
        }), t.Loader.addPixiMiddleware = function(e) {
            return ue(Fs, "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"), t.loaders.Loader.registerPlugin({
                use: e()
            })
        }, Object.defineProperty(t.extract, "WebGLExtract", {
            get: function() {
                return ue(Fs, "PIXI.extract.WebGLExtract method has moved to PIXI.extract.Extract"), t.extract.Extract
            }
        }), Object.defineProperty(t.prepare, "WebGLPrepare", {
            get: function() {
                return ue(Fs, "PIXI.prepare.WebGLPrepare class has moved to PIXI.prepare.Prepare"), t.prepare.Prepare
            }
        }), t.Container.prototype._renderWebGL = function(t) {
            ue(Fs, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"), this._render(t)
        }, t.Container.prototype.renderWebGL = function(t) {
            ue(Fs, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"), this.render(t)
        }, t.DisplayObject.prototype.renderWebGL = function(t) {
            ue(Fs, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"), this.render(t)
        }, t.Container.prototype.renderAdvancedWebGL = function(t) {
            ue(Fs, "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"), this.renderAdvanced(t)
        }, Object.defineProperties(t.settings, {
            TRANSFORM_MODE: {
                get: function() {
                    return ue(Fs, "PIXI.settings.TRANSFORM_MODE property has been removed"), 0
                },
                set: function() {
                    ue(Fs, "PIXI.settings.TRANSFORM_MODE property has been removed")
                }
            }
        });
        var e = t.BaseTexture;
        e.prototype.loadSource = function(e) {
            ue(Fs, "PIXI.BaseTexture.loadSource method has been deprecated");
            var i = t.resources.autoDetectResource(e);
            i.internal = !0, this.setResource(i), this.update()
        }, Object.defineProperties(e.prototype, {
            hasLoaded: {
                get: function() {
                    return ue(Fs, "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"), this.valid
                }
            },
            imageUrl: {
                get: function() {
                    return ue(Fs, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), this.resource && this.resource.url
                },
                set: function(t) {
                    ue(Fs, "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"), this.resource && (this.resource.url = t)
                }
            },
            source: {
                get: function() {
                    return ue(Fs, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"), this.resource && this.resource.source
                },
                set: function(t) {
                    ue(Fs, "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."), this.resource && (this.resource.source = t)
                }
            }
        }), e.fromImage = function(t, i, r, n) {
            ue(Fs, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");
            var o = {
                scale: n,
                crossorigin: i
            };
            return e.from(t, {
                scaleMode: r,
                resourceOptions: o
            })
        }, e.fromCanvas = function(t, i) {
            return ue(Fs, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"), e.from(t, {
                scaleMode: i
            })
        }, e.fromSVG = function(t, i, r, n) {
            ue(Fs, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");
            var o = {
                scale: n,
                crossorigin: i
            };
            return e.from(t, {
                scaleMode: r,
                resourceOptions: o
            })
        }, t.Point.prototype.copy = function(t) {
            return ue(Fs, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"), this.copyFrom(t)
        }, t.ObservablePoint.prototype.copy = function(t) {
            return ue(Fs, "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"), this.copyFrom(t)
        }, t.Rectangle.prototype.copy = function(t) {
            return ue(Fs, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"), this.copyFrom(t)
        }, t.Matrix.prototype.copy = function(t) {
            return ue(Fs, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"), this.copyTo(t)
        }, t.systems.StateSystem.prototype.setState = function(t) {
            return ue("v5.1.0", "StateSystem.setState has been renamed to StateSystem.set"), this.set(t)
        }, Object.assign(t.systems.FilterSystem.prototype, {
            getRenderTarget: function(t, e) {
                return ue(Fs, "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"), this.getFilterTexture(e)
            },
            returnRenderTarget: function(t) {
                ue(Fs, "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"), this.returnFilterTexture(t)
            },
            calculateScreenSpaceMatrix: function(t) {
                ue(Fs, "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");
                var e = t.identity(),
                    i = this.activeState,
                    r = i.sourceFrame,
                    n = i.destinationFrame;
                return e.translate(r.x / n.width, r.y / n.height), e.scale(n.width, n.height), e
            },
            calculateNormalizedScreenSpaceMatrix: function(t) {
                ue(Fs, "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");
                var e = this.activeState,
                    i = e.sourceFrame,
                    r = e.destinationFrame,
                    n = t.identity();
                n.translate(i.x / r.width, i.y / r.height);
                var o = r.width / i.width,
                    s = r.height / i.height;
                return n.scale(o, s), n
            }
        }), Object.defineProperties(t.RenderTexture.prototype, {
            sourceFrame: {
                get: function() {
                    return ue(Fs, "PIXI.RenderTexture.sourceFrame property has been removed"), this.filterFrame
                }
            },
            size: {
                get: function() {
                    return ue(Fs, "PIXI.RenderTexture.size property has been removed"), this._frame
                }
            }
        });
        var i = function(t) {
                function e(e, i, r, n) {
                    ue(Fs, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !0, e, i, r, n)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(t.filters.BlurFilterPass),
            r = function(t) {
                function e(e, i, r, n) {
                    ue(Fs, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"), t.call(this, !1, e, i, r, n)
                }
                return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
            }(t.filters.BlurFilterPass);
        Object.assign(t.filters, {
            BlurXFilter: i,
            BlurYFilter: r
        });
        var n = t.Sprite,
            o = t.Texture,
            s = t.Graphics;

        function a(t, e, i, r) {
            return ue(Fs, "PIXI.Sprite." + t + " method is deprecated, use PIXI.Sprite.from"), n.from(e, {
                resourceOptions: {
                    scale: r,
                    crossorigin: i
                }
            })
        }

        function h(t, e, i, r) {
            return ue(Fs, "PIXI.Texture." + t + " method is deprecated, use PIXI.Texture.from"), o.from(e, {
                resourceOptions: {
                    scale: r,
                    crossorigin: i
                }
            })
        }
        s.prototype.generateCanvasTexture || (s.prototype.generateCanvasTexture = function() {
            ue(Fs, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')
        }), Object.defineProperty(t.Graphics.prototype, "graphicsData", {
            get: function() {
                return ue(Fs, "PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"), this.geometry.graphicsData
            }
        }), n.fromImage = a.bind(null, "fromImage"), n.fromSVG = a.bind(null, "fromSVG"), n.fromCanvas = a.bind(null, "fromCanvas"), n.fromVideo = a.bind(null, "fromVideo"), n.fromFrame = a.bind(null, "fromFrame"), o.fromImage = h.bind(null, "fromImage"), o.fromSVG = h.bind(null, "fromSVG"), o.fromCanvas = h.bind(null, "fromCanvas"), o.fromVideo = h.bind(null, "fromVideo"), o.fromFrame = h.bind(null, "fromFrame"), Object.defineProperty(t.AbstractRenderer.prototype, "autoResize", {
            get: function() {
                return ue(Fs, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), this.autoDensity
            },
            set: function(t) {
                ue(Fs, "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"), this.autoDensity = t
            }
        }), Object.defineProperty(t.Renderer.prototype, "textureManager", {
            get: function() {
                return ue(Fs, "PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"), this.texture
            }
        }), t.utils.mixins = {
            mixin: function() {
                ue(Fs, "PIXI.utils.mixins.mixin function is no longer available")
            },
            delayMixin: function() {
                ue(Fs, "PIXI.utils.mixins.delayMixin function is no longer available")
            },
            performMixins: function() {
                ue(Fs, "PIXI.utils.mixins.performMixins function is no longer available")
            }
        }
    }, t.utils = le, t
}({});
PIXI.useDeprecated();




/*!
 * pixi-filters - v2.6.1
 * Compiled Thu, 03 May 2018 14:20:43 UTC
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters = function(e, t) {
    "use strict";
    var n = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
        r = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",
        o = function(e) {
            function t(t) {
                e.call(this, n, r), Object.assign(this, {
                    gamma: 1,
                    saturation: 1,
                    contrast: 1,
                    brightness: 1,
                    red: 1,
                    green: 1,
                    blue: 1,
                    alpha: 1
                }, t)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.apply = function(e, t, n, r) {
                this.uniforms.gamma = Math.max(this.gamma, 1e-4), this.uniforms.saturation = this.saturation, this.uniforms.contrast = this.contrast, this.uniforms.brightness = this.brightness, this.uniforms.red = this.red, this.uniforms.green = this.green, this.uniforms.blue = this.blue, this.uniforms.alpha = this.alpha, e.applyFilter(this, t, n, r)
            }, t
        }(t.Filter),
        i = n,
        l = "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",
        s = "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",
        a = function(e) {
            function n(n, r, o) {
                void 0 === n && (n = 4), void 0 === r && (r = 3), void 0 === o && (o = !1), e.call(this, i, o ? s : l), this.uniforms.uOffset = new Float32Array(2), this._pixelSize = new t.Point, this.pixelSize = 1, this._clamp = o, this._kernels = null, Array.isArray(n) ? this.kernels = n : (this._blur = n, this.quality = r)
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                kernels: {
                    configurable: !0
                },
                clamp: {
                    configurable: !0
                },
                pixelSize: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                },
                blur: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                var o, i = this.pixelSize.x / t.size.width,
                    l = this.pixelSize.y / t.size.height;
                if (1 === this._quality || 0 === this._blur) o = this._kernels[0] + .5, this.uniforms.uOffset[0] = o * i, this.uniforms.uOffset[1] = o * l, e.applyFilter(this, t, n, r);
                else {
                    for (var s, a = e.getRenderTarget(!0), u = t, c = a, f = this._quality - 1, h = 0; h < f; h++) o = this._kernels[h] + .5, this.uniforms.uOffset[0] = o * i, this.uniforms.uOffset[1] = o * l, e.applyFilter(this, u, c, !0), s = u, u = c, c = s;
                    o = this._kernels[f] + .5, this.uniforms.uOffset[0] = o * i, this.uniforms.uOffset[1] = o * l, e.applyFilter(this, u, n, r), e.returnRenderTarget(a)
                }
            }, n.prototype._generateKernels = function() {
                var e = this._blur,
                    t = this._quality,
                    n = [e];
                if (e > 0)
                    for (var r = e, o = e / t, i = 1; i < t; i++) r -= o, n.push(r);
                this._kernels = n
            }, r.kernels.get = function() {
                return this._kernels
            }, r.kernels.set = function(e) {
                Array.isArray(e) && e.length > 0 ? (this._kernels = e, this._quality = e.length, this._blur = Math.max.apply(Math, e)) : (this._kernels = [0], this._quality = 1)
            }, r.clamp.get = function() {
                return this._clamp
            }, r.pixelSize.set = function(e) {
                "number" == typeof e ? (this._pixelSize.x = e, this._pixelSize.y = e) : Array.isArray(e) ? (this._pixelSize.x = e[0], this._pixelSize.y = e[1]) : e instanceof t.Point ? (this._pixelSize.x = e.x, this._pixelSize.y = e.y) : (this._pixelSize.x = 1, this._pixelSize.y = 1)
            }, r.pixelSize.get = function() {
                return this._pixelSize
            }, r.quality.get = function() {
                return this._quality
            }, r.quality.set = function(e) {
                this._quality = Math.max(1, Math.round(e)), this._generateKernels()
            }, r.blur.get = function() {
                return this._blur
            }, r.blur.set = function(e) {
                this._blur = e, this._generateKernels()
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        u = n,
        c = "\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",
        f = function(e) {
            function t(t) {
                void 0 === t && (t = .5), e.call(this, u, c), this.threshold = t
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                threshold: {
                    configurable: !0
                }
            };
            return n.threshold.get = function() {
                return this.uniforms.threshold
            }, n.threshold.set = function(e) {
                this.uniforms.threshold = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        h = "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",
        p = function(e) {
            function n(n) {
                e.call(this, u, h), "number" == typeof n && (n = {
                    threshold: n
                }), n = Object.assign({
                    threshold: .5,
                    bloomScale: 1,
                    brightness: 1,
                    kernels: null,
                    blur: 8,
                    quality: 4,
                    pixelSize: 1,
                    resolution: t.settings.RESOLUTION
                }, n), this.bloomScale = n.bloomScale, this.brightness = n.brightness;
                var r = n.kernels,
                    o = n.blur,
                    i = n.quality,
                    l = n.pixelSize,
                    s = n.resolution;
                this._extractFilter = new f(n.threshold), this._extractFilter.resolution = s, this._blurFilter = r ? new a(r) : new a(o, i), this.pixelSize = l, this.resolution = s
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                resolution: {
                    configurable: !0
                },
                threshold: {
                    configurable: !0
                },
                kernels: {
                    configurable: !0
                },
                blur: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                },
                pixelSize: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r, o) {
                var i = e.getRenderTarget(!0);
                this._extractFilter.apply(e, t, i, !0, o);
                var l = e.getRenderTarget(!0);
                this._blurFilter.apply(e, i, l, !0, o), this.uniforms.bloomScale = this.bloomScale, this.uniforms.brightness = this.brightness, this.uniforms.bloomTexture = l, e.applyFilter(this, t, n, r), e.returnRenderTarget(l), e.returnRenderTarget(i)
            }, r.resolution.get = function() {
                return this._resolution
            }, r.resolution.set = function(e) {
                this._resolution = e, this._extractFilter && (this._extractFilter.resolution = e), this._blurFilter && (this._blurFilter.resolution = e)
            }, r.threshold.get = function() {
                return this._extractFilter.threshold
            }, r.threshold.set = function(e) {
                this._extractFilter.threshold = e
            }, r.kernels.get = function() {
                return this._blurFilter.kernels
            }, r.kernels.set = function(e) {
                this._blurFilter.kernels = e
            }, r.blur.get = function() {
                return this._blurFilter.blur
            }, r.blur.set = function(e) {
                this._blurFilter.blur = e
            }, r.quality.get = function() {
                return this._blurFilter.quality
            }, r.quality.set = function(e) {
                this._blurFilter.quality = e
            }, r.pixelSize.get = function() {
                return this._blurFilter.pixelSize
            }, r.pixelSize.set = function(e) {
                this._blurFilter.pixelSize = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        d = n,
        m = "varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}",
        g = function(e) {
            function t(t) {
                void 0 === t && (t = 8), e.call(this, d, m), this.size = t
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                size: {
                    configurable: !0
                }
            };
            return n.size.get = function() {
                return this.uniforms.pixelSize
            }, n.size.set = function(e) {
                this.uniforms.pixelSize = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        v = n,
        x = "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n",
        y = function(e) {
            function n(t) {
                void 0 === t && (t = {}), e.call(this, v, x), this.uniforms.lightColor = new Float32Array(3), this.uniforms.shadowColor = new Float32Array(3), t = Object.assign({
                    rotation: 45,
                    thickness: 2,
                    lightColor: 16777215,
                    lightAlpha: .7,
                    shadowColor: 0,
                    shadowAlpha: .7
                }, t), this.rotation = t.rotation, this.thickness = t.thickness, this.lightColor = t.lightColor, this.lightAlpha = t.lightAlpha, this.shadowColor = t.shadowColor, this.shadowAlpha = t.shadowAlpha
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                rotation: {
                    configurable: !0
                },
                thickness: {
                    configurable: !0
                },
                lightColor: {
                    configurable: !0
                },
                lightAlpha: {
                    configurable: !0
                },
                shadowColor: {
                    configurable: !0
                },
                shadowAlpha: {
                    configurable: !0
                }
            };
            return n.prototype._updateTransform = function() {
                this.uniforms.transformX = this._thickness * Math.cos(this._angle), this.uniforms.transformY = this._thickness * Math.sin(this._angle)
            }, r.rotation.get = function() {
                return this._angle / t.DEG_TO_RAD
            }, r.rotation.set = function(e) {
                this._angle = e * t.DEG_TO_RAD, this._updateTransform()
            }, r.thickness.get = function() {
                return this._thickness
            }, r.thickness.set = function(e) {
                this._thickness = e, this._updateTransform()
            }, r.lightColor.get = function() {
                return t.utils.rgb2hex(this.uniforms.lightColor)
            }, r.lightColor.set = function(e) {
                t.utils.hex2rgb(e, this.uniforms.lightColor)
            }, r.lightAlpha.get = function() {
                return this.uniforms.lightAlpha
            }, r.lightAlpha.set = function(e) {
                this.uniforms.lightAlpha = e
            }, r.shadowColor.get = function() {
                return t.utils.rgb2hex(this.uniforms.shadowColor)
            }, r.shadowColor.set = function(e) {
                t.utils.hex2rgb(e, this.uniforms.shadowColor)
            }, r.shadowAlpha.get = function() {
                return this.uniforms.shadowAlpha
            }, r.shadowAlpha.set = function(e) {
                this.uniforms.shadowAlpha = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        _ = t.filters,
        b = _.BlurXFilter,
        C = _.BlurYFilter,
        S = _.AlphaFilter,
        F = function(e) {
            function n(n, r, o, i) {
                var l, s;
                void 0 === n && (n = 2), void 0 === r && (r = 4), void 0 === o && (o = t.settings.RESOLUTION), void 0 === i && (i = 5), e.call(this), "number" == typeof n ? (l = n, s = n) : n instanceof t.Point ? (l = n.x, s = n.y) : Array.isArray(n) && (l = n[0], s = n[1]), this.blurXFilter = new b(l, r, o, i), this.blurYFilter = new C(s, r, o, i), this.blurYFilter.blendMode = t.BLEND_MODES.SCREEN, this.defaultFilter = new S
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                blur: {
                    configurable: !0
                },
                blurX: {
                    configurable: !0
                },
                blurY: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n) {
                var r = e.getRenderTarget(!0);
                this.defaultFilter.apply(e, t, n), this.blurXFilter.apply(e, t, r), this.blurYFilter.apply(e, r, n), e.returnRenderTarget(r)
            }, r.blur.get = function() {
                return this.blurXFilter.blur
            }, r.blur.set = function(e) {
                this.blurXFilter.blur = this.blurYFilter.blur = e
            }, r.blurX.get = function() {
                return this.blurXFilter.blur
            }, r.blurX.set = function(e) {
                this.blurXFilter.blur = e
            }, r.blurY.get = function() {
                return this.blurYFilter.blur
            }, r.blurY.set = function(e) {
                this.blurYFilter.blur = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        z = n,
        A = "uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n",
        w = function(e) {
            function t(t, n, r) {
                e.call(this, z, A), this.uniforms.dimensions = new Float32Array(2), this.center = t || [.5, .5], this.radius = n || 100, this.strength = r || 1
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                radius: {
                    configurable: !0
                },
                strength: {
                    configurable: !0
                },
                center: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n, r) {
                this.uniforms.dimensions[0] = t.sourceFrame.width, this.uniforms.dimensions[1] = t.sourceFrame.height, e.applyFilter(this, t, n, r)
            }, n.radius.get = function() {
                return this.uniforms.radius
            }, n.radius.set = function(e) {
                this.uniforms.radius = e
            }, n.strength.get = function() {
                return this.uniforms.strength
            }, n.strength.set = function(e) {
                this.uniforms.strength = e
            }, n.center.get = function() {
                return this.uniforms.center
            }, n.center.set = function(e) {
                this.uniforms.center = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        T = n,
        D = "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform sampler2D colorMap;\n\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    float sliceIndex = color.b * (_size - 1.0);\n    float zSlice0 = floor(sliceIndex);\n    float zSlice1 = ceil(sliceIndex);\n\n    float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n    float s0 = xOffset + zSlice0 * _sliceSize;\n    float s1 = xOffset + zSlice1 * _sliceSize;\n    vec4 slice0Color = texture2D(colorMap, vec2(s0, color.g));\n    vec4 slice1Color = texture2D(colorMap, vec2(s1, color.g));\n    vec4 adjusted = mix(slice0Color, slice1Color, fract(sliceIndex));\n\n    gl_FragColor = mix(color, adjusted, _mix);\n}\n",
        O = function(e) {
            function n(t, n, r) {
                void 0 === n && (n = !1), void 0 === r && (r = 1), e.call(this, T, D), this._size = 0, this._sliceSize = 0, this._slicePixelSize = 0, this._sliceInnerSize = 0, this._scaleMode = null, this._nearest = !1, this.nearest = n, this.mix = r, this.colorMap = t
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                colorSize: {
                    configurable: !0
                },
                colorMap: {
                    configurable: !0
                },
                nearest: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                this.uniforms._mix = this.mix, e.applyFilter(this, t, n, r)
            }, r.colorSize.get = function() {
                return this._size
            }, r.colorMap.get = function() {
                return this._colorMap
            }, r.colorMap.set = function(e) {
                e instanceof t.Texture || (e = t.Texture.from(e)), e && e.baseTexture && (e.baseTexture.scaleMode = this._scaleMode, e.baseTexture.mipmap = !1, this._size = e.height, this._sliceSize = 1 / this._size, this._slicePixelSize = this._sliceSize / this._size, this._sliceInnerSize = this._slicePixelSize * (this._size - 1), this.uniforms._size = this._size, this.uniforms._sliceSize = this._sliceSize, this.uniforms._slicePixelSize = this._slicePixelSize, this.uniforms._sliceInnerSize = this._sliceInnerSize, this.uniforms.colorMap = e), this._colorMap = e
            }, r.nearest.get = function() {
                return this._nearest
            }, r.nearest.set = function(e) {
                this._nearest = e, this._scaleMode = e ? t.SCALE_MODES.NEAREST : t.SCALE_MODES.LINEAR;
                var n = this._colorMap;
                n && n.baseTexture && (n.baseTexture._glTextures = {}, n.baseTexture.scaleMode = this._scaleMode, n.baseTexture.mipmap = !1, n._updateID++, n.baseTexture.emit("update", n.baseTexture))
            }, n.prototype.updateColorMap = function() {
                var e = this._colorMap;
                e && e.baseTexture && (e._updateID++, e.baseTexture.emit("update", e.baseTexture), this.colorMap = e)
            }, n.prototype.destroy = function(t) {
                this._colorMap && this._colorMap.destroy(t), e.prototype.destroy.call(this)
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        P = n,
        M = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n",
        R = function(e) {
            function n(t, n, r) {
                void 0 === t && (t = 16711680), void 0 === n && (n = 0), void 0 === r && (r = .4), e.call(this, P, M), this.uniforms.originalColor = new Float32Array(3), this.uniforms.newColor = new Float32Array(3), this.originalColor = t, this.newColor = n, this.epsilon = r
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                originalColor: {
                    configurable: !0
                },
                newColor: {
                    configurable: !0
                },
                epsilon: {
                    configurable: !0
                }
            };
            return r.originalColor.set = function(e) {
                var n = this.uniforms.originalColor;
                "number" == typeof e ? (t.utils.hex2rgb(e, n), this._originalColor = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], this._originalColor = t.utils.rgb2hex(n))
            }, r.originalColor.get = function() {
                return this._originalColor
            }, r.newColor.set = function(e) {
                var n = this.uniforms.newColor;
                "number" == typeof e ? (t.utils.hex2rgb(e, n), this._newColor = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], this._newColor = t.utils.rgb2hex(n))
            }, r.newColor.get = function() {
                return this._newColor
            }, r.epsilon.set = function(e) {
                this.uniforms.epsilon = e
            }, r.epsilon.get = function() {
                return this.uniforms.epsilon
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        j = n,
        L = "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",
        k = function(e) {
            function t(t, n, r) {
                e.call(this, j, L), this.uniforms.texelSize = new Float32Array(9), this.matrix = t, this.width = n, this.height = r
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                matrix: {
                    configurable: !0
                },
                width: {
                    configurable: !0
                },
                height: {
                    configurable: !0
                }
            };
            return n.matrix.get = function() {
                return this.uniforms.matrix
            }, n.matrix.set = function(e) {
                this.uniforms.matrix = new Float32Array(e)
            }, n.width.get = function() {
                return 1 / this.uniforms.texelSize[0]
            }, n.width.set = function(e) {
                this.uniforms.texelSize[0] = 1 / e
            }, n.height.get = function() {
                return 1 / this.uniforms.texelSize[1]
            }, n.height.set = function(e) {
                this.uniforms.texelSize[1] = 1 / e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        I = n,
        E = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n",
        B = function(e) {
            function t() {
                e.call(this, I, E)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
        }(t.Filter),
        X = n,
        q = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n    float _c = curvature > 0. ? curvature : 1.;\n    float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n    vec2 uv = dir * k;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0) {\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n",
        N = function(e) {
            function t(t) {
                e.call(this, X, q), this.uniforms.dimensions = new Float32Array(2), this.time = 0, this.seed = 0, Object.assign(this, {
                    curvature: 1,
                    lineWidth: 1,
                    lineContrast: .25,
                    verticalLine: !1,
                    noise: 0,
                    noiseSize: 1,
                    seed: 0,
                    vignetting: .3,
                    vignettingAlpha: 1,
                    vignettingBlur: .3,
                    time: 0
                }, t)
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                curvature: {
                    configurable: !0
                },
                lineWidth: {
                    configurable: !0
                },
                lineContrast: {
                    configurable: !0
                },
                verticalLine: {
                    configurable: !0
                },
                noise: {
                    configurable: !0
                },
                noiseSize: {
                    configurable: !0
                },
                vignetting: {
                    configurable: !0
                },
                vignettingAlpha: {
                    configurable: !0
                },
                vignettingBlur: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n, r) {
                this.uniforms.dimensions[0] = t.sourceFrame.width, this.uniforms.dimensions[1] = t.sourceFrame.height, this.uniforms.seed = this.seed, this.uniforms.time = this.time, e.applyFilter(this, t, n, r)
            }, n.curvature.set = function(e) {
                this.uniforms.curvature = e
            }, n.curvature.get = function() {
                return this.uniforms.curvature
            }, n.lineWidth.set = function(e) {
                this.uniforms.lineWidth = e
            }, n.lineWidth.get = function() {
                return this.uniforms.lineWidth
            }, n.lineContrast.set = function(e) {
                this.uniforms.lineContrast = e
            }, n.lineContrast.get = function() {
                return this.uniforms.lineContrast
            }, n.verticalLine.set = function(e) {
                this.uniforms.verticalLine = e
            }, n.verticalLine.get = function() {
                return this.uniforms.verticalLine
            }, n.noise.set = function(e) {
                this.uniforms.noise = e
            }, n.noise.get = function() {
                return this.uniforms.noise
            }, n.noiseSize.set = function(e) {
                this.uniforms.noiseSize = e
            }, n.noiseSize.get = function() {
                return this.uniforms.noiseSize
            }, n.vignetting.set = function(e) {
                this.uniforms.vignetting = e
            }, n.vignetting.get = function() {
                return this.uniforms.vignetting
            }, n.vignettingAlpha.set = function(e) {
                this.uniforms.vignettingAlpha = e
            }, n.vignettingAlpha.get = function() {
                return this.uniforms.vignettingAlpha
            }, n.vignettingBlur.set = function(e) {
                this.uniforms.vignettingBlur = e
            }, n.vignettingBlur.get = function() {
                return this.uniforms.vignettingBlur
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        G = n,
        K = "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",
        Y = function(e) {
            function t(t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = 5), e.call(this, G, K), this.scale = t, this.angle = n
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                scale: {
                    configurable: !0
                },
                angle: {
                    configurable: !0
                }
            };
            return n.scale.get = function() {
                return this.uniforms.scale
            }, n.scale.set = function(e) {
                this.uniforms.scale = e
            }, n.angle.get = function() {
                return this.uniforms.angle
            }, n.angle.set = function(e) {
                this.uniforms.angle = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        W = n,
        Q = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n\n    // Un-premultiply alpha before applying the color\n    if (sample.a > 0.0) {\n        sample.rgb /= sample.a;\n    }\n\n    // Premultiply alpha again\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",
        U = function(e) {
            function n(n) {
                n && n.constructor !== Object && (console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"), n = {
                    rotation: n
                }, void 0 !== arguments[1] && (n.distance = arguments[1]), void 0 !== arguments[2] && (n.blur = arguments[2]), void 0 !== arguments[3] && (n.color = arguments[3]), void 0 !== arguments[4] && (n.alpha = arguments[4])), n = Object.assign({
                    rotation: 45,
                    distance: 5,
                    color: 0,
                    alpha: .5,
                    shadowOnly: !1,
                    kernels: null,
                    blur: 2,
                    quality: 3,
                    pixelSize: 1,
                    resolution: t.settings.RESOLUTION
                }, n), e.call(this);
                var r = n.kernels,
                    o = n.blur,
                    i = n.quality,
                    l = n.pixelSize,
                    s = n.resolution;
                this._tintFilter = new t.Filter(W, Q), this._tintFilter.uniforms.color = new Float32Array(4), this._tintFilter.resolution = s, this._blurFilter = r ? new a(r) : new a(o, i), this.pixelSize = l, this.resolution = s, this.targetTransform = new t.Matrix;
                var u = n.shadowOnly,
                    c = n.rotation,
                    f = n.distance,
                    h = n.alpha,
                    p = n.color;
                this.shadowOnly = u, this.rotation = c, this.distance = f, this.alpha = h, this.color = p, this._updatePadding()
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                resolution: {
                    configurable: !0
                },
                distance: {
                    configurable: !0
                },
                rotation: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                },
                color: {
                    configurable: !0
                },
                kernels: {
                    configurable: !0
                },
                blur: {
                    configurable: !0
                },
                quality: {
                    configurable: !0
                },
                pixelSize: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                var o = e.getRenderTarget();
                o.transform = this.targetTransform, this._tintFilter.apply(e, t, o, !0), o.transform = null, this._blurFilter.apply(e, o, n), !0 !== this.shadowOnly && e.applyFilter(this, t, n, r), e.returnRenderTarget(o)
            }, n.prototype._updatePadding = function() {
                this.padding = this.distance + 2 * this.blur
            }, n.prototype._updateTargetTransform = function() {
                this.targetTransform.tx = this.distance * Math.cos(this.angle), this.targetTransform.ty = this.distance * Math.sin(this.angle)
            }, r.resolution.get = function() {
                return this._resolution
            }, r.resolution.set = function(e) {
                this._resolution = e, this._tintFilter && (this._tintFilter.resolution = e), this._blurFilter && (this._blurFilter.resolution = e)
            }, r.distance.get = function() {
                return this._distance
            }, r.distance.set = function(e) {
                this._distance = e, this._updatePadding(), this._updateTargetTransform()
            }, r.rotation.get = function() {
                return this.angle / t.DEG_TO_RAD
            }, r.rotation.set = function(e) {
                this.angle = e * t.DEG_TO_RAD, this._updateTargetTransform()
            }, r.alpha.get = function() {
                return this._tintFilter.uniforms.alpha
            }, r.alpha.set = function(e) {
                this._tintFilter.uniforms.alpha = e
            }, r.color.get = function() {
                return t.utils.rgb2hex(this._tintFilter.uniforms.color)
            }, r.color.set = function(e) {
                t.utils.hex2rgb(e, this._tintFilter.uniforms.color)
            }, r.kernels.get = function() {
                return this._blurFilter.kernels
            }, r.kernels.set = function(e) {
                this._blurFilter.kernels = e
            }, r.blur.get = function() {
                return this._blurFilter.blur
            }, r.blur.set = function(e) {
                this._blurFilter.blur = e, this._updatePadding()
            }, r.quality.get = function() {
                return this._blurFilter.quality
            }, r.quality.set = function(e) {
                this._blurFilter.quality = e
            }, r.pixelSize.get = function() {
                return this._blurFilter.pixelSize
            }, r.pixelSize.set = function(e) {
                this._blurFilter.pixelSize = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        Z = n,
        V = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n",
        H = function(e) {
            function t(t) {
                void 0 === t && (t = 5), e.call(this, Z, V), this.strength = t
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                strength: {
                    configurable: !0
                }
            };
            return n.strength.get = function() {
                return this.uniforms.strength
            }, n.strength.set = function(e) {
                this.uniforms.strength = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        $ = n,
        J = "// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == ORIGINAL) {\n                gl_FragColor = texture2D(uSampler, vTextureCoord);\n                return;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            } else {\n                gl_FragColor = vec4(0., 0., 0., 0.);\n                return;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n",
        ee = function(e) {
            function n(n) {
                void 0 === n && (n = {}), e.call(this, $, J), this.uniforms.dimensions = new Float32Array(2), n = Object.assign({
                    slices: 5,
                    offset: 100,
                    direction: 0,
                    fillMode: 0,
                    average: !1,
                    seed: 0,
                    red: [0, 0],
                    green: [0, 0],
                    blue: [0, 0],
                    minSize: 8,
                    sampleSize: 512
                }, n), this.direction = n.direction, this.red = n.red, this.green = n.green, this.blue = n.blue, this.offset = n.offset, this.fillMode = n.fillMode, this.average = n.average, this.seed = n.seed, this.minSize = n.minSize, this.sampleSize = n.sampleSize, this._canvas = document.createElement("canvas"), this._canvas.width = 4, this._canvas.height = this.sampleSize, this.texture = t.Texture.fromCanvas(this._canvas, t.SCALE_MODES.NEAREST), this._slices = 0, this.slices = n.slices
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                sizes: {
                    configurable: !0
                },
                offsets: {
                    configurable: !0
                },
                slices: {
                    configurable: !0
                },
                direction: {
                    configurable: !0
                },
                red: {
                    configurable: !0
                },
                green: {
                    configurable: !0
                },
                blue: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                var o = t.sourceFrame.width,
                    i = t.sourceFrame.height;
                this.uniforms.dimensions[0] = o, this.uniforms.dimensions[1] = i, this.uniforms.aspect = i / o, this.uniforms.seed = this.seed, this.uniforms.offset = this.offset, this.uniforms.fillMode = this.fillMode, e.applyFilter(this, t, n, r)
            }, n.prototype._randomizeSizes = function() {
                var e = this._sizes,
                    t = this._slices - 1,
                    n = this.sampleSize,
                    r = Math.min(this.minSize / n, .9 / this._slices);
                if (this.average) {
                    for (var o = this._slices, i = 1, l = 0; l < t; l++) {
                        var s = i / (o - l),
                            a = Math.max(s * (1 - .6 * Math.random()), r);
                        e[l] = a, i -= a
                    }
                    e[t] = i
                } else {
                    for (var u = 1, c = Math.sqrt(1 / this._slices), f = 0; f < t; f++) {
                        var h = Math.max(c * u * Math.random(), r);
                        e[f] = h, u -= h
                    }
                    e[t] = u
                }
                this.shuffle()
            }, n.prototype.shuffle = function() {
                for (var e = this._sizes, t = this._slices - 1; t > 0; t--) {
                    var n = Math.random() * t >> 0,
                        r = e[t];
                    e[t] = e[n], e[n] = r
                }
            }, n.prototype._randomizeOffsets = function() {
                for (var e = 0; e < this._slices; e++) this._offsets[e] = Math.random() * (Math.random() < .5 ? -1 : 1)
            }, n.prototype.refresh = function() {
                this._randomizeSizes(), this._randomizeOffsets(), this.redraw()
            }, n.prototype.redraw = function() {
                var e, t = this.sampleSize,
                    n = this.texture,
                    r = this._canvas.getContext("2d");
                r.clearRect(0, 0, 8, t);
                for (var o = 0, i = 0; i < this._slices; i++) {
                    e = Math.floor(256 * this._offsets[i]);
                    var l = this._sizes[i] * t,
                        s = e > 0 ? e : 0,
                        a = e < 0 ? -e : 0;
                    r.fillStyle = "rgba(" + s + ", " + a + ", 0, 1)", r.fillRect(0, o >> 0, t, l + 1 >> 0), o += l
                }
                n.baseTexture.emit("update", n.baseTexture), this.uniforms.displacementMap = n
            }, r.sizes.set = function(e) {
                for (var t = Math.min(this._slices, e.length), n = 0; n < t; n++) this._sizes[n] = e[n]
            }, r.sizes.get = function() {
                return this._sizes
            }, r.offsets.set = function(e) {
                for (var t = Math.min(this._slices, e.length), n = 0; n < t; n++) this._offsets[n] = e[n]
            }, r.offsets.get = function() {
                return this._offsets
            }, r.slices.get = function() {
                return this._slices
            }, r.slices.set = function(e) {
                this._slices !== e && (this._slices = e, this.uniforms.slices = e, this._sizes = this.uniforms.slicesWidth = new Float32Array(e), this._offsets = this.uniforms.slicesOffset = new Float32Array(e), this.refresh())
            }, r.direction.get = function() {
                return this._direction
            }, r.direction.set = function(e) {
                if (this._direction !== e) {
                    this._direction = e;
                    var n = e * t.DEG_TO_RAD;
                    this.uniforms.sinDir = Math.sin(n), this.uniforms.cosDir = Math.cos(n)
                }
            }, r.red.get = function() {
                return this.uniforms.red
            }, r.red.set = function(e) {
                this.uniforms.red = e
            }, r.green.get = function() {
                return this.uniforms.green
            }, r.green.set = function(e) {
                this.uniforms.green = e
            }, r.blue.get = function() {
                return this.uniforms.blue
            }, r.blue.set = function(e) {
                this.uniforms.blue = e
            }, n.prototype.destroy = function() {
                this.texture.destroy(!0), this.texture = null, this._canvas = null, this.red = null, this.green = null, this.blue = null, this._sizes = null, this._offsets = null
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter);
    ee.TRANSPARENT = 0, ee.ORIGINAL = 1, ee.LOOP = 2, ee.CLAMP = 3, ee.MIRROR = 4;
    var te = n,
        ne = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nconst float PI = 3.14159265358979323846264;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float cosAngle;\n    float sinAngle;\n    vec2 displaced;\n    for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%) {\n       cosAngle = cos(angle);\n       sinAngle = sin(angle);\n       for (float curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n           displaced.x = vTextureCoord.x + cosAngle * curDistance * px.x;\n           displaced.y = vTextureCoord.y + sinAngle * curDistance * px.y;\n           curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n           totalAlpha += (distance - curDistance) * curColor.a;\n           maxTotalAlpha += (distance - curDistance);\n       }\n    }\n    maxTotalAlpha = max(maxTotalAlpha, 0.0001);\n\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n    float resultAlpha = (ownColor.a + outerGlowAlpha);\n    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);\n}\n",
        re = function(e) {
            function n(t, n, r, o, i) {
                void 0 === t && (t = 10), void 0 === n && (n = 4), void 0 === r && (r = 0), void 0 === o && (o = 16777215), void 0 === i && (i = .1), e.call(this, te, ne.replace(/%QUALITY_DIST%/gi, "" + (1 / i / t).toFixed(7)).replace(/%DIST%/gi, "" + t.toFixed(7))), this.uniforms.glowColor = new Float32Array([0, 0, 0, 1]), this.distance = t, this.color = o, this.outerStrength = n, this.innerStrength = r
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                color: {
                    configurable: !0
                },
                distance: {
                    configurable: !0
                },
                outerStrength: {
                    configurable: !0
                },
                innerStrength: {
                    configurable: !0
                }
            };
            return r.color.get = function() {
                return t.utils.rgb2hex(this.uniforms.glowColor)
            }, r.color.set = function(e) {
                t.utils.hex2rgb(e, this.uniforms.glowColor)
            }, r.distance.get = function() {
                return this.uniforms.distance
            }, r.distance.set = function(e) {
                this.uniforms.distance = e
            }, r.outerStrength.get = function() {
                return this.uniforms.outerStrength
            }, r.outerStrength.set = function(e) {
                this.uniforms.outerStrength = e
            }, r.innerStrength.get = function() {
                return this.uniforms.innerStrength
            }, r.innerStrength.set = function(e) {
                this.uniforms.innerStrength = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        oe = n,
        ie = "vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",
        le = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n}\n",
        se = function(e) {
            function n(n) {
                e.call(this, oe, le.replace("${perlin}", ie)), this.uniforms.dimensions = new Float32Array(2), "number" == typeof n && (console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time)"), n = {
                    angle: n
                }, void 0 !== arguments[1] && (n.gain = arguments[1]), void 0 !== arguments[2] && (n.lacunarity = arguments[2]), void 0 !== arguments[3] && (n.time = arguments[3])), n = Object.assign({
                    angle: 30,
                    gain: .5,
                    lacunarity: 2.5,
                    time: 0,
                    parallel: !0,
                    center: [0, 0]
                }, n), this._angleLight = new t.Point, this.angle = n.angle, this.gain = n.gain, this.lacunarity = n.lacunarity, this.parallel = n.parallel, this.center = n.center, this.time = n.time
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                angle: {
                    configurable: !0
                },
                gain: {
                    configurable: !0
                },
                lacunarity: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                var o = t.sourceFrame,
                    i = o.width,
                    l = o.height;
                this.uniforms.light = this.parallel ? this._angleLight : this.center, this.uniforms.parallel = this.parallel, this.uniforms.dimensions[0] = i, this.uniforms.dimensions[1] = l, this.uniforms.aspect = l / i, this.uniforms.time = this.time, e.applyFilter(this, t, n, r)
            }, r.angle.get = function() {
                return this._angle
            }, r.angle.set = function(e) {
                this._angle = e;
                var n = e * t.DEG_TO_RAD;
                this._angleLight.x = Math.cos(n), this._angleLight.y = Math.sin(n)
            }, r.gain.get = function() {
                return this.uniforms.gain
            }, r.gain.set = function(e) {
                this.uniforms.gain = e
            }, r.lacunarity.get = function() {
                return this.uniforms.lacunarity
            }, r.lacunarity.set = function(e) {
                this.uniforms.lacunarity = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        ae = n,
        ue = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n",
        ce = function(e) {
            function n(n, r, o) {
                void 0 === n && (n = [0, 0]), void 0 === r && (r = 5), void 0 === o && (o = 0), e.call(this, ae, ue), this.uniforms.uVelocity = new Float32Array(2), this._velocity = new t.ObservablePoint(this.velocityChanged, this), this.velocity = n, this.kernelSize = r, this.offset = o
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                velocity: {
                    configurable: !0
                },
                offset: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                var o = this.velocity,
                    i = o.x,
                    l = o.y;
                this.uniforms.uKernelSize = 0 !== i || 0 !== l ? this.kernelSize : 0, e.applyFilter(this, t, n, r)
            }, r.velocity.set = function(e) {
                Array.isArray(e) ? this._velocity.set(e[0], e[1]) : (e instanceof t.Point || e instanceof t.ObservablePoint) && this._velocity.copy(e)
            }, r.velocity.get = function() {
                return this._velocity
            }, n.prototype.velocityChanged = function() {
                this.uniforms.uVelocity[0] = this._velocity.x, this.uniforms.uVelocity[1] = this._velocity.y
            }, r.offset.set = function(e) {
                this.uniforms.uOffset = e
            }, r.offset.get = function() {
                return this.uniforms.uOffset
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        fe = n,
        he = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n",
        pe = function(e) {
            function n(t, n, r) {
                void 0 === n && (n = .05), void 0 === r && (r = null), r = r || t.length, e.call(this, fe, he.replace(/%maxColors%/g, r)), this.epsilon = n, this._maxColors = r, this._replacements = null, this.uniforms.originalColors = new Float32Array(3 * r), this.uniforms.targetColors = new Float32Array(3 * r), this.replacements = t
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                replacements: {
                    configurable: !0
                },
                maxColors: {
                    configurable: !0
                },
                epsilon: {
                    configurable: !0
                }
            };
            return r.replacements.set = function(e) {
                var n = this.uniforms.originalColors,
                    r = this.uniforms.targetColors,
                    o = e.length;
                if (o > this._maxColors) throw "Length of replacements (" + o + ") exceeds the maximum colors length (" + this._maxColors + ")";
                n[3 * o] = -1;
                for (var i = 0; i < o; i++) {
                    var l = e[i],
                        s = l[0];
                    "number" == typeof s ? s = t.utils.hex2rgb(s) : l[0] = t.utils.rgb2hex(s), n[3 * i] = s[0], n[3 * i + 1] = s[1], n[3 * i + 2] = s[2];
                    var a = l[1];
                    "number" == typeof a ? a = t.utils.hex2rgb(a) : l[1] = t.utils.rgb2hex(a), r[3 * i] = a[0], r[3 * i + 1] = a[1], r[3 * i + 2] = a[2]
                }
                this._replacements = e
            }, r.replacements.get = function() {
                return this._replacements
            }, n.prototype.refresh = function() {
                this.replacements = this._replacements
            }, r.maxColors.get = function() {
                return this._maxColors
            }, r.epsilon.set = function(e) {
                this.uniforms.epsilon = e
            }, r.epsilon.get = function() {
                return this.uniforms.epsilon
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        de = n,
        me = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n",
        ge = function(e) {
            function t(t, n) {
                void 0 === n && (n = 0), e.call(this, de, me), this.uniforms.dimensions = new Float32Array(2), "number" == typeof t ? (this.seed = t, t = null) : this.seed = n, Object.assign(this, {
                    sepia: .3,
                    noise: .3,
                    noiseSize: 1,
                    scratch: .5,
                    scratchDensity: .3,
                    scratchWidth: 1,
                    vignetting: .3,
                    vignettingAlpha: 1,
                    vignettingBlur: .3
                }, t)
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                sepia: {
                    configurable: !0
                },
                noise: {
                    configurable: !0
                },
                noiseSize: {
                    configurable: !0
                },
                scratch: {
                    configurable: !0
                },
                scratchDensity: {
                    configurable: !0
                },
                scratchWidth: {
                    configurable: !0
                },
                vignetting: {
                    configurable: !0
                },
                vignettingAlpha: {
                    configurable: !0
                },
                vignettingBlur: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n, r) {
                this.uniforms.dimensions[0] = t.sourceFrame.width, this.uniforms.dimensions[1] = t.sourceFrame.height, this.uniforms.seed = this.seed, e.applyFilter(this, t, n, r)
            }, n.sepia.set = function(e) {
                this.uniforms.sepia = e
            }, n.sepia.get = function() {
                return this.uniforms.sepia
            }, n.noise.set = function(e) {
                this.uniforms.noise = e
            }, n.noise.get = function() {
                return this.uniforms.noise
            }, n.noiseSize.set = function(e) {
                this.uniforms.noiseSize = e
            }, n.noiseSize.get = function() {
                return this.uniforms.noiseSize
            }, n.scratch.set = function(e) {
                this.uniforms.scratch = e
            }, n.scratch.get = function() {
                return this.uniforms.scratch
            }, n.scratchDensity.set = function(e) {
                this.uniforms.scratchDensity = e
            }, n.scratchDensity.get = function() {
                return this.uniforms.scratchDensity
            }, n.scratchWidth.set = function(e) {
                this.uniforms.scratchWidth = e
            }, n.scratchWidth.get = function() {
                return this.uniforms.scratchWidth
            }, n.vignetting.set = function(e) {
                this.uniforms.vignetting = e
            }, n.vignetting.get = function() {
                return this.uniforms.vignetting
            }, n.vignettingAlpha.set = function(e) {
                this.uniforms.vignettingAlpha = e
            }, n.vignettingAlpha.get = function() {
                return this.uniforms.vignettingAlpha
            }, n.vignettingBlur.set = function(e) {
                this.uniforms.vignettingBlur = e
            }, n.vignettingBlur.get = function() {
                return this.uniforms.vignettingBlur
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        ve = n,
        xe = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n",
        ye = function(e) {
            function n(t, r, o) {
                void 0 === t && (t = 1), void 0 === r && (r = 0), void 0 === o && (o = .1);
                var i = Math.max(o * n.MAX_SAMPLES, n.MIN_SAMPLES),
                    l = (2 * Math.PI / i).toFixed(7);
                e.call(this, ve, xe.replace(/\$\{angleStep\}/, l)), this.uniforms.thickness = new Float32Array([0, 0]), this.thickness = t, this.uniforms.outlineColor = new Float32Array([0, 0, 0, 1]), this.color = r, this.quality = o
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                color: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                this.uniforms.thickness[0] = this.thickness / t.size.width, this.uniforms.thickness[1] = this.thickness / t.size.height, e.applyFilter(this, t, n, r)
            }, r.color.get = function() {
                return t.utils.rgb2hex(this.uniforms.outlineColor)
            }, r.color.set = function(e) {
                t.utils.hex2rgb(e, this.uniforms.outlineColor)
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter);
    ye.MIN_SAMPLES = 1, ye.MAX_SAMPLES = 100;
    var _e = n,
        be = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n",
        Ce = function(e) {
            function t(t) {
                void 0 === t && (t = 10), e.call(this, _e, be), this.size = t
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                size: {
                    configurable: !0
                }
            };
            return n.size.get = function() {
                return this.uniforms.size
            }, n.size.set = function(e) {
                "number" == typeof e && (e = [e, e]), this.uniforms.size = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        Se = n,
        Fe = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n",
        ze = function(e) {
            function t(t, n, r, o) {
                void 0 === t && (t = 0), void 0 === n && (n = [0, 0]), void 0 === r && (r = 5), void 0 === o && (o = -1), e.call(this, Se, Fe), this._angle = 0, this.angle = t, this.center = n, this.kernelSize = r, this.radius = o
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                angle: {
                    configurable: !0
                },
                center: {
                    configurable: !0
                },
                radius: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n, r) {
                this.uniforms.uKernelSize = 0 !== this._angle ? this.kernelSize : 0, e.applyFilter(this, t, n, r)
            }, n.angle.set = function(e) {
                this._angle = e, this.uniforms.uRadian = e * Math.PI / 180
            }, n.angle.get = function() {
                return this._angle
            }, n.center.get = function() {
                return this.uniforms.uCenter
            }, n.center.set = function(e) {
                this.uniforms.uCenter = e
            }, n.radius.get = function() {
                return this.uniforms.uRadius
            }, n.radius.set = function(e) {
                (e < 0 || e === 1 / 0) && (e = -1), this.uniforms.uRadius = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        Ae = n,
        we = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n",
        Te = function(e) {
            function t(t) {
                e.call(this, Ae, we), this.uniforms.amplitude = new Float32Array(2), this.uniforms.waveLength = new Float32Array(2), this.uniforms.alpha = new Float32Array(2), this.uniforms.dimensions = new Float32Array(2), Object.assign(this, {
                    mirror: !0,
                    boundary: .5,
                    amplitude: [0, 20],
                    waveLength: [30, 100],
                    alpha: [1, 1],
                    time: 0
                }, t)
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                mirror: {
                    configurable: !0
                },
                boundary: {
                    configurable: !0
                },
                amplitude: {
                    configurable: !0
                },
                waveLength: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n, r) {
                this.uniforms.dimensions[0] = t.sourceFrame.width, this.uniforms.dimensions[1] = t.sourceFrame.height, this.uniforms.time = this.time, e.applyFilter(this, t, n, r)
            }, n.mirror.set = function(e) {
                this.uniforms.mirror = e
            }, n.mirror.get = function() {
                return this.uniforms.mirror
            }, n.boundary.set = function(e) {
                this.uniforms.boundary = e
            }, n.boundary.get = function() {
                return this.uniforms.boundary
            }, n.amplitude.set = function(e) {
                this.uniforms.amplitude[0] = e[0], this.uniforms.amplitude[1] = e[1]
            }, n.amplitude.get = function() {
                return this.uniforms.amplitude
            }, n.waveLength.set = function(e) {
                this.uniforms.waveLength[0] = e[0], this.uniforms.waveLength[1] = e[1]
            }, n.waveLength.get = function() {
                return this.uniforms.waveLength
            }, n.alpha.set = function(e) {
                this.uniforms.alpha[0] = e[0], this.uniforms.alpha[1] = e[1]
            }, n.alpha.get = function() {
                return this.uniforms.alpha
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        De = n,
        Oe = "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",
        Pe = function(e) {
            function t(t, n, r) {
                void 0 === t && (t = [-10, 0]), void 0 === n && (n = [0, 10]), void 0 === r && (r = [0, 0]), e.call(this, De, Oe), this.red = t, this.green = n, this.blue = r
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                red: {
                    configurable: !0
                },
                green: {
                    configurable: !0
                },
                blue: {
                    configurable: !0
                }
            };
            return n.red.get = function() {
                return this.uniforms.red
            }, n.red.set = function(e) {
                this.uniforms.red = e
            }, n.green.get = function() {
                return this.uniforms.green
            }, n.green.set = function(e) {
                this.uniforms.green = e
            }, n.blue.get = function() {
                return this.uniforms.blue
            }, n.blue.set = function(e) {
                this.uniforms.blue = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        Me = n,
        Re = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n",
        je = function(e) {
            function t(t, n, r) {
                void 0 === t && (t = [0, 0]), void 0 === n && (n = {}), void 0 === r && (r = 0), e.call(this, Me, Re), this.center = t, Array.isArray(n) && (console.warn("Deprecated Warning: ShockwaveFilter params Array has been changed to options Object."), n = {}), n = Object.assign({
                    amplitude: 30,
                    wavelength: 160,
                    brightness: 1,
                    speed: 500,
                    radius: -1
                }, n), this.amplitude = n.amplitude, this.wavelength = n.wavelength, this.brightness = n.brightness, this.speed = n.speed, this.radius = n.radius, this.time = r
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                center: {
                    configurable: !0
                },
                amplitude: {
                    configurable: !0
                },
                wavelength: {
                    configurable: !0
                },
                brightness: {
                    configurable: !0
                },
                speed: {
                    configurable: !0
                },
                radius: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n, r) {
                this.uniforms.time = this.time, e.applyFilter(this, t, n, r)
            }, n.center.get = function() {
                return this.uniforms.center
            }, n.center.set = function(e) {
                this.uniforms.center = e
            }, n.amplitude.get = function() {
                return this.uniforms.amplitude
            }, n.amplitude.set = function(e) {
                this.uniforms.amplitude = e
            }, n.wavelength.get = function() {
                return this.uniforms.wavelength
            }, n.wavelength.set = function(e) {
                this.uniforms.wavelength = e
            }, n.brightness.get = function() {
                return this.uniforms.brightness
            }, n.brightness.set = function(e) {
                this.uniforms.brightness = e
            }, n.speed.get = function() {
                return this.uniforms.speed
            }, n.speed.set = function(e) {
                this.uniforms.speed = e
            }, n.radius.get = function() {
                return this.uniforms.radius
            }, n.radius.set = function(e) {
                this.uniforms.radius = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        Le = n,
        ke = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",
        Ie = function(e) {
            function n(t, n, r) {
                void 0 === n && (n = 0), void 0 === r && (r = 1), e.call(this, Le, ke), this.uniforms.dimensions = new Float32Array(2), this.uniforms.ambientColor = new Float32Array([0, 0, 0, r]), this.texture = t, this.color = n
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                texture: {
                    configurable: !0
                },
                color: {
                    configurable: !0
                },
                alpha: {
                    configurable: !0
                }
            };
            return n.prototype.apply = function(e, t, n, r) {
                this.uniforms.dimensions[0] = t.sourceFrame.width, this.uniforms.dimensions[1] = t.sourceFrame.height, e.applyFilter(this, t, n, r)
            }, r.texture.get = function() {
                return this.uniforms.uLightmap
            }, r.texture.set = function(e) {
                this.uniforms.uLightmap = e
            }, r.color.set = function(e) {
                var n = this.uniforms.ambientColor;
                "number" == typeof e ? (t.utils.hex2rgb(e, n), this._color = e) : (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], this._color = t.utils.rgb2hex(n))
            }, r.color.get = function() {
                return this._color
            }, r.alpha.get = function() {
                return this.uniforms.ambientColor[3]
            }, r.alpha.set = function(e) {
                this.uniforms.ambientColor[3] = e
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        Ee = n,
        Be = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",
        Xe = function(e) {
            function n(n, r, o, i) {
                void 0 === n && (n = 100), void 0 === r && (r = 600), void 0 === o && (o = null), void 0 === i && (i = null), e.call(this, Ee, Be), this.uniforms.blur = n, this.uniforms.gradientBlur = r, this.uniforms.start = o || new t.Point(0, window.innerHeight / 2), this.uniforms.end = i || new t.Point(600, window.innerHeight / 2), this.uniforms.delta = new t.Point(30, 30), this.uniforms.texSize = new t.Point(window.innerWidth, window.innerHeight), this.updateDelta()
            }
            e && (n.__proto__ = e), n.prototype = Object.create(e && e.prototype), n.prototype.constructor = n;
            var r = {
                blur: {
                    configurable: !0
                },
                gradientBlur: {
                    configurable: !0
                },
                start: {
                    configurable: !0
                },
                end: {
                    configurable: !0
                }
            };
            return n.prototype.updateDelta = function() {
                this.uniforms.delta.x = 0, this.uniforms.delta.y = 0
            }, r.blur.get = function() {
                return this.uniforms.blur
            }, r.blur.set = function(e) {
                this.uniforms.blur = e
            }, r.gradientBlur.get = function() {
                return this.uniforms.gradientBlur
            }, r.gradientBlur.set = function(e) {
                this.uniforms.gradientBlur = e
            }, r.start.get = function() {
                return this.uniforms.start
            }, r.start.set = function(e) {
                this.uniforms.start = e, this.updateDelta()
            }, r.end.get = function() {
                return this.uniforms.end
            }, r.end.set = function(e) {
                this.uniforms.end = e, this.updateDelta()
            }, Object.defineProperties(n.prototype, r), n
        }(t.Filter),
        qe = function(e) {
            function t() {
                e.apply(this, arguments)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.updateDelta = function() {
                var e = this.uniforms.end.x - this.uniforms.start.x,
                    t = this.uniforms.end.y - this.uniforms.start.y,
                    n = Math.sqrt(e * e + t * t);
                this.uniforms.delta.x = e / n, this.uniforms.delta.y = t / n
            }, t
        }(Xe),
        Ne = function(e) {
            function t() {
                e.apply(this, arguments)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.updateDelta = function() {
                var e = this.uniforms.end.x - this.uniforms.start.x,
                    t = this.uniforms.end.y - this.uniforms.start.y,
                    n = Math.sqrt(e * e + t * t);
                this.uniforms.delta.x = -t / n, this.uniforms.delta.y = e / n
            }, t
        }(Xe),
        Ge = function(e) {
            function t(t, n, r, o) {
                void 0 === t && (t = 100), void 0 === n && (n = 600), void 0 === r && (r = null), void 0 === o && (o = null), e.call(this), this.tiltShiftXFilter = new qe(t, n, r, o), this.tiltShiftYFilter = new Ne(t, n, r, o)
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                blur: {
                    configurable: !0
                },
                gradientBlur: {
                    configurable: !0
                },
                start: {
                    configurable: !0
                },
                end: {
                    configurable: !0
                }
            };
            return t.prototype.apply = function(e, t, n) {
                var r = e.getRenderTarget(!0);
                this.tiltShiftXFilter.apply(e, t, r), this.tiltShiftYFilter.apply(e, r, n), e.returnRenderTarget(r)
            }, n.blur.get = function() {
                return this.tiltShiftXFilter.blur
            }, n.blur.set = function(e) {
                this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = e
            }, n.gradientBlur.get = function() {
                return this.tiltShiftXFilter.gradientBlur
            }, n.gradientBlur.set = function(e) {
                this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = e
            }, n.start.get = function() {
                return this.tiltShiftXFilter.start
            }, n.start.set = function(e) {
                this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = e
            }, n.end.get = function() {
                return this.tiltShiftXFilter.end
            }, n.end.set = function(e) {
                this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        Ke = n,
        Ye = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n",
        We = function(e) {
            function t(t, n, r) {
                void 0 === t && (t = 200), void 0 === n && (n = 4), void 0 === r && (r = 20), e.call(this, Ke, Ye), this.radius = t, this.angle = n, this.padding = r
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                offset: {
                    configurable: !0
                },
                radius: {
                    configurable: !0
                },
                angle: {
                    configurable: !0
                }
            };
            return n.offset.get = function() {
                return this.uniforms.offset
            }, n.offset.set = function(e) {
                this.uniforms.offset = e
            }, n.radius.get = function() {
                return this.uniforms.radius
            }, n.radius.set = function(e) {
                this.uniforms.radius = e
            }, n.angle.get = function() {
                return this.uniforms.angle
            }, n.angle.set = function(e) {
                this.uniforms.angle = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter),
        Qe = n,
        Ue = "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = 32.0;\n\nfloat random(vec3 scale, float seed) {\n    // use the fragment position for a different seed per-pixel\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",
        Ze = function(e) {
            function t(t, n, r, o) {
                void 0 === t && (t = .1), void 0 === n && (n = [0, 0]), void 0 === r && (r = 0), void 0 === o && (o = -1), e.call(this, Qe, Ue), this.center = n, this.strength = t, this.innerRadius = r, this.radius = o
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var n = {
                center: {
                    configurable: !0
                },
                strength: {
                    configurable: !0
                },
                innerRadius: {
                    configurable: !0
                },
                radius: {
                    configurable: !0
                }
            };
            return n.center.get = function() {
                return this.uniforms.uCenter
            }, n.center.set = function(e) {
                this.uniforms.uCenter = e
            }, n.strength.get = function() {
                return this.uniforms.uStrength
            }, n.strength.set = function(e) {
                this.uniforms.uStrength = e
            }, n.innerRadius.get = function() {
                return this.uniforms.uInnerRadius
            }, n.innerRadius.set = function(e) {
                this.uniforms.uInnerRadius = e
            }, n.radius.get = function() {
                return this.uniforms.uRadius
            }, n.radius.set = function(e) {
                (e < 0 || e === 1 / 0) && (e = -1), this.uniforms.uRadius = e
            }, Object.defineProperties(t.prototype, n), t
        }(t.Filter);
    return e.AdjustmentFilter = o, e.AdvancedBloomFilter = p, e.AsciiFilter = g, e.BevelFilter = y, e.BloomFilter = F, e.BulgePinchFilter = w, e.ColorMapFilter = O, e.ColorReplaceFilter = R, e.ConvolutionFilter = k, e.CrossHatchFilter = B, e.CRTFilter = N, e.DotFilter = Y, e.DropShadowFilter = U, e.EmbossFilter = H, e.GlitchFilter = ee, e.GlowFilter = re, e.GodrayFilter = se, e.KawaseBlurFilter = a, e.MotionBlurFilter = ce, e.MultiColorReplaceFilter = pe, e.OldFilmFilter = ge, e.OutlineFilter = ye, e.PixelateFilter = Ce, e.RadialBlurFilter = ze, e.ReflectionFilter = Te, e.RGBSplitFilter = Pe, e.ShockwaveFilter = je, e.SimpleLightmapFilter = Ie, e.TiltShiftFilter = Ge, e.TiltShiftAxisFilter = Xe, e.TiltShiftXFilter = qe, e.TiltShiftYFilter = Ne, e.TwistFilter = We, e.ZoomBlurFilter = Ze, e
}({}, PIXI);
Object.assign(PIXI.filters, this ? this.__filters : __filters);




(function() {

    window.rgbKineticSlider = function(options) {

        ///////////////////////////////    

        //  OPTIONS

        /////////////////////////////// 

        options = options || {};
        options.slideImages = options.hasOwnProperty('slideImages') ? options.slideImages : [];
        options.itemsTitles = options.hasOwnProperty('itemsTitles') ? options.itemsTitles : [];
        options.backgroundDisplacementSprite = options.hasOwnProperty('backgroundDisplacementSprite') ? options.backgroundDisplacementSprite : '';
        options.cursorDisplacementSprite = options.hasOwnProperty('cursorDisplacementSprite') ? options.cursorDisplacementSprite : '';
        options.cursorImgEffect = options.hasOwnProperty('cursorImgEffect') ? options.cursorImgEffect : true;
        options.cursorTextEffect = options.hasOwnProperty('cursorTextEffect') ? options.cursorTextEffect : true;
        options.cursorScaleIntensity = options.hasOwnProperty('cursorScaleIntensity') ? options.cursorScaleIntensity : 0.25;
        options.cursorMomentum = options.hasOwnProperty('cursorMomentum') ? options.cursorMomentum : 0.14;
        options.swipe = options.hasOwnProperty('swipe') ? options.swipe : true;
        options.swipeDistance = options.hasOwnProperty('swipeDistance') ? options.swipeDistance : 500;
        options.slideTransitionDuration = options.hasOwnProperty('slideTransitionDuration') ? options.slideTransitionDuration : 1;
        options.transitionScaleIntensity = options.hasOwnProperty('transitionScaleIntensity') ? options.transitionScaleIntensity : 40;
        options.transitionScaleAmplitude = options.hasOwnProperty('transitionScaleAmplitude') ? options.transitionScaleAmplitude : 300;
        options.swipeScaleIntensity = options.hasOwnProperty('swipeScaleIntensity') ? options.swipeScaleIntensity : 0.3;
        options.transitionSpriteRotation = options.hasOwnProperty('transitionSpriteRotation') ? options.transitionSpriteRotation : 0;
        options.nav = options.hasOwnProperty('nav') ? options.nav : true;
        options.textsRgbEffect = options.hasOwnProperty('textsRgbEffect') ? options.textsRgbEffect : true;
        options.imagesRgbEffect = options.hasOwnProperty('imagesRgbEffect') ? options.imagesRgbEffect : false;
        options.textsSubTitleDisplay = options.hasOwnProperty('textsSubTitleDisplay') ? options.textsSubTitleDisplay : false;
        options.textsDisplay = options.hasOwnProperty('textsDisplay') ? options.textsDisplay : false;
        options.textsTiltEffect = options.hasOwnProperty('textsTiltEffect') ? options.textsTiltEffect : true;
        options.googleFonts = options.hasOwnProperty('googleFonts') ? options.googleFonts : ['Roboto:400'];
        options.buttonMode = options.hasOwnProperty('buttonMode') ? options.buttonMode : true;
        options.textTitleColor = options.hasOwnProperty('textTitleColor') ? options.textTitleColor : 'white';
        options.textTitleSize = options.hasOwnProperty('textTitleSize') ? options.textTitleSize : 125;
        options.mobileTextTitleSize = options.hasOwnProperty('mobileTextTitleSize') ? options.mobileTextTitleSize : 45;
        options.textTitleLetterspacing = options.hasOwnProperty('textTitleLetterspacing') ? options.textTitleLetterspacing : 3;
        options.textSubTitleColor = options.hasOwnProperty('textSubTitleColor') ? options.textSubTitleColor : 'white';
        options.textSubTitleSize = options.hasOwnProperty('textSubTitleSize') ? options.textSubTitleSize : 21;
        options.mobileTextSubTitleSize = options.hasOwnProperty('mobileTextSubTitleSize') ? options.mobileTextSubTitleSize : 14;
        options.textSubTitleLetterspacing = options.hasOwnProperty('textSubTitleLetterspacing') ? options.textSubTitleLetterspacing : 3;
        options.textSubTitleOffsetTop = options.hasOwnProperty('textSubTitleOffsetTop') ? options.textSubTitleOffsetTop : 120;
        options.mobileTextSubTitleOffsetTop = options.hasOwnProperty('mobileTextSubTitleOffsetTop') ? options.mobileTextSubTitleOffsetTop : 40;
        options.textsRgbIntensity = options.hasOwnProperty('textsRgbIntensity') ? options.textsRgbIntensity : 0.09;
        options.navTextsRgbIntensity = options.hasOwnProperty('navTextsRgbIntensity') ? options.navTextsRgbIntensity : 10;
        options.imagesRgbIntensity = options.hasOwnProperty('imagesRgbIntensity') ? options.imagesRgbIntensity : 0.9;
        options.navImagesRgbIntensity = options.hasOwnProperty('navImagesRgbIntensity') ? options.navImagesRgbIntensity : 100;

        ///////////////////////////////    

        //  PIXI letS

        ///////////////////////////////

        let imgWidth = 1920;
        let imgHeight = 1080;

        // remove pixi message in console
        PIXI.utils.skipHello();

        const renderer = new PIXI.autoDetectRenderer(imgWidth, imgHeight, {
            transparent: true,
            autoResize: true,
            resolution: devicePixelRatio,
        });

        const canvas = document.getElementById("kinetic-slider");
        const stage = new PIXI.Container();
        const mainContainer = new PIXI.Container();
        const imagesContainer = new PIXI.Container();
        const textsContainer = new PIXI.Container();
        const textsSubContainer = new PIXI.Container();

        // displacement variables used for slides transition 
        const dispSprite = new PIXI.Sprite.from(options.backgroundDisplacementSprite);
        const dispFilter = new PIXI.filters.DisplacementFilter(dispSprite);

        // displacement variables used for cursor moving effect
        const dispSprite_2 = PIXI.Sprite.from(options.cursorDisplacementSprite);
        const dispFilter_2 = new PIXI.filters.DisplacementFilter(dispSprite_2);

        // colors filters
        const splitRgb = new PIXI.filters.RGBSplitFilter;
        const splitRgbImgs = new PIXI.filters.RGBSplitFilter;

        // main elements
        let render; // pixi render
        let mainLoopID; // raf

        let slideImages;
        let slideTexts;
        let slideTextsSub;

        // slide index
        let currentIndex = 0;
        // swipping flag
        let is_swipping = false;
        let drag_start = 0;
        // transition flag
        let is_playing = false;
        // movig flag
        let is_moving = false;
        // load flag
        let is_loaded = false;

        // set some variables for mouseposition and moving effect
        let posx = 0,
            posy = 0,
            vx = 0,
            vy = 0,
            kineX = 0,
            kineY = 0;

        // include the web-font loader script dynamically
        (function() {
            let wf = document.createElement('script');
            wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') +
                '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            let s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        }());

        ///////////////////////////////    

        //  Build pixi scene

        ///////////////////////////////

        function build_scene() {

            // append render to canvas
            canvas.appendChild(renderer.view);

            // set dispFilter to the stage
            stage.filters = [dispFilter];
            // stage.scale.set(2)

            // enable cursorInteractive on mainContainer
            mainContainer.interactive = true;

            // apply rgbsplit effect on texts
            if (options.textsRgbEffect == true) {

                textsContainer.filters = [splitRgb];
                textsSubContainer.filters = [splitRgb];

                // set rgbSplitFilter to 0
                splitRgb.red = [0, 0];
                splitRgb.green = [0, 0];
                splitRgb.blue = [0, 0];
            }

            if (options.cursorTextEffect == true) {
                textsContainer.filters = [dispFilter_2, splitRgb];
                textsSubContainer.filters = [dispFilter_2, splitRgb];
            }

            // apply rgbsplit effect on imgs
            if ((options.imagesRgbEffect == true) && (options.cursorImgEffect == true)) {

                if (options.cursorImgEffect == true) {
                    imagesContainer.filters = [dispFilter_2, splitRgbImgs];
                } else {
                    imagesContainer.filters = [splitRgbImgs];
                }

                splitRgbImgs.red = [0, 0];
                splitRgbImgs.green = [0, 0];
                splitRgbImgs.blue = [0, 0];

            } else {
                if (options.cursorImgEffect == true) {
                    imagesContainer.filters = [dispFilter_2];
                }
            }

            // Displacement sprites and filters set up
            dispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
            dispFilter.autoFit = false;
            dispFilter.padding = 0;
            dispSprite_2.anchor.set(0.5);
            dispFilter_2.scale.x = 0;
            dispFilter_2.scale.y = 0;

            // renderer settings
            renderer.view.style.objectFit = 'cover';
            renderer.view.style.width = '100%';
            renderer.view.style.height = '100%';
            renderer.view.style.top = '50%';
            renderer.view.style.left = '50%';
            renderer.view.style.webkitTransform = 'translate( -50%, -50% ) scale(1.15)';
            renderer.view.style.transform = 'translate( -50%, -50% ) scale(1.15)';


            //  Add children to the main container
            mainContainer.addChild(imagesContainer, textsContainer, textsSubContainer, dispSprite_2);

            // Add children to the stage = canvas
            stage.addChild(mainContainer, dispSprite);

            // pixi render animation
            render = new PIXI.Ticker();
            render.autoStart = true;
            render.add(function(delta) {
                renderer.render(stage);
            });
        }


        ///////////////////////////////    

        //  Build pixi img elements

        ///////////////////////////////

        function build_imgs() {

            for (let i = 0; i < options.slideImages.length; i++) {

                // get texture from image
                texture = new PIXI.Texture.from(options.slideImages[i]);
                // set sprite from texture
                imgSprite = new PIXI.Sprite(texture);

                // center img
                imgSprite.anchor.set(0.5);
                imgSprite.x = renderer.width / 2;
                imgSprite.y = renderer.height / 2;

                // hide all imgs
                TweenMax.set(imgSprite, {
                    alpha: 0
                });

                // add img to the canvas
                imagesContainer.addChild(imgSprite);
            }

            slideImages = imagesContainer.children;
        }


        ///////////////////////////////    

        //  Build pixi texts elements

        ///////////////////////////////

        let titleSize;
        let subtitleSize;
        let subtitleOffsetTop;

        function build_texts() {

            // make sure array is not empty
            if (options.itemsTitles.length > 0) {

                // build  titles
                if (options.textsDisplay == true) {

                    // set mobile font size based on window size
                    if (window.innerWidth < 768) {
                        titleSize = options.mobileTextTitleSize;
                        subtitleSize = options.mobileTextSubTitleSize;
                        subtitleOffsetTop = options.mobileTextSubTitleOffsetTop;
                    } else {
                        titleSize = options.textTitleSize;
                        subtitleSize = options.textSubTitleSize;
                        subtitleOffsetTop = options.textSubTitleOffsetTop;
                    }

                    for (let i = 0; i < options.itemsTitles.length; i++) {
                        // get font family value from options array
                        // we need to separate font-family and font-weight from titles and subtitles
                        // ['Playfair Display:700', 'Roboto:400']
                        // for first array, get string before :
                        let font_1 = options.googleFonts[0].split(':')[0];
                        let word_wrap;

                        if (window.innerWidth < 768) {
                            word_wrap = window.innerWidth * 1.5;
                        } else {
                            word_wrap = window.innerWidth / 2
                        }

                        // get string after :
                        let fontWeight_1 = options.googleFonts[0].split(":").pop();
                        textTitles = new PIXI.Text(options.itemsTitles[i][0], {
                            fontFamily: font_1,
                            fontSize: titleSize,
                            fontWeight: fontWeight_1,
                            fill: options.textTitleColor,
                            align: 'left',
                            padding: 0, // todo : make it optionnable
                            wordWrap: true, // todo : make it optionnable
                            wordWrapWidth: word_wrap, // todo : make it optionnable
                            letterSpacing: options.textTitleLetterspacing,
                        });

                        // texts centering
                        textTitles.anchor.set(0.5);
                        textTitles.x = renderer.width / 2;
                        textTitles.y = renderer.height / 2;

                        textsContainer.addChild(textTitles);

                        // hide all titles on init
                        TweenMax.set(textTitles, {
                            alpha: 0
                        });

                        if (options.buttonMode == true) {

                            textTitles.interactive = true;
                            textTitles.buttonMode = true;

                            // Pointers normalize touch and mouse
                            textTitles.on('pointerdown', onClick);

                            function onClick() {
                                // do something on click
                            }
                        }
                    }

                    slideTexts = textsContainer.children;

                    // build subtitles
                    if (options.textsSubTitleDisplay == true) {

                        for (let i = 0; i < options.itemsTitles.length; i++) {
                            // get font family value from options array
                            // we need to separate font-family and font-weight from titles and subtitles
                            // ['Playfair Display:700', 'Roboto:400']
                            // for second array, get string before :
                            let font_2 = options.googleFonts[1].split(':')[0];
                            // get string after :
                            let fontWeight_2 = options.googleFonts[1].split(":").pop();
                            let word_wrap;

                            if (window.innerWidth < 768) {
                                word_wrap = renderer.width / 1.5
                            } else {
                                word_wrap = renderer.width / 2
                            }

                            textTitles2 = new PIXI.Text(options.itemsTitles[i][1], {
                                fontFamily: font_2,
                                fontSize: subtitleSize,
                                fontWeight: fontWeight_2,
                                fill: options.textSubTitleColor,
                                align: 'left',
                                wordWrap: true,
                                wordWrapWidth: word_wrap,
                                letterSpacing: options.textSubTitleLetterspacing,
                            });

                            // texts centering
                            textTitles2.anchor.set(0.5);
                            textTitles2.x = textTitles.x;
                            textTitles2.y = textTitles.y + subtitleOffsetTop;
                            textsSubContainer.addChild(textTitles2);

                            // hide all subtitles on init
                            TweenMax.set(textTitles2, {
                                alpha: 0
                            });
                        }

                        slideTextsSub = textsSubContainer.children;
                    }
                }
            }

        }

        ///////////////////////////////    

        //  Slide transition effect

        ///////////////////////////////

        function slideTransition(next) {

            // center displacement
            dispSprite.anchor.set(0.5);
            dispSprite.x = renderer.view.width / 2;
            dispSprite.y = renderer.view.height / 2;

            // set timeline with callbacks
            timelineTransition = new TimelineMax({
                onStart: function() {

                    // update playing flag
                    is_playing = true;
                    // update draging flag
                    is_swipping = false;

                    dispSprite.rotation = 0;
                },

                onComplete: function() {

                    // reset rgb values
                    if (options.textsRgbEffect == true) {
                        splitRgb.red = [0, 0];
                        splitRgb.green = [0, 0];
                        splitRgb.blue = [0, 0];
                    }

                    if (options.imagesRgbEffect == true) {
                        splitRgbImgs.red = [0, 0];
                        splitRgbImgs.green = [0, 0];
                        splitRgbImgs.blue = [0, 0];
                    }


                    // update flags
                    is_playing = false;
                    is_swipping = false;

                    // after the first transition
                    // will prevent first animation transition
                    is_loaded = true

                    // set new index
                    currentIndex = next;
                },

                onUpdate: function() {

                    dispSprite.rotation = options.transitionSpriteRotation; // frequency
                    dispSprite.scale.set(timelineTransition.progress() * options.transitionScaleIntensity);

                    if (is_loaded === true) {

                        // rgb shift effect for navigation transition
                        // if text rgb effect is enable
                        if (options.textsRgbEffect == true) {

                            // on first half of transition
                            // match splitRgb values with timeline progress / from 0 to x
                            if (timelineTransition.progress() < 0.5) {
                                splitRgb.red = [timelineTransition.progress() * options.navTextsRgbIntensity, 0];
                                splitRgb.green = [0, 0];
                                splitRgb.blue = [(-(timelineTransition.progress())), 0];
                            }
                            // on second half of transition
                            // match splitRgb values with timeline progress / from x to 0
                            else {
                                splitRgb.red = [-(options.navTextsRgbIntensity - timelineTransition.progress() * options.navTextsRgbIntensity), 0];
                                splitRgb.green = [0, 0];
                                splitRgb.blue = [((options.navTextsRgbIntensity - timelineTransition.progress() * options.navTextsRgbIntensity)), 0];
                            }
                        }

                        // if img rgb effect is enable
                        if (options.imagesRgbEffect == true) {

                            // on first half of transition
                            // match splitRgb values with timeline progress / from 0 to x
                            if (timelineTransition.progress() < 0.5) {
                                splitRgbImgs.red = [-timelineTransition.progress() * options.navImagesRgbIntensity, 0];
                                splitRgbImgs.green = [0, 0];
                                splitRgbImgs.blue = [(timelineTransition.progress()), 0];
                            }

                            // on second half of transition
                            // match splitRgb values with timeline progress / from x to 0
                            else {
                                splitRgbImgs.red = [-(options.navImagesRgbIntensity - timelineTransition.progress() * options.navImagesRgbIntensity), 0];
                                splitRgbImgs.green = [0, 0];
                                splitRgbImgs.blue = [((options.navImagesRgbIntensity - timelineTransition.progress() * options.navImagesRgbIntensity)), 0];

                            }
                        }
                    }
                }
            });

            // make sure timeline is finish
            timelineTransition.clear();
            if (timelineTransition.isActive()) {
                return;
            }

            var scaleAmp;

            // prevent first animation transition
            if (is_loaded === false) {
                scaleAmp = 0;
            }
            // the first transition is done > applly effect
            else {
                scaleAmp = options.transitionScaleAmplitude;
            }

            // if titles and subtitles are active
            if ((options.textsSubTitleDisplay == true) && (options.textsDisplay == true) && (options.itemsTitles.length > 0)) {

                timelineTransition
                    .to(dispFilter.scale, options.slideTransitionDuration, {
                        x: scaleAmp,
                        y: scaleAmp,
                        ease: Power2.easeIn
                    })
                    .to([slideImages[currentIndex], slideTexts[currentIndex], slideTextsSub[currentIndex]], options.slideTransitionDuration, {
                        alpha: 0,
                        ease: Power2.easeOut
                    }, options.slideTransitionDuration * 0.5)
                    .to([slideImages[next], slideTexts[next], slideTextsSub[next]], options.slideTransitionDuration, {
                        alpha: 1,
                        ease: Power2.easeOut
                    }, options.slideTransitionDuration * 0.5)
                    .to(dispFilter.scale, options.slideTransitionDuration, {
                        x: 0,
                        y: 0,
                        ease: Power1.easeOut
                    }, options.slideTransitionDuration);
            }

            // if subtitles inactive and title active
            else if ((options.textsSubTitleDisplay == false) && (options.textsDisplay == true) && (options.itemsTitles.length > 0)) {

                timelineTransition
                    .to(dispFilter.scale, options.slideTransitionDuration, {
                        x: scaleAmp,
                        y: scaleAmp,
                        ease: Power2.easeIn
                    })
                    .to([slideImages[currentIndex], slideTexts[currentIndex]], options.slideTransitionDuration, {
                        alpha: 0,
                        ease: Power2.easeOut
                    }, options.slideTransitionDuration * 0.5)
                    .to([slideImages[next], slideTexts[next]], options.slideTransitionDuration, {
                        alpha: 1,
                        ease: Power2.easeOut
                    }, options.slideTransitionDuration * 0.5)
                    .to(dispFilter.scale, options.slideTransitionDuration, {
                        x: 0,
                        y: 0,
                        ease: Power1.easeOut
                    }, options.slideTransitionDuration);
            } else {
                timelineTransition
                    .to(dispFilter.scale, options.slideTransitionDuration, {
                        x: scaleAmp,
                        y: scaleAmp,
                        ease: Power2.easeIn
                    })
                    .to(slideImages, options.slideTransitionDuration, {
                        alpha: 0,
                        ease: Power2.easeOut
                    }, options.slideTransitionDuration * 0.5)
                    .to([slideImages[next]], options.slideTransitionDuration, {
                        alpha: 1,
                        ease: Power2.easeOut
                    }, options.slideTransitionDuration * 0.5)
                    .to(dispFilter.scale, options.slideTransitionDuration, {
                        x: 0,
                        y: 0,
                        ease: Power1.easeOut
                    }, options.slideTransitionDuration);
            }
        };

        ///////////////////////////////    

        //  Mouse move event

        ///////////////////////////////

        function cursorInteractive() {

            // mousemove event
            // because pixi stage has a 1.15 scale factor,
            // we need to use native listener in order to get the real mouse coordinates (not affected by scale)
            window.addEventListener("mousemove", onPointerMove);
            window.addEventListener("touchmove", onTouchMove);

            // track user mouse position
            function onPointerMove(e) {
                posx = e.clientX;
                posy = e.clientY;
            }

            function onTouchMove(e) {
                posx = e.touches[0].clientX;
                posy = e.touches[0].clientY;
            }

            // enable raf loop
            mainLoop();
        }


        ///////////////////////////////    

        //  Main loop for animations

        ///////////////////////////////

        function mainLoop() {

            // enable raf animation
            mainLoopID = requestAnimationFrame(mainLoop);

            // if user is out of screen
            if (posy <= 0 || posx <= 0 || (posx >= (window.innerWidth - 2) || posy >= (window.innerHeight - 2))) {

                is_moving = false;
                // re-init values
                posx = vx = window.innerWidth / 2;
                posy = vy = window.innerHeight / 2;
                kineX = kineY = newkineX = newkineY = 0;

            } else {
                is_moving = true;
            }

            // get mouse position with momentum
            vx += ((posx - vx) * options.cursorMomentum);
            vy += ((posy - vy) * options.cursorMomentum);

            // update kineX / kineY based on posx / posy and vx / vy
            kineX = Math.floor(posx - vx);
            kineY = Math.floor(posy - vy);

            // enable text tilt effect
            if (options.textsTiltEffect == true) {
                tilt(currentIndex, kineX, kineY)
            }

            // if flag has changed 
            if (is_moving === true) {
                // update cursor displacement sprite positions on cursor moving
                dispSprite_2.x = vx;
                dispSprite_2.y = vy;

                TweenMax.to(dispFilter_2.scale, 0.5, {
                    x: kineX * options.cursorScaleIntensity,
                    y: kineY * options.cursorScaleIntensity,
                    ease: Power4.easeOut
                });
            }

            // make background displacement follow mouse position on transition events
            if ((is_playing)) {
                dispSprite.x = vx;
                dispSprite.y = vy;
            }

            // if user is swipping 
            if (is_swipping) {

                // update slide displacement sprite positions
                dispSprite.x = vx;
                dispSprite.y = vy;
                // move displacement filter to cursor position 
                dispFilter.x = vx;
                dispFilter.y = vy;
                // map displacement filter scale value with user swipping intensity
                dispFilter.scale.x = kineX * (options.swipeScaleIntensity);
                dispFilter.scale.y = kineY * (options.swipeScaleIntensity);

                // if text rgb effect enable
                if (options.textsRgbEffect == true) {
                    splitRgb.red = [(kineX * options.textsRgbIntensity), 0];
                    splitRgb.green = [0, 0];
                    splitRgb.blue = [(-kineX * options.textsRgbIntensity), 0];
                }
                // if img rgb effect enable
                if (options.imagesRgbEffect == true) {
                    splitRgbImgs.red = [(kineX * options.imagesRgbIntensity), 0];
                    splitRgbImgs.green = [0, 0];
                    splitRgbImgs.blue = [(-kineX * options.imagesRgbIntensity), 0];
                }
            }
        }

        ///////////////////////////////    

        //  Drag / swipe event

        ///////////////////////////////

        function swipe() {

            if (options.swipe == true) {

                mainContainer
                    .on('pointerdown', onDragStart)
                    .on('pointerup', onDragEnd)
                    .on('pointermove', onDragMove)

                // drag start
                function onDragStart(event) {

                    if (is_playing) {
                        return;
                    }

                    // get event position as data
                    this.data = event.data;
                    drag_start = this.data.getLocalPosition(this.parent);

                    // this.drag = true;
                    is_swipping = true;

                    // disable rgbSplit effect
                    if (options.textsRgbEffect == true) {
                        splitRgb.red = [0, 0];
                        splitRgb.green = [0, 0];
                        splitRgb.blue = [0, 0];
                    }

                    if (options.imagesRgbEffect == true) {
                        splitRgbImgs.red = [0, 0];
                        splitRgbImgs.green = [0, 0];
                        splitRgbImgs.blue = [0, 0];
                    }
                }

                // drag end
                function onDragEnd() {

                    // make sure slide transition is not playing
                    if (is_playing) {
                        return;
                    }

                    // disable rgbSplit effect
                    if (options.textsRgbEffect == true) {
                        splitRgb.red = [0, 0];
                        splitRgb.green = [0, 0];
                        splitRgb.blue = [0, 0];
                    }

                    if (options.imagesRgbEffect == true) {
                        splitRgbImgs.red = [0, 0];
                        splitRgbImgs.green = [0, 0];
                        splitRgbImgs.blue = [0, 0];
                    }

                    // reset displacement filter scale value to 0
                    TweenMax.to(dispFilter.scale, 0.5, {
                        x: 0,
                        y: 0,
                        ease: Power4.easeOut
                    });

                    // update dispFilter position 
                    TweenMax.to(dispFilter, 0.5, {
                        x: vx,
                        y: vy,
                        ease: Power4.easeOut
                    });

                    // update swiping flag
                    this.data = null;
                    is_swipping = false;
                }

                // drag move > swipe
                function onDragMove() {

                    // make sure slide transition is completed and user is swipping
                    if (is_playing) {
                        return;
                    }

                    if (is_swipping) {

                        // get the new position
                        let newPosition = this.data.getLocalPosition(this.parent);

                        // if user swipe the screen from left to right : next slide
                        if ((drag_start.x - newPosition.x) < -options.swipeDistance) {
                            if (currentIndex >= 0 && currentIndex < options.slideImages.length - 1) {
                                slideTransition(currentIndex + 1);
                            } else {
                                slideTransition(0);
                            }
                        }

                        // if user swipe from right to left : prev slide
                        if ((drag_start.x - newPosition.x) > options.swipeDistance) {
                            if (currentIndex > 0 && currentIndex < options.slideImages.length) {
                                slideTransition(currentIndex - 1);
                            } else {
                                slideTransition(options.slideImages.length - 1);
                            }
                        }
                    }
                }
            }
        }

        ///////////////////////////////    

        //  Texts tilt effect

        ///////////////////////////////

        function tilt(currentIndex, kineX, kineY) {

            if (options.itemsTitles.length > 0) {

                if (options.textsDisplay == true) {

                    TweenMax.to(slideTexts[currentIndex], 2, {
                        x: (renderer.width / 2) - (kineX * 0.1),
                        y: (renderer.height / 2) - (kineY * 0.2),
                        ease: Expo.easeOut
                    });

                    if (options.textsSubTitleDisplay == true) {
                        TweenMax.to(slideTextsSub[currentIndex], 2, {
                            x: (renderer.width / 2) - (kineX * 0.25),
                            y: (renderer.height / 2 + subtitleOffsetTop) - (kineY * 0.2),
                            ease: Expo.easeOut
                        });
                    }
                }
            }
        }

        ///////////////////////////////    

        //  navigation 

        ///////////////////////////////

        if (options.nav == true) {

            let nav = document.querySelectorAll('.main-nav');

            for (let i = 0; i < nav.length; i++) {

                let navItem = nav[i];

                navItem.onclick = function(event) {

                    // Make sure the previous transition has ended
                    if (is_playing) {
                        return false;
                    }

                    const active = document.querySelector('.active');

                    if (active) {
                        active.classList.remove('active');
                    }
                    this.classList.add('active');

                    if (this.getAttribute('data-nav') === 'next') {
                        if (currentIndex >= 0 && currentIndex < options.slideImages.length - 1) {
                            slideTransition(currentIndex + 1);
                        } else {
                            slideTransition(0);
                        }
                    } else {
                        if (currentIndex > 0 && currentIndex < options.slideImages.length) {
                            slideTransition(currentIndex - 1);
                        } else {
                            slideTransition(options.slideImages.length - 1);
                        }
                    }
                    return false;
                }
            }
        }

        ///////////////////////////////    

        //  init 

        ///////////////////////////////

        function init() {

            // re init renderer on ready
            renderer.resize(imgWidth, imgHeight);

            // construct
            build_scene();
            build_imgs();
            resizeTexts();

            // interactivity
            cursorInteractive();
            swipe();
            slideTransition(currentIndex);

            // Listen for window resize events
            window.addEventListener('resize', resizeTexts);

            function resizeTexts() {
                // build_imgs();
                if (window.innerWidth < 768) {
                    build_texts();
                    renderer.render(stage);
                } else {
                    build_texts();
                    renderer.render(stage);
                }

            }
        };

        // Load them google fonts before starting...!
        window.WebFontConfig = {
            google: {
                families: options.googleFonts
            },

            active: function() {
                // load the stage images 
                imagesLoaded(images, function() {
                    document.body.classList.remove('loading');
                    // init slider
                    init();
                });
            }
        };
    };
})();