(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[12],{214:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(215);t.a=function(e){return n.a.createElement("div",{className:"strike-wrapper"},e.children)}},215:function(e,t,a){},231:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"g",(function(){return m})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return v}));var r=a(15),n=a.n(r),o=a(24),c=a(1),d=a(10),u=a.n(d),s=function(e,t){return function(){var a=Object(o.a)(n.a.mark((function a(r){var o,d;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.get("/products/paginate/".concat(e,"?page=").concat(t));case 3:200===(o=a.sent).status?r({type:c.j,data:o.data}):403===o.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):r({type:c.cb,data:o.message}),a.next=11;break;case 7:return a.prev=7,a.t0=a.catch(0),401===(null===a.t0||void 0===a.t0||null===(d=a.t0.response)||void 0===d?void 0:d.status)&&(r({type:c.K}),r({type:c.I,data:!1}),r({type:c.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},i=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r,o,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.post("/products/search?name=".concat(e));case 3:r=t.sent,(o=r.data).success?a({type:c.X,data:o.data}):403===o.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:o.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)&&(a({type:c.K}),a({type:c.I,data:!1}),a({type:c.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r,o,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("/products/".concat(e));case 3:r=t.sent,(o=r.data).success?a({type:c.x,data:o.data}):403===o.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.x,data:{error:o.error}}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)&&(a({type:c.K}),a({type:c.I,data:!1}),a({type:c.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r,o,d,s,i,l,p,m,f,v,b,k;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.name,o=e.description,d=e.size,s=e.ks_price,i=e.al_price,l=e.mk_price,p=e.openable,m=e.history,f=JSON.parse(p),t.next=5,u.a.post("/products",{name:r,description:o,size:d,ks_price:s,al_price:i,mk_price:l,openable:f});case 5:v=t.sent,(b=v.data).success?m.goBack():403===b.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:b.message}),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(k=t.t0.response)||void 0===k?void 0:k.status)&&(a({type:c.K}),a({type:c.I,data:!1}),a({type:c.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r,o,d,s,i,l,p,m;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.name,o=e.description,d=e.size,s=e.id,i=e.history,t.next=4,u.a.put("/products/".concat(s),{name:r,description:o,size:d});case 4:l=t.sent,(p=l.data).success?(a({type:c.fb,data:p}),i.goBack()):403===p.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:p.message}),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(m=t.t0.response)||void 0===m?void 0:m.status)&&(a({type:c.K}),a({type:c.I,data:!1}),a({type:c.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r,o,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.delete("/products/".concat(e));case 3:r=t.sent,(o=r.data).success?window.location.reload():403===o.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:o.error}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(d=t.t0.response)||void 0===d?void 0:d.status)&&(a({type:c.K}),a({type:c.I,data:!1}),a({type:c.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r,o,d,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="",e.forEach((function(e){r=""===r?"product_ids[]=".concat(e):"".concat(r,"&product_ids[]=").concat(e)})),t.next=5,u.a.delete("/products?".concat(r));case 5:o=t.sent,(d=o.data).success?window.location.reload():403===d.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:d.message}),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(s=t.t0.response)||void 0===s?void 0:s.status)&&(a({type:c.K}),a({type:c.I,data:!1}),a({type:c.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}},232:function(e,t,a){},314:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(27);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},799:function(e,t,a){"use strict";a.r(t);var r=a(314),n=a(16),o=a(0),c=a.n(o),d=(a(232),a(214)),u=a(203),s=a(8),i=a(5),l=a(219),p=a(231),m=a(379),f=a.n(m),v=a(493),b=(a(380),{updateProduct:p.g,getProduct:p.d,deleteProduct:p.a});t.default=Object(s.b)((function(e){return{product:e.product}}),b)(Object(u.g)((function(e){var t=window.location.host,a=Object(o.useState)("".concat(t,"/add-order/").concat(e.location.state.id)),u=Object(n.a)(a,2),s=u[0],p=(u[1],Object(o.useState)({name:"",decription:"",size:"",openable:"",ks_price:"",al_price:"",mk_price:""})),m=Object(n.a)(p,2),b=m[0],k=m[1],_=Object(l.a)(),h=_.register,y=_.handleSubmit,j=(_.watch,_.errors);Object(o.useEffect)((function(){e.getProduct(e.location.state.id)}),[]),Object(o.useEffect)((function(){k(e.product)}),[e.product]);var g=Object(o.useCallback)((function(){e.deleteProduct(e.location.state.id),e.history.goBack()}),[]);return c.a.createElement(d.a,null,c.a.createElement("div",{className:"strike-addproduct"},c.a.createElement("div",{className:"strike-addproduct__title"},i.a.t("addProductForm.editProduct")),c.a.createElement("div",{className:"strike-addproduct__form"},c.a.createElement("form",{onSubmit:y((function(t){var a=t.name,r=t.description,n=t.size,o=t.ks_price,c=t.al_price,d=t.mk_price,u=t.openable,s=e.location.state.id;""!==a&&""!==r&&""!==n&&""!==o&&""!==c&&""!==d&&""!==u&&e.updateProduct({name:a,description:r,size:n,ks_price:o,al_price:c,mk_price:d,openable:u,id:s,history:e.history})}))},c.a.createElement("div",{className:"strike-addproduct__form-label"},i.a.t("addProductForm.productId")),c.a.createElement("input",{disabled:!0,defaultValue:b&&b.id,"has-error":j.product_id?"true":"false",name:"product_id",ref:h({required:!1}),className:"strike-addproduct__form-input",placeholder:i.a.t("addProductForm.productId")}),c.a.createElement("div",{className:"strike-addproduct__form-label"},i.a.t("addProductForm.name")),c.a.createElement("input",{defaultValue:b&&b.name,"has-error":j.name?"true":"false",name:"name",ref:h({required:!0}),className:"strike-addproduct__form-input",placeholder:i.a.t("addProductForm.name")}),c.a.createElement("div",{className:"strike-addproduct__form-label"},i.a.t("addProductForm.description")),c.a.createElement("input",{defaultValue:b&&b.description,"has-error":j.description?"true":"false",name:"description",ref:h({required:!0}),className:"strike-addproduct__form-input",placeholder:i.a.t("addProductForm.description")}),c.a.createElement("div",{className:"strike-addproduct__form-label"},i.a.t("addProductForm.price")),c.a.createElement("div",{className:"strike-addproduct__form-input-multiple"},c.a.createElement("div",{className:"strike-addproduct__form-input-multiple-item"},c.a.createElement("div",{className:"strike-addproduct__form-input-multiple-item-label"},i.a.t("addProductForm.ks")),c.a.createElement("input",{defaultValue:b&&b.ks_price,disabled:!0,"has-error":j.ks_price?"true":"false",name:"ks_price",ref:h({required:!0}),className:"strike-addproduct__form-input-multiple-item-input",placeholder:i.a.t("addProductForm.price")})),c.a.createElement("div",{className:"strike-addproduct__form-input-multiple-item ml-15"},c.a.createElement("div",{className:"strike-addproduct__form-input-multiple-item-label"},i.a.t("addProductForm.al")),c.a.createElement("input",{defaultValue:b&&b.al_price,disabled:!0,"has-error":j.al_price?"true":"false",name:"al_price",ref:h({required:!0}),className:"strike-addproduct__form-input-multiple-item-input",placeholder:i.a.t("addProductForm.price")})),c.a.createElement("div",{className:"strike-addproduct__form-input-multiple-item ml-15"},c.a.createElement("div",{className:"strike-addproduct__form-input-multiple-item-label"},i.a.t("addProductForm.mk")),c.a.createElement("input",{defaultValue:b&&b.mk_price,disabled:!0,"has-error":j.mk_price?"true":"false",name:"mk_price",ref:h({required:!0}),className:"strike-addproduct__form-input-multiple-item-input",placeholder:i.a.t("addProductForm.price")}))),c.a.createElement("div",{className:"strike-addproduct__form-label"},i.a.t("addProductForm.openable")),c.a.createElement("select",{value:b?b.openable:"",onChange:function(e){return k(Object(r.a)(Object(r.a)({},b),{},{openable:e.target.value}))},"has-error":j.openable?"true":"false",name:"openable",ref:h({required:!0}),className:"strike-addproduct__form-input"},c.a.createElement("option",{value:!0},i.a.t("addProductForm.true")),c.a.createElement("option",{value:!1},i.a.t("addProductForm.false"))),c.a.createElement("div",{className:"strike-addproduct__form-label"},i.a.t("addProductForm.size")),c.a.createElement("select",{disabled:!0,onChange:function(e){return k(Object(r.a)(Object(r.a)({},b),{},{size:e.target.value}))},ref:h({required:!0}),value:b?b.size:"","has-error":j.size?"true":"false",name:"size",className:"strike-addproduct__form-input"},c.a.createElement("option",{value:"small"},i.a.t("addProductForm.small")),c.a.createElement("option",{value:"medium"},i.a.t("addProductForm.medium")),c.a.createElement("option",{value:"large"},i.a.t("addProductForm.large"))),c.a.createElement("button",{className:"strike-addproduct__form-button"},i.a.t("addProductForm.editProduct"))),c.a.createElement("button",{onClick:function(){return e.history.push("/add-order-by-shop",{id:e.location.state.id})},className:"strike-addproduct__form-button"},i.a.t("products.addOrder")),c.a.createElement("button",{onClick:function(){v.a.notify("Link copied!",{position:"bottom-right"}),f()(s)},className:"strike-addproduct__form-button"},i.a.t("products.copyLink")),c.a.createElement("button",{onClick:g,className:"strike-addproduct__form-button"},i.a.t("products.delete")))))})))}}]);
//# sourceMappingURL=12.66d5be66.chunk.js.map