(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[22],{214:function(t,e,a){"use strict";var s=a(0),r=a.n(s);a(215);e.a=function(t){return r.a.createElement("div",{className:"strike-wrapper"},t.children)}},215:function(t,e,a){},505:function(t,e,a){},798:function(t,e,a){"use strict";a.r(e);var s=a(0),r=a.n(s),i=a(6),n=a(203),c=a(214),l=a(5),o=(a(505),a(15)),d=a.n(o),u=a(24),m=a(2),h=a(10),p=a.n(h),v=a(506),E={getDailyEarnings:function(t){return function(){var e=Object(u.a)(d.a.mark((function e(a){var s,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="",s=t?"/statistics/earnings?months=".concat(t):"/statistics/earnings",e.next=5,p.a.get(s);case 5:r=e.sent,(i=r.data).success?a({type:m.p,data:i.data}):403===i.code?(a({type:m.I,data:!1}),localStorage.removeItem("token"),p.a.defaults.headers.common["Content-Type"]="applicaton/json",p.a.defaults.headers.common.Authorization=""):a({type:m.ab,data:i.error}),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},getDailyOrders:function(t){return function(){var e=Object(u.a)(d.a.mark((function e(a){var s,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="",s=t?"/statistics/orders?months=".concat(t):"/statistics/orders",e.next=5,p.a.get(s);case 5:r=e.sent,(i=r.data).success?a({type:m.q,data:i.data}):403===i.code?(a({type:m.I,data:!1}),localStorage.removeItem("token"),p.a.defaults.headers.common["Content-Type"]="applicaton/json",p.a.defaults.headers.common.Authorization=""):a({type:m.ab,data:i.error}),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},getDailyCities:function(){return function(){var t=Object(u.a)(d.a.mark((function t(e){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/statistics/cities");case 3:a=t.sent,(s=a.data).success?e({type:m.n,data:s.data}):403===s.code?(e({type:m.I,data:!1}),localStorage.removeItem("token"),p.a.defaults.headers.common["Content-Type"]="applicaton/json",p.a.defaults.headers.common.Authorization=""):e({type:m.ab,data:s.error}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}};e.default=Object(i.b)((function(t){return{dailyEarnings:t.dailyEarnings,dailyOrders:t.dailyOrders,dailyCities:t.dailyCities}}),E)(Object(n.g)((function(t){Object(s.useEffect)((function(){t.getDailyEarnings(),t.getDailyOrders(),t.getDailyCities()}),[]);return r.a.createElement(c.a,null,r.a.createElement("div",{className:"strike-statistics"},r.a.createElement("div",{className:"strike-statistics__header"},l.a.t("statistics.title")),r.a.createElement("div",{className:"strike-statistics__chart"},r.a.createElement("div",{className:"strike-statistics__chart-header"},r.a.createElement("div",{className:"strike-statistics__chart-header-left"},r.a.createElement("div",{className:"strike-statistics__chart-header-left-text"},l.a.t("statistics.earning"))),r.a.createElement("div",{className:"strike-statistics__chart-header-right"},r.a.createElement("select",{onChange:function(e){"0"!==e.target.value?t.getDailyEarnings(e.target.value):t.getDailyEarnings()}},r.a.createElement("option",{value:0},l.a.t("statistics.selectPlaceholder")),r.a.createElement("option",{value:1},l.a.t("statistics.oneMonth")),r.a.createElement("option",{value:3},l.a.t("statistics.threeMonths")),r.a.createElement("option",{value:6},l.a.t("statistics.sixMonths")),r.a.createElement("option",{value:12},l.a.t("statistics.oneYear"))))),r.a.createElement("div",{className:"strike-statistics__chart-body"},r.a.createElement(v.b,{height:90,data:t.dailyEarnings&&t.dailyEarnings.data,options:t.dailyEarnings&&t.dailyEarnings.options}))),r.a.createElement("div",{className:"strike-statistics__chart"},r.a.createElement("div",{className:"strike-statistics__chart-header"},r.a.createElement("div",{className:"strike-statistics__chart-header-left"},r.a.createElement("div",{className:"strike-statistics__chart-header-left-text"},l.a.t("statistics.orders"))),r.a.createElement("div",{className:"strike-statistics__chart-header-right"},r.a.createElement("select",{onChange:function(e){"0"!==e.target.value?t.getDailyOrders(e.target.value):t.getDailyOrders()}},r.a.createElement("option",{value:0},l.a.t("statistics.selectPlaceholder")),r.a.createElement("option",{value:1},l.a.t("statistics.oneMonth")),r.a.createElement("option",{value:3},l.a.t("statistics.threeMonths")),r.a.createElement("option",{value:6},l.a.t("statistics.sixMonths")),r.a.createElement("option",{value:12},l.a.t("statistics.oneYear"))))),r.a.createElement("div",{className:"strike-statistics__chart-body"},r.a.createElement(v.b,{height:90,data:t.dailyOrders&&t.dailyOrders.data,options:t.dailyOrders&&t.dailyOrders.options}))),r.a.createElement("div",{className:"strike-statistics__chart"},r.a.createElement("div",{className:"strike-statistics__chart-header"},r.a.createElement("div",{className:"strike-statistics__chart-header-left"},r.a.createElement("div",{className:"strike-statistics__chart-header-left-text"},l.a.t("statistics.cities"))),r.a.createElement("div",{className:"strike-statistics__chart-header-right"})),r.a.createElement("div",{className:"strike-statistics__chart-body"},r.a.createElement(v.a,{height:90,data:t.dailyCities&&t.dailyCities.data,options:t.dailyCities&&t.dailyCities.options})))))})))}}]);
//# sourceMappingURL=22.748a196f.chunk.js.map