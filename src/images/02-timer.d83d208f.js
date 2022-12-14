parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    lJVm: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.defaults = exports.HOOKS = void 0);
        var e = [
          'onChange',
          'onClose',
          'onDayCreate',
          'onDestroy',
          'onKeyDown',
          'onMonthChange',
          'onOpen',
          'onParseConfig',
          'onReady',
          'onValueUpdate',
          'onYearChange',
          'onPreCalendarPosition',
        ];
        exports.HOOKS = e;
        var n = {
          _disable: [],
          allowInput: !1,
          allowInvalidPreload: !1,
          altFormat: 'F j, Y',
          altInput: !1,
          altInputClass: 'form-control input',
          animate: 'object' == typeof window && -1 === window.navigator.userAgent.indexOf('MSIE'),
          ariaDateFormat: 'F j, Y',
          autoFillDefaultTime: !0,
          clickOpens: !0,
          closeOnSelect: !0,
          conjunction: ', ',
          dateFormat: 'Y-m-d',
          defaultHour: 12,
          defaultMinute: 0,
          defaultSeconds: 0,
          disable: [],
          disableMobile: !1,
          enableSeconds: !1,
          enableTime: !1,
          errorHandler: function (e) {
            return 'undefined' != typeof console && console.warn(e);
          },
          getWeek: function (e) {
            var n = new Date(e.getTime());
            n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - ((n.getDay() + 6) % 7));
            var o = new Date(n.getFullYear(), 0, 4);
            return (
              1 + Math.round(((n.getTime() - o.getTime()) / 864e5 - 3 + ((o.getDay() + 6) % 7)) / 7)
            );
          },
          hourIncrement: 1,
          ignoredFocusElements: [],
          inline: !1,
          locale: 'default',
          minuteIncrement: 5,
          mode: 'single',
          monthSelectorType: 'dropdown',
          nextArrow:
            "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
          noCalendar: !1,
          now: new Date(),
          onChange: [],
          onClose: [],
          onDayCreate: [],
          onDestroy: [],
          onKeyDown: [],
          onMonthChange: [],
          onOpen: [],
          onParseConfig: [],
          onReady: [],
          onValueUpdate: [],
          onYearChange: [],
          onPreCalendarPosition: [],
          plugins: [],
          position: 'auto',
          positionElement: void 0,
          prevArrow:
            "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
          shorthandCurrentMonth: !1,
          showMonths: 1,
          static: !1,
          time_24hr: !1,
          weekNumbers: !1,
          wrap: !1,
        };
        exports.defaults = n;
      },
      {},
    ],
    SFEe: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.default = exports.english = void 0);
        var e = {
          weekdays: {
            shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            longhand: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
          months: {
            shorthand: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            longhand: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          },
          daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          firstDayOfWeek: 0,
          ordinal: function (e) {
            var r = e % 100;
            if (r > 3 && r < 21) return 'th';
            switch (r % 10) {
              case 1:
                return 'st';
              case 2:
                return 'nd';
              case 3:
                return 'rd';
              default:
                return 'th';
            }
          },
          rangeSeparator: ' to ',
          weekAbbreviation: 'Wk',
          scrollTitle: 'Scroll to increment',
          toggleTitle: 'Click to toggle',
          amPM: ['AM', 'PM'],
          yearAriaLabel: 'Year',
          monthAriaLabel: 'Month',
          hourAriaLabel: 'Hour',
          minuteAriaLabel: 'Minute',
          time_24hr: !1,
        };
        exports.english = e;
        var r = e;
        exports.default = r;
      },
      {},
    ],
    U4Vg: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.debounce = e),
          (exports.arrayify = exports.int = exports.pad = void 0);
        var r = function (r, t) {
          return void 0 === t && (t = 2), ('000' + r).slice(-1 * t);
        };
        exports.pad = r;
        var t = function (r) {
          return !0 === r ? 1 : 0;
        };
        function e(r, t) {
          var e;
          return function () {
            var n = this,
              o = arguments;
            clearTimeout(e),
              (e = setTimeout(function () {
                return r.apply(n, o);
              }, t));
          };
        }
        exports.int = t;
        var n = function (r) {
          return r instanceof Array ? r : [r];
        };
        exports.arrayify = n;
      },
      {},
    ],
    UwHZ: [
      function (require, module, exports) {
        'use strict';
        function e(e, t, r) {
          if (!0 === r) return e.classList.add(t);
          e.classList.remove(t);
        }
        function t(e, t, r) {
          var n = window.document.createElement(e);
          return (
            (t = t || ''), (r = r || ''), (n.className = t), void 0 !== r && (n.textContent = r), n
          );
        }
        function r(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        function n(e, t) {
          return t(e) ? e : e.parentNode ? n(e.parentNode, t) : void 0;
        }
        function o(e, r) {
          var n = t('div', 'numInputWrapper'),
            o = t('input', 'numInput ' + e),
            a = t('span', 'arrowUp'),
            i = t('span', 'arrowDown');
          if (
            (-1 === navigator.userAgent.indexOf('MSIE 9.0')
              ? (o.type = 'number')
              : ((o.type = 'text'), (o.pattern = '\\d*')),
            void 0 !== r)
          )
            for (var p in r) o.setAttribute(p, r[p]);
          return n.appendChild(o), n.appendChild(a), n.appendChild(i), n;
        }
        function a(e) {
          try {
            return 'function' == typeof e.composedPath ? e.composedPath()[0] : e.target;
          } catch (t) {
            return e.target;
          }
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.toggleClass = e),
          (exports.createElement = t),
          (exports.clearNode = r),
          (exports.findParent = n),
          (exports.createNumberInput = o),
          (exports.getEventTarget = a);
      },
      {},
    ],
    KtbI: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.formats = exports.tokenRegex = exports.revFormat = exports.monthToStr = void 0);
        var t = require('../utils'),
          n = function () {},
          e = function (t, n, e) {
            return e.months[n ? 'shorthand' : 'longhand'][t];
          };
        exports.monthToStr = e;
        var r = {
          D: n,
          F: function (t, n, e) {
            t.setMonth(e.months.longhand.indexOf(n));
          },
          G: function (t, n) {
            t.setHours((t.getHours() >= 12 ? 12 : 0) + parseFloat(n));
          },
          H: function (t, n) {
            t.setHours(parseFloat(n));
          },
          J: function (t, n) {
            t.setDate(parseFloat(n));
          },
          K: function (n, e, r) {
            n.setHours((n.getHours() % 12) + 12 * (0, t.int)(new RegExp(r.amPM[1], 'i').test(e)));
          },
          M: function (t, n, e) {
            t.setMonth(e.months.shorthand.indexOf(n));
          },
          S: function (t, n) {
            t.setSeconds(parseFloat(n));
          },
          U: function (t, n) {
            return new Date(1e3 * parseFloat(n));
          },
          W: function (t, n, e) {
            var r = parseInt(n),
              o = new Date(t.getFullYear(), 0, 2 + 7 * (r - 1), 0, 0, 0, 0);
            return o.setDate(o.getDate() - o.getDay() + e.firstDayOfWeek), o;
          },
          Y: function (t, n) {
            t.setFullYear(parseFloat(n));
          },
          Z: function (t, n) {
            return new Date(n);
          },
          d: function (t, n) {
            t.setDate(parseFloat(n));
          },
          h: function (t, n) {
            t.setHours((t.getHours() >= 12 ? 12 : 0) + parseFloat(n));
          },
          i: function (t, n) {
            t.setMinutes(parseFloat(n));
          },
          j: function (t, n) {
            t.setDate(parseFloat(n));
          },
          l: n,
          m: function (t, n) {
            t.setMonth(parseFloat(n) - 1);
          },
          n: function (t, n) {
            t.setMonth(parseFloat(n) - 1);
          },
          s: function (t, n) {
            t.setSeconds(parseFloat(n));
          },
          u: function (t, n) {
            return new Date(parseFloat(n));
          },
          w: n,
          y: function (t, n) {
            t.setFullYear(2e3 + parseFloat(n));
          },
        };
        exports.revFormat = r;
        var o = {
          D: '',
          F: '',
          G: '(\\d\\d|\\d)',
          H: '(\\d\\d|\\d)',
          J: '(\\d\\d|\\d)\\w+',
          K: '',
          M: '',
          S: '(\\d\\d|\\d)',
          U: '(.+)',
          W: '(\\d\\d|\\d)',
          Y: '(\\d{4})',
          Z: '(.+)',
          d: '(\\d\\d|\\d)',
          h: '(\\d\\d|\\d)',
          i: '(\\d\\d|\\d)',
          j: '(\\d\\d|\\d)',
          l: '',
          m: '(\\d\\d|\\d)',
          n: '(\\d\\d|\\d)',
          s: '(\\d\\d|\\d)',
          u: '(.+)',
          w: '(\\d\\d|\\d)',
          y: '(\\d{2})',
        };
        exports.tokenRegex = o;
        var u = {
          Z: function (t) {
            return t.toISOString();
          },
          D: function (t, n, e) {
            return n.weekdays.shorthand[u.w(t, n, e)];
          },
          F: function (t, n, r) {
            return e(u.n(t, n, r) - 1, !1, n);
          },
          G: function (n, e, r) {
            return (0, t.pad)(u.h(n, e, r));
          },
          H: function (n) {
            return (0, t.pad)(n.getHours());
          },
          J: function (t, n) {
            return void 0 !== n.ordinal ? t.getDate() + n.ordinal(t.getDate()) : t.getDate();
          },
          K: function (n, e) {
            return e.amPM[(0, t.int)(n.getHours() > 11)];
          },
          M: function (t, n) {
            return e(t.getMonth(), !0, n);
          },
          S: function (n) {
            return (0, t.pad)(n.getSeconds());
          },
          U: function (t) {
            return t.getTime() / 1e3;
          },
          W: function (t, n, e) {
            return e.getWeek(t);
          },
          Y: function (n) {
            return (0, t.pad)(n.getFullYear(), 4);
          },
          d: function (n) {
            return (0, t.pad)(n.getDate());
          },
          h: function (t) {
            return t.getHours() % 12 ? t.getHours() % 12 : 12;
          },
          i: function (n) {
            return (0, t.pad)(n.getMinutes());
          },
          j: function (t) {
            return t.getDate();
          },
          l: function (t, n) {
            return n.weekdays.longhand[t.getDay()];
          },
          m: function (n) {
            return (0, t.pad)(n.getMonth() + 1);
          },
          n: function (t) {
            return t.getMonth() + 1;
          },
          s: function (t) {
            return t.getSeconds();
          },
          u: function (t) {
            return t.getTime();
          },
          w: function (t) {
            return t.getDay();
          },
          y: function (t) {
            return String(t.getFullYear()).substring(2);
          },
        };
        exports.formats = u;
      },
      { '../utils': 'U4Vg' },
    ],
    viQd: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.compareDates = o),
          (exports.compareTimes = i),
          (exports.getDefaultHours = c),
          (exports.duration =
            exports.parseSeconds =
            exports.calculateSecondsSinceMidnight =
            exports.isBetween =
            exports.createDateParser =
            exports.createDateFormatter =
              void 0);
        var e = require('./formatting'),
          t = require('../types/options'),
          r = require('../l10n/default'),
          a = function (a) {
            var n = a.config,
              o = void 0 === n ? t.defaults : n,
              i = a.l10n,
              s = void 0 === i ? r.english : i,
              u = a.isMobile,
              f = void 0 !== u && u;
            return function (t, r, a) {
              var n = a || s;
              return void 0 === o.formatDate || f
                ? r
                    .split('')
                    .map(function (r, a, i) {
                      return e.formats[r] && '\\' !== i[a - 1]
                        ? e.formats[r](t, n, o)
                        : '\\' !== r
                        ? r
                        : '';
                    })
                    .join('')
                : o.formatDate(t, r, n);
            };
          };
        exports.createDateFormatter = a;
        var n = function (a) {
          var n = a.config,
            o = void 0 === n ? t.defaults : n,
            i = a.l10n,
            s = void 0 === i ? r.english : i;
          return function (r, a, n, i) {
            if (0 === r || r) {
              var u,
                f = i || s,
                d = r;
              if (r instanceof Date) u = new Date(r.getTime());
              else if ('string' != typeof r && void 0 !== r.toFixed) u = new Date(r);
              else if ('string' == typeof r) {
                var c = a || (o || t.defaults).dateFormat,
                  v = String(r).trim();
                if ('today' === v) (u = new Date()), (n = !0);
                else if (o && o.parseDate) u = o.parseDate(r, c);
                else if (/Z$/.test(v) || /GMT$/.test(v)) u = new Date(r);
                else {
                  for (var l = void 0, g = [], m = 0, p = 0, D = ''; m < c.length; m++) {
                    var x = c[m],
                      M = '\\' === x,
                      h = '\\' === c[m - 1] || M;
                    if (e.tokenRegex[x] && !h) {
                      D += e.tokenRegex[x];
                      var w = new RegExp(D).exec(r);
                      w &&
                        (l = !0) &&
                        g['Y' !== x ? 'push' : 'unshift']({ fn: e.revFormat[x], val: w[++p] });
                    } else M || (D += '.');
                  }
                  (u =
                    o && o.noCalendar
                      ? new Date(new Date().setHours(0, 0, 0, 0))
                      : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
                    g.forEach(function (e) {
                      var t = e.fn,
                        r = e.val;
                      return (u = t(u, r, f) || u);
                    }),
                    (u = l ? u : void 0);
                }
              }
              if (u instanceof Date && !isNaN(u.getTime()))
                return !0 === n && u.setHours(0, 0, 0, 0), u;
              o.errorHandler(new Error('Invalid date provided: ' + d));
            }
          };
        };
        function o(e, t, r) {
          return (
            void 0 === r && (r = !0),
            !1 !== r
              ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
                new Date(t.getTime()).setHours(0, 0, 0, 0)
              : e.getTime() - t.getTime()
          );
        }
        function i(e, t) {
          return (
            3600 * (e.getHours() - t.getHours()) +
            60 * (e.getMinutes() - t.getMinutes()) +
            e.getSeconds() -
            t.getSeconds()
          );
        }
        exports.createDateParser = n;
        var s = function (e, t, r) {
          return e > Math.min(t, r) && e < Math.max(t, r);
        };
        exports.isBetween = s;
        var u = function (e, t, r) {
          return 3600 * e + 60 * t + r;
        };
        exports.calculateSecondsSinceMidnight = u;
        var f = function (e) {
          var t = Math.floor(e / 3600),
            r = (e - 3600 * t) / 60;
          return [t, r, e - 3600 * t - 60 * r];
        };
        exports.parseSeconds = f;
        var d = { DAY: 864e5 };
        function c(e) {
          var t = e.defaultHour,
            r = e.defaultMinute,
            a = e.defaultSeconds;
          if (void 0 !== e.minDate) {
            var n = e.minDate.getHours(),
              o = e.minDate.getMinutes(),
              i = e.minDate.getSeconds();
            t < n && (t = n),
              t === n && r < o && (r = o),
              t === n && r === o && a < i && (a = e.minDate.getSeconds());
          }
          if (void 0 !== e.maxDate) {
            var s = e.maxDate.getHours(),
              u = e.maxDate.getMinutes();
            (t = Math.min(t, s)) === s && (r = Math.min(u, r)),
              t === s && r === u && (a = e.maxDate.getSeconds());
          }
          return { hours: t, minutes: r, seconds: a };
        }
        exports.duration = d;
      },
      { './formatting': 'KtbI', '../types/options': 'lJVm', '../l10n/default': 'SFEe' },
    ],
    pFfd: [
      function (require, module, exports) {
        'use strict';
        'function' != typeof Object.assign &&
          (Object.assign = function (n) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (!n) throw TypeError('Cannot convert undefined or null to object');
            for (
              var e = function (t) {
                  t &&
                    Object.keys(t).forEach(function (r) {
                      return (n[r] = t[r]);
                    });
                },
                o = 0,
                c = t;
              o < c.length;
              o++
            ) {
              e(c[o]);
            }
            return n;
          });
      },
      {},
    ],
    BKNP: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = require('./types/options'),
          t = r(require('./l10n/default')),
          n = require('./utils'),
          a = require('./utils/dom'),
          i = require('./utils/dates'),
          o = require('./utils/formatting');
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        require('./utils/polyfills');
        var l = function () {
            return (l =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          c = function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            var a = Array(e),
              i = 0;
            for (t = 0; t < n; t++)
              for (var o = arguments[t], r = 0, l = o.length; r < l; r++, i++) a[i] = o[r];
            return a;
          },
          s = 300;
        function d(r, d) {
          var u = { config: l(l({}, e.defaults), f.defaultConfig), l10n: t.default };
          function m() {
            var e;
            return (
              (null === (e = u.calendarContainer) || void 0 === e ? void 0 : e.getRootNode())
                .activeElement || document.activeElement
            );
          }
          function g(e) {
            return e.bind(u);
          }
          function p() {
            var e = u.config;
            (!1 === e.weekNumbers && 1 === e.showMonths) ||
              (!0 !== e.noCalendar &&
                window.requestAnimationFrame(function () {
                  if (
                    (void 0 !== u.calendarContainer &&
                      ((u.calendarContainer.style.visibility = 'hidden'),
                      (u.calendarContainer.style.display = 'block')),
                    void 0 !== u.daysContainer)
                  ) {
                    var t = (u.days.offsetWidth + 1) * e.showMonths;
                    (u.daysContainer.style.width = t + 'px'),
                      (u.calendarContainer.style.width =
                        t + (void 0 !== u.weekWrapper ? u.weekWrapper.offsetWidth : 0) + 'px'),
                      u.calendarContainer.style.removeProperty('visibility'),
                      u.calendarContainer.style.removeProperty('display');
                  }
                }));
          }
          function h(e) {
            if (0 === u.selectedDates.length) {
              var t =
                  void 0 === u.config.minDate ||
                  (0, i.compareDates)(new Date(), u.config.minDate) >= 0
                    ? new Date()
                    : new Date(u.config.minDate.getTime()),
                o = (0, i.getDefaultHours)(u.config);
              t.setHours(o.hours, o.minutes, o.seconds, t.getMilliseconds()),
                (u.selectedDates = [t]),
                (u.latestSelectedDateObj = t);
            }
            void 0 !== e &&
              'blur' !== e.type &&
              (function (e) {
                e.preventDefault();
                var t = 'keydown' === e.type,
                  i = (0, a.getEventTarget)(e),
                  o = i;
                void 0 !== u.amPM &&
                  i === u.amPM &&
                  (u.amPM.textContent =
                    u.l10n.amPM[(0, n.int)(u.amPM.textContent === u.l10n.amPM[0])]);
                var r = parseFloat(o.getAttribute('min')),
                  l = parseFloat(o.getAttribute('max')),
                  c = parseFloat(o.getAttribute('step')),
                  s = parseInt(o.value, 10),
                  d = e.delta || (t ? (38 === e.which ? 1 : -1) : 0),
                  f = s + c * d;
                if (void 0 !== o.value && 2 === o.value.length) {
                  var m = o === u.hourElement,
                    g = o === u.minuteElement;
                  f < r
                    ? ((f = l + f + (0, n.int)(!m) + ((0, n.int)(m) && (0, n.int)(!u.amPM))),
                      g && x(void 0, -1, u.hourElement))
                    : f > l &&
                      ((f = o === u.hourElement ? f - l - (0, n.int)(!u.amPM) : r),
                      g && x(void 0, 1, u.hourElement)),
                    u.amPM &&
                      m &&
                      (1 === c ? f + s === 23 : Math.abs(f - s) > c) &&
                      (u.amPM.textContent =
                        u.l10n.amPM[(0, n.int)(u.amPM.textContent === u.l10n.amPM[0])]),
                    (o.value = (0, n.pad)(f));
                }
              })(e);
            var r = u._input.value;
            v(), se(), u._input.value !== r && u._debouncedChange();
          }
          function v() {
            if (void 0 !== u.hourElement && void 0 !== u.minuteElement) {
              var e,
                t,
                a = (parseInt(u.hourElement.value.slice(-2), 10) || 0) % 24,
                o = (parseInt(u.minuteElement.value, 10) || 0) % 60,
                r =
                  void 0 !== u.secondElement ? (parseInt(u.secondElement.value, 10) || 0) % 60 : 0;
              void 0 !== u.amPM &&
                ((e = a),
                (t = u.amPM.textContent),
                (a = (e % 12) + 12 * (0, n.int)(t === u.l10n.amPM[1])));
              var l =
                  void 0 !== u.config.minTime ||
                  (u.config.minDate &&
                    u.minDateHasTime &&
                    u.latestSelectedDateObj &&
                    0 === (0, i.compareDates)(u.latestSelectedDateObj, u.config.minDate, !0)),
                c =
                  void 0 !== u.config.maxTime ||
                  (u.config.maxDate &&
                    u.maxDateHasTime &&
                    u.latestSelectedDateObj &&
                    0 === (0, i.compareDates)(u.latestSelectedDateObj, u.config.maxDate, !0));
              if (
                void 0 !== u.config.maxTime &&
                void 0 !== u.config.minTime &&
                u.config.minTime > u.config.maxTime
              ) {
                var s = (0, i.calculateSecondsSinceMidnight)(
                    u.config.minTime.getHours(),
                    u.config.minTime.getMinutes(),
                    u.config.minTime.getSeconds(),
                  ),
                  d = (0, i.calculateSecondsSinceMidnight)(
                    u.config.maxTime.getHours(),
                    u.config.maxTime.getMinutes(),
                    u.config.maxTime.getSeconds(),
                  ),
                  f = (0, i.calculateSecondsSinceMidnight)(a, o, r);
                if (f > d && f < s) {
                  var m = (0, i.parseSeconds)(s);
                  (a = m[0]), (o = m[1]), (r = m[2]);
                }
              } else {
                if (c) {
                  var g = void 0 !== u.config.maxTime ? u.config.maxTime : u.config.maxDate;
                  (a = Math.min(a, g.getHours())) === g.getHours() &&
                    (o = Math.min(o, g.getMinutes())),
                    o === g.getMinutes() && (r = Math.min(r, g.getSeconds()));
                }
                if (l) {
                  var p = void 0 !== u.config.minTime ? u.config.minTime : u.config.minDate;
                  (a = Math.max(a, p.getHours())) === p.getHours() &&
                    o < p.getMinutes() &&
                    (o = p.getMinutes()),
                    o === p.getMinutes() && (r = Math.max(r, p.getSeconds()));
                }
              }
              C(a, o, r);
            }
          }
          function D(e) {
            var t = e || u.latestSelectedDateObj;
            t && t instanceof Date && C(t.getHours(), t.getMinutes(), t.getSeconds());
          }
          function C(e, t, a) {
            void 0 !== u.latestSelectedDateObj &&
              u.latestSelectedDateObj.setHours(e % 24, t, a || 0, 0),
              u.hourElement &&
                u.minuteElement &&
                !u.isMobile &&
                ((u.hourElement.value = (0, n.pad)(
                  u.config.time_24hr ? e : ((12 + e) % 12) + 12 * (0, n.int)(e % 12 == 0),
                )),
                (u.minuteElement.value = (0, n.pad)(t)),
                void 0 !== u.amPM && (u.amPM.textContent = u.l10n.amPM[(0, n.int)(e >= 12)]),
                void 0 !== u.secondElement && (u.secondElement.value = (0, n.pad)(a)));
          }
          function b(e) {
            var t = (0, a.getEventTarget)(e),
              n = parseInt(t.value) + (e.delta || 0);
            (n / 1e3 > 1 || ('Enter' === e.key && !/[^\d]/.test(n.toString()))) && R(n);
          }
          function M(e, t, n, a) {
            return t instanceof Array
              ? t.forEach(function (t) {
                  return M(e, t, n, a);
                })
              : e instanceof Array
              ? e.forEach(function (e) {
                  return M(e, t, n, a);
                })
              : (e.addEventListener(t, n, a),
                void u._handlers.push({
                  remove: function () {
                    return e.removeEventListener(t, n, a);
                  },
                }));
          }
          function y() {
            ie('onChange');
          }
          function w(e, t) {
            var n =
                void 0 !== e
                  ? u.parseDate(e)
                  : u.latestSelectedDateObj ||
                    (u.config.minDate && u.config.minDate > u.now
                      ? u.config.minDate
                      : u.config.maxDate && u.config.maxDate < u.now
                      ? u.config.maxDate
                      : u.now),
              a = u.currentYear,
              i = u.currentMonth;
            try {
              void 0 !== n && ((u.currentYear = n.getFullYear()), (u.currentMonth = n.getMonth()));
            } catch (o) {
              (o.message = 'Invalid date supplied: ' + n), u.config.errorHandler(o);
            }
            t && u.currentYear !== a && (ie('onYearChange'), N()),
              !t || (u.currentYear === a && u.currentMonth === i) || ie('onMonthChange'),
              u.redraw();
          }
          function E(e) {
            var t = (0, a.getEventTarget)(e);
            ~t.className.indexOf('arrow') && x(e, t.classList.contains('arrowUp') ? 1 : -1);
          }
          function x(e, t, n) {
            var i = e && (0, a.getEventTarget)(e),
              o = n || (i && i.parentNode && i.parentNode.firstChild),
              r = oe('increment');
            (r.delta = t), o && o.dispatchEvent(r);
          }
          function k(e, t, n, o) {
            var r = q(t, !0),
              l = (0, a.createElement)('span', e, t.getDate().toString());
            return (
              (l.dateObj = t),
              (l.$i = o),
              l.setAttribute('aria-label', u.formatDate(t, u.config.ariaDateFormat)),
              -1 === e.indexOf('hidden') &&
                0 === (0, i.compareDates)(t, u.now) &&
                ((u.todayDateElem = l),
                l.classList.add('today'),
                l.setAttribute('aria-current', 'date')),
              r
                ? ((l.tabIndex = -1),
                  re(t) &&
                    (l.classList.add('selected'),
                    (u.selectedDateElem = l),
                    'range' === u.config.mode &&
                      ((0, a.toggleClass)(
                        l,
                        'startRange',
                        u.selectedDates[0] && 0 === (0, i.compareDates)(t, u.selectedDates[0], !0),
                      ),
                      (0, a.toggleClass)(
                        l,
                        'endRange',
                        u.selectedDates[1] && 0 === (0, i.compareDates)(t, u.selectedDates[1], !0),
                      ),
                      'nextMonthDay' === e && l.classList.add('inRange'))))
                : l.classList.add('flatpickr-disabled'),
              'range' === u.config.mode &&
                (function (e) {
                  return (
                    !('range' !== u.config.mode || u.selectedDates.length < 2) &&
                    (0, i.compareDates)(e, u.selectedDates[0]) >= 0 &&
                    (0, i.compareDates)(e, u.selectedDates[1]) <= 0
                  );
                })(t) &&
                !re(t) &&
                l.classList.add('inRange'),
              u.weekNumbers &&
                1 === u.config.showMonths &&
                'prevMonthDay' !== e &&
                o % 7 == 6 &&
                u.weekNumbers.insertAdjacentHTML(
                  'beforeend',
                  "<span class='flatpickr-day'>" + u.config.getWeek(t) + '</span>',
                ),
              ie('onDayCreate', l),
              l
            );
          }
          function T(e) {
            e.focus(), 'range' === u.config.mode && J(e);
          }
          function _(e) {
            for (
              var t = e > 0 ? 0 : u.config.showMonths - 1,
                n = e > 0 ? u.config.showMonths : -1,
                a = t;
              a != n;
              a += e
            )
              for (
                var i = u.daysContainer.children[a],
                  o = e > 0 ? 0 : i.children.length - 1,
                  r = e > 0 ? i.children.length : -1,
                  l = o;
                l != r;
                l += e
              ) {
                var c = i.children[l];
                if (-1 === c.className.indexOf('hidden') && q(c.dateObj)) return c;
              }
          }
          function I(e, t) {
            var n = m(),
              a = W(n || document.body),
              i =
                void 0 !== e
                  ? e
                  : a
                  ? n
                  : void 0 !== u.selectedDateElem && W(u.selectedDateElem)
                  ? u.selectedDateElem
                  : void 0 !== u.todayDateElem && W(u.todayDateElem)
                  ? u.todayDateElem
                  : _(t > 0 ? 1 : -1);
            void 0 === i
              ? u._input.focus()
              : a
              ? (function (e, t) {
                  for (
                    var n =
                        -1 === e.className.indexOf('Month') ? e.dateObj.getMonth() : u.currentMonth,
                      a = t > 0 ? u.config.showMonths : -1,
                      i = t > 0 ? 1 : -1,
                      o = n - u.currentMonth;
                    o != a;
                    o += i
                  )
                    for (
                      var r = u.daysContainer.children[o],
                        l = n - u.currentMonth === o ? e.$i + t : t < 0 ? r.children.length - 1 : 0,
                        c = r.children.length,
                        s = l;
                      s >= 0 && s < c && s != (t > 0 ? c : -1);
                      s += i
                    ) {
                      var d = r.children[s];
                      if (
                        -1 === d.className.indexOf('hidden') &&
                        q(d.dateObj) &&
                        Math.abs(e.$i - s) >= Math.abs(t)
                      )
                        return T(d);
                    }
                  u.changeMonth(i), I(_(i), 0);
                })(i, t)
              : T(i);
          }
          function O(e, t) {
            for (
              var n = (new Date(e, t, 1).getDay() - u.l10n.firstDayOfWeek + 7) % 7,
                i = u.utils.getDaysInMonth((t - 1 + 12) % 12, e),
                o = u.utils.getDaysInMonth(t, e),
                r = window.document.createDocumentFragment(),
                l = u.config.showMonths > 1,
                c = l ? 'prevMonthDay hidden' : 'prevMonthDay',
                s = l ? 'nextMonthDay hidden' : 'nextMonthDay',
                d = i + 1 - n,
                f = 0;
              d <= i;
              d++, f++
            )
              r.appendChild(k('flatpickr-day ' + c, new Date(e, t - 1, d), 0, f));
            for (d = 1; d <= o; d++, f++)
              r.appendChild(k('flatpickr-day', new Date(e, t, d), 0, f));
            for (var m = o + 1; m <= 42 - n && (1 === u.config.showMonths || f % 7 != 0); m++, f++)
              r.appendChild(k('flatpickr-day ' + s, new Date(e, t + 1, m % o), 0, f));
            var g = (0, a.createElement)('div', 'dayContainer');
            return g.appendChild(r), g;
          }
          function S() {
            if (void 0 !== u.daysContainer) {
              (0, a.clearNode)(u.daysContainer), u.weekNumbers && (0, a.clearNode)(u.weekNumbers);
              for (var e = document.createDocumentFragment(), t = 0; t < u.config.showMonths; t++) {
                var n = new Date(u.currentYear, u.currentMonth, 1);
                n.setMonth(u.currentMonth + t), e.appendChild(O(n.getFullYear(), n.getMonth()));
              }
              u.daysContainer.appendChild(e),
                (u.days = u.daysContainer.firstChild),
                'range' === u.config.mode && 1 === u.selectedDates.length && J();
            }
          }
          function N() {
            if (!(u.config.showMonths > 1 || 'dropdown' !== u.config.monthSelectorType)) {
              var e = function (e) {
                return (
                  !(
                    void 0 !== u.config.minDate &&
                    u.currentYear === u.config.minDate.getFullYear() &&
                    e < u.config.minDate.getMonth()
                  ) &&
                  !(
                    void 0 !== u.config.maxDate &&
                    u.currentYear === u.config.maxDate.getFullYear() &&
                    e > u.config.maxDate.getMonth()
                  )
                );
              };
              (u.monthsDropdownContainer.tabIndex = -1), (u.monthsDropdownContainer.innerHTML = '');
              for (var t = 0; t < 12; t++)
                if (e(t)) {
                  var n = (0, a.createElement)('option', 'flatpickr-monthDropdown-month');
                  (n.value = new Date(u.currentYear, t).getMonth().toString()),
                    (n.textContent = (0, o.monthToStr)(t, u.config.shorthandCurrentMonth, u.l10n)),
                    (n.tabIndex = -1),
                    u.currentMonth === t && (n.selected = !0),
                    u.monthsDropdownContainer.appendChild(n);
                }
            }
          }
          function P() {
            var e,
              t = (0, a.createElement)('div', 'flatpickr-month'),
              n = window.document.createDocumentFragment();
            u.config.showMonths > 1 || 'static' === u.config.monthSelectorType
              ? (e = (0, a.createElement)('span', 'cur-month'))
              : ((u.monthsDropdownContainer = (0, a.createElement)(
                  'select',
                  'flatpickr-monthDropdown-months',
                )),
                u.monthsDropdownContainer.setAttribute('aria-label', u.l10n.monthAriaLabel),
                M(u.monthsDropdownContainer, 'change', function (e) {
                  var t = (0, a.getEventTarget)(e),
                    n = parseInt(t.value, 10);
                  u.changeMonth(n - u.currentMonth), ie('onMonthChange');
                }),
                N(),
                (e = u.monthsDropdownContainer));
            var i = (0, a.createNumberInput)('cur-year', { tabindex: '-1' }),
              o = i.getElementsByTagName('input')[0];
            o.setAttribute('aria-label', u.l10n.yearAriaLabel),
              u.config.minDate && o.setAttribute('min', u.config.minDate.getFullYear().toString()),
              u.config.maxDate &&
                (o.setAttribute('max', u.config.maxDate.getFullYear().toString()),
                (o.disabled =
                  !!u.config.minDate &&
                  u.config.minDate.getFullYear() === u.config.maxDate.getFullYear()));
            var r = (0, a.createElement)('div', 'flatpickr-current-month');
            return (
              r.appendChild(e),
              r.appendChild(i),
              n.appendChild(r),
              t.appendChild(n),
              { container: t, yearElement: o, monthElement: e }
            );
          }
          function A() {
            (0, a.clearNode)(u.monthNav),
              u.monthNav.appendChild(u.prevMonthNav),
              u.config.showMonths && ((u.yearElements = []), (u.monthElements = []));
            for (var e = u.config.showMonths; e--; ) {
              var t = P();
              u.yearElements.push(t.yearElement),
                u.monthElements.push(t.monthElement),
                u.monthNav.appendChild(t.container);
            }
            u.monthNav.appendChild(u.nextMonthNav);
          }
          function Y() {
            u.weekdayContainer
              ? (0, a.clearNode)(u.weekdayContainer)
              : (u.weekdayContainer = (0, a.createElement)('div', 'flatpickr-weekdays'));
            for (var e = u.config.showMonths; e--; ) {
              var t = (0, a.createElement)('div', 'flatpickr-weekdaycontainer');
              u.weekdayContainer.appendChild(t);
            }
            return F(), u.weekdayContainer;
          }
          function F() {
            if (u.weekdayContainer) {
              var e = u.l10n.firstDayOfWeek,
                t = c(u.l10n.weekdays.shorthand);
              e > 0 && e < t.length && (t = c(t.splice(e, t.length), t.splice(0, e)));
              for (var n = u.config.showMonths; n--; )
                u.weekdayContainer.children[n].innerHTML =
                  "\n      <span class='flatpickr-weekday'>\n        " +
                  t.join("</span><span class='flatpickr-weekday'>") +
                  '\n      </span>\n      ';
            }
          }
          function j(e, t) {
            void 0 === t && (t = !0);
            var n = t ? e : e - u.currentMonth;
            (n < 0 && !0 === u._hidePrevMonthArrow) ||
              (n > 0 && !0 === u._hideNextMonthArrow) ||
              ((u.currentMonth += n),
              (u.currentMonth < 0 || u.currentMonth > 11) &&
                ((u.currentYear += u.currentMonth > 11 ? 1 : -1),
                (u.currentMonth = (u.currentMonth + 12) % 12),
                ie('onYearChange'),
                N()),
              S(),
              ie('onMonthChange'),
              le());
          }
          function L(e) {
            return u.calendarContainer.contains(e);
          }
          function H(e) {
            if (u.isOpen && !u.config.inline) {
              var t = (0, a.getEventTarget)(e),
                n = L(t),
                i =
                  !(
                    t === u.input ||
                    t === u.altInput ||
                    u.element.contains(t) ||
                    (e.path &&
                      e.path.indexOf &&
                      (~e.path.indexOf(u.input) || ~e.path.indexOf(u.altInput)))
                  ) &&
                  !n &&
                  !L(e.relatedTarget),
                o = !u.config.ignoredFocusElements.some(function (e) {
                  return e.contains(t);
                });
              i &&
                o &&
                (u.config.allowInput &&
                  u.setDate(
                    u._input.value,
                    !1,
                    u.config.altInput ? u.config.altFormat : u.config.dateFormat,
                  ),
                void 0 !== u.timeContainer &&
                  void 0 !== u.minuteElement &&
                  void 0 !== u.hourElement &&
                  '' !== u.input.value &&
                  void 0 !== u.input.value &&
                  h(),
                u.close(),
                u.config &&
                  'range' === u.config.mode &&
                  1 === u.selectedDates.length &&
                  u.clear(!1));
            }
          }
          function R(e) {
            if (
              !(
                !e ||
                (u.config.minDate && e < u.config.minDate.getFullYear()) ||
                (u.config.maxDate && e > u.config.maxDate.getFullYear())
              )
            ) {
              var t = e,
                n = u.currentYear !== t;
              (u.currentYear = t || u.currentYear),
                u.config.maxDate && u.currentYear === u.config.maxDate.getFullYear()
                  ? (u.currentMonth = Math.min(u.config.maxDate.getMonth(), u.currentMonth))
                  : u.config.minDate &&
                    u.currentYear === u.config.minDate.getFullYear() &&
                    (u.currentMonth = Math.max(u.config.minDate.getMonth(), u.currentMonth)),
                n && (u.redraw(), ie('onYearChange'), N());
            }
          }
          function q(e, t) {
            var n;
            void 0 === t && (t = !0);
            var a = u.parseDate(e, void 0, t);
            if (
              (u.config.minDate &&
                a &&
                (0, i.compareDates)(a, u.config.minDate, void 0 !== t ? t : !u.minDateHasTime) <
                  0) ||
              (u.config.maxDate &&
                a &&
                (0, i.compareDates)(a, u.config.maxDate, void 0 !== t ? t : !u.maxDateHasTime) > 0)
            )
              return !1;
            if (!u.config.enable && 0 === u.config.disable.length) return !0;
            if (void 0 === a) return !1;
            for (
              var o = !!u.config.enable,
                r = null !== (n = u.config.enable) && void 0 !== n ? n : u.config.disable,
                l = 0,
                c = void 0;
              l < r.length;
              l++
            ) {
              if ('function' == typeof (c = r[l]) && c(a)) return o;
              if (c instanceof Date && void 0 !== a && c.getTime() === a.getTime()) return o;
              if ('string' == typeof c) {
                var s = u.parseDate(c, void 0, !0);
                return s && s.getTime() === a.getTime() ? o : !o;
              }
              if (
                'object' == typeof c &&
                void 0 !== a &&
                c.from &&
                c.to &&
                a.getTime() >= c.from.getTime() &&
                a.getTime() <= c.to.getTime()
              )
                return o;
            }
            return !o;
          }
          function W(e) {
            return (
              void 0 !== u.daysContainer &&
              -1 === e.className.indexOf('hidden') &&
              -1 === e.className.indexOf('flatpickr-disabled') &&
              u.daysContainer.contains(e)
            );
          }
          function B(e) {
            var t = e.target === u._input,
              n = u._input.value.trimEnd() !== ce();
            !t ||
              !n ||
              (e.relatedTarget && L(e.relatedTarget)) ||
              u.setDate(
                u._input.value,
                !0,
                e.target === u.altInput ? u.config.altFormat : u.config.dateFormat,
              );
          }
          function K(e) {
            var t = (0, a.getEventTarget)(e),
              n = u.config.wrap ? r.contains(t) : t === u._input,
              i = u.config.allowInput,
              o = u.isOpen && (!i || !n),
              l = u.config.inline && n && !i;
            if (13 === e.keyCode && n) {
              if (i)
                return (
                  u.setDate(
                    u._input.value,
                    !0,
                    t === u.altInput ? u.config.altFormat : u.config.dateFormat,
                  ),
                  u.close(),
                  t.blur()
                );
              u.open();
            } else if (L(t) || o || l) {
              var c = !!u.timeContainer && u.timeContainer.contains(t);
              switch (e.keyCode) {
                case 13:
                  c ? (e.preventDefault(), h(), G()) : Z(e);
                  break;
                case 27:
                  e.preventDefault(), G();
                  break;
                case 8:
                case 46:
                  n && !u.config.allowInput && (e.preventDefault(), u.clear());
                  break;
                case 37:
                case 39:
                  if (c || n) u.hourElement && u.hourElement.focus();
                  else {
                    e.preventDefault();
                    var s = m();
                    if (void 0 !== u.daysContainer && (!1 === i || (s && W(s)))) {
                      var d = 39 === e.keyCode ? 1 : -1;
                      e.ctrlKey ? (e.stopPropagation(), j(d), I(_(1), 0)) : I(void 0, d);
                    }
                  }
                  break;
                case 38:
                case 40:
                  e.preventDefault();
                  var f = 40 === e.keyCode ? 1 : -1;
                  (u.daysContainer && void 0 !== t.$i) || t === u.input || t === u.altInput
                    ? e.ctrlKey
                      ? (e.stopPropagation(), R(u.currentYear - f), I(_(1), 0))
                      : c || I(void 0, 7 * f)
                    : t === u.currentYearElement
                    ? R(u.currentYear - f)
                    : u.config.enableTime &&
                      (!c && u.hourElement && u.hourElement.focus(), h(e), u._debouncedChange());
                  break;
                case 9:
                  if (c) {
                    var g = [u.hourElement, u.minuteElement, u.secondElement, u.amPM]
                        .concat(u.pluginElements)
                        .filter(function (e) {
                          return e;
                        }),
                      p = g.indexOf(t);
                    if (-1 !== p) {
                      var D = g[p + (e.shiftKey ? -1 : 1)];
                      e.preventDefault(), (D || u._input).focus();
                    }
                  } else
                    !u.config.noCalendar &&
                      u.daysContainer &&
                      u.daysContainer.contains(t) &&
                      e.shiftKey &&
                      (e.preventDefault(), u._input.focus());
              }
            }
            if (void 0 !== u.amPM && t === u.amPM)
              switch (e.key) {
                case u.l10n.amPM[0].charAt(0):
                case u.l10n.amPM[0].charAt(0).toLowerCase():
                  (u.amPM.textContent = u.l10n.amPM[0]), v(), se();
                  break;
                case u.l10n.amPM[1].charAt(0):
                case u.l10n.amPM[1].charAt(0).toLowerCase():
                  (u.amPM.textContent = u.l10n.amPM[1]), v(), se();
              }
            (n || L(t)) && ie('onKeyDown', e);
          }
          function J(e, t) {
            if (
              (void 0 === t && (t = 'flatpickr-day'),
              1 === u.selectedDates.length &&
                (!e || (e.classList.contains(t) && !e.classList.contains('flatpickr-disabled'))))
            ) {
              for (
                var n = e ? e.dateObj.getTime() : u.days.firstElementChild.dateObj.getTime(),
                  a = u.parseDate(u.selectedDates[0], void 0, !0).getTime(),
                  o = Math.min(n, u.selectedDates[0].getTime()),
                  r = Math.max(n, u.selectedDates[0].getTime()),
                  l = !1,
                  c = 0,
                  s = 0,
                  d = o;
                d < r;
                d += i.duration.DAY
              )
                q(new Date(d), !0) ||
                  ((l = l || (d > o && d < r)),
                  d < a && (!c || d > c) ? (c = d) : d > a && (!s || d < s) && (s = d));
              Array.from(
                u.rContainer.querySelectorAll(
                  '*:nth-child(-n+' + u.config.showMonths + ') > .' + t,
                ),
              ).forEach(function (t) {
                var o = t.dateObj.getTime(),
                  r = (c > 0 && o < c) || (s > 0 && o > s);
                if (r)
                  return (
                    t.classList.add('notAllowed'),
                    void ['inRange', 'startRange', 'endRange'].forEach(function (e) {
                      t.classList.remove(e);
                    })
                  );
                (l && !r) ||
                  (['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(function (e) {
                    t.classList.remove(e);
                  }),
                  void 0 !== e &&
                    (e.classList.add(n <= u.selectedDates[0].getTime() ? 'startRange' : 'endRange'),
                    a < n && o === a
                      ? t.classList.add('startRange')
                      : a > n && o === a && t.classList.add('endRange'),
                    o >= c &&
                      (0 === s || o <= s) &&
                      (0, i.isBetween)(o, a, n) &&
                      t.classList.add('inRange')));
              });
            }
          }
          function U() {
            !u.isOpen || u.config.static || u.config.inline || X();
          }
          function $(e) {
            return function (t) {
              var n = (u.config['_' + e + 'Date'] = u.parseDate(t, u.config.dateFormat)),
                a = u.config['_' + ('min' === e ? 'max' : 'min') + 'Date'];
              void 0 !== n &&
                (u['min' === e ? 'minDateHasTime' : 'maxDateHasTime'] =
                  n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
                u.selectedDates &&
                  ((u.selectedDates = u.selectedDates.filter(function (e) {
                    return q(e);
                  })),
                  u.selectedDates.length || 'min' !== e || D(n),
                  se()),
                u.daysContainer &&
                  (z(),
                  void 0 !== n
                    ? (u.currentYearElement[e] = n.getFullYear().toString())
                    : u.currentYearElement.removeAttribute(e),
                  (u.currentYearElement.disabled =
                    !!a && void 0 !== n && a.getFullYear() === n.getFullYear()));
            };
          }
          function Q() {
            return u.config.wrap ? r.querySelector('[data-input]') : r;
          }
          function V() {
            'object' != typeof u.config.locale &&
              void 0 === f.l10ns[u.config.locale] &&
              u.config.errorHandler(new Error('flatpickr: invalid locale ' + u.config.locale)),
              (u.l10n = l(
                l({}, f.l10ns.default),
                'object' == typeof u.config.locale
                  ? u.config.locale
                  : 'default' !== u.config.locale
                  ? f.l10ns[u.config.locale]
                  : void 0,
              )),
              (o.tokenRegex.D = '(' + u.l10n.weekdays.shorthand.join('|') + ')'),
              (o.tokenRegex.l = '(' + u.l10n.weekdays.longhand.join('|') + ')'),
              (o.tokenRegex.M = '(' + u.l10n.months.shorthand.join('|') + ')'),
              (o.tokenRegex.F = '(' + u.l10n.months.longhand.join('|') + ')'),
              (o.tokenRegex.K =
                '(' +
                u.l10n.amPM[0] +
                '|' +
                u.l10n.amPM[1] +
                '|' +
                u.l10n.amPM[0].toLowerCase() +
                '|' +
                u.l10n.amPM[1].toLowerCase() +
                ')'),
              void 0 === l(l({}, d), JSON.parse(JSON.stringify(r.dataset || {}))).time_24hr &&
                void 0 === f.defaultConfig.time_24hr &&
                (u.config.time_24hr = u.l10n.time_24hr),
              (u.formatDate = (0, i.createDateFormatter)(u)),
              (u.parseDate = (0, i.createDateParser)({ config: u.config, l10n: u.l10n }));
          }
          function X(e) {
            if ('function' != typeof u.config.position) {
              if (void 0 !== u.calendarContainer) {
                ie('onPreCalendarPosition');
                var t = e || u._positionElement,
                  n = Array.prototype.reduce.call(
                    u.calendarContainer.children,
                    function (e, t) {
                      return e + t.offsetHeight;
                    },
                    0,
                  ),
                  i = u.calendarContainer.offsetWidth,
                  o = u.config.position.split(' '),
                  r = o[0],
                  l = o.length > 1 ? o[1] : null,
                  c = t.getBoundingClientRect(),
                  s = window.innerHeight - c.bottom,
                  d = 'above' === r || ('below' !== r && s < n && c.top > n),
                  f = window.pageYOffset + c.top + (d ? -n - 2 : t.offsetHeight + 2);
                if (
                  ((0, a.toggleClass)(u.calendarContainer, 'arrowTop', !d),
                  (0, a.toggleClass)(u.calendarContainer, 'arrowBottom', d),
                  !u.config.inline)
                ) {
                  var m = window.pageXOffset + c.left,
                    g = !1,
                    p = !1;
                  'center' === l
                    ? ((m -= (i - c.width) / 2), (g = !0))
                    : 'right' === l && ((m -= i - c.width), (p = !0)),
                    (0, a.toggleClass)(u.calendarContainer, 'arrowLeft', !g && !p),
                    (0, a.toggleClass)(u.calendarContainer, 'arrowCenter', g),
                    (0, a.toggleClass)(u.calendarContainer, 'arrowRight', p);
                  var h = window.document.body.offsetWidth - (window.pageXOffset + c.right),
                    v = m + i > window.document.body.offsetWidth,
                    D = h + i > window.document.body.offsetWidth;
                  if (((0, a.toggleClass)(u.calendarContainer, 'rightMost', v), !u.config.static))
                    if (((u.calendarContainer.style.top = f + 'px'), v))
                      if (D) {
                        var C = (function () {
                          for (var e = null, t = 0; t < document.styleSheets.length; t++) {
                            var n = document.styleSheets[t];
                            if (n.cssRules) {
                              try {
                                n.cssRules;
                              } catch (i) {
                                continue;
                              }
                              e = n;
                              break;
                            }
                          }
                          return null != e
                            ? e
                            : ((a = document.createElement('style')),
                              document.head.appendChild(a),
                              a.sheet);
                          var a;
                        })();
                        if (void 0 === C) return;
                        var b = window.document.body.offsetWidth,
                          M = Math.max(0, b / 2 - i / 2),
                          y = C.cssRules.length,
                          w = '{left:' + c.left + 'px;right:auto;}';
                        (0, a.toggleClass)(u.calendarContainer, 'rightMost', !1),
                          (0, a.toggleClass)(u.calendarContainer, 'centerMost', !0),
                          C.insertRule(
                            '.flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after' +
                              w,
                            y,
                          ),
                          (u.calendarContainer.style.left = M + 'px'),
                          (u.calendarContainer.style.right = 'auto');
                      } else
                        (u.calendarContainer.style.left = 'auto'),
                          (u.calendarContainer.style.right = h + 'px');
                    else
                      (u.calendarContainer.style.left = m + 'px'),
                        (u.calendarContainer.style.right = 'auto');
                }
              }
            } else u.config.position(u, e);
          }
          function z() {
            u.config.noCalendar || u.isMobile || (N(), le(), S());
          }
          function G() {
            u._input.focus(),
              -1 !== window.navigator.userAgent.indexOf('MSIE') ||
              void 0 !== navigator.msMaxTouchPoints
                ? setTimeout(u.close, 0)
                : u.close();
          }
          function Z(e) {
            e.preventDefault(), e.stopPropagation();
            var t = (0, a.findParent)((0, a.getEventTarget)(e), function (e) {
              return (
                e.classList &&
                e.classList.contains('flatpickr-day') &&
                !e.classList.contains('flatpickr-disabled') &&
                !e.classList.contains('notAllowed')
              );
            });
            if (void 0 !== t) {
              var n = t,
                o = (u.latestSelectedDateObj = new Date(n.dateObj.getTime())),
                r =
                  (o.getMonth() < u.currentMonth ||
                    o.getMonth() > u.currentMonth + u.config.showMonths - 1) &&
                  'range' !== u.config.mode;
              if (((u.selectedDateElem = n), 'single' === u.config.mode)) u.selectedDates = [o];
              else if ('multiple' === u.config.mode) {
                var l = re(o);
                l ? u.selectedDates.splice(parseInt(l), 1) : u.selectedDates.push(o);
              } else
                'range' === u.config.mode &&
                  (2 === u.selectedDates.length && u.clear(!1, !1),
                  (u.latestSelectedDateObj = o),
                  u.selectedDates.push(o),
                  0 !== (0, i.compareDates)(o, u.selectedDates[0], !0) &&
                    u.selectedDates.sort(function (e, t) {
                      return e.getTime() - t.getTime();
                    }));
              if ((v(), r)) {
                var c = u.currentYear !== o.getFullYear();
                (u.currentYear = o.getFullYear()),
                  (u.currentMonth = o.getMonth()),
                  c && (ie('onYearChange'), N()),
                  ie('onMonthChange');
              }
              if (
                (le(),
                S(),
                se(),
                r || 'range' === u.config.mode || 1 !== u.config.showMonths
                  ? void 0 !== u.selectedDateElem &&
                    void 0 === u.hourElement &&
                    u.selectedDateElem &&
                    u.selectedDateElem.focus()
                  : T(n),
                void 0 !== u.hourElement && void 0 !== u.hourElement && u.hourElement.focus(),
                u.config.closeOnSelect)
              ) {
                var s = 'single' === u.config.mode && !u.config.enableTime,
                  d =
                    'range' === u.config.mode &&
                    2 === u.selectedDates.length &&
                    !u.config.enableTime;
                (s || d) && G();
              }
              y();
            }
          }
          (u.parseDate = (0, i.createDateParser)({ config: u.config, l10n: u.l10n })),
            (u._handlers = []),
            (u.pluginElements = []),
            (u.loadedPlugins = []),
            (u._bind = M),
            (u._setHoursFromDate = D),
            (u._positionCalendar = X),
            (u.changeMonth = j),
            (u.changeYear = R),
            (u.clear = function (e, t) {
              void 0 === e && (e = !0);
              void 0 === t && (t = !0);
              (u.input.value = ''), void 0 !== u.altInput && (u.altInput.value = '');
              void 0 !== u.mobileInput && (u.mobileInput.value = '');
              (u.selectedDates = []),
                (u.latestSelectedDateObj = void 0),
                !0 === t &&
                  ((u.currentYear = u._initialDate.getFullYear()),
                  (u.currentMonth = u._initialDate.getMonth()));
              if (!0 === u.config.enableTime) {
                var n = (0, i.getDefaultHours)(u.config),
                  a = n.hours,
                  o = n.minutes,
                  r = n.seconds;
                C(a, o, r);
              }
              u.redraw(), e && ie('onChange');
            }),
            (u.close = function () {
              (u.isOpen = !1),
                u.isMobile ||
                  (void 0 !== u.calendarContainer && u.calendarContainer.classList.remove('open'),
                  void 0 !== u._input && u._input.classList.remove('active'));
              ie('onClose');
            }),
            (u.onMouseOver = J),
            (u._createElement = a.createElement),
            (u.createDay = k),
            (u.destroy = function () {
              void 0 !== u.config && ie('onDestroy');
              for (var e = u._handlers.length; e--; ) u._handlers[e].remove();
              if (((u._handlers = []), u.mobileInput))
                u.mobileInput.parentNode && u.mobileInput.parentNode.removeChild(u.mobileInput),
                  (u.mobileInput = void 0);
              else if (u.calendarContainer && u.calendarContainer.parentNode)
                if (u.config.static && u.calendarContainer.parentNode) {
                  var t = u.calendarContainer.parentNode;
                  if ((t.lastChild && t.removeChild(t.lastChild), t.parentNode)) {
                    for (; t.firstChild; ) t.parentNode.insertBefore(t.firstChild, t);
                    t.parentNode.removeChild(t);
                  }
                } else u.calendarContainer.parentNode.removeChild(u.calendarContainer);
              u.altInput &&
                ((u.input.type = 'text'),
                u.altInput.parentNode && u.altInput.parentNode.removeChild(u.altInput),
                delete u.altInput);
              u.input &&
                ((u.input.type = u.input._type),
                u.input.classList.remove('flatpickr-input'),
                u.input.removeAttribute('readonly'));
              [
                '_showTimeInput',
                'latestSelectedDateObj',
                '_hideNextMonthArrow',
                '_hidePrevMonthArrow',
                '__hideNextMonthArrow',
                '__hidePrevMonthArrow',
                'isMobile',
                'isOpen',
                'selectedDateElem',
                'minDateHasTime',
                'maxDateHasTime',
                'days',
                'daysContainer',
                '_input',
                '_positionElement',
                'innerContainer',
                'rContainer',
                'monthNav',
                'todayDateElem',
                'calendarContainer',
                'weekdayContainer',
                'prevMonthNav',
                'nextMonthNav',
                'monthsDropdownContainer',
                'currentMonthElement',
                'currentYearElement',
                'navigationCurrentMonth',
                'selectedDateElem',
                'config',
              ].forEach(function (e) {
                try {
                  delete u[e];
                } catch (t) {}
              });
            }),
            (u.isEnabled = q),
            (u.jumpToDate = w),
            (u.updateValue = se),
            (u.open = function (e, t) {
              void 0 === t && (t = u._positionElement);
              if (!0 === u.isMobile) {
                if (e) {
                  e.preventDefault();
                  var n = (0, a.getEventTarget)(e);
                  n && n.blur();
                }
                return (
                  void 0 !== u.mobileInput && (u.mobileInput.focus(), u.mobileInput.click()),
                  void ie('onOpen')
                );
              }
              if (u._input.disabled || u.config.inline) return;
              var i = u.isOpen;
              (u.isOpen = !0),
                i ||
                  (u.calendarContainer.classList.add('open'),
                  u._input.classList.add('active'),
                  ie('onOpen'),
                  X(t));
              !0 === u.config.enableTime &&
                !0 === u.config.noCalendar &&
                (!1 !== u.config.allowInput ||
                  (void 0 !== e && u.timeContainer.contains(e.relatedTarget)) ||
                  setTimeout(function () {
                    return u.hourElement.select();
                  }, 50));
            }),
            (u.redraw = z),
            (u.set = function (t, a) {
              if (null !== t && 'object' == typeof t)
                for (var i in (Object.assign(u.config, t), t))
                  void 0 !== ee[i] &&
                    ee[i].forEach(function (e) {
                      return e();
                    });
              else
                (u.config[t] = a),
                  void 0 !== ee[t]
                    ? ee[t].forEach(function (e) {
                        return e();
                      })
                    : e.HOOKS.indexOf(t) > -1 && (u.config[t] = (0, n.arrayify)(a));
              u.redraw(), se(!0);
            }),
            (u.setDate = function (e, t, n) {
              void 0 === t && (t = !1);
              void 0 === n && (n = u.config.dateFormat);
              if ((0 !== e && !e) || (e instanceof Array && 0 === e.length)) return u.clear(t);
              te(e, n),
                (u.latestSelectedDateObj = u.selectedDates[u.selectedDates.length - 1]),
                u.redraw(),
                w(void 0, t),
                D(),
                0 === u.selectedDates.length && u.clear(!1);
              se(t), t && ie('onChange');
            }),
            (u.toggle = function (e) {
              if (!0 === u.isOpen) return u.close();
              u.open(e);
            });
          var ee = {
            locale: [V, F],
            showMonths: [A, p, Y],
            minDate: [w],
            maxDate: [w],
            positionElement: [ae],
            clickOpens: [
              function () {
                !0 === u.config.clickOpens
                  ? (M(u._input, 'focus', u.open), M(u._input, 'click', u.open))
                  : (u._input.removeEventListener('focus', u.open),
                    u._input.removeEventListener('click', u.open));
              },
            ],
          };
          function te(e, t) {
            var n = [];
            if (e instanceof Array)
              n = e.map(function (e) {
                return u.parseDate(e, t);
              });
            else if (e instanceof Date || 'number' == typeof e) n = [u.parseDate(e, t)];
            else if ('string' == typeof e)
              switch (u.config.mode) {
                case 'single':
                case 'time':
                  n = [u.parseDate(e, t)];
                  break;
                case 'multiple':
                  n = e.split(u.config.conjunction).map(function (e) {
                    return u.parseDate(e, t);
                  });
                  break;
                case 'range':
                  n = e.split(u.l10n.rangeSeparator).map(function (e) {
                    return u.parseDate(e, t);
                  });
              }
            else u.config.errorHandler(new Error('Invalid date supplied: ' + JSON.stringify(e)));
            (u.selectedDates = u.config.allowInvalidPreload
              ? n
              : n.filter(function (e) {
                  return e instanceof Date && q(e, !1);
                })),
              'range' === u.config.mode &&
                u.selectedDates.sort(function (e, t) {
                  return e.getTime() - t.getTime();
                });
          }
          function ne(e) {
            return e
              .slice()
              .map(function (e) {
                return 'string' == typeof e || 'number' == typeof e || e instanceof Date
                  ? u.parseDate(e, void 0, !0)
                  : e && 'object' == typeof e && e.from && e.to
                  ? { from: u.parseDate(e.from, void 0), to: u.parseDate(e.to, void 0) }
                  : e;
              })
              .filter(function (e) {
                return e;
              });
          }
          function ae() {
            u._positionElement = u.config.positionElement || u._input;
          }
          function ie(e, t) {
            if (void 0 !== u.config) {
              var n = u.config[e];
              if (void 0 !== n && n.length > 0)
                for (var a = 0; n[a] && a < n.length; a++)
                  n[a](u.selectedDates, u.input.value, u, t);
              'onChange' === e &&
                (u.input.dispatchEvent(oe('change')), u.input.dispatchEvent(oe('input')));
            }
          }
          function oe(e) {
            var t = document.createEvent('Event');
            return t.initEvent(e, !0, !0), t;
          }
          function re(e) {
            for (var t = 0; t < u.selectedDates.length; t++) {
              var n = u.selectedDates[t];
              if (n instanceof Date && 0 === (0, i.compareDates)(n, e)) return '' + t;
            }
            return !1;
          }
          function le() {
            u.config.noCalendar ||
              u.isMobile ||
              !u.monthNav ||
              (u.yearElements.forEach(function (e, t) {
                var n = new Date(u.currentYear, u.currentMonth, 1);
                n.setMonth(u.currentMonth + t),
                  u.config.showMonths > 1 || 'static' === u.config.monthSelectorType
                    ? (u.monthElements[t].textContent =
                        (0, o.monthToStr)(n.getMonth(), u.config.shorthandCurrentMonth, u.l10n) +
                        ' ')
                    : (u.monthsDropdownContainer.value = n.getMonth().toString()),
                  (e.value = n.getFullYear().toString());
              }),
              (u._hidePrevMonthArrow =
                void 0 !== u.config.minDate &&
                (u.currentYear === u.config.minDate.getFullYear()
                  ? u.currentMonth <= u.config.minDate.getMonth()
                  : u.currentYear < u.config.minDate.getFullYear())),
              (u._hideNextMonthArrow =
                void 0 !== u.config.maxDate &&
                (u.currentYear === u.config.maxDate.getFullYear()
                  ? u.currentMonth + 1 > u.config.maxDate.getMonth()
                  : u.currentYear > u.config.maxDate.getFullYear())));
          }
          function ce(e) {
            var t = e || (u.config.altInput ? u.config.altFormat : u.config.dateFormat);
            return u.selectedDates
              .map(function (e) {
                return u.formatDate(e, t);
              })
              .filter(function (e, t, n) {
                return 'range' !== u.config.mode || u.config.enableTime || n.indexOf(e) === t;
              })
              .join('range' !== u.config.mode ? u.config.conjunction : u.l10n.rangeSeparator);
          }
          function se(e) {
            void 0 === e && (e = !0),
              void 0 !== u.mobileInput &&
                u.mobileFormatStr &&
                (u.mobileInput.value =
                  void 0 !== u.latestSelectedDateObj
                    ? u.formatDate(u.latestSelectedDateObj, u.mobileFormatStr)
                    : ''),
              (u.input.value = ce(u.config.dateFormat)),
              void 0 !== u.altInput && (u.altInput.value = ce(u.config.altFormat)),
              !1 !== e && ie('onValueUpdate');
          }
          function de(e) {
            var t = (0, a.getEventTarget)(e),
              n = u.prevMonthNav.contains(t),
              i = u.nextMonthNav.contains(t);
            n || i
              ? j(n ? -1 : 1)
              : u.yearElements.indexOf(t) >= 0
              ? t.select()
              : t.classList.contains('arrowUp')
              ? u.changeYear(u.currentYear + 1)
              : t.classList.contains('arrowDown') && u.changeYear(u.currentYear - 1);
          }
          return (
            (function () {
              (u.element = u.input = r),
                (u.isOpen = !1),
                (function () {
                  var t = [
                      'wrap',
                      'weekNumbers',
                      'allowInput',
                      'allowInvalidPreload',
                      'clickOpens',
                      'time_24hr',
                      'enableTime',
                      'noCalendar',
                      'altInput',
                      'shorthandCurrentMonth',
                      'inline',
                      'static',
                      'enableSeconds',
                      'disableMobile',
                    ],
                    a = l(l({}, JSON.parse(JSON.stringify(r.dataset || {}))), d),
                    i = {};
                  (u.config.parseDate = a.parseDate),
                    (u.config.formatDate = a.formatDate),
                    Object.defineProperty(u.config, 'enable', {
                      get: function () {
                        return u.config._enable;
                      },
                      set: function (e) {
                        u.config._enable = ne(e);
                      },
                    }),
                    Object.defineProperty(u.config, 'disable', {
                      get: function () {
                        return u.config._disable;
                      },
                      set: function (e) {
                        u.config._disable = ne(e);
                      },
                    });
                  var o = 'time' === a.mode;
                  if (!a.dateFormat && (a.enableTime || o)) {
                    var c = f.defaultConfig.dateFormat || e.defaults.dateFormat;
                    i.dateFormat =
                      a.noCalendar || o
                        ? 'H:i' + (a.enableSeconds ? ':S' : '')
                        : c + ' H:i' + (a.enableSeconds ? ':S' : '');
                  }
                  if (a.altInput && (a.enableTime || o) && !a.altFormat) {
                    var s = f.defaultConfig.altFormat || e.defaults.altFormat;
                    i.altFormat =
                      a.noCalendar || o
                        ? 'h:i' + (a.enableSeconds ? ':S K' : ' K')
                        : s + ' h:i' + (a.enableSeconds ? ':S' : '') + ' K';
                  }
                  Object.defineProperty(u.config, 'minDate', {
                    get: function () {
                      return u.config._minDate;
                    },
                    set: $('min'),
                  }),
                    Object.defineProperty(u.config, 'maxDate', {
                      get: function () {
                        return u.config._maxDate;
                      },
                      set: $('max'),
                    });
                  var m = function (e) {
                    return function (t) {
                      u.config['min' === e ? '_minTime' : '_maxTime'] = u.parseDate(t, 'H:i:S');
                    };
                  };
                  Object.defineProperty(u.config, 'minTime', {
                    get: function () {
                      return u.config._minTime;
                    },
                    set: m('min'),
                  }),
                    Object.defineProperty(u.config, 'maxTime', {
                      get: function () {
                        return u.config._maxTime;
                      },
                      set: m('max'),
                    }),
                    'time' === a.mode && ((u.config.noCalendar = !0), (u.config.enableTime = !0)),
                    Object.assign(u.config, i, a);
                  for (var p = 0; p < t.length; p++)
                    u.config[t[p]] = !0 === u.config[t[p]] || 'true' === u.config[t[p]];
                  e.HOOKS.filter(function (e) {
                    return void 0 !== u.config[e];
                  }).forEach(function (e) {
                    u.config[e] = (0, n.arrayify)(u.config[e] || []).map(g);
                  }),
                    (u.isMobile =
                      !u.config.disableMobile &&
                      !u.config.inline &&
                      'single' === u.config.mode &&
                      !u.config.disable.length &&
                      !u.config.enable &&
                      !u.config.weekNumbers &&
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent,
                      ));
                  for (var p = 0; p < u.config.plugins.length; p++) {
                    var h = u.config.plugins[p](u) || {};
                    for (var v in h)
                      e.HOOKS.indexOf(v) > -1
                        ? (u.config[v] = (0, n.arrayify)(h[v]).map(g).concat(u.config[v]))
                        : void 0 === a[v] && (u.config[v] = h[v]);
                  }
                  a.altInputClass ||
                    (u.config.altInputClass = Q().className + ' ' + u.config.altInputClass),
                    ie('onParseConfig');
                })(),
                V(),
                (u.input = Q()),
                u.input
                  ? ((u.input._type = u.input.type),
                    (u.input.type = 'text'),
                    u.input.classList.add('flatpickr-input'),
                    (u._input = u.input),
                    u.config.altInput &&
                      ((u.altInput = (0, a.createElement)(
                        u.input.nodeName,
                        u.config.altInputClass,
                      )),
                      (u._input = u.altInput),
                      (u.altInput.placeholder = u.input.placeholder),
                      (u.altInput.disabled = u.input.disabled),
                      (u.altInput.required = u.input.required),
                      (u.altInput.tabIndex = u.input.tabIndex),
                      (u.altInput.type = 'text'),
                      u.input.setAttribute('type', 'hidden'),
                      !u.config.static &&
                        u.input.parentNode &&
                        u.input.parentNode.insertBefore(u.altInput, u.input.nextSibling)),
                    u.config.allowInput || u._input.setAttribute('readonly', 'readonly'),
                    ae())
                  : u.config.errorHandler(new Error('Invalid input element specified')),
                (function () {
                  (u.selectedDates = []), (u.now = u.parseDate(u.config.now) || new Date());
                  var e =
                    u.config.defaultDate ||
                    (('INPUT' !== u.input.nodeName && 'TEXTAREA' !== u.input.nodeName) ||
                    !u.input.placeholder ||
                    u.input.value !== u.input.placeholder
                      ? u.input.value
                      : null);
                  e && te(e, u.config.dateFormat),
                    (u._initialDate =
                      u.selectedDates.length > 0
                        ? u.selectedDates[0]
                        : u.config.minDate && u.config.minDate.getTime() > u.now.getTime()
                        ? u.config.minDate
                        : u.config.maxDate && u.config.maxDate.getTime() < u.now.getTime()
                        ? u.config.maxDate
                        : u.now),
                    (u.currentYear = u._initialDate.getFullYear()),
                    (u.currentMonth = u._initialDate.getMonth()),
                    u.selectedDates.length > 0 && (u.latestSelectedDateObj = u.selectedDates[0]),
                    void 0 !== u.config.minTime &&
                      (u.config.minTime = u.parseDate(u.config.minTime, 'H:i')),
                    void 0 !== u.config.maxTime &&
                      (u.config.maxTime = u.parseDate(u.config.maxTime, 'H:i')),
                    (u.minDateHasTime =
                      !!u.config.minDate &&
                      (u.config.minDate.getHours() > 0 ||
                        u.config.minDate.getMinutes() > 0 ||
                        u.config.minDate.getSeconds() > 0)),
                    (u.maxDateHasTime =
                      !!u.config.maxDate &&
                      (u.config.maxDate.getHours() > 0 ||
                        u.config.maxDate.getMinutes() > 0 ||
                        u.config.maxDate.getSeconds() > 0));
                })(),
                (u.utils = {
                  getDaysInMonth: function (e, t) {
                    return (
                      void 0 === e && (e = u.currentMonth),
                      void 0 === t && (t = u.currentYear),
                      1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0)
                        ? 29
                        : u.l10n.daysInMonth[e]
                    );
                  },
                }),
                u.isMobile ||
                  (function () {
                    var e = window.document.createDocumentFragment();
                    if (
                      ((u.calendarContainer = (0, a.createElement)('div', 'flatpickr-calendar')),
                      (u.calendarContainer.tabIndex = -1),
                      !u.config.noCalendar)
                    ) {
                      if (
                        (e.appendChild(
                          ((u.monthNav = (0, a.createElement)('div', 'flatpickr-months')),
                          (u.yearElements = []),
                          (u.monthElements = []),
                          (u.prevMonthNav = (0, a.createElement)('span', 'flatpickr-prev-month')),
                          (u.prevMonthNav.innerHTML = u.config.prevArrow),
                          (u.nextMonthNav = (0, a.createElement)('span', 'flatpickr-next-month')),
                          (u.nextMonthNav.innerHTML = u.config.nextArrow),
                          A(),
                          Object.defineProperty(u, '_hidePrevMonthArrow', {
                            get: function () {
                              return u.__hidePrevMonthArrow;
                            },
                            set: function (e) {
                              u.__hidePrevMonthArrow !== e &&
                                ((0, a.toggleClass)(u.prevMonthNav, 'flatpickr-disabled', e),
                                (u.__hidePrevMonthArrow = e));
                            },
                          }),
                          Object.defineProperty(u, '_hideNextMonthArrow', {
                            get: function () {
                              return u.__hideNextMonthArrow;
                            },
                            set: function (e) {
                              u.__hideNextMonthArrow !== e &&
                                ((0, a.toggleClass)(u.nextMonthNav, 'flatpickr-disabled', e),
                                (u.__hideNextMonthArrow = e));
                            },
                          }),
                          (u.currentYearElement = u.yearElements[0]),
                          le(),
                          u.monthNav),
                        ),
                        (u.innerContainer = (0, a.createElement)(
                          'div',
                          'flatpickr-innerContainer',
                        )),
                        u.config.weekNumbers)
                      ) {
                        var t = (function () {
                            u.calendarContainer.classList.add('hasWeeks');
                            var e = (0, a.createElement)('div', 'flatpickr-weekwrapper');
                            e.appendChild(
                              (0, a.createElement)(
                                'span',
                                'flatpickr-weekday',
                                u.l10n.weekAbbreviation,
                              ),
                            );
                            var t = (0, a.createElement)('div', 'flatpickr-weeks');
                            return e.appendChild(t), { weekWrapper: e, weekNumbers: t };
                          })(),
                          o = t.weekWrapper,
                          r = t.weekNumbers;
                        u.innerContainer.appendChild(o), (u.weekNumbers = r), (u.weekWrapper = o);
                      }
                      (u.rContainer = (0, a.createElement)('div', 'flatpickr-rContainer')),
                        u.rContainer.appendChild(Y()),
                        u.daysContainer ||
                          ((u.daysContainer = (0, a.createElement)('div', 'flatpickr-days')),
                          (u.daysContainer.tabIndex = -1)),
                        S(),
                        u.rContainer.appendChild(u.daysContainer),
                        u.innerContainer.appendChild(u.rContainer),
                        e.appendChild(u.innerContainer);
                    }
                    u.config.enableTime &&
                      e.appendChild(
                        (function () {
                          u.calendarContainer.classList.add('hasTime'),
                            u.config.noCalendar && u.calendarContainer.classList.add('noCalendar');
                          var e = (0, i.getDefaultHours)(u.config);
                          (u.timeContainer = (0, a.createElement)('div', 'flatpickr-time')),
                            (u.timeContainer.tabIndex = -1);
                          var t = (0, a.createElement)('span', 'flatpickr-time-separator', ':'),
                            o = (0, a.createNumberInput)('flatpickr-hour', {
                              'aria-label': u.l10n.hourAriaLabel,
                            });
                          u.hourElement = o.getElementsByTagName('input')[0];
                          var r = (0, a.createNumberInput)('flatpickr-minute', {
                            'aria-label': u.l10n.minuteAriaLabel,
                          });
                          if (
                            ((u.minuteElement = r.getElementsByTagName('input')[0]),
                            (u.hourElement.tabIndex = u.minuteElement.tabIndex = -1),
                            (u.hourElement.value = (0, n.pad)(
                              u.latestSelectedDateObj
                                ? u.latestSelectedDateObj.getHours()
                                : u.config.time_24hr
                                ? e.hours
                                : (function (e) {
                                    switch (e % 24) {
                                      case 0:
                                      case 12:
                                        return 12;
                                      default:
                                        return e % 12;
                                    }
                                  })(e.hours),
                            )),
                            (u.minuteElement.value = (0, n.pad)(
                              u.latestSelectedDateObj
                                ? u.latestSelectedDateObj.getMinutes()
                                : e.minutes,
                            )),
                            u.hourElement.setAttribute('step', u.config.hourIncrement.toString()),
                            u.minuteElement.setAttribute(
                              'step',
                              u.config.minuteIncrement.toString(),
                            ),
                            u.hourElement.setAttribute('min', u.config.time_24hr ? '0' : '1'),
                            u.hourElement.setAttribute('max', u.config.time_24hr ? '23' : '12'),
                            u.hourElement.setAttribute('maxlength', '2'),
                            u.minuteElement.setAttribute('min', '0'),
                            u.minuteElement.setAttribute('max', '59'),
                            u.minuteElement.setAttribute('maxlength', '2'),
                            u.timeContainer.appendChild(o),
                            u.timeContainer.appendChild(t),
                            u.timeContainer.appendChild(r),
                            u.config.time_24hr && u.timeContainer.classList.add('time24hr'),
                            u.config.enableSeconds)
                          ) {
                            u.timeContainer.classList.add('hasSeconds');
                            var l = (0, a.createNumberInput)('flatpickr-second');
                            (u.secondElement = l.getElementsByTagName('input')[0]),
                              (u.secondElement.value = (0, n.pad)(
                                u.latestSelectedDateObj
                                  ? u.latestSelectedDateObj.getSeconds()
                                  : e.seconds,
                              )),
                              u.secondElement.setAttribute(
                                'step',
                                u.minuteElement.getAttribute('step'),
                              ),
                              u.secondElement.setAttribute('min', '0'),
                              u.secondElement.setAttribute('max', '59'),
                              u.secondElement.setAttribute('maxlength', '2'),
                              u.timeContainer.appendChild(
                                (0, a.createElement)('span', 'flatpickr-time-separator', ':'),
                              ),
                              u.timeContainer.appendChild(l);
                          }
                          return (
                            u.config.time_24hr ||
                              ((u.amPM = (0, a.createElement)(
                                'span',
                                'flatpickr-am-pm',
                                u.l10n.amPM[
                                  (0, n.int)(
                                    (u.latestSelectedDateObj
                                      ? u.hourElement.value
                                      : u.config.defaultHour) > 11,
                                  )
                                ],
                              )),
                              (u.amPM.title = u.l10n.toggleTitle),
                              (u.amPM.tabIndex = -1),
                              u.timeContainer.appendChild(u.amPM)),
                            u.timeContainer
                          );
                        })(),
                      ),
                      (0, a.toggleClass)(
                        u.calendarContainer,
                        'rangeMode',
                        'range' === u.config.mode,
                      ),
                      (0, a.toggleClass)(u.calendarContainer, 'animate', !0 === u.config.animate),
                      (0, a.toggleClass)(
                        u.calendarContainer,
                        'multiMonth',
                        u.config.showMonths > 1,
                      ),
                      u.calendarContainer.appendChild(e);
                    var l = void 0 !== u.config.appendTo && void 0 !== u.config.appendTo.nodeType;
                    if (
                      (u.config.inline || u.config.static) &&
                      (u.calendarContainer.classList.add(u.config.inline ? 'inline' : 'static'),
                      u.config.inline &&
                        (!l && u.element.parentNode
                          ? u.element.parentNode.insertBefore(
                              u.calendarContainer,
                              u._input.nextSibling,
                            )
                          : void 0 !== u.config.appendTo &&
                            u.config.appendTo.appendChild(u.calendarContainer)),
                      u.config.static)
                    ) {
                      var c = (0, a.createElement)('div', 'flatpickr-wrapper');
                      u.element.parentNode && u.element.parentNode.insertBefore(c, u.element),
                        c.appendChild(u.element),
                        u.altInput && c.appendChild(u.altInput),
                        c.appendChild(u.calendarContainer);
                    }
                    u.config.static ||
                      u.config.inline ||
                      (void 0 !== u.config.appendTo
                        ? u.config.appendTo
                        : window.document.body
                      ).appendChild(u.calendarContainer);
                  })(),
                (function () {
                  if (
                    (u.config.wrap &&
                      ['open', 'close', 'toggle', 'clear'].forEach(function (e) {
                        Array.prototype.forEach.call(
                          u.element.querySelectorAll('[data-' + e + ']'),
                          function (t) {
                            return M(t, 'click', u[e]);
                          },
                        );
                      }),
                    u.isMobile)
                  )
                    !(function () {
                      var e = u.config.enableTime
                        ? u.config.noCalendar
                          ? 'time'
                          : 'datetime-local'
                        : 'date';
                      (u.mobileInput = (0, a.createElement)(
                        'input',
                        u.input.className + ' flatpickr-mobile',
                      )),
                        (u.mobileInput.tabIndex = 1),
                        (u.mobileInput.type = e),
                        (u.mobileInput.disabled = u.input.disabled),
                        (u.mobileInput.required = u.input.required),
                        (u.mobileInput.placeholder = u.input.placeholder),
                        (u.mobileFormatStr =
                          'datetime-local' === e
                            ? 'Y-m-d\\TH:i:S'
                            : 'date' === e
                            ? 'Y-m-d'
                            : 'H:i:S'),
                        u.selectedDates.length > 0 &&
                          (u.mobileInput.defaultValue = u.mobileInput.value =
                            u.formatDate(u.selectedDates[0], u.mobileFormatStr)),
                        u.config.minDate &&
                          (u.mobileInput.min = u.formatDate(u.config.minDate, 'Y-m-d')),
                        u.config.maxDate &&
                          (u.mobileInput.max = u.formatDate(u.config.maxDate, 'Y-m-d')),
                        u.input.getAttribute('step') &&
                          (u.mobileInput.step = String(u.input.getAttribute('step'))),
                        (u.input.type = 'hidden'),
                        void 0 !== u.altInput && (u.altInput.type = 'hidden');
                      try {
                        u.input.parentNode &&
                          u.input.parentNode.insertBefore(u.mobileInput, u.input.nextSibling);
                      } catch (t) {}
                      M(u.mobileInput, 'change', function (e) {
                        u.setDate((0, a.getEventTarget)(e).value, !1, u.mobileFormatStr),
                          ie('onChange'),
                          ie('onClose');
                      });
                    })();
                  else {
                    var e = (0, n.debounce)(U, 50);
                    (u._debouncedChange = (0, n.debounce)(y, s)),
                      u.daysContainer &&
                        !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                        M(u.daysContainer, 'mouseover', function (e) {
                          'range' === u.config.mode && J((0, a.getEventTarget)(e));
                        }),
                      M(u._input, 'keydown', K),
                      void 0 !== u.calendarContainer && M(u.calendarContainer, 'keydown', K),
                      u.config.inline || u.config.static || M(window, 'resize', e),
                      void 0 !== window.ontouchstart
                        ? M(window.document, 'touchstart', H)
                        : M(window.document, 'mousedown', H),
                      M(window.document, 'focus', H, { capture: !0 }),
                      !0 === u.config.clickOpens &&
                        (M(u._input, 'focus', u.open), M(u._input, 'click', u.open)),
                      void 0 !== u.daysContainer &&
                        (M(u.monthNav, 'click', de),
                        M(u.monthNav, ['keyup', 'increment'], b),
                        M(u.daysContainer, 'click', Z)),
                      void 0 !== u.timeContainer &&
                        void 0 !== u.minuteElement &&
                        void 0 !== u.hourElement &&
                        (M(u.timeContainer, ['increment'], h),
                        M(u.timeContainer, 'blur', h, { capture: !0 }),
                        M(u.timeContainer, 'click', E),
                        M([u.hourElement, u.minuteElement], ['focus', 'click'], function (e) {
                          return (0, a.getEventTarget)(e).select();
                        }),
                        void 0 !== u.secondElement &&
                          M(u.secondElement, 'focus', function () {
                            return u.secondElement && u.secondElement.select();
                          }),
                        void 0 !== u.amPM &&
                          M(u.amPM, 'click', function (e) {
                            h(e);
                          })),
                      u.config.allowInput && M(u._input, 'blur', B);
                  }
                })(),
                (u.selectedDates.length || u.config.noCalendar) &&
                  (u.config.enableTime && D(u.config.noCalendar ? u.latestSelectedDateObj : void 0),
                  se(!1)),
                p();
              var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
              !u.isMobile && t && X(), ie('onReady');
            })(),
            u
          );
        }
        function u(e, t) {
          for (
            var n = Array.prototype.slice.call(e).filter(function (e) {
                return e instanceof HTMLElement;
              }),
              a = [],
              i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i];
            try {
              if (null !== o.getAttribute('data-fp-omit')) continue;
              void 0 !== o._flatpickr && (o._flatpickr.destroy(), (o._flatpickr = void 0)),
                (o._flatpickr = d(o, t || {})),
                a.push(o._flatpickr);
            } catch (r) {
              console.error(r);
            }
          }
          return 1 === a.length ? a[0] : a;
        }
        'undefined' != typeof HTMLElement &&
          'undefined' != typeof HTMLCollection &&
          'undefined' != typeof NodeList &&
          ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
            function (e) {
              return u(this, e);
            }),
          (HTMLElement.prototype.flatpickr = function (e) {
            return u([this], e);
          }));
        var f = function (e, t) {
          return 'string' == typeof e
            ? u(window.document.querySelectorAll(e), t)
            : e instanceof Node
            ? u([e], t)
            : u(e, t);
        };
        (f.defaultConfig = {}),
          (f.l10ns = { en: l({}, t.default), default: l({}, t.default) }),
          (f.localize = function (e) {
            f.l10ns.default = l(l({}, f.l10ns.default), e);
          }),
          (f.setDefaults = function (e) {
            f.defaultConfig = l(l({}, f.defaultConfig), e);
          }),
          (f.parseDate = (0, i.createDateParser)({})),
          (f.formatDate = (0, i.createDateFormatter)({})),
          (f.compareDates = i.compareDates),
          'undefined' != typeof jQuery &&
            void 0 !== jQuery.fn &&
            (jQuery.fn.flatpickr = function (e) {
              return u(this, e);
            }),
          (Date.prototype.fp_incr = function (e) {
            return new Date(
              this.getFullYear(),
              this.getMonth(),
              this.getDate() + ('string' == typeof e ? parseInt(e, 10) : e),
            );
          }),
          'undefined' != typeof window && (window.flatpickr = f);
        var m = f;
        exports.default = m;
      },
      {
        './types/options': 'lJVm',
        './l10n/default': 'SFEe',
        './utils': 'U4Vg',
        './utils/dom': 'UwHZ',
        './utils/dates': 'viQd',
        './utils/formatting': 'KtbI',
        './utils/polyfills': 'pFfd',
      },
    ],
    c0Wa: [function (require, module, exports) {}, {}],
    MeeU: [
      function (require, module, exports) {
        var define;
        var global = arguments[3];
        var t,
          o = arguments[3];
        !(function (o, i) {
          'function' == typeof t && t.amd
            ? t([], function () {
                return i(o);
              })
            : 'object' == typeof module && 'object' == typeof module.exports
            ? (module.exports = i(o))
            : (o.Notiflix = i(o));
        })(void 0 !== o ? o : 'undefined' != typeof window ? window : this, function (t) {
          'use strict';
          if (void 0 === t && void 0 === t.document) return !1;
          var o,
            i = 'Success',
            e = 'Failure',
            n = 'Warning',
            a = 'Info',
            s = {
              wrapID: 'NotiflixNotifyWrap',
              overlayID: 'NotiflixNotifyOverlay',
              width: '280px',
              position: 'right-top',
              distance: '10px',
              opacity: 1,
              borderRadius: '5px',
              rtl: !1,
              timeout: 3e3,
              messageMaxLength: 110,
              backOverlay: !1,
              backOverlayColor: 'rgba(0,0,0,0.5)',
              plainText: !0,
              showOnlyTheLastOne: !1,
              clickToClose: !1,
              pauseOnHover: !0,
              ID: 'NotiflixNotify',
              className: 'notiflix-notify',
              zindex: 4001,
              fontFamily: 'Quicksand',
              fontSize: '13px',
              cssAnimation: !0,
              cssAnimationDuration: 400,
              cssAnimationStyle: 'fade',
              closeButton: !1,
              useIcon: !0,
              useFontAwesome: !1,
              fontAwesomeIconStyle: 'basic',
              fontAwesomeIconSize: '34px',
              success: {
                background: '#32c682',
                textColor: '#fff',
                childClassName: 'notiflix-notify-success',
                notiflixIconColor: 'rgba(0,0,0,0.2)',
                fontAwesomeClassName: 'fas fa-check-circle',
                fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                backOverlayColor: 'rgba(50,198,130,0.2)',
              },
              failure: {
                background: '#ff5549',
                textColor: '#fff',
                childClassName: 'notiflix-notify-failure',
                notiflixIconColor: 'rgba(0,0,0,0.2)',
                fontAwesomeClassName: 'fas fa-times-circle',
                fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                backOverlayColor: 'rgba(255,85,73,0.2)',
              },
              warning: {
                background: '#eebf31',
                textColor: '#fff',
                childClassName: 'notiflix-notify-warning',
                notiflixIconColor: 'rgba(0,0,0,0.2)',
                fontAwesomeClassName: 'fas fa-exclamation-circle',
                fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                backOverlayColor: 'rgba(238,191,49,0.2)',
              },
              info: {
                background: '#26c0d3',
                textColor: '#fff',
                childClassName: 'notiflix-notify-info',
                notiflixIconColor: 'rgba(0,0,0,0.2)',
                fontAwesomeClassName: 'fas fa-info-circle',
                fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                backOverlayColor: 'rgba(38,192,211,0.2)',
              },
            },
            r = function (t) {
              return console.error(
                '%c Notiflix Error ',
                'padding:2px;border-radius:20px;color:#fff;background:#ff5549',
                '\n' +
                  t +
                  '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation',
              );
            },
            l = function (o) {
              return (
                o || (o = 'head'),
                null !== t.document[o] ||
                  (r(
                    '\nNotiflix needs to be appended to the "<' +
                      o +
                      '>" element, but you called it before the "<' +
                      o +
                      '>" element has been created.',
                  ),
                  !1)
              );
            },
            f = function () {
              var t = {},
                o = !1,
                i = 0;
              '[object Boolean]' === Object.prototype.toString.call(arguments[0]) &&
                ((o = arguments[0]), i++);
              for (
                var e = function (i) {
                  for (var e in i)
                    Object.prototype.hasOwnProperty.call(i, e) &&
                      (o && '[object Object]' === Object.prototype.toString.call(i[e])
                        ? (t[e] = f(t[e], i[e]))
                        : (t[e] = i[e]));
                };
                i < arguments.length;
                i++
              )
                e(arguments[i]);
              return t;
            },
            c = function () {
              return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
            },
            m = 0,
            p = function (r, c, p, d) {
              if (!l('body')) return !1;
              o || y.Notify.init({});
              var x = f(!0, o, {});
              if (
                ('object' == typeof p && !Array.isArray(p)) ||
                ('object' == typeof d && !Array.isArray(d))
              ) {
                var u = {};
                'object' == typeof p ? (u = p) : 'object' == typeof d && (u = d), (o = f(!0, o, u));
              }
              var b,
                g,
                w = o[r.toLocaleLowerCase('en')];
              m++,
                'string' != typeof c && (c = 'Notiflix ' + r),
                o.plainText &&
                  ((b = c),
                  ((g = t.document.createElement('div')).innerHTML = b),
                  (c = g.textContent || g.innerText || '')),
                !o.plainText &&
                  c.length > o.messageMaxLength &&
                  ((o = f(!0, o, { closeButton: !0, messageMaxLength: 150 })),
                  (c =
                    'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.')),
                c.length > o.messageMaxLength && (c = c.substring(0, o.messageMaxLength) + '...'),
                'shadow' === o.fontAwesomeIconStyle && (w.fontAwesomeIconColor = w.background),
                o.cssAnimation || (o.cssAnimationDuration = 0);
              var h = t.document.getElementById(s.wrapID) || t.document.createElement('div');
              if (
                ((h.id = s.wrapID),
                (h.style.width = o.width),
                (h.style.zIndex = o.zindex),
                (h.style.opacity = o.opacity),
                'center-center' === o.position
                  ? ((h.style.left = o.distance),
                    (h.style.top = o.distance),
                    (h.style.right = o.distance),
                    (h.style.bottom = o.distance),
                    (h.style.margin = 'auto'),
                    h.classList.add('nx-flex-center-center'),
                    (h.style.maxHeight = 'calc((100vh - ' + o.distance + ') - ' + o.distance + ')'),
                    (h.style.display = 'flex'),
                    (h.style.flexWrap = 'wrap'),
                    (h.style.flexDirection = 'column'),
                    (h.style.justifyContent = 'center'),
                    (h.style.alignItems = 'center'),
                    (h.style.pointerEvents = 'none'))
                  : 'center-top' === o.position
                  ? ((h.style.left = o.distance),
                    (h.style.right = o.distance),
                    (h.style.top = o.distance),
                    (h.style.bottom = 'auto'),
                    (h.style.margin = 'auto'))
                  : 'center-bottom' === o.position
                  ? ((h.style.left = o.distance),
                    (h.style.right = o.distance),
                    (h.style.bottom = o.distance),
                    (h.style.top = 'auto'),
                    (h.style.margin = 'auto'))
                  : 'right-bottom' === o.position
                  ? ((h.style.right = o.distance),
                    (h.style.bottom = o.distance),
                    (h.style.top = 'auto'),
                    (h.style.left = 'auto'))
                  : 'left-top' === o.position
                  ? ((h.style.left = o.distance),
                    (h.style.top = o.distance),
                    (h.style.right = 'auto'),
                    (h.style.bottom = 'auto'))
                  : 'left-bottom' === o.position
                  ? ((h.style.left = o.distance),
                    (h.style.bottom = o.distance),
                    (h.style.top = 'auto'),
                    (h.style.right = 'auto'))
                  : ((h.style.right = o.distance),
                    (h.style.top = o.distance),
                    (h.style.left = 'auto'),
                    (h.style.bottom = 'auto')),
                o.backOverlay)
              ) {
                var v = t.document.getElementById(s.overlayID) || t.document.createElement('div');
                (v.id = s.overlayID),
                  (v.style.width = '100%'),
                  (v.style.height = '100%'),
                  (v.style.position = 'fixed'),
                  (v.style.zIndex = o.zindex - 1),
                  (v.style.left = 0),
                  (v.style.top = 0),
                  (v.style.right = 0),
                  (v.style.bottom = 0),
                  (v.style.background = w.backOverlayColor || o.backOverlayColor),
                  (v.className = o.cssAnimation ? 'nx-with-animation' : ''),
                  (v.style.animationDuration = o.cssAnimation ? o.cssAnimationDuration + 'ms' : ''),
                  t.document.getElementById(s.overlayID) || t.document.body.appendChild(v);
              }
              t.document.getElementById(s.wrapID) || t.document.body.appendChild(h);
              var k = t.document.createElement('div');
              (k.id = o.ID + '-' + m),
                (k.className =
                  o.className +
                  ' ' +
                  w.childClassName +
                  ' ' +
                  (o.cssAnimation ? 'nx-with-animation' : '') +
                  ' ' +
                  (o.useIcon ? 'nx-with-icon' : '') +
                  ' nx-' +
                  o.cssAnimationStyle +
                  ' ' +
                  (o.closeButton && 'function' != typeof p ? 'nx-with-close-button' : '') +
                  ' ' +
                  ('function' == typeof p ? 'nx-with-callback' : '') +
                  ' ' +
                  (o.clickToClose ? 'nx-notify-click-to-close' : '')),
                (k.style.fontSize = o.fontSize),
                (k.style.color = w.textColor),
                (k.style.background = w.background),
                (k.style.borderRadius = o.borderRadius),
                (k.style.pointerEvents = 'all'),
                o.rtl && (k.setAttribute('dir', 'rtl'), k.classList.add('nx-rtl-on')),
                (k.style.fontFamily =
                  '"' +
                  o.fontFamily +
                  '", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'),
                o.cssAnimation && (k.style.animationDuration = o.cssAnimationDuration + 'ms');
              var N = '';
              if (
                (o.closeButton &&
                  'function' != typeof p &&
                  (N =
                    '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' +
                    w.notiflixIconColor +
                    '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),
                o.useIcon)
              )
                if (o.useFontAwesome)
                  k.innerHTML =
                    '<i style="color:' +
                    w.fontAwesomeIconColor +
                    '; font-size:' +
                    o.fontAwesomeIconSize +
                    ';" class="nx-message-icon nx-message-icon-fa ' +
                    w.fontAwesomeClassName +
                    ' ' +
                    ('shadow' === o.fontAwesomeIconStyle
                      ? 'nx-message-icon-fa-shadow'
                      : 'nx-message-icon-fa-basic') +
                    '"></i><span class="nx-message nx-with-icon">' +
                    c +
                    '</span>' +
                    (o.closeButton ? N : '');
                else {
                  var I = '';
                  r === i
                    ? (I =
                        '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                        w.notiflixIconColor +
                        '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>')
                    : r === e
                    ? (I =
                        '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                        w.notiflixIconColor +
                        '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>')
                    : r === n
                    ? (I =
                        '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                        w.notiflixIconColor +
                        '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>')
                    : r === a &&
                      (I =
                        '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                        w.notiflixIconColor +
                        '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),
                    (k.innerHTML =
                      I +
                      '<span class="nx-message nx-with-icon">' +
                      c +
                      '</span>' +
                      (o.closeButton ? N : ''));
                }
              else
                k.innerHTML =
                  '<span class="nx-message">' + c + '</span>' + (o.closeButton ? N : '');
              if ('left-bottom' === o.position || 'right-bottom' === o.position) {
                var C = t.document.getElementById(s.wrapID);
                C.insertBefore(k, C.firstChild);
              } else t.document.getElementById(s.wrapID).appendChild(k);
              var z = t.document.getElementById(k.id);
              if (z) {
                var A,
                  W,
                  B = function () {
                    z.classList.add('nx-remove');
                    var o = t.document.getElementById(s.overlayID);
                    o && h.childElementCount <= 0 && o.classList.add('nx-remove'), clearTimeout(A);
                  },
                  T = function () {
                    if (
                      (z && null !== z.parentNode && z.parentNode.removeChild(z),
                      h.childElementCount <= 0 && null !== h.parentNode)
                    ) {
                      h.parentNode.removeChild(h);
                      var o = t.document.getElementById(s.overlayID);
                      o && null !== o.parentNode && o.parentNode.removeChild(o);
                    }
                    clearTimeout(W);
                  };
                if (o.closeButton && 'function' != typeof p)
                  t.document
                    .getElementById(k.id)
                    .querySelector('span.nx-close-button')
                    .addEventListener('click', function () {
                      B();
                      var t = setTimeout(function () {
                        T(), clearTimeout(t);
                      }, o.cssAnimationDuration);
                    });
                if (
                  (('function' == typeof p || o.clickToClose) &&
                    z.addEventListener('click', function () {
                      'function' == typeof p && p(), B();
                      var t = setTimeout(function () {
                        T(), clearTimeout(t);
                      }, o.cssAnimationDuration);
                    }),
                  !o.closeButton && 'function' != typeof p)
                ) {
                  var D = function () {
                    (A = setTimeout(function () {
                      B();
                    }, o.timeout)),
                      (W = setTimeout(function () {
                        T();
                      }, o.timeout + o.cssAnimationDuration));
                  };
                  D(),
                    o.pauseOnHover &&
                      (z.addEventListener('mouseenter', function () {
                        z.classList.add('nx-paused'), clearTimeout(A), clearTimeout(W);
                      }),
                      z.addEventListener('mouseleave', function () {
                        z.classList.remove('nx-paused'), D();
                      }));
                }
              }
              if (o.showOnlyTheLastOne && m > 0)
                for (
                  var E = t.document.querySelectorAll(
                      '[id^=' + o.ID + '-]:not([id=' + o.ID + '-' + m + '])',
                    ),
                    L = 0;
                  L < E.length;
                  L++
                ) {
                  var O = E[L];
                  null !== O.parentNode && O.parentNode.removeChild(O);
                }
              o = f(!0, o, x);
            },
            y = {
              Notify: {
                init: function (i) {
                  (o = f(!0, s, i)),
                    (function (o, i) {
                      if (!l('head')) return !1;
                      if (null !== o() && !t.document.getElementById(i)) {
                        var e = t.document.createElement('style');
                        (e.id = i), (e.innerHTML = o()), t.document.head.appendChild(e);
                      }
                    })(c, 'NotiflixNotifyInternalCSS');
                },
                merge: function (t) {
                  if (!o)
                    return (
                      r('You have to initialize the Notify module before call Merge function.'), !1
                    );
                  o = f(!0, o, t);
                },
                success: function (t, o, e) {
                  p(i, t, o, e);
                },
                failure: function (t, o, i) {
                  p(e, t, o, i);
                },
                warning: function (t, o, i) {
                  p(n, t, o, i);
                },
                info: function (t, o, i) {
                  p(a, t, o, i);
                },
              },
            };
          return 'object' == typeof t.Notiflix
            ? f(!0, t.Notiflix, { Notify: y.Notify })
            : { Notify: y.Notify };
        });
      },
      {},
    ],
    d2uN: [
      function (require, module, exports) {
        'use strict';
        var t = n(require('flatpickr'));
        require('flatpickr/dist/flatpickr.min.css');
        var e = require('notiflix/build/notiflix-notify-aio');
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        const o = {
          input: document.querySelector('#datetime-picker'),
          btnStart: document.querySelector('[data-start]'),
          days: document.querySelector('[data-days]'),
          hours: document.querySelector('[data-hours]'),
          minutes: document.querySelector('[data-minutes]'),
          seconds: document.querySelector('[data-seconds]'),
          clockface: document.querySelector('.clockface'),
        };
        let r = null;
        const a = {
            enableTime: !0,
            time_24hr: !0,
            defaultDate: new Date(),
            minuteIncrement: 1,
            onClose(t) {
              this.selectedDates[0].getTime() - Date.now() > 0
                ? (o.btnStartStop.disabled = !1)
                : (e.Notify.failure('Please choose a date in the future'),
                  (o.btnStart.disabled = !0));
            },
          },
          u = (0, t.default)(o.input, a);
        function c(t) {
          return String(t).padStart(2, '0');
        }
        function i(t) {
          return {
            days: c(Math.floor(t / 864e5)),
            hours: c(Math.floor((t % 864e5) / 36e5)),
            minutes: c(Math.floor(((t % 864e5) % 36e5) / 6e4)),
            seconds: c(Math.floor((((t % 864e5) % 36e5) % 6e4) / 1e3)),
          };
        }
        function s() {
          if (r) return;
          const t = u.selectedDates[0];
          (r = setInterval(() => {
            if (((o.btnStart.textContent = 'Stop'), t.getTime() <= Date.now()))
              return void clearInterval(r);
            f(i(t - Date.now()));
          }, 1e3)),
            (o.btnStart.disabled = !0);
        }
        function l() {
          clearInterval(r), (o.btnStart.textContent = 'Start'), (r = null);
        }
        function d() {
          r ? l() : s();
        }
        function f({ days: t, hours: e, minutes: n, seconds: r }) {
          (o.clockface.textContent = `${t}:${e}:${n}:${r}`),
            (o.days.textContent = t),
            (o.hours.textContent = e),
            (o.minutes.textContent = n),
            (o.seconds.textContent = r);
        }
        o.btnStart.addEventListener('click', d);
      },
      {
        flatpickr: 'BKNP',
        'flatpickr/dist/flatpickr.min.css': 'c0Wa',
        'notiflix/build/notiflix-notify-aio': 'MeeU',
      },
    ],
  },
  {},
  ['d2uN'],
  null,
);
//# sourceMappingURL=/goit-js-hw-09/02-timer.d83d208f.js.map
