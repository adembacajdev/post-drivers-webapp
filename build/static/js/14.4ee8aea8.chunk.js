(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[14],{1157:function(e,t,a){"use strict";a.r(t);var r=a(16),s=a(0),c=a.n(s),n=a(8),o=a(204),i=a(216),l=a(32),u=a(5),m=(a(281),a(280)),d=a(225),p=Object(s.createContext)(null),f=a(256),b=function(e){var t=e.id,a=e.first_name,n=e.last_name,i=e.phone,m=e.address,d=e.city,b=e.deleteCustomer,v=e.item,h=Object(s.useContext)(p),_=h.selected,k=h.setSelected,E=Object(o.e)(),g=Object(s.useState)(v.checked),N=Object(r.a)(g,2),y=N[0],C=N[1],j=l.a.customers.threePoints,x=function(){return E.push("/customer",{id:t})};return Object(s.useEffect)((function(){if(y)k([].concat(Object(f.a)(_),[t]));else if(!y){var e=_.filter((function(e){return e!==t}));k(e)}}),[y]),Object(s.useEffect)((function(){0===_.filter((function(e){return e===t})).length?C(!1):C(!0)}),[_]),c.a.createElement("div",{className:"strike-customers__table-item"},c.a.createElement("div",{className:"strike-customers__table-item-container"},c.a.createElement("input",{onChange:function(){return C(!y)},value:y,checked:y,className:"strike-customers__table-item-container-checkbox",type:"checkbox"}),c.a.createElement("div",{onClick:x,className:"strike-customers__table-item-container-text"},a)),c.a.createElement("div",{onClick:x,className:"strike-customers__table-item-container"},c.a.createElement("div",{className:"strike-customers__table-item-container-text"},n)),c.a.createElement("div",{"is-responsive":"true",onClick:x,className:"strike-customers__table-item-container"},c.a.createElement("div",{className:"strike-customers__table-item-container-text"},i)),c.a.createElement("div",{onClick:x,"is-responsive":"true",className:"strike-customers__table-item-container"},c.a.createElement("div",{className:"strike-customers__table-item-container-text"},m)),c.a.createElement("div",{onClick:x,className:"strike-customers__table-item-container centered"},c.a.createElement("div",{className:"strike-customers__table-item-container-text"},d)),c.a.createElement("div",{"is-responsive":"true",className:"strike-customers__table-item-container centered"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("img",{className:"strike-customers__table-item-container-dots",src:j}),c.a.createElement("div",{className:"dropdown-content"},c.a.createElement("div",{onClick:function(){return b(t)},className:"dropdown-content-text"},u.a.t("customers.delete"))))))},v=function(e){var t=e.items,a=e.deleteCustomer,r=Object(s.useContext)(p),n=r.selectedAll,o=r.selectAll,i=l.a.customers.tableArrow,m=Object(s.useCallback)((function(){o(!n)}),[n]);return c.a.createElement("div",{className:"strike-customers__table"},c.a.createElement("div",{className:"strike-customers__table-header"},c.a.createElement("div",{className:"strike-customers__table-header-item"},c.a.createElement("input",{style:{marginRight:15},type:"checkbox",onChange:m,value:n,checked:n}),c.a.createElement("div",{className:"strike-customers__table-header-item-text"},u.a.t("customers.firstName")),c.a.createElement("img",{className:"strike-customers__table-header-item-icon responsive",src:i})),c.a.createElement("div",{className:"strike-customers__table-header-item"},c.a.createElement("div",{className:"strike-customers__table-header-item-text"},u.a.t("customers.lastName")),c.a.createElement("img",{className:"strike-customers__table-header-item-icon responsive",src:i})),c.a.createElement("div",{"is-responsive":"true",className:"strike-customers__table-header-item"},c.a.createElement("div",{className:"strike-customers__table-header-item-text"},u.a.t("customers.phone")),c.a.createElement("img",{className:"strike-customers__table-header-item-icon responsive",src:i})),c.a.createElement("div",{"is-responsive":"true",className:"strike-customers__table-header-item"},c.a.createElement("div",{className:"strike-customers__table-header-item-text"},u.a.t("customers.address")),c.a.createElement("img",{className:"strike-customers__table-header-item-icon responsive",src:i})),c.a.createElement("div",{className:"strike-customers__table-header-item centered"},c.a.createElement("div",{className:"strike-customers__table-header-item-text"},u.a.t("customers.city")),c.a.createElement("img",{className:"strike-customers__table-header-item-icon responsive",src:i})),c.a.createElement("div",{"is-responsive":"true",className:"strike-customers__table-header-item centered"},c.a.createElement("div",{className:"strike-customers__table-header-item-text"},u.a.t("customers.actions")))),t&&t.map((function(e,t){return c.a.createElement(b,Object.assign({item:e,deleteCustomer:a,key:t},e))})))},h={getAllCustomers:m.c,deleteCustomer:m.a,searchCustomers:m.f,deleteCustomers:m.b};t.default=Object(n.b)((function(e){return{allCustomers:e.allCustomers,deletedCustomer:e.deletedCustomer}}),h)(Object(o.g)((function(e){var t=Object(s.useState)(e.allCustomers),a=Object(r.a)(t,2),n=a[0],o=a[1],m=Object(s.useState)([]),f=Object(r.a)(m,2),b=f[0],h=f[1],_=Object(s.useState)(!1),k=Object(r.a)(_,2),E=k[0],g=k[1],N=l.a.customers,y=N.filledLeftArrow,C=N.unfilledLeftArrow,j=N.filledRightArrow,x=N.unfilledRightArrow,O=Object(d.a)(),w=O.register,A=O.handleSubmit;Object(s.useEffect)((function(){e.getAllCustomers(10,1)}),[]),Object(s.useEffect)((function(){e.deletedCustomer&&window.location.reload()}),[e.deletedCustomer]),Object(s.useEffect)((function(){o(e.allCustomers),g(!1),h([])}),[e.allCustomers]),Object(s.useEffect)((function(){if(E){var e=[];n.data.forEach((function(t){e.push(t.id)})),h(e)}else h([])}),[E]);var P=Object(s.useCallback)((function(){n.hasNextPage&&e.getAllCustomers(10,n.currentPage+1)}),[n]),S=Object(s.useCallback)((function(){n.hasPrevPage&&e.getAllCustomers(10,n.currentPage-1)}),[n]),I=Object(s.useCallback)((function(t){e.getAllCustomers(10,t)}),[n]);return c.a.createElement(p.Provider,{value:{selected:b,setSelected:h,selectedAll:E,selectAll:g}},c.a.createElement(i.a,null,c.a.createElement("div",{className:"strike-customers"},c.a.createElement("div",{className:"strike-customers__header"},c.a.createElement("div",{className:"strike-customers__header-left"},c.a.createElement("div",{className:"strike-customers__header-left-text"},u.a.t("customers.allCustomers"))),c.a.createElement("div",{className:"strike-customers__header-right"})),c.a.createElement("form",{onSubmit:A((function(t){var a=t.type,r=t.search;e.searchCustomers(a,r)})),className:"strike-customers__search"},c.a.createElement("select",{name:"type",ref:w({required:!0}),className:"strike-customers__search-select"},c.a.createElement("option",{value:"name"},u.a.t("customers.name")),c.a.createElement("option",{value:"phone"},u.a.t("customers.phone")),c.a.createElement("option",{value:"city"},u.a.t("customers.city"))),c.a.createElement("input",{name:"search",ref:w({required:!0}),placeholder:u.a.t("customers.searchPlaceholder"),className:"strike-customers__search-input"}),c.a.createElement("button",{type:"submit",className:"strike-customers__search-button"},u.a.t("customers.search"))),c.a.createElement(v,{deleteCustomer:e.deleteCustomer,items:n.data}),c.a.createElement("div",{className:"strike-customers__pagination"},c.a.createElement("img",{onClick:S,src:n.hasPrevPage?y:C,className:"strike-customers__pagination-leftarrow"}),n&&n.lastPage.map((function(e){return c.a.createElement("div",{onClick:function(){return I(e)},"is-active":e===n.currentPage?"true":"false",key:e,className:"strike-customers__pagination-number"},e)})),c.a.createElement("img",{onClick:P,src:n.hasNextPage?j:x,className:"strike-customers__pagination-rightarrow"})),c.a.createElement("button",{onClick:function(){e.deleteCustomers(b),g(!1),h([])},disabled:!b.length,className:"strike-customers__delete-selected"},u.a.t("customers.deleteCustomers")))))})))},216:function(e,t,a){"use strict";var r=a(0),s=a.n(r);a(217);t.a=function(e){return s.a.createElement("div",{className:"strike-wrapper"},e.children)}},217:function(e,t,a){},280:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(15),s=a.n(r),c=a(24),n=a(1),o=a(10),i=a.n(o),l=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(r){var c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.get("clients/paginate/".concat(e,"?page=").concat(t));case 3:200===(c=a.sent).status?r({type:n.f,data:c.data}):r({type:n.cb,data:c.message}),a.next=11;break;case 7:return a.prev=7,a.t0=a.catch(0),401===a.t0.response.status&&(r({type:n.K}),r({type:n.I,data:!1}),r({type:n.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(c.a)(s.a.mark((function a(r){var c,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.post("clients/search/".concat(e,"?").concat(e,"=").concat(t));case 3:c=a.sent,(o=c.data).success?r({type:n.V,data:o.data}):r({type:n.cb,data:o.message}),a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),401===a.t0.response.status&&(r({type:n.K}),r({type:n.I,data:!1}),r({type:n.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/clients/".concat(e));case 3:r=t.sent,(c=r.data).success?a({type:n.A,data:c.data}):403===c.code?(a({type:n.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):a({type:n.cb,data:c.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===t.t0.response.status&&(a({type:n.K}),a({type:n.I,data:!1}),a({type:n.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/recent/clients");case 3:a=e.sent,(r=a.data).success?t({type:n.z,data:r.data}):403===r.code?(t({type:n.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):t({type:n.cb,data:r.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===e.t0.response.status&&(t({type:n.K}),t({type:n.I,data:!1}),t({type:n.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.delete("/clients/".concat(e));case 3:r=t.sent,(c=r.data).success?window.location.reload():403===c.code?(a({type:n.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):a({type:n.cb,data:c.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===t.t0.response.status&&(a({type:n.K}),a({type:n.I,data:!1}),a({type:n.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(a){var r,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="",e.forEach((function(e){r=""===r?"client_ids[]=".concat(e):"".concat(r,"&client_ids[]=").concat(e)})),t.next=5,i.a.delete("/clients?".concat(r));case 5:c=t.sent,(o=c.data).success?window.location.reload():403===o.code?(a({type:n.I,data:!1}),localStorage.removeItem("token"),i.a.defaults.headers.common["Content-Type"]="applicaton/json",i.a.defaults.headers.common.Authorization=""):a({type:n.cb,data:o.message}),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),401===t.t0.response.status&&(a({type:n.K}),a({type:n.I,data:!1}),a({type:n.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}},281:function(e,t,a){}}]);
//# sourceMappingURL=14.4ee8aea8.chunk.js.map