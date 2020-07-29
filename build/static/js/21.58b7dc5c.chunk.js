(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[21],{1149:function(e,t,a){"use strict";a.r(t);var r=a(16),n=a(0),s=a.n(n),c=a(216),o=a(5),u=a(204),i=a(8),d=a(250),l=a(225),m=(a(249),{updateUser:d.e,getUser:d.c,deleteUser:d.a});t.default=Object(i.b)((function(e){return{selectedUser:e.selectedUser}}),m)(Object(u.g)((function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),u=a[0],i=a[1],m=Object(n.useState)(e.selectedUser),p=Object(r.a)(m,2),f=p[0],h=p[1],b=Object(l.a)(),v=b.register,_=b.handleSubmit,k=(b.watch,b.errors);Object(n.useEffect)((function(){e.getUser(e.location.state.id)}),[]),Object(n.useEffect)((function(){h(e.selectedUser)}),[e.selectedUser]);return s.a.createElement(c.a,null,s.a.createElement("div",{className:"strike-adduser"},s.a.createElement("div",{className:"strike-adduser__title"},o.a.t("users.editUser")),s.a.createElement("div",{className:"strike-adduser__form"},s.a.createElement("form",{onSubmit:_((function(t){u&&e.updateUser(e.location.state.id,t,e.history)}))},s.a.createElement("div",{className:"strike-adduser__form-label"},o.a.t("addUserForm.firstName")),s.a.createElement("input",{defaultValue:f&&f.first_name,"has-error":k.first_name?"true":"false",ref:v({required:!0}),name:"first_name",className:"strike-adduser__form-input",placeholder:o.a.t("addUserForm.firstName")}),s.a.createElement("div",{className:"strike-adduser__form-label"},o.a.t("addUserForm.lastName")),s.a.createElement("input",{defaultValue:f&&f.last_name,"has-error":k.last_name?"true":"false",ref:v({required:!0}),name:"last_name",className:"strike-adduser__form-input",placeholder:o.a.t("addUserForm.lastName")}),s.a.createElement("div",{className:"strike-adduser__form-label"},o.a.t("addUserForm.email")),s.a.createElement("input",{onChange:function(e){console.log("email",e.target.value);!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)?i(!1):i(!0)},defaultValue:f&&f.email,"has-error":u?"false":"true",ref:v({required:!0}),name:"email",className:"strike-adduser__form-input",placeholder:o.a.t("addUserForm.email")}),s.a.createElement("div",{className:"strike-adduser__form-label"},o.a.t("addUserForm.phone")),s.a.createElement("input",{defaultValue:f&&f.phone,"has-error":k.phone?"true":"false",ref:v({required:!0}),name:"phone",className:"strike-adduser__form-input",placeholder:o.a.t("addUserForm.phone")}),s.a.createElement("button",{type:"submit",className:"strike-adduser__form-button"},o.a.t("users.editUser"))),s.a.createElement("button",{onClick:function(){Object(d.a)(e.location.state.id),e.history.goBack()},className:"strike-adduser__form-button"},o.a.t("users.delete")))))})))},216:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(217);t.a=function(e){return n.a.createElement("div",{className:"strike-wrapper"},e.children)}},217:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return m})),a.d(t,"a",(function(){return p}));var r=a(15),n=a.n(r),s=a(24),c=a(2),o=a(10),u=a.n(o),i=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/users");case 3:a=e.sent,(r=a.data).success?t({type:c.l,data:r.data}):403===r.code?(t({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):t({type:c.cb,data:r.message}),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("/users/".concat(e));case 3:r=t.sent,(s=r.data).success?a({type:c.D,data:s.data}):403===s.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:s.message}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(s.a)(n.a.mark((function a(r){var s,o,i,d,l,m;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=e.first_name,o=e.last_name,i=e.email,d=e.phone,a.next=4,u.a.post("/users",{first_name:s,last_name:o,email:i,phone:d});case 4:l=a.sent,(m=l.data).success?(r({type:c.Q,data:m.data}),t.goBack()):403===m.code?(r({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):r({type:c.cb,data:m}),a.next=12;break;case 9:return a.prev=9,a.t0=a.catch(0),a.abrupt("return",Promise.reject(a.t0));case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e,t,a){return function(){var r=Object(s.a)(n.a.mark((function r(s){var o,i,d,l,m,p;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=t.first_name,i=t.last_name,d=t.email,l=t.phone,r.next=4,u.a.put("/users/".concat(e),{first_name:o,last_name:i,email:d,phone:l});case 4:m=r.sent,(p=m.data).success?(s({type:c.gb,data:p.data}),a.goBack()):403===p.code?(s({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):s({type:c.cb,data:p.message}),r.next=12;break;case 9:return r.prev=9,r.t0=r.catch(0),r.abrupt("return",Promise.reject(r.t0));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.delete("/users/".concat(e));case 3:r=t.sent,(s=r.data).success?window.location.reload():403===s.code?(a({type:c.I,data:!1}),localStorage.removeItem("token"),u.a.defaults.headers.common["Content-Type"]="applicaton/json",u.a.defaults.headers.common.Authorization=""):a({type:c.cb,data:s.message}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=21.58b7dc5c.chunk.js.map