(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{df0e53a2851ab0239b1f:function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("0d7f0986bcd2f33d8a2a"),i=n("1037a6e0d5914309f74c"),c=n.n(i),s=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),u=n("ab4cb61bcb2dc161defb"),l=n("d7dd51e1bf6bfc2c9c3d"),f=n("4dd2a92e69dcbe1bab10"),p=n("b8d975e1ed63a87481a1"),d=n("a28fc3c963a1d4d1a2e5");function b(e){return e}var g,y=Object(d.a)(function(e){return b(e).get("currentPage")},function(e){return b(e).get("inbox")},function(e,t){switch(e){case"inbox":return t.filter(function(e){return"sent"!==e.get("category")&&"spam"!==e.get("category")});case"stared":return t.filter(function(e){return e.get("stared")});case"sent":return t.filter(function(e){return"sent"===e.get("category")});case"spam":return t.filter(function(e){return"spam"===e.get("category")});case"updates":return t.filter(function(e){return"updates"===e.get("category")});case"social":return t.filter(function(e){return"social"===e.get("category")});case"forums":return t.filter(function(e){return"forums"===e.get("category")});case"promos":return t.filter(function(e){return"promos"===e.get("category")});default:return t}}),m=n("1db1dd8c115a2e953aac");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r){g||(g="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var i=new Array(a),c=0;c<a;c++)i[c]=arguments[c+3];t.children=i}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:g,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email":""},D=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=j(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==v(o)&&"function"!==typeof o?P(r):o,C(P(n),"state",{to:"",subject:"",validMail:"",mobileOpen:!1}),C(P(n),"handleChange",function(e,t){"to"===t&&n.setState({validMail:k(e.target.value)}),n.setState(C({},t,e.target.value))}),C(P(n),"handleReply",function(e){(0,n.props.compose)(),n.setState({to:e.get("name"),subject:"Reply: "+e.get("subject")})}),C(P(n),"handleCompose",function(){(0,n.props.compose)(),n.setState({to:"",subject:""})}),C(P(n),"handleDrawerToggle",function(){n.setState(function(e){return{mobileOpen:!e.mobileOpen}})}),n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.emailData,r=e.openMail,o=e.goto,i=e.currentPage,s=e.openFrm,u=e.discard,l=e.search,p=e.keyword,d=e.sendEmail,b=e.remove,g=e.update,y=e.closeNotif,m=e.messageNotif,h=e.loading,v=e.processing,w=this.state,j=w.to,P=w.subject,S=w.validMail,C=w.mobileOpen,k=c.a.name+" - Email",D=c.a.desc;return O("div",{},void 0,O(a.Helmet,{},void 0,O("title",{},void 0,k),O("meta",{name:"description",content:D}),O("meta",{property:"og:title",content:k}),O("meta",{property:"og:description",content:D}),O("meta",{property:"twitter:title",content:k}),O("meta",{property:"twitter:description",content:D})),O(f.t,{close:function(){return y()},message:m}),O("div",{className:t.root},void 0,O(f.g,{search:l,handleDrawerToggle:this.handleDrawerToggle}),O(f.i,{compose:this.handleCompose,goto:o,selected:i,handleDrawerToggle:this.handleDrawerToggle,mobileOpen:C}),O(f.h,{emailData:n,openMail:r,filterPage:i,keyword:p,moveTo:g,remove:b,toggleStar:g,reply:this.handleReply,loading:h})),O(f.d,{to:j,subject:P,compose:this.handleCompose,validMail:S,sendEmail:d,inputChange:this.handleChange,open:s,closeForm:u,processing:v}))}}])&&w(n.prototype,r),i&&w(n,i),t}();D.defaultProps={loading:!1,processing:!1};var A="emailFullstack",_=Object(l.connect)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){C(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({emailData:y(e.get(A)),currentPage:e.getIn([A,"currentPage"]),keyword:e.getIn([A,"keywordValue"]),openFrm:e.getIn([A,"openFrm"]),messageNotif:e.getIn([A,"notifMsg"]),loading:e.getIn([A,"loading"]),processing:e.getIn([A,"processing"])},e)},function(e){return{sendEmail:Object(u.bindActionCreators)(m.k,e),remove:Object(u.bindActionCreators)(m.c,e),update:Object(u.bindActionCreators)(m.n,e),openMail:Object(u.bindActionCreators)(m.i,e),goto:Object(u.bindActionCreators)(m.g,e),search:Object(u.bindActionCreators)(m.j,e),compose:function(){return e(m.b)},discard:function(){return e(m.f)},closeNotif:function(){return e(m.a)}}})(D);t.default=Object(s.withStyles)(p.a)(_)}}]);