(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[20],{214:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(215);t.a=function(e){return n.a.createElement("div",{className:"strike-wrapper"},e.children)}},215:function(e,t,a){},237:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"a",(function(){return d}));var r=a(15),n=a.n(r),s=a(24),o=a(1),l=a(10),c=a.n(l),i=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/users");case 3:a=e.sent,(r=a.data).success?t({type:o.l,data:r.data}):403===r.code?(t({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):t({type:o.cb,data:r.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)&&(t({type:o.K}),t({type:o.I,data:!1}),t({type:o.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/users/".concat(e));case 3:r=t.sent,(s=r.data).success?a({type:o.D,data:s.data}):403===s.code?(a({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):a({type:o.cb,data:s.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)&&(a({type:o.K}),a({type:o.I,data:!1}),a({type:o.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(s.a)(n.a.mark((function a(r){var s,l,i,u,p,m,d;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=e.first_name,l=e.last_name,i=e.email,u=e.phone,a.next=4,c.a.post("/users",{first_name:s,last_name:l,email:i,phone:u});case 4:p=a.sent,(m=p.data).success?(r({type:o.Q,data:m.data}),t.goBack()):403===m.code?(r({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):r({type:o.cb,data:m}),a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),401===(null===a.t0||void 0===a.t0||null===(d=a.t0.response)||void 0===d?void 0:d.status)&&(r({type:o.K}),r({type:o.I,data:!1}),r({type:o.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e,t,a){return function(){var r=Object(s.a)(n.a.mark((function r(s){var l,i,u,p,m,d,f;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,l=t.first_name,i=t.last_name,u=t.email,p=t.phone,r.next=4,c.a.put("/users/".concat(e),{first_name:l,last_name:i,email:u,phone:p});case 4:m=r.sent,(d=m.data).success?(s({type:o.gb,data:d.data}),a.goBack()):403===d.code?(s({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):s({type:o.cb,data:d.message}),r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(0),401===(null===r.t0||void 0===r.t0||null===(f=r.t0.response)||void 0===f?void 0:f.status)&&(s({type:o.K}),s({type:o.I,data:!1}),s({type:o.a}),localStorage.clear()),r.abrupt("return",Promise.reject(r.t0));case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.delete("/users/".concat(e));case 3:r=t.sent,(s=r.data).success?window.location.reload():403===s.code?(a({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):a({type:o.cb,data:s.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)&&(a({type:o.K}),a({type:o.I,data:!1}),a({type:o.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},610:function(e,t,a){},805:function(e,t,a){"use strict";a.r(t);var r=a(16),n=a(0),s=a.n(n),o=a(214),l=a(8),c=a(219),i=a(5),u=a(39),p=a(237),m=(a(610),{getUser:u.a,updateUser:p.e,resetPassword:u.d});t.default=Object(l.b)((function(e){return{user:e.user}}),m)((function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),l=a[0],u=a[1],p=Object(n.useState)(""),m=Object(r.a)(p,2),d=m[0],f=m[1],_=Object(n.useState)(""),h=Object(r.a)(_,2),v=h[0],b=h[1],w=Object(n.useState)(""),y=Object(r.a)(w,2),k=y[0],j=y[1],g=Object(n.useState)(""),E=Object(r.a)(g,2),N=E[0],O=E[1],S=Object(c.a)(),x=S.register,I=S.handleSubmit,P=S.errors;S.watch;Object(n.useEffect)((function(){e.getUser()}),[]),Object(n.useEffect)((function(){e.user&&(f(e.user.first_name),b(e.user.last_name),j(e.user.email),O(e.user.phone))}),[e.user]);return s.a.createElement(o.a,null,s.a.createElement("div",{className:"strike-profile"},s.a.createElement("div",{className:"strike-profile__title"},i.a.t("profile.title")),s.a.createElement("form",{className:"strike-profile__form",onSubmit:I((function(t){var a=t.first_name,r=t.last_name,n=t.email,s=t.phone;l&&e.updateUser(e.user.id,{first_name:a,last_name:r,email:n,phone:s},e.history)}))},s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.name")),s.a.createElement("input",{disabled:!0,defaultValue:d,"has-error":P.first_name?"true":"false",name:"first_name",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.name")}),s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.surname")),s.a.createElement("input",{disabled:!0,defaultValue:v,"has-error":P.last_name?"true":"false",name:"last_name",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.surname")}),s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.email")),s.a.createElement("input",{disabled:!0,onChange:function(e){!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)?u(!1):u(!0)},defaultValue:k,"has-error":l?"false":"true",name:"email",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.email")}),s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.phone")),s.a.createElement("input",{disabled:!0,defaultValue:N,"has-error":P.phone?"true":"false",name:"phone",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.phone")}))),s.a.createElement("div",{className:"strike-profile"},s.a.createElement("div",{className:"strike-profile__title"},i.a.t("profile.changePass")),s.a.createElement("form",{className:"strike-profile__form",onSubmit:I((function(t){var a=t.old_password,r=t.new_password,n=t.new_password_confirmation;e.resetPassword({old_password:a,new_password:r,new_password_confirmation:n})}))},s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.oldPassword")),s.a.createElement("input",{type:"password","has-error":P.old_password?"true":"false",name:"old_password",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.oldPassword")}),s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.newPassword")),s.a.createElement("input",{type:"password","has-error":P.new_password?"true":"false",name:"new_password",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.newPassword")}),s.a.createElement("div",{className:"strike-profile__form-label"},i.a.t("profile.confirmNewPassword")),s.a.createElement("input",{type:"password","has-error":P.new_password_confirmation?"true":"false",name:"new_password_confirmation",ref:x({required:!0}),className:"strike-profile__form-input",placeholder:i.a.t("profile.confirmNewPassword")}),s.a.createElement("button",{type:"submit",className:"strike-profile__form-button"},i.a.t("profile.changePass")))))}))}}]);
//# sourceMappingURL=20.6fa8323d.chunk.js.map