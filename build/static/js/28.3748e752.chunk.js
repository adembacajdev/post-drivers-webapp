(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[28],{1159:function(e,t,a){"use strict";a.r(t);var r=a(16),s=a(0),n=a.n(s),c=a(8),l=a(204),i=a(216),m=a(32),o=a(5),f=(a(293),a(15)),u=a.n(f),d=a(24),p=a(1),_=a(10),b=a.n(_),v=a(25),k=a.n(v),h=a(225),E=function(e){var t=e.amount,a=e.updated_at,r=k()(a).format("DD/MM/YYYY"),s=k()(a).format("HH:MM:ss");return n.a.createElement("div",{className:"strike-transfers__table-item"},n.a.createElement("div",{className:"strike-transfers__table-item-container"},n.a.createElement("div",{className:"strike-transfers__table-item-container-text"},t,"\u20ac")),n.a.createElement("div",{className:"strike-transfers__table-item-container"},n.a.createElement("div",{className:"strike-transfers__table-item-container-text"},r)),n.a.createElement("div",{className:"strike-transfers__table-item-container"},n.a.createElement("div",{className:"strike-transfers__table-item-container-text"},s)))},g=function(e){var t=e.items;return n.a.createElement("div",{className:"strike-transfers__table"},n.a.createElement("div",{className:"strike-transfers__table-header"},n.a.createElement("div",{className:"strike-transfers__table-header-item"},n.a.createElement("div",{className:"strike-transfers__table-header-item-text"},o.a.t("transfers.amount"))),n.a.createElement("div",{className:"strike-transfers__table-header-item"},n.a.createElement("div",{className:"strike-transfers__table-header-item-text"},o.a.t("transfers.date"))),n.a.createElement("div",{className:"strike-transfers__table-header-item"},n.a.createElement("div",{className:"strike-transfers__table-header-item-text"},o.a.t("transfers.time")))),t&&t.map((function(e,t){return n.a.createElement(E,Object.assign({key:t},e))})))},N={getBalanceDetails:function(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/balance");case 3:a=e.sent,(r=a.data).success?t({type:p.m,data:r.data}):403===r.code?(t({type:p.I,data:!1}),localStorage.removeItem("token"),b.a.defaults.headers.common["Content-Type"]="applicaton/json",b.a.defaults.headers.common.Authorization=""):t({type:p.cb,data:r.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===e.t0.response.status&&(t({type:p.K}),t({type:p.I,data:!1}),t({type:p.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},getAllTransfers:function(e,t){return function(){var a=Object(d.a)(u.a.mark((function a(r){var s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.get("transfers/paginate/".concat(e,"?page=").concat(t));case 3:200===(s=a.sent).status?r({type:p.k,data:s.data}):r({type:p.cb,data:s.message}),a.next=11;break;case 7:return a.prev=7,a.t0=a.catch(0),401===a.t0.response.status&&(r({type:p.K}),r({type:p.I,data:!1}),r({type:p.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},searchTransfers:function(e,t){return function(){var a=Object(d.a)(u.a.mark((function a(r){var s,n,c,l,i,m;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s="","amount"===e&&(s="/transfers/search/amount?amount=".concat(parseInt(t))),"date"===e&&(n=k()(t).format("DD"),c=k()(t).format("MM"),l=k()(t).format("YYYY"),s="/transfers/search/date?day=".concat(parseInt(n),"&month=").concat(parseInt(c),"&year=").concat(parseInt(l))),a.next=6,b.a.post(s);case 6:i=a.sent,(m=i.data).success?r({type:p.Y,data:m.data}):r({type:p.cb,data:m.message}),a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),401===a.t0.response.status&&(r({type:p.K}),r({type:p.I,data:!1}),r({type:p.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}};t.default=Object(c.b)((function(e){return{allTransfers:e.allTransfers,balanceDetails:e.balanceDetails}}),N)(Object(l.g)((function(e){var t=m.a.transfers,a=t.filledLeftArrow,c=t.unfilledLeftArrow,l=t.filledRightArrow,f=t.unfilledRightArrow,u=Object(s.useState)(e.allTransfers),d=Object(r.a)(u,2),p=d[0],_=d[1],b=Object(s.useState)("date"),v=Object(r.a)(b,2),E=v[0],N=v[1],y=Object(h.a)(),j=y.register,x=y.handleSubmit;y.watch,y.errors;Object(s.useEffect)((function(){e.getBalanceDetails(),e.getAllTransfers(10,1)}),[]),Object(s.useEffect)((function(){_(e.allTransfers)}),[e.allTransfers]);var D=Object(s.useCallback)((function(){p.hasNextPage&&e.getAllTransfers(10,p.currentPage+1)}),[p]),O=Object(s.useCallback)((function(){p.hasPrevPage&&e.getAllTransfers(10,p.currentPage-1)}),[p]),w=Object(s.useCallback)((function(t){e.getAllTransfers(10,t)}),[p]),A=Object(s.useCallback)((function(e){N(e.target.value)}),[E]);return n.a.createElement(i.a,null,n.a.createElement("div",{className:"strike-transfers-top"},n.a.createElement("div",{className:"strike-transfers-top__left"},n.a.createElement("div",{className:"strike-transfers-top__left-title"},o.a.t("transfers.latestEarning")),n.a.createElement("div",{className:"strike-transfers-top__left-middle"},n.a.createElement("div",{className:"strike-transfers-top__left-middle-left"},n.a.createElement("div",{className:"strike-transfers-top__left-subtitle"},o.a.t("transfers.totalAmount")),n.a.createElement("div",{className:"strike-transfers-top__left-middle-left-subtitle"},e.balanceDetails&&e.balanceDetails.latest_total_amount,"\u20ac")),n.a.createElement("div",{className:"strike-transfers-top__left-middle-right"},n.a.createElement("div",{className:"strike-transfers-top__left-subtitle"},o.a.t("transfers.transportCost")),n.a.createElement("div",{className:"strike-transfers-top__left-middle-right-subtitle"},e.balanceDetails&&e.balanceDetails.latest_transport_cost,"\u20ac"))),n.a.createElement("div",{className:"strike-transfers-top__left-subtitle text-center"},o.a.t("transfers.netoAmount")),n.a.createElement("div",{className:"strike-transfers-top__left-price text-center"},e.balanceDetails&&e.balanceDetails.latest_neto_amount,"\u20ac")),n.a.createElement("div",{className:"strike-transfers-top__middle"},n.a.createElement("div",{className:"strike-transfers-top__middle-title"},o.a.t("transfers.currentBalance")),n.a.createElement("div",{className:"strike-transfers-top__middle-subtitle"},o.a.t("transfers.totalAmount")),n.a.createElement("div",{className:"strike-transfers-top__middle-price"},e.balanceDetails&&e.balanceDetails.current_balance,"\u20ac")),n.a.createElement("div",{className:"strike-transfers-top__right"},n.a.createElement("div",{className:"strike-transfers-top__right-title"},o.a.t("transfers.allTimeEarning")),n.a.createElement("div",{className:"strike-transfers-top__right-subtitle"},o.a.t("transfers.totalAmount")),n.a.createElement("div",{className:"strike-transfers-top__right-price"},e.balanceDetails&&e.balanceDetails.all_time_earning,"\u20ac"))),n.a.createElement("div",{className:"strike-transfers"},n.a.createElement("form",{onSubmit:x((function(t){var a=t.type,r=t.search;e.searchTransfers(a,r)})),className:"strike-transfers__search"},n.a.createElement("select",{onChange:A,defaultValue:E,name:"type",ref:j({required:!0}),className:"strike-transfers__search-select"},n.a.createElement("option",{value:"date"},o.a.t("transfers.date")),n.a.createElement("option",{value:"amount"},o.a.t("transfers.amount"))),n.a.createElement("input",{defaultValue:"date"===E?k()().format("yyyy-MM-DD"):"",type:"date"===E?"date":"text",name:"search",ref:j({required:!0}),placeholder:o.a.t("transfers.searchPlaceholder"),className:"strike-transfers__search-input"}),n.a.createElement("button",{type:"submit",className:"strike-transfers__search-button"},o.a.t("transfers.search"))),n.a.createElement(g,{items:p.data}),n.a.createElement("div",{className:"strike-transfers__pagination"},n.a.createElement("img",{onClick:O,src:p.hasPrevPage?a:c,className:"strike-transfers__pagination-leftarrow"}),p&&p.lastPage.map((function(e){return n.a.createElement("div",{onClick:function(){return w(e)},"is-active":e===p.currentPage?"true":"false",key:e,className:"strike-transfers__pagination-number"},e)})),n.a.createElement("img",{onClick:D,src:p.hasNextPage?l:f,className:"strike-transfers__pagination-rightarrow"}))))})))},216:function(e,t,a){"use strict";var r=a(0),s=a.n(r);a(217);t.a=function(e){return s.a.createElement("div",{className:"strike-wrapper"},e.children)}},217:function(e,t,a){},293:function(e,t,a){}}]);
//# sourceMappingURL=28.3748e752.chunk.js.map