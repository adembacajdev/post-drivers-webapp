(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[29],{220:function(e,t,r){"use strict";r.d(t,"d",(function(){return p})),r.d(t,"p",(function(){return m})),r.d(t,"i",(function(){return f})),r.d(t,"f",(function(){return y})),r.d(t,"e",(function(){return b})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return g})),r.d(t,"g",(function(){return v})),r.d(t,"j",(function(){return E})),r.d(t,"k",(function(){return x})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return I})),r.d(t,"n",(function(){return j})),r.d(t,"o",(function(){return k})),r.d(t,"h",(function(){return O})),r.d(t,"q",(function(){return C})),r.d(t,"a",(function(){return S}));var a=r(221),n=r(15),o=r.n(n),c=r(24),s=r(1),l=r(10),i=r.n(l),u=(r(69),r(25)),d=r.n(u),p=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders");case 3:r=e.sent,(a=r.data).success?t({type:s.h,data:a.data}):403===a.code?(t({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:s.cb,data:a.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)&&(t({type:s.K}),t({type:s.I,data:!1}),t({type:s.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t){return function(){var r=Object(c.a)(o.a.mark((function r(a){var n,c,l,u,p,m,f;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n="","status"===e&&(n="/orders/status?status=".concat(t)),"city"===e&&(n="/orders/city?city=".concat(t)),"serial_number"===e&&(n="/orders/serial/number?serial_number=".concat(t)),"customer_name"===e&&(n="/orders/customer/name?customer_name=".concat(t)),"date"===e&&(c=d()(t).format("DD"),l=d()(t).format("MM"),u=d()(t).format("YYYY"),n="/orders/date?day=".concat(parseInt(c),"&month=").concat(parseInt(l),"&year=").concat(parseInt(u))),r.next=9,i.a.post(n);case 9:p=r.sent,(m=p.data).success&&null!==m.data?a({type:s.W,data:m.data}):null===m.data?a({type:s.cb,data:"This ID does not exist"}):a({type:s.cb,data:m.message}),r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),401===(null===r.t0||void 0===r.t0||null===(f=r.t0.response)||void 0===f?void 0:f.status)&&(a({type:s.K}),a({type:s.I,data:!1}),a({type:s.a}),localStorage.clear()),r.abrupt("return",Promise.reject(r.t0));case 18:case"end":return r.stop()}}),r,null,[[0,14]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e,t){return function(){var r=Object(c.a)(o.a.mark((function r(a){var n,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("orders/paginate/".concat(e,"?page=").concat(t));case 3:200===(n=r.sent).status?a({type:s.i,data:n.data}):a({type:s.cb,data:n.message}),r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),401===(null===r.t0||void 0===r.t0||null===(c=r.t0.response)||void 0===c?void 0:c.status)&&(a({type:s.K}),a({type:s.I,data:!1}),a({type:s.a}),localStorage.clear()),r.abrupt("return",Promise.reject(r.t0));case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/orders/".concat(e));case 3:a=t.sent,(n=a.data).success?r({type:s.s,data:n.data}):403===n.code?(r({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:s.cb,data:n.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders/status/count");case 3:r=e.sent,(a=r.data).success?t({type:s.M,data:a.data}):403===a.code?(t({type:s.I,data:!1}),localStorage.removeItem("token"),localStorage.clear(),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:s.cb,data:a.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)&&(t({type:s.K}),t({type:s.I,data:!1}),t({type:s.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders",e);case 3:a=t.sent,(n=a.data).success?(r({type:s.eb,data:"Porosia u dergua me sukses!"}),r({type:s.N,data:n}),setTimeout((function(){window.location.reload()}),2e3)):403===n.code?(r({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:s.cb,data:n.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var r=Object(c.a)(o.a.mark((function r(a){var n,c,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.post("/orders/add",e);case 3:n=r.sent,(c=n.data).success?(a({type:s.eb,data:"Porosia u dergua me sukses!"}),a({type:s.O,data:c}),setTimeout((function(){t.push("/products")}),2e3)):403===c.code?(a({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):a({type:s.cb,data:c.error}),r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),401===(null===r.t0||void 0===r.t0||null===(l=r.t0.response)||void 0===l?void 0:l.status)&&(a({type:s.K}),a({type:s.I,data:!1}),a({type:s.a}),localStorage.clear()),r.abrupt("return",Promise.reject(r.t0));case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders/status",{status:e});case 3:a=t.sent,(n=a.data).success?r({type:s.u,data:n.data}):403===n.code?(r({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:s.cb,data:n.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},E=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/top/cities");case 3:r=e.sent,(a=r.data).success?t({type:s.F,data:a.data}):403===a.code?(t({type:s.I,data:!1}),localStorage.removeItem("token"),localStorage.clear(),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:s.cb,data:a.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)&&(t({type:s.K}),t({type:s.I,data:!1}),t({type:s.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/top/products");case 3:r=e.sent,(a=r.data).success?t({type:s.G,data:a.data}):403===a.code?(t({type:s.I,data:!1}),localStorage.removeItem("token"),localStorage.clear(),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:s.cb,data:a.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)&&(t({type:s.K}),t({type:s.I,data:!1}),t({type:s.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.delete("/orders/".concat(e));case 3:a=t.sent,(n=a.data).success?window.location.reload():403===n.code?(r({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:s.cb,data:n.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},I=function(e,t){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="",e.filter((function(e,t,r){return r.findIndex((function(t){return t===e}))===t})).forEach((function(e){a=""===a?"order_ids[]=".concat(e):"".concat(a,"&order_ids[]=").concat(e)})),t.next=6,i.a.delete("/orders?".concat(a));case 6:n=t.sent,(c=n.data).success?window.location.reload():403===c.code?(r({type:s.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:s.cb,data:c.message}),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders/print?order_id=".concat(e));case 3:a=t.sent,(n=a.data).success&&r({type:s.R,data:[n.data]}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.filter((function(e,t,r){return r.findIndex((function(t){return t===e}))===t})),t.prev=1,n="",a.forEach((function(e){n=""===n?"order_ids[]=".concat(e):"".concat(n,"&order_ids[]=").concat(e)})),t.next=6,i.a.post("/orders/print/selected?".concat(n));case 6:c=t.sent,(l=c.data).success&&r({type:s.S,data:l.data}),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(1),401===(null===t.t0||void 0===t.t0||null===(u=t.t0.response)||void 0===u?void 0:u.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders/map");case 3:r=e.sent,(a=r.data).success?t({type:s.v,data:a.data}):t({type:s.cb,data:a.error}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)&&(t({type:s.K}),t({type:s.I,data:!1}),t({type:s.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(r){var a,n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders/verify?phone=".concat(e));case 3:a=t.sent,(n=a.data).success?r({type:s.ab,data:n.data}):r({type:s.cb,data:n.error}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.status)&&(r({type:s.K}),r({type:s.I,data:!1}),r({type:s.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e,t){return function(){var r=Object(c.a)(o.a.mark((function r(n){var c,l,u,d,p;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c=e.openable,l=JSON.parse(c),r.next=5,i.a.post("/orders/add/directly",Object(a.a)(Object(a.a)({},e),{},{openable:l}));case 5:u=r.sent,d=u.data,console.log("data",d),d.success?(n({type:s.eb,data:"Porosia u dergua me sukses!"}),t.goBack()):n({type:s.cb,data:d.error}),r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),401===(null===r.t0||void 0===r.t0||null===(p=r.t0.response)||void 0===p?void 0:p.status)&&(n({type:s.K}),n({type:s.I,data:!1}),n({type:s.a}),localStorage.clear()),r.abrupt("return",Promise.reject(r.t0));case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}},616:function(e,t){},618:function(e,t){},658:function(e,t){},659:function(e,t){},811:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(327),c=function(e){var t=e.serial_number,r=e.seller,a=e.buyer,c=e.product,l=e.openable;return n.a.createElement(o.g,{style:s.container},n.a.createElement(o.g,{style:s.top},n.a.createElement(o.g,{style:s.topLeft},n.a.createElement(o.b,{style:{width:110,height:30},src:"/logo.png"})),n.a.createElement(o.g,{style:s.topMiddle},n.a.createElement(o.f,{style:s.title})),n.a.createElement(o.g,{style:s.topRight},n.a.createElement(o.f,{style:s.subtitle},"Numri i porosise"),n.a.createElement(o.f,{style:s.order},t))),n.a.createElement(o.g,{style:s.middle},n.a.createElement(o.g,{style:s.middleLeft},n.a.createElement(o.g,{style:s.row},n.a.createElement(o.f,{style:s.title},"Shit\xebsi")),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Emri")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.name&&r.name))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Telefoni")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.phone&&r.phone))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Qyteti")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.city&&r.city))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Adresa")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.address&&r.address)))),n.a.createElement(o.g,{style:s.middleRight},n.a.createElement(o.g,{style:s.row},n.a.createElement(o.f,{style:s.title},"Bler\xebsi")),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Emri")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.name&&a.name))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Telefoni")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.phone&&a.phone))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Qyteti")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.city&&a.city," / ",null===a||void 0===a?void 0:a.building))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Adresa")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.address&&a.address))))),n.a.createElement(o.g,{style:s.bottom},n.a.createElement(o.g,{style:s.bottomLeft},n.a.createElement(o.g,{style:[s.bottomLeftItem,{borderBottomWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.title},"Produkti")),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.title},"Pershkrimi i produktit"))),n.a.createElement(o.g,{style:s.bottomLeftItem},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.subtitle},c.name&&c.name)),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.subtitle},c.description&&c.description)))),n.a.createElement(o.g,{style:s.bottomRight},n.a.createElement(o.g,{style:[s.bottomRightItem,{borderBottomWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.title},"Informata shtese")),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.title},"\xc7mimi"))),n.a.createElement(o.g,{style:s.bottomRightItem},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.subtitle},c.additional_info&&c.additional_info)),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.subtitle},c.price&&c.price,"\u20ac"))))),n.a.createElement(o.g,{style:s.veryBottom},n.a.createElement(o.g,{style:s.veryBottomLeft},n.a.createElement(o.f,{style:s.title},"A mund t\xeb hapet pako?")),n.a.createElement(o.g,{style:s.veryBottomRight},n.a.createElement(o.f,{style:s.subtitle},1===l?"Po":"Jo"))))},s=o.e.create({page:{flexDirection:"column",backgroundColor:"#FFFFFF",width:"100%",height:"100%",padding:15},container:{width:"100%",borderWidth:1,borderColor:"#ebebeb"},top:{width:"100%",height:40,flexDirection:"row",borderBottomWidth:1,borderColor:"#ebebeb"},topLeft:{flex:1,justifyContent:"center",alignItems:"flex-start",paddingLeft:10},topMiddle:{flex:.5,justifyContent:"center",alignItems:"flex-start",paddingLeft:10,flexDirection:"column"},topRight:{flex:1,flexDirection:"column",alignItems:"flex-end",justifyContent:"center",paddingRight:10},middle:{width:"100%",height:125,flexDirection:"row"},middleLeft:{flex:.5,width:"100%",height:"100%",borderRightWidth:1,borderLeftWidth:1,borderColor:"#ebebeb"},middleRight:{flex:.5,width:"100%",height:"100%",borderRightWidth:1,borderColor:"#ebebeb"},row:{width:"100%",flexDirection:"row",height:"100%",borderBottomWidth:1,borderColor:"#ebebeb",justifyContent:"center",alignItems:"center"},col:{flex:.5,width:"100%",height:"100%",justifyContent:"center",paddingLeft:10},veryBottom:{width:"100%",height:25,borderWidth:1,borderColor:"#ebebeb",flexDirection:"row"},veryBottomLeft:{flex:.5,flexDirection:"column",borderRightWidth:1,borderColor:"#ebebeb",justifyContent:"center",paddingLeft:10},veryBottomRight:{flex:.5,flexDirection:"column",justifyContent:"center",paddingLeft:10},bottom:{width:"100%",height:50,borderWidth:1,borderColor:"#ebebeb",marginTop:10,flexDirection:"row"},bottomLeft:{flex:.5,flexDirection:"column",borderRightWidth:1,borderColor:"#ebebeb"},bottomRight:{flex:.5,flexDirection:"column"},bottomLeftItem:{width:"100%",height:25,flexDirection:"row"},bottomRightItem:{width:"100%",height:25,flexDirection:"row"},bottomLeftItemLeft:{flex:.5,width:"100%",height:"100%",borderRightWidth:1,borderColor:"#ebebeb",justifyContent:"center",paddingLeft:10},bottomLeftItemRight:{flex:.5,width:"100%",height:"100%",justifyContent:"center",paddingLeft:10},title:{fontSize:12},subtitle:{fontSize:10},order:{fontSize:20}}),l=function(e){var t=e.items;return n.a.createElement(o.a,null,n.a.createElement(o.d,{size:"A4",style:i.page},t.map((function(e){return n.a.createElement(o.g,{style:i.item},n.a.createElement(c,Object.assign({key:e.id},e)),n.a.createElement(o.g,{style:i.line}))}))))},i=o.e.create({page:{flexDirection:"column",backgroundColor:"#FFFFFF",width:"100%",height:"100%",padding:15},item:{width:"100%"},line:{width:"100%",height:3,backgroundColor:"grey",marginVertical:8}}),u=r(8),d=r(203),p=r(220),m=r(11),f={printOneOrder:p.n,printSelectedOrders:p.o};t.default=Object(u.b)((function(e){return{printOrder:e.printOrder}}),f)(Object(d.g)((function(e){var t;return Object(a.useEffect)((function(){var t=e.match.params.type;if("one"===t){var r=m.a.getOnePrintOrder();r&&e.printOneOrder(r)}else if("multiple"===t){var a=m.a.getMultiplePrintOrder();if(a){var n=JSON.parse(a);e.printSelectedOrders(n)}}return function(){localStorage.removeItem("printOne"),localStorage.removeItem("printMultiple")}}),[]),Object(a.useEffect)((function(){console.log("printOrder",e.printOrder)}),[e.printOrder]),n.a.createElement("div",{style:{width:"100%",height:"100%"}},n.a.createElement(o.c,{style:{width:"100%",height:"100vh"}},n.a.createElement(l,{items:null!==(t=e.printOrder)&&void 0!==t?t:[]})))})))}}]);
//# sourceMappingURL=29.7954c4b8.chunk.js.map