(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,v=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"038d":function(t,e,n){t.exports=n.p+"img/vue.bd1bc666.svg"},"1f4f":function(t,e,n){t.exports=n.p+"img/contact.4a51b136.svg"},"245a":function(t,e,n){t.exports=n.p+"img/projeto-2.356a75ee.png"},"2afe":function(t,e,n){t.exports=n.p+"img/arrow-red.48d9a1e4.svg"},"387e":function(t,e,n){t.exports=n.p+"img/github.cc34177c.svg"},"3c64":function(t,e,n){t.exports=n.p+"img/javascript.9c8b1450.svg"},"3e8d":function(t,e,n){"use strict";n("90e5")},"3f65":function(t,e,n){t.exports=n.p+"img/projeto-1.2aedd275.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",[n("transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("router-link",{staticClass:"mf",attrs:{to:"/"}},[t._v("mf"),n("span",[t._v(".")])]),n("ul",[n("li",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[t._v("Curriculo")])],1),n("li",{staticClass:"nav"},[n("router-link",{attrs:{to:"/projetos"}},[t._v("Projetos")])],1),n("li",[n("router-link",{staticClass:"btn",attrs:{to:"/contato"}},[t._v("Contato")])],1)])],1)])},r=[],c={name:"Header"},l=c,u=(n("3e8d"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"2a3d3e51",null),v=d.exports,h={name:"app",components:{Header:v}},m=h,p=(n("034f"),Object(u["a"])(m,s,a,!1,null,null,null)),f=p.exports,g=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",[n("Main")],1)])},_=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("main",{staticClass:"main"},[i("img",{staticClass:"profile-img",attrs:{src:n("8f33")}}),i("div",{staticClass:"my-details"},[i("h1",[t._v("Olá, Eu sou Matheus 🧙‍♂️")]),i("p",[t._v(" Gosto muito de aprender novas tecnologias e estar sempre aprimorando meu conhecimento. ")]),i("p",[t._v("No momento estou focado em Vue.js/ReactJS.")]),i("p",[t._v(" Em meu tempo livre, costumo jogar, estudar e fazer alguns projetos paralelos. ")]),i("p",[t._v(" Dúvidas? Entre em "),i("router-link",{attrs:{to:"/contato"}},[t._v("contato")]),t._v("! ")],1)])]),t._m(0)])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"habilidades"},[i("h2",[t._v("Habilidades")]),i("ul",[i("li",[i("img",{attrs:{src:n("3c64"),alt:"Javascript"}})]),i("li",[i("img",{attrs:{src:n("038d"),alt:"Vue.js"}})]),i("li",[i("img",{attrs:{src:n("a376"),alt:"Html5"}})]),i("li",[i("img",{attrs:{src:n("ca83"),alt:"CSS"}})])])])}],E={name:"Main"},C=E,j=(n("cb14"),Object(u["a"])(C,y,x,!1,null,"5c132588",null)),S=j.exports,k={name:"Home",components:{Main:S}},w=k,O=Object(u["a"])(w,b,_,!1,null,null,null),P=O.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TheProjects")},$=[],L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container"},[i("div",{staticClass:"slide-wrapper",on:{click:t.getIndex}},[i("ul",{ref:"carrosel",staticClass:"slide"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])]),i("div",{staticClass:"arrow-nav",on:{click:t.getIndex}},[i("button",{staticClass:"prev"}),i("button",{staticClass:"next"})]),i("div",{staticClass:"sobre"},[i("router-link",{attrs:{to:{name:""+t.slide,params:{slide:t.slide}}}},[t._v("Sobre o Projeto "+t._s(t.slide))]),i("img",{staticClass:"arrow-img",attrs:{src:n("2afe"),alt:"Arrow-Icon"}})],1)])},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("img",{attrs:{src:n("3f65"),alt:"Techno"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"animais"},[i("img",{attrs:{src:n("245a"),alt:"Animais Fantasticos"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"technocursos"},[i("img",{attrs:{src:n("db4d"),alt:"Techno Cursos"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"clima"},[i("img",{attrs:{src:n("efa9"),alt:"Clima Diario"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"bisnik"},[i("img",{attrs:{src:n("bc0e"),alt:"Bisnik"}})])}],M=n("262e"),I=n("2caf"),N=n("2909"),z=n("d4ec"),H=n("bee2");n("d81d"),n("159b"),n("99af");function X(t,e){var n;return function(){for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,s),n=null}),e)}}var R=function(){function t(e,n){Object(z["a"])(this,t),this.slide=document.querySelector(e),this.wrapper=document.querySelector(n),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}return Object(H["a"])(t,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"updatePosition",value:function(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,n=this.updatePosition(e);this.moveSlide(n)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=Object(N["a"])(this.slide.children).map((function(e){var n=t.slidePosition(e);return{position:n,element:e}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slideConfig(),t.changeSlide(t.index.active)}),1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize,X(this.onResize.bind(this),200)}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0),this}}]),t}(),q=function(t){Object(M["a"])(n,t);var e=Object(I["a"])(n);function n(t,i){var s;return Object(z["a"])(this,n),s=e.call(this,t,i),s.bindControlEvents(),s}return Object(H["a"])(n,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return this.slideArray.forEach((function(e,n){t.innerHTML+='<li><a href="#slide"'.concat(n+1,'">').concat(n,"</a></li>")})),this.wrapper.appendChild(t),t.dataset.control="slide",t}},{key:"eventControl",value:function(t,e){var n=this;t.addEventListener("click",(function(t){t.preventDefault(),n.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=Object(N["a"])(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl)}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),n}(R),D={name:"TheProjects",data:function(){return{slide:""}},methods:{initSlide:function(){var t=new q(".slide",".slide-wrapper");t.init(),t.addArrow(".prev",".next"),t.addControl()},getIndex:function(){var t=document.querySelector(".active img").getAttribute("alt");this.slide=t}},mounted:function(){this.initSlide(),this.getIndex()}},B=D,J=(n("74af"),Object(u["a"])(B,L,T,!1,null,null,null)),F=J.exports,G={name:"Projetos",components:{TheProjects:F}},V=G,W=Object(u["a"])(V,A,$,!1,null,null,null),K=W.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"contact"},[n("h2",[t._v("Entre em contato")]),n("form",[n("label",{attrs:{for:"nome"}},[t._v("Nome")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],attrs:{type:"text",id:"nome",name:"nome"},domProps:{value:t.nome},on:{input:function(e){e.target.composing||(t.nome=e.target.value)}}}),n("label",{attrs:{for:"email"}},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("textarea",{attrs:{name:"textarea",id:"textarea",rows:"10"}},[t._v("Olá")])]),n("button",{staticClass:"btn"},[t._v("Enviar")])]),t._m(0)])},U=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"medias"},[i("img",{attrs:{src:n("1f4f"),alt:"Contato"}}),i("div",{staticClass:"socials"},[i("a",{attrs:{href:"https://www.linkedin.com/in/matheus-fran%C3%A7a-420b5b12a/",target:"_Blank",title:"linkedin"}},[i("img",{attrs:{src:n("953d"),alt:"Linkedin"}})]),i("a",{attrs:{href:"https://github.com/matheuswfranca",target:"_blank"}},[i("img",{attrs:{src:n("387e"),alt:"Github"}})])])])}],Y={name:"Contato"},Z=Y,tt=(n("ba7a"),Object(u["a"])(Z,Q,U,!1,null,"2fb1bc02",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"})},it=[],st={},at=st,ot=(n("c6f7"),Object(u["a"])(at,nt,it,!1,null,"8fad73f2",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Animais Fantasticos")])},lt=[],ut={},dt=ut,vt=Object(u["a"])(dt,ct,lt,!1,null,null,null),ht=vt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Techno cursos")])},pt=[],ft={},gt=ft,bt=Object(u["a"])(gt,mt,pt,!1,null,null,null),_t=bt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Clima")])},xt=[],Et={},Ct=Et,jt=Object(u["a"])(Ct,yt,xt,!1,null,null,null),St=jt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Bisnik")])},wt=[],Ot={},Pt=Ot,At=Object(u["a"])(Pt,kt,wt,!1,null,null,null),$t=At.exports;i["a"].use(g["a"]);var Lt=[{path:"/",name:"Home",component:P},{path:"/projetos",name:"projetos",component:K},{path:"/projeto/techno",name:"Techno",component:rt,props:!0},{path:"/projeto/animais",name:"Animais Fantasticos",component:ht,props:!0},{path:"/projeto/technocursos",name:"Techno Cursos",component:_t,props:!0},{path:"/projeto/clima",name:"Clima Diario",component:St,props:!0},{path:"/projeto/bisnik",name:"Bisnik",component:$t,props:!0},{path:"/contato",name:"contato",component:et}],Tt=new g["a"]({mode:"history",base:"/portfolio/",routes:Lt}),Mt=Tt,It=n("2f62");i["a"].use(It["a"]);var Nt=new It["a"].Store({state:{currentSlide:null},mutations:{currentSlide:function(t,e){t.currentSlide=e,console.log(this.currentSlide)}},actions:{mudarSlide:function(t,e){t.commit("currentSlide",e),console.log(e)}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:Mt,store:Nt,render:function(t){return t(f)}}).$mount("#app")},"6bda":function(t,e,n){},"74af":function(t,e,n){"use strict";n("6bda")},"85ec":function(t,e,n){},"8da0":function(t,e,n){},"8f33":function(t,e,n){t.exports=n.p+"img/profile-pic.39081b47.png"},"90e5":function(t,e,n){},"953d":function(t,e,n){t.exports=n.p+"img/linkedin.08cd9059.svg"},a376:function(t,e,n){t.exports=n.p+"img/html.54de1526.svg"},b42d:function(t,e,n){},ba7a:function(t,e,n){"use strict";n("e655")},bc0e:function(t,e,n){t.exports=n.p+"img/projeto-5.42df4345.png"},c6f7:function(t,e,n){"use strict";n("8da0")},ca83:function(t,e,n){t.exports=n.p+"img/css.0d61aec5.svg"},cb14:function(t,e,n){"use strict";n("b42d")},db4d:function(t,e,n){t.exports=n.p+"img/projeto-3.9153812c.png"},e655:function(t,e,n){},efa9:function(t,e,n){t.exports=n.p+"img/projeto-4.5f338ab8.png"}});
//# sourceMappingURL=app.c620586d.js.map