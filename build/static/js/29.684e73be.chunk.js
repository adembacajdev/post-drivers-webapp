(this.webpackJsonpstrikeapp=this.webpackJsonpstrikeapp||[]).push([[29],{240:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(52);var n=r(70);function s(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},242:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(null);t.a=n},371:function(e,t,r){"use strict";var a=r(0),n=r.n(a),s=r(31),i=r(5),c=(r(241),r(240)),o=r(16),l=r(203),d=r(25),m=r.n(d),u=r(242),f=function(e){var t,r,d=e.id,f=e.serial_number,b=e.status,v=e.updated_at,p=e.deleteItem,_=e.price,k=e.client,E=(e.printOne,e.item),h=Object(a.useContext)(u.a),O=h.selected,N=h.setSelected,w=Object(a.useState)(!1),y=Object(o.a)(w,2),j=y[0],g=y[1],x=Object(l.e)(),S=s.a.orders.threePoints,C=m()(v).format("DD/MM/YYYY"),A=m()(v).format("HH:mm:ss");switch(b){case"pending":case"ongoing":case"cancelled":case"completed":t=b,r=b;break;case"archived":t="archived",r="archived";break;case"archived:cancelled":t="cancelled",r="archived";break;case"archived:completed":t="completed",r="archived"}var B=Object(a.useCallback)((function(){x.push("/order",{id:d})}),[E.id]);return Object(a.useEffect)((function(){if(j)N([].concat(Object(c.a)(O),[d]));else if(!j){var e=O.filter((function(e){return e!==d}));N(e)}}),[j]),Object(a.useEffect)((function(){0===O.filter((function(e){return e===d})).length?g(!1):g(!0)}),[O]),n.a.createElement("div",{className:"strike-orders__table-item"},n.a.createElement("div",{className:"strike-orders__table-item-container"},n.a.createElement("input",{onChange:function(){return g(!j)},value:j,checked:j,className:"strike-orders__table-item-container-checkbox",type:"checkbox"}),n.a.createElement("div",{className:"strike-orders__table-item-container-text"},f)),n.a.createElement("div",{onClick:B,className:"strike-orders__table-item-container"},n.a.createElement("div",{className:r}),n.a.createElement("div",{className:"strike-orders__table-item-container-text"},t)),n.a.createElement("div",{onClick:B,className:"strike-orders__table-item-container"},n.a.createElement("div",{className:"strike-orders__table-item-container-text"},_,"\u20ac")),n.a.createElement("div",{onClick:B,"is-responsive":"true",className:"strike-orders__table-item-container"},n.a.createElement("div",{className:"strike-orders__table-item-container-text"},C)),n.a.createElement("div",{onClick:B,"is-responsive":"true",className:"strike-orders__table-item-container"},n.a.createElement("div",{className:"strike-orders__table-item-container-text"},A)),n.a.createElement("div",{onClick:B,"is-responsive":"true",className:"strike-orders__table-item-container"},n.a.createElement("div",{className:"strike-orders__table-item-container-text"},k.first_name)),n.a.createElement("div",{onClick:B,"is-responsive":"true",className:"strike-orders__table-item-container centered"},n.a.createElement("div",{className:"strike-orders__table-item-container-text"},k.city)),n.a.createElement("div",{"is-responsive":"true",className:"strike-orders__table-item-container centered"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("img",{className:"strike-orders__table-item-container-dots",src:S}),n.a.createElement("div",{className:"dropdown-content"},n.a.createElement("div",{onClick:function(){localStorage.setItem("printOne",d),window.open("http://".concat(window.location.host,"/print/one"),"Print Orders")},className:"dropdown-content-text"},i.a.t("orders.print")),n.a.createElement("div",{onClick:function(){return p(d)},className:"dropdown-content-text"},i.a.t("orders.delete"))))))};t.a=function(e){var t=e.items,r=e.deleteItem,c=e.printOne,o=Object(a.useContext)(u.a),l=o.selectedAll,d=o.selectAll,m=(s.a.orders.tableArrow,Object(a.useCallback)((function(){d(!l)}),[l]));return n.a.createElement("div",{className:"strike-orders__table"},n.a.createElement("div",{className:"strike-orders__table-header"},n.a.createElement("div",{className:"strike-orders__table-header-item"},n.a.createElement("input",{type:"checkbox",onChange:m,value:l,checked:l}),n.a.createElement("div",{style:{marginLeft:15},className:"strike-orders__table-header-item-text"},i.a.t("orders.serialNumber"))),n.a.createElement("div",{className:"strike-orders__table-header-item"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.status"))),n.a.createElement("div",{className:"strike-orders__table-header-item"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.unitedPrice"))),n.a.createElement("div",{"is-responsive":"true",className:"strike-orders__table-header-item"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.date"))),n.a.createElement("div",{"is-responsive":"true",className:"strike-orders__table-header-item"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.time"))),n.a.createElement("div",{"is-responsive":"true",className:"strike-orders__table-header-item"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.customerName"))),n.a.createElement("div",{"is-responsive":"true",className:"strike-orders__table-header-item centered"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.city"))),n.a.createElement("div",{"is-responsive":"true",className:"strike-orders__table-header-item centered"},n.a.createElement("div",{className:"strike-orders__table-header-item-text"},i.a.t("orders.actions")))),t&&t.map((function(e,t){return n.a.createElement(f,Object.assign({item:e,printOne:c,deleteItem:r},e,{key:t}))})))}},511:function(e,t,r){(function(r){var a,n,s;n=[],void 0===(s="function"===typeof(a=function(){"use strict";function t(e,t,r){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){i(a.response,t,r)},a.onerror=function(){console.error("could not download file")},a.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(r)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r&&r.global===r?r:void 0,i=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype?function(e,r,i){var c=s.URL||s.webkitURL,o=document.createElement("a");r=r||e.name||"download",o.download=r,o.rel="noopener","string"==typeof e?(o.href=e,o.origin===location.origin?n(o):a(o.href)?t(e,r,i):n(o,o.target="_blank")):(o.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(o.href)}),4e4),setTimeout((function(){n(o)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,s){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,s),r);else if(a(e))t(e,r,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){n(i)}))}}:function(e,r,a,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,r,a);var i="application/octet-stream"===e.type,c=/constructor/i.test(s.HTMLElement)||s.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&c)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=o?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},l.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,m=d.createObjectURL(e);n?n.location=m:location.href=m,n=null,setTimeout((function(){d.revokeObjectURL(m)}),4e4)}});s.saveAs=i.saveAs=i,e.exports=i})?a.apply(t,n):a)||(e.exports=s)}).call(this,r(49))},792:function(e,t,r){"use strict";r.r(t);var a=r(16),n=r(0),s=r.n(n),i=r(8),c=r(203),o=r(214),l=r(31),d=r(5),m=(r(241),r(224)),u=r(511),f=r(371),b=r(242),v={deleteOrder:m.a,printOneOrder:m.m,getOrderByStatus:m.f,deleteOrders:m.b,printSelectedOrders:m.n};t.default=Object(i.b)((function(e){return{printOrder:e.printOrder,ordersPaginated:e.ordersPaginated,ordersByStatus:e.ordersByStatus,deletedOrder:e.deletedOrder}}),v)(Object(c.g)((function(e){var t=l.a.orders.infoIcon,r=Object(n.useState)(d.a.t("orders.allOrders")),i=Object(a.a)(r,2),c=i[0],m=i[1],v=Object(n.useState)(e.ordersByStatus),p=Object(a.a)(v,2),_=p[0],k=p[1],E=Object(n.useState)([]),h=Object(a.a)(E,2),O=h[0],N=h[1],w=Object(n.useState)(!1),y=Object(a.a)(w,2),j=y[0],g=y[1];Object(n.useEffect)((function(){e.location.state&&e.location.state.title&&(m(e.location.state.title),e.getOrderByStatus(e.location.state.slug))}),[]),Object(n.useEffect)((function(){e.deletedOrder&&window.location.reload()}),[e.deletedOrder]),Object(n.useEffect)((function(){e.printOrder&&Object(u.saveAs)(e.printOrder,"newFile.pdf")}),[e.printOrder]),Object(n.useEffect)((function(){k(e.ordersByStatus),g(!1),N([])}),[e.ordersByStatus]),Object(n.useEffect)((function(){if(j&&e.ordersByStatus){var t=[];e.ordersByStatus.forEach((function(e){t.push(e.id)})),N(t)}else N([])}),[j]);return s.a.createElement(b.a.Provider,{value:{selected:O,setSelected:N,selectAll:g,selectedAll:j}},s.a.createElement(o.a,null,s.a.createElement("div",{className:"strike-orders"},s.a.createElement("div",{className:"strike-orders__header"},s.a.createElement("div",{className:"strike-orders__header-left"},s.a.createElement("div",{className:"strike-orders__header-left-text"},c)),s.a.createElement("div",{className:"strike-orders__header-right"},s.a.createElement("img",{className:"strike-orders__header-right-icon",src:t}))),s.a.createElement(f.a,{printOne:e.printOneOrder,deleteItem:e.deleteOrder,items:_}),s.a.createElement("div",{className:"strike-orders__footerbuttons"},s.a.createElement("button",{onClick:function(){e.deleteOrders(O,e.location.state.slug),N([]),g(!1)},disabled:!O.length,className:"strike-orders__delete-selected"},d.a.t("orders.deleteOrders")),s.a.createElement("button",{onClick:function(){var e=JSON.stringify(O);localStorage.setItem("printMultiple",e),window.open("http://".concat(window.location.host,"/print/multiple"),"Print Orders")},disabled:!O.length,className:"strike-orders__print-selected"},d.a.t("orders.printSelected"))))))})))}}]);
//# sourceMappingURL=29.684e73be.chunk.js.map