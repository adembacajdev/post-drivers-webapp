(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[18],{214:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(215);t.a=function(e){return n.a.createElement("div",{className:"strike-wrapper"},e.children)}},215:function(e,t,a){},236:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return m})),a.d(t,"a",(function(){return d}));var r=a(15),n=a.n(r),s=a(24),o=a(1),l=a(10),c=a.n(l),i=function(){return function(){var e=Object(s.a)(n.a.mark((function e(t){var a,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/users");case 3:a=e.sent,(r=a.data).success?t({type:o.l,data:r.data}):403===r.code?(t({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):t({type:o.cb,data:r.message}),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),401===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.status)&&(t({type:o.K}),t({type:o.I,data:!1}),t({type:o.a}),localStorage.clear()),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/users/".concat(e));case 3:r=t.sent,(s=r.data).success?a({type:o.D,data:s.data}):403===s.code?(a({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):a({type:o.cb,data:s.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)&&(a({type:o.K}),a({type:o.I,data:!1}),a({type:o.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(s.a)(n.a.mark((function a(r){var s,l,i,u,p,m,d;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=e.first_name,l=e.last_name,i=e.email,u=e.phone,a.next=4,c.a.post("/users",{first_name:s,last_name:l,email:i,phone:u});case 4:p=a.sent,(m=p.data).success?(r({type:o.Q,data:m.data}),t.goBack()):403===m.code?(r({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):r({type:o.cb,data:m}),a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),401===(null===a.t0||void 0===a.t0||null===(d=a.t0.response)||void 0===d?void 0:d.status)&&(r({type:o.K}),r({type:o.I,data:!1}),r({type:o.a}),localStorage.clear()),a.abrupt("return",Promise.reject(a.t0));case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e,t,a){return function(){var r=Object(s.a)(n.a.mark((function r(s){var l,i,u,p,m,d,f;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,l=t.first_name,i=t.last_name,u=t.email,p=t.phone,r.next=4,c.a.put("/users/".concat(e),{first_name:l,last_name:i,email:u,phone:p});case 4:m=r.sent,(d=m.data).success?(s({type:o.gb,data:d.data}),a.goBack()):403===d.code?(s({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):s({type:o.cb,data:d.message}),r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(0),401===(null===r.t0||void 0===r.t0||null===(f=r.t0.response)||void 0===f?void 0:f.status)&&(s({type:o.K}),s({type:o.I,data:!1}),s({type:o.a}),localStorage.clear()),r.abrupt("return",Promise.reject(r.t0));case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.delete("/users/".concat(e));case 3:r=t.sent,(s=r.data).success?window.location.reload():403===s.code?(a({type:o.I,data:!1}),localStorage.removeItem("token"),c.a.defaults.headers.common["Content-Type"]="applicaton/json",c.a.defaults.headers.common.Authorization=""):a({type:o.cb,data:s.message}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),401===(null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)&&(a({type:o.K}),a({type:o.I,data:!1}),a({type:o.a}),localStorage.clear()),t.abrupt("return",Promise.reject(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}},607:function(e,t,a){},800:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a.n(r),s=a(24),o=a(16),l=a(0),c=a.n(l),i=a(214),u=a(8),p=a(219),m=a(5),d=a(39),f=a(236),_=(a(607),null),h={getUser:d.a,updateUser:f.e,resetPassword:d.d};t.default=Object(u.b)((function(e){return{user:e.user}}),h)((function(e){var t=Object(l.useState)(!0),a=Object(o.a)(t,2),r=a[0],u=a[1],d=Object(l.useState)(""),f=Object(o.a)(d,2),h=f[0],v=f[1],w=Object(l.useState)(""),b=Object(o.a)(w,2),k=b[0],y=b[1],j=Object(l.useState)(""),g=Object(o.a)(j,2),E=g[0],N=g[1],O=Object(l.useState)(""),S=Object(o.a)(O,2),x=S[0],I=S[1],P=Object(p.a)(),q=P.register,T=P.handleSubmit,C=P.errors;P.watch;Object(l.useEffect)((function(){e.getUser()}),[]),Object(l.useEffect)((function(){e.user&&(v(e.user.first_name),y(e.user.last_name),N(e.user.email),I(e.user.phone))}),[e.user]);return c.a.createElement(i.a,null,c.a.createElement("div",{className:"strike-profile"},c.a.createElement("div",{className:"strike-profile__title"},m.a.t("profile.title")),c.a.createElement("form",{className:"strike-profile__form",onSubmit:T((function(t){var a=t.first_name,n=t.last_name,s=t.email,o=t.phone;r&&e.updateUser(e.user.id,{first_name:a,last_name:n,email:s,phone:o},e.history)}))},c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.name")),c.a.createElement("input",{disabled:!0,defaultValue:h,"has-error":C.first_name?"true":"false",name:"first_name",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.name")}),c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.surname")),c.a.createElement("input",{disabled:!0,defaultValue:k,"has-error":C.last_name?"true":"false",name:"last_name",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.surname")}),c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.email")),c.a.createElement("input",{disabled:!0,onChange:function(e){window.onkeyup=function(e){clearTimeout(_),_=setTimeout(Object(s.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)?u(!1):u(!0);case 2:case"end":return t.stop()}}),t)}))),200)}},defaultValue:E,"has-error":r?"false":"true",name:"email",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.email")}),c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.phone")),c.a.createElement("input",{disabled:!0,defaultValue:x,"has-error":C.phone?"true":"false",name:"phone",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.phone")}))),c.a.createElement("div",{className:"strike-profile"},c.a.createElement("div",{className:"strike-profile__title"},m.a.t("profile.changePass")),c.a.createElement("form",{className:"strike-profile__form",onSubmit:T((function(t){var a=t.old_password,r=t.new_password,n=t.new_password_confirmation;e.resetPassword({old_password:a,new_password:r,new_password_confirmation:n})}))},c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.oldPassword")),c.a.createElement("input",{type:"password","has-error":C.old_password?"true":"false",name:"old_password",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.oldPassword")}),c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.newPassword")),c.a.createElement("input",{type:"password","has-error":C.new_password?"true":"false",name:"new_password",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.newPassword")}),c.a.createElement("div",{className:"strike-profile__form-label"},m.a.t("profile.confirmNewPassword")),c.a.createElement("input",{type:"password","has-error":C.new_password_confirmation?"true":"false",name:"new_password_confirmation",ref:q({required:!0}),className:"strike-profile__form-input",placeholder:m.a.t("profile.confirmNewPassword")}),c.a.createElement("button",{type:"submit",className:"strike-profile__form-button"},m.a.t("profile.changePass")))))}))}}]);
//# sourceMappingURL=18.b6b47cfb.chunk.js.map