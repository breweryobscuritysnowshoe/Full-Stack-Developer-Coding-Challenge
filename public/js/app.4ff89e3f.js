(function(t){function e(e){for(var a,o,i=e[0],l=e[1],u=e[2],f=0,m=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"30f4":function(t,e,r){},"3c57":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-tertiary-800 dark-theme",attrs:{id:"app"}},[r("router-view")],1)},s=[],o=r("2877"),i={},l=Object(o["a"])(i,n,s,!1,null,null,null),u=l.exports,c=(r("8609"),r("a766"),r("9569"),r("c6f4"),r("2f62")),f=r("1da1"),m=(r("96cf"),r("7338")),d=r.n(m),p=d.a.create({withCredentials:!0,baseURL:"/api"}),h=p,v={authenticated:!1,user:null},g={authenticated:function(t){return t.authenticated},user:function(t){return t.user}},b={SET_AUTHENTICATED:function(t,e){t.authenticated=e},SET_USER:function(t,e){t.user=e}},x={logIn:function(t,e){return Object(f["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.dispatch,r.next=3,h.get("/csrf-cookie");case 3:return r.next=5,h.post("/login",e);case 5:if(n=r.sent,!n){r.next=10;break}return r.abrupt("return",a("fetchUser"));case 10:console.log(n);case 11:case"end":return r.stop()}}),r)})))()},logOut:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,h.post("/logout");case 4:r("SET_AUTHENTICATED",!1),r("SET_USER",null),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),r("SET_AUTHENTICATED",!1),r("SET_USER",null);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},fetchUser:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.abrupt("return",h.get("/me").then((function(t){r("SET_AUTHENTICATED",!0),r("SET_USER",t.data)})).catch((function(){r("SET_AUTHENTICATED",!1),r("SET_USER",null)})));case 2:case"end":return e.stop()}}),e)})))()}},w={namespaced:!0,state:v,getters:g,mutations:b,actions:x};a["a"].use(c["a"]);var y=new c["a"].Store({state:{},mutations:{},actions:{},modules:{auth:w}}),_=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-tertiary-800 dark-theme h-screen",attrs:{id:"app"}},[r("rux-global-status-bar",{staticClass:"w-full   ",attrs:{appname:"Hello"}},[r("rux-clock"),r("rux-button",{nativeOn:{click:function(e){return t.logOut(e)}}},[t._v("Logout")])],1),r("main",{staticClass:"bg-tertiary-800"},[r("div",{staticClass:"flex p-4"},[r("div",{staticClass:"w-1/3 mr-4 panel"},[r("base-panel",{staticClass:"h-full",attrs:{title:"Sat 1"}},[r("pane-alerts",{})],1)],1),r("div",{staticClass:"w-2/3 panel"},[r("base-panel",{staticClass:"h-full",attrs:{title:"Sat 2"}},[r("pane-contacts")],1)],1)])])],1)},E=[],O=(r("5319"),r("ac1f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-auto"},[r("rux-table",{attrs:{columns:t.columns,data:t.alerts}})],1)}),S=[],T=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"rux-table"},[r("tr",{staticClass:"relative rux-table__column-head"},t._l(t.columns,(function(e,a){return r("th",{key:a,staticClass:"sticky top-0",class:e.sort?"rux-table__column--sortable":"",on:{click:function(r){r.preventDefault(),e.sort&&t.sortColumn(e)}}},[r("span",{staticClass:"inline-flex items-center"},[t._v(" "+t._s(e.label)+" "),e.sort&&"desc"===t.sort?r("svg",{staticClass:"ml-2 w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})]):t._e(),e.sort&&"asc"===t.sort?r("svg",{staticClass:"ml-2 w-4 h-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"}})]):t._e()])])})),0),t._l(t.sortedData,(function(e,a){return r("tr",{key:a},t._l(t.columns,(function(a){return r("td",{key:a.name,staticClass:"truncate"},["date"===a.format?[t._v(" "+t._s(t.formatDate(e[a.name]))+" ")]:r("div",{staticClass:"capitalize"},[t._v(" "+t._s(e[a.name])+" ")])],2)})),0)}))],2)}),R=[],j=(r("b0c0"),r("b166"));function k(t){return Object(j["a"])(t,"kk:mm:ss")}var B=r("2ef0"),$={name:"RuxTable",props:{columns:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}}},data:function(){return{sort:null,sortBy:null}},computed:{sortedData:function(){return this.sort?Object(B["orderBy"])(this.data,[this.sortBy],[this.sort]):this.data}},methods:{sortColumn:function(t){this.sort?"asc"===this.sort?(this.sort="desc",this.sortBy=t.name):"desc"===this.sort&&(this.sort=null,this.sortBy=null):(this.sort="asc",this.sortBy=t.name)},formatDate:function(t){return k(t)}}},P=$,A=(r("df67"),Object(o["a"])(P,T,R,!1,null,null,null)),D=A.exports,U={name:"PaneAlerts",components:{RuxTable:D},data:function(){return{loading:!1,columns:[{name:"errorMessage",label:"Message",sort:!1},{name:"errorCategory",label:"Category",sort:!0},{name:"errorTime",label:"Time",format:"date",sort:!1}],alerts:[]}},created:function(){this.fetchAlerts()},methods:{fetchAlerts:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,h.get("/alerts").then((function(e){t.alerts=e.data.data})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()}}},I=U,L=Object(o["a"])(I,O,S,!1,null,"6a266864",null),N=L.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col overflow-hidden"},[r("div",{staticClass:"bg-gray-600 pb-8"},[r("ul",{staticClass:"flex items-center justify-between w-1/3 m-auto"},[r("li",{staticClass:"mr-4"},[r("base-badge",{attrs:{label:"Contacts",value:t.totalContacts}})],1),t._l(t.contactsGroupedByState,(function(t,e){return r("li",{key:e,staticClass:"mr-4"},[r("base-badge",{attrs:{label:e,value:t.length}})],1)}))],2)]),r("div",{staticClass:"overflow-auto"},[r("rux-table",{attrs:{columns:t.columns,data:t.contacts}})],1)])},z=[],M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center flex-col leading-tight"},[r("div",{staticClass:"text-6xl font-bold"},[t._v(" "+t._s(t.value)+" ")]),r("div",{staticClass:"capitalize"},[t._v(" "+t._s(t.label)+" ")])])},H=[],F=(r("a9e3"),{name:"BaseBadge",props:{label:{type:String,default:""},value:{type:Number,default:0}}}),V=F,G=Object(o["a"])(V,M,H,!1,null,"b2766db4",null),J=G.exports,K={name:"PaneContacts",components:{BaseBadge:J,RuxTable:D},data:function(){return{loading:!1,contacts:[],columns:[{name:"contactName",label:"Name",sort:!0},{name:"contactStatus",label:" Status"},{name:"contactBeginTimestamp",label:"Begin",format:"date"},{name:"contactEndTimestamp",label:" End",format:"date"}]}},computed:{totalContacts:function(){return this.contacts.length},contactsGroupedByState:function(){return Object(B["groupBy"])(this.contacts,(function(t){return t.contactState}))}},created:function(){this.fetchContacts()},methods:{fetchContacts:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,h.get("/contacts").then((function(e){t.contacts=e.data.data})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1}));case 2:case"end":return e.stop()}}),e)})))()}}},Q=K,W=Object(o["a"])(Q,q,z,!1,null,"4cbb5879",null),X=W.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"bg-tertiary-600 p-4"},[r("div",{staticClass:"text-2xl"},[t._v(" "+t._s(t.title)+" ")])]),r("div",{staticClass:"bg-tertiary-500 p4 flex flex-col overflow-hidden"},[t._t("default")],2)])},Z=[],tt={name:"BasePanel",props:{title:{type:String,default:"Sat 1"}}},et=tt,rt=Object(o["a"])(et,Y,Z,!1,null,"75905614",null),at=rt.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"rux-button",class:t.outline?"rux-button--outline":"",attrs:{type:t.type,outline:""}},[t._t("default")],2)},st=[],ot={name:"RuxButton",props:{outline:{type:Boolean,default:!1},type:{type:String,default:"submit"}}},it=ot,lt=Object(o["a"])(it,nt,st,!1,null,"658e8be3",null),ut=lt.exports,ct={name:"ViewDashboard",components:{RuxButton:ut,BasePanel:at,PaneContacts:X,PaneAlerts:N},methods:{logOut:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("auth/logOut");case 2:t.$router.replace({name:"Login"});case 3:case"end":return e.stop()}}),e)})))()}}},ft=ct,mt=(r("859e"),Object(o["a"])(ft,C,E,!1,null,"7f68e8e2",null)),dt=mt.exports,pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},[r("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[r("base-panel",{attrs:{title:"Register"}},[r("div",{staticClass:"py-8 px-4 shadow sm:rounded-lg sm:px-10"},[r("form",{staticClass:"space-y-6",attrs:{action:"#",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("rux-input",{attrs:{id:"name",label:"Name","validation-error":t.getError("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),r("rux-input",{attrs:{id:"email",label:"Email",type:"email","validation-error":t.getError("email")},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),r("rux-input",{attrs:{id:"password",label:"Password",type:"password","validation-error":t.getError("password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("rux-input",{attrs:{id:"password_confirmation",label:"Confirm Password",type:"password","validation-error":t.getError("password_confirmation")},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}}),r("div",{staticClass:"flex items-center"},[r("rux-button",{staticClass:"ml-auto mr-4 ",attrs:{size:"large",outline:!0,type:"default"},nativeOn:{click:function(e){return t.goToLogin(e)}}},[t._v(" Cancel ")]),r("rux-button",{attrs:{size:"large",type:"submit"}},[t._v(" Submit ")])],1)],1)])])],1)])},ht=[],vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"rux-form-field"},[r("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]),r("input",{staticClass:"rux-input",attrs:{id:t.id,type:t.type,required:t.required,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})]),t.validationError?r("div",{staticClass:"mt-2 ml-4 text-white text-left"},[t._v(" "+t._s(t.validationError)+" ")]):t._e()])},gt=[],bt={name:"RuxInput",props:{id:{type:String,default:""},label:{type:String,default:""},validationError:{type:String,default:""},value:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""}},computed:{required:function(){return this.validationError}}},xt=bt,wt=Object(o["a"])(xt,vt,gt,!1,null,"04db257e",null),yt=wt.exports,_t={name:"ViewRegister",components:{RuxButton:ut,RuxInput:yt,BasePanel:at},data:function(){return{errors:null,loading:!1,form:{name:"",email:"",password:"",password_confirmation:""}}},methods:{getError:function(t){return this.errors&&this.errors[t]?this.errors[t][0]:null},goToLogin:function(){this.$router.push("/login")},submitForm:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,h.post("/register",t.form).then((function(t){console.log(t)})).catch((function(e){if(console.log(e),e.response&&e.response.data&&e.response.data.errors){var r=e.response.data.errors;t.errors=r}else t.errors=["Error"]})).finally((function(){t.loading=!1})),console.log("heard submit");case 3:case"end":return e.stop()}}),e)})))()}}},Ct=_t,Et=Object(o["a"])(Ct,pt,ht,!1,null,"631eaee0",null),Ot=Et.exports,St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},[r("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[r("base-panel",{attrs:{title:"Login"}},[r("div",{staticClass:"py-8 px-4 shadow sm:rounded-lg sm:px-10"},[r("form",{staticClass:"space-y-6",attrs:{action:"#",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("rux-input",{attrs:{id:"email",label:"Email","validation-error":t.getError("email"),type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),r("rux-input",{attrs:{id:"password",label:"Password",type:"password","validation-error":t.getError("password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("div",{staticClass:"flex items-center"},[r("rux-button",{staticClass:"ml-auto mr-4 ",attrs:{size:"large",outline:!0,type:"default"},nativeOn:{click:function(e){return t.goToRegister(e)}}},[t._v(" Register ")]),r("rux-button",{attrs:{size:"large",type:"submit"}},[t._v(" Login ")])],1)],1)])])],1)])},Tt=[],Rt={name:"ViewLogin",components:{RuxButton:ut,RuxInput:yt,BasePanel:at},data:function(){return{errors:null,required:null,form:{email:"",password:""}}},methods:{getError:function(t){return this.errors?this.errors[t][0]:null},goToRegister:function(){this.$router.push("/register")},submitForm:function(){this.form.email?this.logIn(this.form):this.required="Email is required"},logIn:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("auth/logIn",t.form);case 3:r=e.sent,console.log(r),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),e.t0.response&&e.t0.response.data&&e.t0.response.data.errors?(a=e.t0.response.data.errors,t.errors=a):t.errors=["Error"],console.log(e.t0.response.data);case 11:t.$router.replace({name:"Dashboard"});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},jt=Rt,kt=Object(o["a"])(jt,St,Tt,!1,null,"a8f1be50",null),Bt=kt.exports,$t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v(" Ooops ")])},Pt=[],At={name:"ViewNotFound"},Dt=At,Ut=Object(o["a"])(Dt,$t,Pt,!1,null,"e0ea0498",null),It=Ut.exports;a["a"].use(_["a"]);var Lt=[{path:"*",component:It},{path:"/",name:"Dashboard",component:dt,meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:Ot},{path:"/login",name:"Login",component:Bt}],Nt=new _["a"]({mode:"history",base:"/",routes:Lt});Nt.beforeEach((function(t,e,r){if(t.matched.some((function(t){return t.meta.requiresAuth}))){var a=y.getters["auth/authenticated"];a?r():r({path:"/login"})}else r()}));var qt=Nt;a["a"].config.productionTip=!1,y.dispatch("auth/fetchUser").then((function(){new a["a"]({router:qt,store:y,render:function(t){return t(u)}}).$mount("#app")}))},"859e":function(t,e,r){"use strict";r("30f4")},8609:function(t,e,r){},a766:function(t,e,r){},df67:function(t,e,r){"use strict";r("3c57")}});
//# sourceMappingURL=app.4ff89e3f.js.map