(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=(n(14),n(1)),l=(n(16),function(e){var t=e.data;return a.a.createElement("div",{className:"main-form"},a.a.createElement("div",{className:"instruction"},a.a.createElement("h",null,"Please enter booking information")),a.a.createElement("div",null,a.a.createElement("label",null,"First Name:"),a.a.createElement("input",{type:"text",onChange:function(e){t.FirstName=e.target.value}})),a.a.createElement("div",null,a.a.createElement("label",null,"Last Name:"),a.a.createElement("input",{type:"text",onChange:function(e){t.LastName=e.target.value}})),a.a.createElement("div",null,a.a.createElement("label",null,"Date:"),a.a.createElement("input",{type:"date",onChange:function(e){t.Date=e.target.value}})),a.a.createElement("div",null,a.a.createElement("label",null,"No. People:"),a.a.createElement("input",{type:"number",min:"1",max:"10",onChange:function(e){t.PartySize=e.target.value},required:!0})),a.a.createElement("div",null,a.a.createElement("label",null,"From:"),a.a.createElement("input",{type:"time",min:"09:00",max:"17:00",onChange:function(e){t.From=e.target.value},required:!0})),a.a.createElement("div",null,a.a.createElement("label",null,"Until:"),a.a.createElement("input",{type:"time",min:"09:00",max:"17:00",onChange:function(e){t.To=e.target.value},required:!0})),a.a.createElement("div",null,a.a.createElement("label",null,"Mobile:"),a.a.createElement("input",{type:"tel",onChange:function(e){t.Mobile=e.target.value},required:!0})),a.a.createElement("div",{className:"submit"},a.a.createElement("input",{type:"submit",value:"Check Availability"})))}),u=function(e){var t=e.tb,n=e.data;return a.a.createElement("div",null,a.a.createElement("label",null,"Table ",t.TableID),a.a.createElement("input",{type:"radio",name:"tableSelect",value:t.TableID,onChange:function(){return n.table=Number(t.TableID)}}))},s=n(4);function f(){f=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=l;var s={};function m(){}function h(){}function p(){}var d={};c(d,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&n.call(y,a)&&(d=y);var g=p.prototype=m.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}function m(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(f().mark(function e(t,n,r){var a,o;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,body:r,headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,o=a.json(),e.abrupt("return",Promise.resolve(o));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var p=function(e,t,n,r){e.preventDefault();var a=t.PartySize,o=t.Date,i=t.From,c=t.To,l=t.Mobile;console.log(t),m("https://le-restaurant-heroku.herokuapp.com/checkAvailability?partySize=".concat(a,"&date=").concat(o,"&CheckInTime=").concat(i,"&CheckOutTime=").concat(c,"&&Mobile=").concat(l),"GET",null).then(function(e){e.errors?r(e.errors):n(e)}).catch(function(e){return console.log(e)})},d=function(e,t,n){e.preventDefault();m("https://le-restaurant-heroku.herokuapp.com/addBooking","POST",JSON.stringify(t)).then(function(e){e.insertId?n(e.insertId):alert("Error. Please try again")})},v=function(e,t,n,r){e.preventDefault(),m("https://le-restaurant-heroku.herokuapp.com/retrieveBooking?id=".concat(t.id,"&lName=").concat(t.lName),"GET",null).then(function(e){e[0]?(n(!0),r(e[0])):alert("Error: Booking does not exist")})},y=function(e){var t=e.id,n=e.dataArr,r=e.setRefresh;return a.a.createElement("div",{className:"confirm-booking"},a.a.createElement("div",null,a.a.createElement("h2",null,"Your booking reference ",t)),a.a.createElement("div",null,n.map(function(e){return a.a.createElement("div",{key:e[0]},a.a.createElement("p",null,a.a.createElement("span",null,e[0],":"),e[1]))})),a.a.createElement("div",{className:"option-buttons"},a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(){return r(!0)}},"home")),a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(e){return function(e,t,n){e.preventDefault(),m("https://le-restaurant-heroku.herokuapp.com/deleteBooking","DELETE",JSON.stringify({id:n[0][1]})).then(function(e){alert("Booking Deleted"),t(!0),console.log(e)}).catch(function(e){alert("Error while deleting booking"),console.log(e)})}(e,r,n)}},"Delete booking"))))},g=function(e){var t=e.get_booking,n=e.queryData,r=e.setIsSearched,o=e.setData;return a.a.createElement("div",{className:"search"},a.a.createElement("h",null,"Or..."),a.a.createElement("form",{onSubmit:function(e){return t(e,n,r,o)}},a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"Enter booking reference",onChange:function(e){return n.id=e.target.value}})),a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"Enter Last Name",onChange:function(e){return n.lName=e.target.value}})),a.a.createElement("input",{type:"submit"})))};var E=function(){var e,t=Object(r.useState)(),n=Object(c.a)(t,2),o=n[0],i=n[1],s=Object(r.useState)(),f=Object(c.a)(s,2),m=f[0],h=f[1],E=Object(r.useState)(),b=Object(c.a)(E,2),w=b[0],k=b[1],x=Object(r.useState)(!1),N=Object(c.a)(x,2),L=N[0],O=N[1],j=Object(r.useState)({id:"",lName:""}),S=Object(c.a)(j,2),T=S[0],D=(S[1],Object(r.useState)(!1)),_=Object(c.a)(D,2),C=_[0],P=_[1],F=Object(r.useState)({Date:"",PartySize:"",From:"",To:"",Table:"",FirstName:"",LastName:"",Mobile:""}),I=Object(c.a)(F,2),G=I[0],B=I[1],A="";return w&&(A=a.a.createElement("div",{className:"errors"},w.map(function(e){return a.a.createElement("p",null,"Error: ",e.msg)}))),e=!m&&o?a.a.createElement("form",{onSubmit:function(e){return d(e,G,h)},className:"main-form"},o.map(function(e){return a.a.createElement(u,{tb:e,data:G,key:e.TableID})}),a.a.createElement("div",null,a.a.createElement("input",{type:"submit",value:"Book",className:"submit"}))):m?a.a.createElement(y,{id:m,dataArr:Object.entries(G),setRefresh:P}):a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(e){return p(e,G,i,k)}},A,a.a.createElement(l,{data:G})),a.a.createElement(g,{get_booking:v,queryData:T,setIsSearched:O,setData:B})),L&&G&&(e=a.a.createElement(y,{id:G.B,dataArr:Object.entries(G),setRefresh:P})),C&&(i(),h(),k(),O(!1),P(!1),B({Date:"",PartySize:"",From:"",To:"",Table:"",FirstName:"",LastName:"",Mobile:""})),a.a.createElement("div",null,a.a.createElement("div",{className:"title"},a.a.createElement("h1",null,"LeRestaurant")),a.a.createElement("div",{className:"form-container"},e))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(E,null))},5:function(e,t,n){e.exports=n(18)}},[[5,2,1]]]);
//# sourceMappingURL=main.5c2f40c9.chunk.js.map