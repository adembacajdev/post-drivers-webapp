(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[25],{230:function(e,t,r){"use strict";r.d(t,"c",(function(){return d})),r.d(t,"n",(function(){return m})),r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"d",(function(){return b})),r.d(t,"k",(function(){return h})),r.d(t,"f",(function(){return y})),r.d(t,"i",(function(){return g})),r.d(t,"j",(function(){return v})),r.d(t,"a",(function(){return E})),r.d(t,"b",(function(){return w})),r.d(t,"l",(function(){return x})),r.d(t,"m",(function(){return k})),r.d(t,"g",(function(){return j}));var a=r(15),n=r.n(a),o=r(24),c=r(2),s=r(10),i=r.n(s),l=(r(69),r(25)),u=r.n(l),d=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders");case 3:r=e.sent,(a=r.data).success?t({type:c.h,data:a.data}):403===a.code?(t({type:c.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:c.ab,data:a.message}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o,s,l,d,m,p;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o="","status"===e&&(o="/orders/status?status=".concat(t)),"city"===e&&(o="/orders/city?city=".concat(t)),"serial_number"===e&&(o="/orders/serial/number?serial_number=".concat(t)),"customer_name"===e&&(o="/orders/customer/name?customer_name=".concat(t)),"date"===e&&(s=u()(t).format("DD"),l=u()(t).format("MM"),d=u()(t).format("YYYY"),o="/orders/date?day=".concat(parseInt(s),"&month=").concat(parseInt(l),"&year=").concat(parseInt(d))),r.next=9,i.a.post(o);case 9:m=r.sent,(p=m.data).success&&null!==p.data?a({type:c.V,data:p.data}):null===p.data?a({type:c.ab,data:"This ID does not exist"}):a({type:c.ab,data:p.message}),r.next=17;break;case 14:return r.prev=14,r.t0=r.catch(0),r.abrupt("return",Promise.reject(r.t0));case 17:case"end":return r.stop()}}),r,null,[[0,14]])})));return function(e){return r.apply(this,arguments)}}()},p=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.a.get("orders/paginate/".concat(e,"?page=").concat(t));case 3:200===(o=r.sent).status?a({type:c.i,data:o.data}):a({type:c.ab,data:o.message}),r.next=10;break;case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",Promise.reject(r.t0));case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/orders/".concat(e));case 3:a=t.sent,(o=a.data).success?r({type:c.s,data:o.data}):403===o.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:c.ab,data:o.message}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},b=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders/status/count");case 3:r=e.sent,(a=r.data).success?t({type:c.M,data:a.data}):403===a.code?(t({type:c.I,data:!1}),localStorage.removeItem("token"),localStorage.clear(),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:c.ab,data:a.message}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders",e);case 3:a=t.sent,(o=a.data).success?(r({type:c.cb,data:"Porosia u dergua me sukses!"}),r({type:c.N,data:o})):403===o.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:c.ab,data:o.error}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders/status",{status:e});case 3:a=t.sent,(o=a.data).success?r({type:c.u,data:o.data}):403===o.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:c.ab,data:o.message}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/top/cities");case 3:r=e.sent,(a=r.data).success?t({type:c.F,data:a.data}):403===a.code?(t({type:c.I,data:!1}),localStorage.removeItem("token"),localStorage.clear(),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:c.ab,data:a.message}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/top/products");case 3:r=e.sent,(a=r.data).success?t({type:c.G,data:a.data}):403===a.code?(t({type:c.I,data:!1}),localStorage.removeItem("token"),localStorage.clear(),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:c.ab,data:a.message}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.delete("/orders/".concat(e));case 3:a=t.sent,(o=a.data).success?window.location.reload():403===o.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:c.ab,data:o.message}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="",e.forEach((function(e){a=""===a?"order_ids[]=".concat(e):"".concat(a,"&order_ids[]=").concat(e)})),t.next=5,i.a.delete("/orders?".concat(a));case 5:o=t.sent,(s=o.data).success?window.location.reload():403===s.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):r({type:c.ab,data:s.message}),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/orders/print?order_id=".concat(e));case 3:a=t.sent,(o=a.data).success&&r({type:c.Q,data:[o.data]}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="",e.forEach((function(e){a=""===a?"order_ids[]=".concat(e):"".concat(a,"&order_ids[]=").concat(e)})),t.prev=2,a="",e.forEach((function(e){a=""===a?"order_ids[]=".concat(e):"".concat(a,"&order_ids[]=").concat(e)})),t.next=7,i.a.post("/orders/print/selected?".concat(a));case 7:o=t.sent,(s=o.data).success&&r({type:c.R,data:s.data}),t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(2),t.abrupt("return",Promise.reject(t.t0));case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()},j=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/orders/map");case 3:r=e.sent,(a=r.data).success?t({type:c.v,data:a.data}):t({type:c.ab,data:a.error}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},605:function(e,t){},607:function(e,t){},647:function(e,t){},648:function(e,t){},796:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(324),c=function(e){var t=e.serial_number,r=e.seller,a=e.buyer,c=e.product;return n.a.createElement(o.g,{style:s.container},n.a.createElement(o.g,{style:s.top},n.a.createElement(o.g,{style:s.topLeft},n.a.createElement(o.b,{style:{width:110,height:30},src:"/logo.png"})),n.a.createElement(o.g,{style:s.topRight},n.a.createElement(o.f,{style:s.subtitle},"Numri i porosise"),n.a.createElement(o.f,{style:s.order},t))),n.a.createElement(o.g,{style:s.middle},n.a.createElement(o.g,{style:s.middleLeft},n.a.createElement(o.g,{style:s.row},n.a.createElement(o.f,{style:s.title},"Shit\xebsi")),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Emri")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.name&&r.name))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Telefoni")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.phone&&r.phone))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Qyteti")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.city&&r.city))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Adresa")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},r.address&&r.address)))),n.a.createElement(o.g,{style:s.middleRight},n.a.createElement(o.g,{style:s.row},n.a.createElement(o.f,{style:s.title},"Bler\xebsi")),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Emri")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.name&&a.name))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Telefoni")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.phone&&a.phone))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Qyteti")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.city&&a.city))),n.a.createElement(o.g,{style:s.row},n.a.createElement(o.g,{style:[s.col,{borderRightWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.f,{style:s.title},"Adresa")),n.a.createElement(o.g,{style:s.col},n.a.createElement(o.f,{style:s.subtitle},a.address&&a.address))))),n.a.createElement(o.g,{style:s.bottom},n.a.createElement(o.g,{style:s.bottomLeft},n.a.createElement(o.g,{style:[s.bottomLeftItem,{borderBottomWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.title},"Produkti")),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.title},"Pershkrimi i produktit"))),n.a.createElement(o.g,{style:s.bottomLeftItem},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.subtitle},c.name&&c.name)),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.subtitle},c.description&&c.description)))),n.a.createElement(o.g,{style:s.bottomRight},n.a.createElement(o.g,{style:[s.bottomRightItem,{borderBottomWidth:1,borderColor:"#ebebeb"}]},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.title},"Informata shtese")),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.title},"\xc7mimi"))),n.a.createElement(o.g,{style:s.bottomRightItem},n.a.createElement(o.g,{style:s.bottomLeftItemLeft},n.a.createElement(o.f,{style:s.subtitle},c.additional_info&&c.additional_info)),n.a.createElement(o.g,{style:s.bottomLeftItemRight},n.a.createElement(o.f,{style:s.subtitle},c.price&&c.price,"\u20ac"))))))},s=o.e.create({page:{flexDirection:"column",backgroundColor:"#FFFFFF",width:"100%",height:"100%",padding:15},container:{width:"100%",borderWidth:1,borderColor:"#ebebeb"},top:{width:"100%",height:40,flexDirection:"row",borderBottomWidth:1,borderColor:"#ebebeb"},topLeft:{flex:.5,justifyContent:"center",paddingLeft:10},topRight:{flex:.5,flexDirection:"column",alignItems:"flex-end",justifyContent:"center",paddingRight:10},middle:{width:"100%",height:125,flexDirection:"row"},middleLeft:{flex:.5,width:"100%",height:"100%",borderRightWidth:1,borderLeftWidth:1,borderColor:"#ebebeb"},middleRight:{flex:.5,width:"100%",height:"100%",borderRightWidth:1,borderColor:"#ebebeb"},row:{width:"100%",flexDirection:"row",height:"100%",borderBottomWidth:1,borderColor:"#ebebeb",justifyContent:"center",alignItems:"center"},col:{flex:.5,width:"100%",height:"100%",justifyContent:"center",paddingLeft:10},bottom:{width:"100%",height:50,borderWidth:1,borderColor:"#ebebeb",marginTop:20,flexDirection:"row"},bottomLeft:{flex:.5,flexDirection:"column",borderRightWidth:1,borderColor:"#ebebeb"},bottomRight:{flex:.5,flexDirection:"column"},bottomLeftItem:{width:"100%",height:25,flexDirection:"row"},bottomRightItem:{width:"100%",height:25,flexDirection:"row"},bottomLeftItemLeft:{flex:.5,width:"100%",height:"100%",borderRightWidth:1,borderColor:"#ebebeb",justifyContent:"center",paddingLeft:10},bottomLeftItemRight:{flex:.5,width:"100%",height:"100%",justifyContent:"center",paddingLeft:10},title:{fontSize:12},subtitle:{fontSize:10},order:{fontSize:20}}),i=function(e){var t=e.items;return n.a.createElement(o.a,null,n.a.createElement(o.d,{size:"A4",style:l.page},t.map((function(e){return n.a.createElement(o.g,{style:l.item},n.a.createElement(c,Object.assign({key:e.id},e)),n.a.createElement(o.g,{style:l.line}))}))))},l=o.e.create({page:{flexDirection:"column",backgroundColor:"#FFFFFF",width:"100%",height:"100%",padding:15},item:{width:"100%"},line:{width:"100%",height:3,backgroundColor:"grey",marginVertical:16}}),u=r(6),d=r(203),m=r(230),p=r(11),f={printOneOrder:m.l,printSelectedOrders:m.m};t.default=Object(u.b)((function(e){return{printOrder:e.printOrder}}),f)(Object(d.g)((function(e){var t;return Object(a.useEffect)((function(){var t=e.match.params.type;if("one"===t){var r=p.a.getOnePrintOrder();r&&e.printOneOrder(r)}else if("multiple"===t){var a=p.a.getMultiplePrintOrder();if(a){var n=JSON.parse(a);e.printSelectedOrders(n)}}return function(){localStorage.removeItem("printOne"),localStorage.removeItem("printMultiple")}}),[]),n.a.createElement("div",{style:{width:"100%",height:"100%"}},n.a.createElement(o.c,{style:{width:"100%",height:"100vh"}},n.a.createElement(i,{items:null!==(t=e.printOrder)&&void 0!==t?t:[]})))})))}}]);
//# sourceMappingURL=25.48c3c392.chunk.js.map