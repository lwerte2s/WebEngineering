(function(e){function t(t){for(var r,o,a=t[0],l=t[1],u=t[2],c=0,p=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);w&&w(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},i={app:0},s=[];function a(e){return l.p+"js/"+({SubtopicDetails:"SubtopicDetails",TopicDetails:"TopicDetails",login:"login",notFound:"notFound",register:"register",user:"user"}[e]||e)+"."+{SubtopicDetails:"006b4dcf",TopicDetails:"24eb796b",login:"b8593eb4",notFound:"c8ac3ecd",register:"ada05f90",user:"fed00f4f"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={SubtopicDetails:1,TopicDetails:1,login:1,register:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({SubtopicDetails:"SubtopicDetails",TopicDetails:"TopicDetails",login:"login",notFound:"notFound",register:"register",user:"user"}[e]||e)+"."+{SubtopicDetails:"25b01c48",TopicDetails:"0d648689",login:"16d95f5f",notFound:"31d6cfe0",register:"d7273f44",user:"31d6cfe0"}[e]+".css",i=l.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===i))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){u=p[a],c=u.getAttribute("data-href");if(c===r||c===i)return t()}var w=document.createElement("link");w.rel="stylesheet",w.type="text/css",w.onload=t,w.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],w.parentNode.removeChild(w),n(s)},w.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(w)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(w);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}i[e]=void 0}};var w=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/~lwerte2s/dist2/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var w=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0057":function(e,t,n){},"034f":function(e,t,n){"use strict";n("85ec")},"0544":function(e,t,n){},2595:function(e,t,n){"use strict";n("0544")},3192:function(e,t,n){"use strict";n("0057")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheNavigation"),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view",{key:e.$route.path})],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav",attrs:{id:"nav"}},[n("p",{attrs:{id:"logo"},on:{click:e.toHome}},[e._v("Übungs-Navigator")]),n("ul",{staticClass:"nav-links"},[n("li",{staticClass:"links"},[n("router-link",{attrs:{to:{name:"Home"}}},[e._v("Home")])],1),e._l(e.topics,(function(t){return n("li",{key:t.name,staticClass:"links"},[n("router-link",{attrs:{to:{name:"topicDetails",params:{name:t.name}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2),n("router-link",{staticClass:"user",attrs:{to:{name:"user"}}},[e._v(" Account ")])],1)},a=[],l=n("ce28"),u={data:function(){return{topics:l["a"].topics}},methods:{toHome:function(){this.$router.push("/")}},computed:{logedIn:function(){return null!==l["a"].user}}},c=u,p=(n("2595"),n("2877")),w=Object(p["a"])(c,s,a,!1,null,"3a7a5c08",null),m=w.exports,h={components:{TheNavigation:m}},f=h,d=(n("034f"),Object(p["a"])(f,o,i,!1,null,null,null)),b=d.exports,g=(n("7db0"),n("b0c0"),n("d3b7"),n("8c4f")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("All Topics")]),n("div",{staticClass:"topics"},e._l(e.topics,(function(t){return n("div",{key:t.name},[n("router-link",{attrs:{to:{name:"topicDetails",params:{name:t.name}}}},[n("h2",[e._v(e._s(t.name))])])],1)})),0)])},U=[],_={name:"Home",data:function(){return{topics:l["a"].topics}}},y=_,T=(n("3192"),Object(p["a"])(y,v,U,!1,null,"8b3bd552",null)),k=T.exports;r["a"].use(g["a"]);var S=[{path:"/",name:"Home",component:k},{path:"/topic/:name",name:"topicDetails",component:function(){return n.e("TopicDetails").then(n.bind(null,"dc56"))},props:!0,children:[{path:":subtopicName",name:"subtopicDetails",props:!0,component:function(){return n.e("SubtopicDetails").then(n.bind(null,"f3e5"))}}],beforeEnter:function(e,t,n){var r=l["a"].topics.find((function(t){return t.name===e.params.name}));r?n():n({name:"notFound"})}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/user",name:"user",component:function(){return n.e("user").then(n.bind(null,"1511"))},meta:{requiresAuth:!0}},{path:"/404",alias:"*",name:"notFound",component:function(){return n.e("notFound").then(n.bind(null,"9703"))}}],D=new g["a"]({mode:"history",routes:S}),C=D;r["a"].config.productionTip=!1,new r["a"]({router:C,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},ce28:function(e,t,n){"use strict";t["a"]={topics:[{name:"U1",url:"../U1",subtopics:[{name:"WWW Erfolgsprinzipien",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U1/1-1_www.html"},{name:"HTTP",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U1/1-2_http.html"},{name:"HTML Literatur",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U1/1-3_html.html"},{name:"HTML Wireframe",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U1/1-4_htmlwireframe.html"}]},{name:"U2",url:"../U2",subtopics:[{name:"CSS Selektoren und Farben",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U2/2-1_css.html"},{name:"CSS Positionierung",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U2/2-2_csspositionierung.html"},{name:"Wireframe with HTML and CSS",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U2/2-3_surveyform.html"}]},{name:"U3",url:"../U3",subtopics:[{name:"Flexbox",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U3/3-1_flexbox.html"},{name:"Grid",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U3/3-2_grid.html"},{name:"Grid Page",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U3/3-3_gridpage.html"}]},{name:"U4",url:"../U4",subtopics:[{name:"Funktionen",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U4/4-1_Funktionen.html"},{name:"Objekte",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U4/4-2_Objekte.html"},{name:"Fibonacci",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U4/4-3_Fibonacci.html"},{name:"Topsort",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U4/4-4_Topsort.html"}]},{name:"U5",url:"../U5",subtopics:[{name:"Vorrang",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U5/5-1_Vorrang.html"},{name:"TopoIterate",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U5/5-2_TopoIterate.html"},{name:"TopoGenerator",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U5/5-3_TopoGenerator.html"},{name:"Proxy",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U5/5-4_Proxy.html"},{name:"DeepCopy",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U5/5-5_DeepCopy.html"}]},{name:"U6",url:"../U6",subtopics:[{name:"Funktionen in JS",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U6/tests.html"}]},{name:"U7",url:"../U7",subtopics:[{name:"Performanzmessungen",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U7/7-1_Performanzmessungen.html"},{name:"Rednerliste",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U7/7-2_Rednerliste.html"}]},{name:"U8",url:"../U8",subtopics:[{name:"Promises",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U8/8-1_promises.html"},{name:"Async/Await",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U8/8-2_async-await.html"},{name:"WWW-Navigator",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U8/8-3_WWW-Navigator.html"}]},{name:"U9",url:"../U9",subtopics:[{name:"Vue Komponente",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U9/9-1/index.html"}]},{name:"U10",url:"../U10",subtopics:[{name:"Login",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U10/login.html"},{name:"Registrierung",url:"http://www2.inf.h-brs.de/~lwerte2s/web/U10/register.html"}]}]}}});
//# sourceMappingURL=app.25bda93d.js.map