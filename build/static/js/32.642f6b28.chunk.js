(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[32],{1140:function(e,t,a){"use strict";a.r(t);var l=a(16),i=a(0),n=a.n(i),s=a(204),r=a(8),o=a(84),c=a(40),g=a(225),u=a(5),m=(a(606),a(32)),p={authenticate:o.a,login:c.b};t.default=Object(r.b)((function(e){return{loggedIn:e.loggedIn,isLoggedIn:e.isLoggedIn}}),p)(Object(s.g)((function(e){var t=e.login,a=(e.loggedIn,e.authenticate,e.isLoggedIn),r=Object(i.useState)(!0),o=Object(l.a)(r,2),c=o[0],p=o[1],d=m.a.logoWithoutText,b=Object(g.a)(),h=b.register,_=b.handleSubmit,w=(b.watch,b.errors);return a?n.a.createElement(s.a,{to:"/"}):n.a.createElement("div",{className:"strike-login"},n.a.createElement("div",{className:"strike-login__header"},n.a.createElement("img",{className:"strike-login__header-logo",src:d}),n.a.createElement("div",{className:"strike-login__header-title"},u.a.t("login.title"))),n.a.createElement("div",{className:"strike-login__inputs"},n.a.createElement("form",{style:{display:"flex",flexDirection:"column"},onSubmit:_((function(e){var a=e.email,l=e.password;w.email||w.password||!c||t({email:a,password:l})}))},n.a.createElement("div",{className:"strike-login__inputs-label"},u.a.t("login.emailLabel")),n.a.createElement("input",{onChange:function(e){console.log("email",e.target.value);!1===/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)?p(!1):p(!0)},"has-error":c?"false":"true",name:"email",ref:h({required:!0}),className:"strike-login__inputs-input",type:"text",placeholder:u.a.t("login.emailPlaceholder")}),n.a.createElement("div",{className:"strike-login__inputs-label"},u.a.t("login.passwordLabel")),n.a.createElement("input",{"has-error":w.password?"true":"false",name:"password",ref:h({required:!0}),className:"strike-login__inputs-input",type:"password",placeholder:u.a.t("login.passwordPlaceholder")}),n.a.createElement("button",{type:"submit",className:"strike-login__inputs-button"},u.a.t("login.loginButton")))))})))},606:function(e,t,a){}}]);
//# sourceMappingURL=32.642f6b28.chunk.js.map