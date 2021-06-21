(function(t){function e(e){for(var r,i,c=e[0],o=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-news/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0f87":function(t,e,n){"use strict";n("d879")},"1f6b":function(t,e,n){},"333d":function(t,e,n){"use strict";n("6e21")},"4dcb":function(t,e,n){},"4ee2":function(t,e,n){},"4f98":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader"),n("router-view",{class:"hacker-"+this.$route.name}),n("Spinner",{attrs:{loading:t.loading}})],1)},a=[],i=(n("4ee2"),n("4dcb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-header"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[n("router-link",{attrs:{to:"/"}},[t._v("HACKER NEWS")])],1),n("ul",{staticClass:"menu-list"},[n("li",{class:"menu-item"},[n("router-link",{attrs:{to:"/news"}},[t._v("NEWS")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/jobs"}},[t._v("JOBS")])],1),n("li",{staticClass:"menu-item"},[n("router-link",{attrs:{to:"/ask"}},[t._v("ASK")])],1)])])])}),c=[],o={},u=o,l=(n("fc24"),n("2877")),f=Object(l["a"])(u,i,c,!1,null,"1a005a64",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")]):t._e()},m=[],h={props:{loading:{type:Boolean,required:!0}}},v=h,_=(n("f22a"),Object(l["a"])(v,d,m,!1,null,null,null)),b=_.exports,g=new r["a"],w={name:"App",components:{AppHeader:p,Spinner:b},data:function(){return{loading:!1}},methods:{startSpinner:function(){this.loading=!0},endSpinner:function(){this.loading=!1}},created:function(){g.$on("start:spinner",this.startSpinner),g.$on("stop:spinner",this.endSpinner)},beforeDestroy:function(){g.$off("start:spinner",this.startSpinner),g.$off("stop:spinner",this.endSpinner)}},E=w,C=(n("034f"),Object(l["a"])(E,s,a,!1,null,null,null)),k=C.exports,S=(n("b0c0"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"view-title"},[t._v(" News ")]),n("ListItem")],1)},T=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"hacker-list"},t._l(t.c_fetched_item,(function(e){return n("li",{key:e.id,staticClass:"hacker-list-item"},[n("span",{staticClass:"point"},[t._v(t._s(e.points||0))]),e.domain?[n("a",{staticClass:"title",attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]:[n("router-link",{staticClass:"title",attrs:{to:"/item/"+e.id}},[t._v(" "+t._s(e.title)+" ")])],n("span",{staticClass:"time"},[t._v(t._s(e.time_ago))]),e.user?n("router-link",{staticClass:"user-name",attrs:{to:"/user/"+e.user}},[t._v(" by "+t._s(e.user)+" ")]):n("a",{staticClass:"user-name",attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.domain)+" ")])],2)})),0)])},x=[],I={computed:{c_fetched_item:function(){return this.$store.state.list}}},y=I,$=(n("e5db"),Object(l["a"])(y,O,x,!1,null,"29940e62",null)),U=$.exports,A={mounted:function(){g.$emit("stop:spinner")}},R={components:{ListItem:U},mixins:[A]},M=R,L=Object(l["a"])(M,j,T,!1,null,null,null),P=L.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"view-title"},[t._v(" Jobs ")]),n("ListItem")],1)},F=[],K={components:{ListItem:U},mixins:[A]},J=K,N=Object(l["a"])(J,H,F,!1,null,null,null),B=N.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"view-title"},[t._v(" Ask ")]),n("ListItem")],1)},q=[],D={components:{ListItem:U},mixins:[A]},z=D,G=Object(l["a"])(z,W,q,!1,null,null,null),Q=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("h2",{staticClass:"view-title"},[t._v(" User Info ")]),n("UserProfile",[n("template",{slot:"user"},[t._v(t._s(t.fetchedUser.id))]),n("template",{slot:"created"},[t._v(t._s("Joined "+t.fetchedUser.created))]),n("template",{slot:"karma"},[t._v(t._s(t.fetchedUser.karma))])],2)],1)])},X=[],Y=n("5530"),Z=n("2f62"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info-wrap"},[t._m(0),n("div",{staticClass:"user-info-text"},[n("div",{staticClass:"user-info"},[t._t("user")],2),n("div",{staticClass:"user-info"},[t._t("created")],2),n("div",{staticClass:"user-info"},[t._t("karma")],2)])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info-icon"},[n("i",{staticClass:"fas fa-user"})])}],nt={},rt=nt,st=(n("0f87"),Object(l["a"])(rt,tt,et,!1,null,"3c056d6a",null)),at=st.exports,it={components:{UserProfile:at},computed:Object(Y["a"])({},Object(Z["b"])(["fetchedUser"])),created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_USER",t)}},ct=it,ot=Object(l["a"])(ct,V,X,!1,null,null,null),ut=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("h2",{staticClass:"view-title"},[t._v(" "+t._s(t.fetchedAskItem.title)+" "),n("UserProfile",[n("router-link",{attrs:{slot:"user",to:"/user/"+t.fetchedAskItem.id},slot:"user"},[t._v(" "+t._s(t.fetchedAskItem.user)+" ")]),n("template",{slot:"created"},[t._v(" "+t._s("Posted "+t.fetchedAskItem.time_ago)+" ")])],2)],1),n("p",{staticClass:"item-content",domProps:{innerHTML:t._s(t.fetchedAskItem.content)}})])])},ft=[],pt={components:{UserProfile:at},computed:Object(Y["a"])({},Object(Z["b"])(["fetchedAskItem"])),created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_ASK_ITEM",t)}},dt=pt,mt=(n("333d"),Object(l["a"])(dt,lt,ft,!1,null,"0db7614a",null)),ht=mt.exports,vt={SET_LIST_ITEM:function(t,e){t.list=e},SET_USER:function(t,e){t.user=e},SET_ASK_ITEM:function(t,e){t.ask_item=e}},_t=n("1da1"),bt=(n("96cf"),n("99af"),n("bc3a")),gt=n.n(bt),wt={baseUrl:"https://api.hnpwa.com/v0/"};function Et(t){return Ct.apply(this,arguments)}function Ct(){return Ct=Object(_t["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gt.a.get("".concat(wt.baseUrl).concat(e,"/1.json"));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),Ct.apply(this,arguments)}function kt(t){return St.apply(this,arguments)}function St(){return St=Object(_t["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gt.a.get("".concat(wt.baseUrl,"user/").concat(e,".json"));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),St.apply(this,arguments)}function jt(t){return Tt.apply(this,arguments)}function Tt(){return Tt=Object(_t["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",gt.a.get("".concat(wt.baseUrl,"item/").concat(e,".json")));case 4:t.prev=4,t.t0=t["catch"](0),console.log(t.t0);case 7:case"end":return t.stop()}}),t,null,[[0,4]])}))),Tt.apply(this,arguments)}var Ot={FETCH_LIST_ITEM:function(t,e){return Object(_t["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,Et(e);case 4:return s=n.sent,r("SET_LIST_ITEM",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},FETCH_USER:function(t,e){return Object(_t["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,kt(e);case 4:return s=n.sent,r("SET_USER",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},FETCH_ASK_ITEM:function(t,e){return Object(_t["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,jt(e);case 4:return s=n.sent,r("SET_ASK_ITEM",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}};r["a"].use(Z["a"]);var xt=new Z["a"].Store({state:{list:[],user:{},ask_item:{}},getters:{fetchedUser:function(t){return t.user},fetchedAskItem:function(t){return t.ask_item}},mutations:vt,actions:Ot});r["a"].use(S["a"]);var It=new S["a"]({mode:"history",base:"/vue-news",routes:[{path:"/",redirect:"/news"},{path:"/news",name:"news",component:P,beforeEnter:function(t,e,n){g.$emit("start:spinner"),xt.dispatch("FETCH_LIST_ITEM",t.name).then((function(){return n()})).catch((function(t){console.log(t)}))}},{path:"/jobs",name:"jobs",component:B,beforeEnter:function(t,e,n){g.$emit("start:spinner"),xt.dispatch("FETCH_LIST_ITEM",t.name).then((function(){return n()})).catch((function(t){console.log(t)}))}},{path:"/ask",name:"ask",component:Q,beforeEnter:function(t,e,n){g.$emit("start:spinner"),xt.dispatch("FETCH_LIST_ITEM",t.name).then((function(){return n()})).catch((function(t){console.log(t)}))}},{path:"/user/:id",name:"user",component:ut},{path:"/item/:id",name:"item",component:ht}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)},router:It,store:xt}).$mount("#app")},"6e21":function(t,e,n){},"85ec":function(t,e,n){},aec1:function(t,e,n){},d879:function(t,e,n){},e5db:function(t,e,n){"use strict";n("aec1")},f22a:function(t,e,n){"use strict";n("1f6b")},fc24:function(t,e,n){"use strict";n("4f98")}});
//# sourceMappingURL=app.402771dc.js.map