(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(20),c=n.n(o),i=(n(35),n(22)),r=n(4),s=n(5),u=n(18),l=n(7),d=n(6),h=n(13),j=n(3),b=(n(28),n(1)),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"row",children:" GITHUB PROFILES"})})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("ul",{className:"nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(h.c,{exact:!0,to:"/combineReducersTest/",activeClassName:"active",children:" Home "})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.c,{to:"/combineReducersTest/githubProfiles",activeClassName:"active",children:" GithubProfiles "})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.c,{to:"/combineReducersTest/logout",activeClassName:"active",children:" Logout "})})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"home-container",children:[Object(b.jsx)("h1",{children:"Estas en home"}),Object(b.jsx)(h.b,{to:"/combineReducersTest/GithubProfiles",className:"button",children:"GithubProfiles"})]})}}]),n}(a.Component),v=function(e){return Object(b.jsx)("div",{className:"debug",children:Object(b.jsx)(p,{})})},g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"home-container",children:Object(b.jsx)("h1",{children:"Se equivoc\xf3 de ruta"})})}}]),n}(a.Component),m=n(16),x="ADD_TODO",L="TOOGLE_TODO",w="REMOVE_TODO",C="LOGOUT",y="LOGIN",T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"home-container",children:[Object(b.jsx)("h1",{children:"Logout"}),Object(b.jsx)("button",{onClick:this.props.handleLogoutDispatch,children:"Logout"})]})}}]),n}(a.Component),R=Object(m.b)(null,(function(e){return{handleLogoutDispatch:function(){return e({type:C,payload:t});var t}}}))(T),k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/combineReducersTest/",component:v}),Object(b.jsx)(j.a,{path:"/combineReducersTest/githubProfiles",component:O}),Object(b.jsx)(j.a,{path:"/combineReducersTest/logout",render:function(){return Object(b.jsx)(R,{})}}),Object(b.jsx)(j.a,{component:g})]})]})})}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={username:"",pass:""},a.handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.handleChangeInputValue=a.handleChangeInputValue.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"handleLogin",value:function(e){e.preventDefault(),""!=this.state.pass&&""!=this.state.username?this.props.handleLoginDispatch(this.state.username,this.state.pass):(alert("You need to complete the information"),console.log(this.state.pass),console.log(this.state.username))}},{key:"handleChangeInputValue",value:function(e){console.log(e.target.value),this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props.stateLoggedIn;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{children:"Bienvenido"}),e?Object(b.jsx)(k,{}):Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{id:"username",name:"username",placeholder:"nombre",value:this.state.username,onChange:this.handleChangeInputValue}),Object(b.jsx)("input",{id:"pass",name:"pass",placeholder:"edad",value:this.state.pass,onChange:this.handleChangeInputValue}),Object(b.jsx)("button",{onClick:this.handleLogin,children:"Login"})]})]})}}]),n}(a.Component),N=Object(m.b)((function(e){return{stateLoggedIn:e.authenticationReducer.isLoggedIn}}),(function(e){return{handleLoginDispatch:function(t,n){return e(function(e,t){return{type:y,payload:{username:e,pass:t}}}(t,n))}}}))(I),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=n(15),P=n(9),V=n(17),G=function(){return Math.floor(1e6*Math.random())},B={todos:[{id:1,name:"Learn React",isComplete:!1,owner:"Default"},{id:2,name:"Learn Redux",isComplete:!0,owner:"Default"},{id:3,name:"Learn ReactNative ",isComplete:!1,owner:"Default"},{id:4,name:"Learn NodeJS",isComplete:!1,owner:"Default"}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if(t.type===x){var n=G();console.log(M.getState().authenticationReducer.username);var a={id:n,name:t.payload,isComplete:!1,owner:M.getState().authenticationReducer.username},o=[].concat(Object(V.a)(e.todos),[a]);return Object(P.a)(Object(P.a)({},e),{},{todos:o})}if(t.type===L){var c=e.todos.findIndex((function(e){return e.id===t.payload})),i=e.todos[c],r=Object(P.a)(Object(P.a)({},i),{},{isComplete:!i.isComplete}),s=[].concat(Object(V.a)(e.todos.slice(0,c)),[r],Object(V.a)(e.todos.slice(c+1)));return Object(P.a)(Object(P.a)({},e),{},{todos:s})}if(t.type===w){var u=e.todos.findIndex((function(e){return e.id===t.payload})),l=[].concat(Object(V.a)(e.todos.slice(0,u)),Object(V.a)(e.todos.slice(u+1)));return Object(P.a)(Object(P.a)({},e),{},{todos:l})}return e},U={isLoggedIn:!1,username:"",pass:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type===C?Object(P.a)(Object(P.a)({},e),{},{isLoggedIn:U.isLoggedIn,pass:U.pass,username:U.username}):t.type===y?(console.log(t.payload.username),Object(P.a)(Object(P.a)({},e),{},{isLoggedIn:!0,username:t.payload.username,pass:t.payload.pass})):e},X=Object(S.b)({authenticationReducer:W,toDosReducer:F}),J=Object(S.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(b.jsx)(m.a,{store:J,children:Object(b.jsx)(N,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/combineReducersTest",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/combineReducersTest","/service-worker.js");E?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):_(e)}))}}(),D();var M=t.default=J}},[[42,1,2]]]);
//# sourceMappingURL=main.748db25c.chunk.js.map