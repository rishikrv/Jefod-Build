(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"64048584837131626b05":function(t,e,n){"use strict";n.r(e);var o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("54f683fcda7806277002"),n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),a=n("1037a6e0d5914309f74c"),c=n.n(a),f=n("0d7f0986bcd2f33d8a2a"),l=n("ab4cb61bcb2dc161defb"),u=n("4dd2a92e69dcbe1bab10"),s=n("ab039aecd4a1d4fedc0e"),d=n("21b0cc47a9cb566656eb"),p=n("a28fc3c963a1d4d1a2e5");function b(t){return t}var y,m=Object(p.a)(function(t){return b(t).filter},function(t){return b(t).list},function(t,e){switch(t){case"active":return e.filter(function(t){return!t.completed});case"completed":return e.filter(function(t){return t.completed});default:return e}}),v=n("13290e1afbf125b5ae65");n("27fff05234a565da2409");function k(t){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e,n,o){y||(y="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=o;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];e.children=a}if(e&&r)for(var f in r)void 0===e[f]&&(e[f]=r[f]);else e||(e=r||{});return{$$typeof:y,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return!e||"object"!==k(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,O(e).apply(this,arguments))}var n,o,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.createTask,n=t.removeTask,o=t.tasks,r=t.updateTask,i=t.filterTasks,a=t.filterType,l=t.loading,s=t.intl,p=c.a.name+" - Todo App",b=c.a.desc;return g("div",{},void 0,g(f.Helmet,{},void 0,g("title",{},void 0,p),g("meta",{name:"description",content:b}),g("meta",{property:"og:title",content:p}),g("meta",{property:"og:description",content:b}),g("meta",{property:"twitter:title",content:p}),g("meta",{property:"twitter:description",content:b})),g(u.u,{title:s.formatMessage(d.a.title),icon:"playlist_add_check",noMargin:!0,whiteBg:!0,colorMode:"light",desc:s.formatMessage(d.a.subtitle)},void 0,g(u.H,{handleSubmit:e}),g("div",{className:"g-col"},void 0,g(u.G,{filter:i,type:a}),g(u.I,{loading:l,removeTask:n,tasks:o,updateTask:r}))))}}])&&h(n.prototype,o),i&&h(n,i),e}();j.defaultProps={tasks:null,loading:!1,filterType:""};var _=Object(i.connect)(function(t){return{tasks:m(t.get("todoFullstack")),filterType:t.getIn(["todoFullstack","filter"]),loading:t.getIn(["todoFullstack","loading"])}},function(t){return{createTask:Object(l.bindActionCreators)(v.a,t),filterTasks:Object(l.bindActionCreators)(v.d,t),removeTask:Object(l.bindActionCreators)(v.f,t),updateTask:Object(l.bindActionCreators)(v.i,t)}})(j);e.default=Object(s.injectIntl)(_)}}]);