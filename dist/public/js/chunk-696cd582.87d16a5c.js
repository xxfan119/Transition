(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696cd582"],{1175:function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),a=n("fdbc"),o=n("17c2"),s=n("9112");for(var r in a){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==o)try{s(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),o=n("ae40"),s=a("forEach"),r=o("forEach");t.exports=s&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"2fcb":function(t,e,n){},"3d67":function(t,e,n){"use strict";n("96c1")},4160:function(t,e,n){"use strict";var i=n("23e7"),a=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4cf9":function(t,e,n){},5863:function(t,e,n){"use strict";n("8f2b")},8400:function(t,e,n){},"8a0b":function(t,e,n){},"8f2b":function(t,e,n){},"96c1":function(t,e,n){},a026:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calZB"},[n("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"radio"},[n("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("van-radio",{attrs:{name:"seven"}},[t._v("七参数")]),n("van-radio",{attrs:{name:"four"}},[t._v("四参数")])],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.radio,expression:"radio === 'seven'"}]},[n("cal",{attrs:{calType:t.radio,paramList:t.sevenParam}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"!==t.radio,expression:"radio !== 'seven'"}]},[n("cal",{attrs:{calType:t.radio,paramList:t.fourParam}})],1)],1)},a=[];n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("68ef"),n("9d70"),n("3743"),n("8a0b");var c=n("d282"),l=n("b1d2"),u=n("ad06"),h=Object(c["a"])("nav-bar"),d=h[0],v=h[1],f=d({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(u["a"],{class:v("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:v("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:v("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[v({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[l["a"]]=this.border,t)]},[e("div",{class:v("content")},[this.hasLeft()&&e("div",{class:v("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[v("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:v("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:v("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}}),p=(n("dc1b"),{inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}),m=n("9884"),b=Object(c["a"])("radio-group"),g=b[0],y=b[1],w=g({mixins:[Object(m["b"])("vanRadio"),p],props:{value:null,disabled:Boolean,direction:String,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){var t=arguments[0];return t("div",{class:y([this.direction]),attrs:{role:"radiogroup"}},[this.slots()])}}),x=(n("dde9"),n("ea8e")),T=function(t){var e=t.parent,n=t.bem,i=t.role;return{mixins:[Object(m["a"])(e),p],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===i&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this,n=t.target,i=this.$refs.icon,a=i===n||i.contains(n);this.isDisabled||!a&&this.labelDisabled?this.$emit("click",t):(this.toggle(),setTimeout((function(){e.$emit("click",t)})))},genIcon:function(){var t=this.$createElement,e=this.checked,i=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(x["a"])(i)}},[this.slots("icon",{checked:e})||t(u["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:i,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}},k=Object(c["a"])("radio"),C=k[0],O=k[1],B=C({mixins:[T({bem:O,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),L=(n("27c7"),n("2b0e")),_=n("2f62"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calZB"},[n("div",{staticClass:"dangqian"},[n("div",{staticStyle:{"margin-top":"10px",position:"relative"}},[t._v(" 当前坐标系坐标 "),n("div",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),n("div",{staticClass:"zuobiao"},[n("div",[t._v("X")]),n("div",[t._v("Y")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v("Z")])]),t._l(t.pointNum,(function(e){return n("div",{key:e},[n("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[n("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(n){return t.delPoint(e)}}})]},proxy:!0}],null,!0)},[n("div",{staticClass:"point"},[n("div",[n("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.X[e-1],callback:function(n){t.$set(t.X,e-1,n)},expression:"X[i - 1]"}})],1),n("div",[n("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Y[e-1],callback:function(n){t.$set(t.Y,e-1,n)},expression:"Y[i - 1]"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[n("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Z[e-1],callback:function(n){t.$set(t.Z,e-1,n)},expression:"Z[i - 1]"}})],1)])])],1)})),n("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.addPoint}},[t._v("添加点位")])],2),n("div",[n("div",{staticStyle:{"margin-top":"10px"},on:{click:function(e){t.show=!0}}},[t._v("选择参数")]),n("div",{staticClass:"pramaitem",on:{click:function(e){return t.showdetail(-1)}}},[n("div",[n("div",[t._v("ΔX")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[0])/100:""))])]),n("div",[n("div",[t._v("ΔY")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[1])/100:""))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[n("div",[t._v("ΔZ")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[2])/100:""))])]),n("div",[n("div",[t._v("m")]),n("div",[t._v(" "+t._s(t.L.length?"seven"===t.calType?Math.round(100*t.L[3])/100:Math.round(100*t.L[2])/100:"")+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"!==t.calType,expression:"calType !== 'seven'"}]},[n("div",[t._v("α")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[3])/100:""))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[n("div",[t._v("εX")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[4])/100:""))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[n("div",[t._v("εY")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[5])/100:""))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[n("div",[t._v("εZ")]),n("div",[t._v(t._s(t.L.length?Math.round(100*t.L[6])/100:""))])])]),n("van-action-sheet",{attrs:{title:"参数列表"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"prama"},[n("div",[t._v("ΔX")]),n("div",[t._v("ΔY")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v("ΔZ")]),n("div",[t._v("m")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"!==t.calType,expression:"calType !== 'seven'"}]},[t._v("α")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v("εX")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v("εY")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v("εZ")])]),n("ul",{staticClass:"paramList"},[t._l(t.paramList,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.showdetail(i)}}},[n("div",[t._v(t._s(Math.round(100*e[0])/100))]),n("div",[t._v(t._s(Math.round(100*e[1])/100))]),n("div",[t._v(t._s(Math.round(100*e[2])/100))]),n("div",[t._v(t._s(Math.round(100*e[3])/100))]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v(" "+t._s(Math.round(100*e[4])/100)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v(" "+t._s(Math.round(100*e[5])/100)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v(" "+t._s(Math.round(100*e[6])/100)+" ")])])})),n("li",{on:{click:t.clearprama}},[t._v("格式化参数")])],2)])])],1),n("div",{staticClass:"mubiao"},[n("div",[t._v("目标坐标系坐标")]),n("div",{staticClass:"zuobiao"},[n("div",[t._v("X")]),n("div",[t._v("Y")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[t._v("Z")])]),t._l(t.pointNum,(function(e){return n("div",{key:e},[n("div",{staticClass:"point"},[n("div",[n("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TX[e-1],callback:function(n){t.$set(t.TX,e-1,n)},expression:"TX[i - 1]"}})],1),n("div",[n("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TY[e-1],callback:function(n){t.$set(t.TY,e-1,n)},expression:"TY[i - 1]"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"seven"===t.calType,expression:"calType === 'seven'"}]},[n("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TZ[e-1],callback:function(n){t.$set(t.TZ,e-1,n)},expression:"TZ[i - 1]"}})],1)])])}))],2),n("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.calZB}},[t._v("计算坐标")])],1)},j=[],N=(n("99af"),n("d81d"),n("a9e3"),n("b680"),n("be7f"),n("565f")),M=(n("66b9"),n("b650")),$=(n("a71a"),n("4d75"),n("e3b3"),n("8400"),n("c31d")),P=n("2638"),X=n.n(P),Y=n("ba31"),Z=n("6605"),A=n("a142"),F=Object(c["a"])("popup"),E=F[0],D=F[1],I=E({mixins:[Object(Z["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},methods:{onClickCloseIcon:function(t){this.$emit("click-close-icon",t),this.close()}},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,i=this.position,a=this.duration,o="center"===i,s=this.transition||(o?"van-fade":"van-popup-slide-"+i),r={};if(Object(A["c"])(a)){var c=o?"animationDuration":"transitionDuration";r[c]=a+"s"}return e("transition",{attrs:{appear:this.transitionAppear,name:s},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:r,class:D((t={round:n},t[i]=i,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(u["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:D("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}}),z=n("543e"),R=Object(c["a"])("action-sheet"),q=R[0],G=R[1];function H(t,e,n,i){var a=e.title,o=e.cancelText,s=e.closeable;function r(){Object(Y["a"])(i,"input",!1),Object(Y["a"])(i,"cancel")}function c(){if(a)return t("div",{class:G("header")},[a,s&&t(u["a"],{attrs:{name:e.closeIcon},class:G("close"),on:{click:r}})])}function l(n,a){var o=n.disabled,s=n.loading,r=n.callback;function c(t){t.stopPropagation(),o||s||(r&&r(n),e.closeOnClickAction&&Object(Y["a"])(i,"input",!1),L["a"].nextTick((function(){Object(Y["a"])(i,"select",n,a)})))}function l(){return s?t(z["a"],{class:G("loading-icon")}):[t("span",{class:G("name")},[n.name]),n.subname&&t("div",{class:G("subname")},[n.subname])]}return t("button",{attrs:{type:"button"},class:[G("item",{disabled:o,loading:s}),n.className],style:{color:n.color},on:{click:c}},[l()])}function h(){if(o)return[t("div",{class:G("gap")}),t("button",{attrs:{type:"button"},class:G("cancel"),on:{click:r}},[o])]}function d(){var i=(null==n.description?void 0:n.description())||e.description;if(i)return t("div",{class:G("description")},[i])}return t(I,X()([{class:G(),attrs:{position:"bottom",round:e.round,value:e.value,overlay:e.overlay,duration:e.duration,lazyRender:e.lazyRender,lockScroll:e.lockScroll,getContainer:e.getContainer,closeOnPopstate:e.closeOnPopstate,closeOnClickOverlay:e.closeOnClickOverlay,safeAreaInsetBottom:e.safeAreaInsetBottom}},Object(Y["b"])(i,!0)]),[c(),d(),t("div",{class:G("content")},[e.actions&&e.actions.map(l),null==n.default?void 0:n.default()]),h()])}H.props=Object($["a"])({},Z["b"],{title:String,actions:Array,duration:[Number,String],cancelText:String,description:String,getContainer:[String,Function],closeOnPopstate:Boolean,closeOnClickAction:Boolean,round:{type:Boolean,default:!0},closeable:{type:Boolean,default:!0},closeIcon:{type:String,default:"cross"},safeAreaInsetBottom:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}});var V,J=q(H),W=(n("4467"),n("c36e")),K=(n("e7e5"),n("d399")),Q=(n("bc1b"),n("1175"),n("4cf9"),n("2fcb"),Object(c["a"])("goods-action")),U=Q[0],tt=Q[1],et=U({mixins:[Object(m["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:tt({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),nt=n("48f4"),it=Object(c["a"])("goods-action-button"),at=it[0],ot=it[1],st=at({mixins:[Object(m["a"])("vanGoodsAction")],props:Object($["a"])({},nt["c"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(nt["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(M["a"],{class:ot([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),rt=Object(c["a"])("dialog"),ct=rt[0],lt=rt[1],ut=rt[2],ht=ct({mixins:[Object(Z["a"])()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){this.$emit("opened")},onClosed:function(){this.$emit("closed")},genRoundButtons:function(){var t=this,e=this.$createElement;return e(et,{class:lt("footer")},[this.showCancelButton&&e(st,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||ut("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:lt("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(st,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||ut("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:lt("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,n=this.$createElement,i=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[l["d"],lt("footer")]},[this.showCancelButton&&n(M["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||ut("cancel")},class:lt("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(M["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||ut("confirm")},class:[lt("confirm"),(t={},t[l["b"]]=i,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:lt("content")},[e]);var i=this.message,a=this.messageAlign;if(i){var o,s,r={class:lt("message",(o={"has-title":t},o[a]=a,o)),domProps:(s={},s[this.allowHtml?"innerHTML":"textContent"]=i,s)};return n("div",{class:lt("content",{isolated:!t})},[n("div",X()([{},r]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),i=this.slots("title")||this.title,a=i&&t("div",{class:lt("header",{isolated:!e&&!n})},[i]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e},class:[lt([this.theme]),this.className],style:{width:Object(x["a"])(this.width)}},[a,this.genContent(i,n),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});function dt(t){return document.body.contains(t)}function vt(){V&&V.$destroy(),V=new(L["a"].extend(ht))({el:document.createElement("div"),propsData:{lazyRender:!1}}),V.$on("input",(function(t){V.value=t}))}function ft(t){return A["g"]?Promise.resolve():new Promise((function(e,n){V&&dt(V.$el)||vt(),Object($["a"])(V,ft.currentOptions,t,{resolve:e,reject:n})}))}ft.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){V["confirm"===t?"resolve":"reject"](t)}},ft.alert=ft,ft.confirm=function(t){return ft(Object($["a"])({showCancelButton:!0},t))},ft.close=function(){V&&(V.value=!1)},ft.setDefaultOptions=function(t){Object($["a"])(ft.currentOptions,t)},ft.resetDefaultOptions=function(){ft.currentOptions=Object($["a"])({},ft.defaultOptions)},ft.resetDefaultOptions(),ft.install=function(){L["a"].use(ht)},ft.Component=ht,L["a"].prototype.$dialog=ft;var pt=ft;L["a"].use(pt),L["a"].use(K["a"]),L["a"].use(W["a"]),L["a"].use(J),L["a"].use(M["a"]),L["a"].use(N["a"]);var mt={props:{calType:{type:String,require:!0},paramList:{type:Array,require:!0}},data:function(){return{show:!1,pointNum:1,X:[],Y:[],Z:[],TX:[],TY:[],TZ:[],L:[]}},methods:{clear:function(){this.X=[],this.Y=[],this.Z=[],this.TX=[],this.TY=[],this.TZ=[],this.L=[]},clearprama:function(){this.L=[],this.show=!1},delPoint:function(t){this.pointNum>1?(this.X=this.X.filter((function(e,n){return n!==t-1})),this.Y=this.Y.filter((function(e,n){return n!==t-1})),"seven"===this.calType&&(this.Z=this.Z.filter((function(e,n){return n!==t-1})),this.TZ=this.TZ.filter((function(e,n){return n!==t-1}))),this.TX=this.TX.filter((function(e,n){return n!==t-1})),this.TY=this.TY.filter((function(e,n){return n!==t-1})),this.pointNum--):K["a"].fail("至少计算一个点")},addPoint:function(){this.pointNum++},calS:function(){var t=this,e=this.X.map((function(t){return Number(t)})),n=this.Y.map((function(t){return Number(t)})),i=this.Z.map((function(t){return Number(t)})),a=e.length;if(a!==n.length||a!==i.length||a<1)K["a"].fail("请输入正确的坐标数据");else if(0!==this.L.length){for(var o=[],s=0;s<3*this.pointNum;s++)s%3===0?o[s]=[1,0,0,e[Math.floor(s/3)],0,-i[Math.floor(s/3)],n[Math.floor(s/3)]]:s%3===1?o[s]=[0,1,0,n[Math.floor(s/3)],i[Math.floor(s/3)],0,-e[Math.floor(s/3)]]:s%3===2&&(o[s]=[0,0,1,i[Math.floor(s/3)],-n[Math.floor(s/3)],e[Math.floor(s/3)],0]);for(var r=this.L.map((function(e,n){return n<=3?e:[e[0]*t.L[3][0]]})),c=o.MatrixMultiply(r),l=0;l<c.length;l++)l%3===0?this.TX.push(Math.round(1e4*c[l][0])/1e4):l%3===1?this.TY.push(Math.round(1e4*c[l][0])/1e4):l%3===2&&this.TZ.push(Math.round(1e4*c[l][0])/1e4)}else K["a"].fail("请选择参数")},calF:function(){var t=this,e=this.X.map((function(t){return Number(t)})),n=this.Y.map((function(t){return Number(t)})),i=e.length;if(i!==n.length||i<1)K["a"].fail("请输入正确的坐标数据");else if(0!==this.L.length){for(var a=[],o=0;o<2*this.pointNum;o++)o%2===0?a[o]=[1,0,e[Math.floor(o/2)],-n[Math.floor(o/2)]]:o%2===1&&(a[o]=[0,1,n[Math.floor(o/2)],e[Math.floor(o/2)]]);for(var s=this.L.map((function(e,n){return n<=1?e:2===n?[t.L[2][0]*Math.cos(t.L[3][0])]:[t.L[2][0]*Math.sin(t.L[3][0])]})),r=a.MatrixMultiply(s),c=0;c<r.length;c++)c%2===0?this.TX.push(Math.round(1e4*r[c][0])/1e4):c%2===1&&this.TY.push(Math.round(1e4*r[c][0])/1e4)}else K["a"].fail("请选择参数")},calZB:function(){this.TX=[],this.TY=[],this.TZ=[],"seven"===this.calType?this.calS():this.calF()},showdetail:function(t){var e=this;"seven"===this.calType?-1===t?this.L.length?pt.confirm({title:"参数详情",message:"\n        ΔX：".concat(this.L[0][0].toFixed(4),"  \n         ΔY：").concat(this.L[1][0].toFixed(4),"\n         ΔZ：").concat(this.L[2][0].toFixed(4),"  \n         m：").concat(this.L[3][0].toFixed(4),"\n         εX：").concat(this.L[4][0].toFixed(6),"  \n         εY：").concat(this.L[5][0].toFixed(6),"\n         εZ：").concat(this.L[6][0].toFixed(6))}).then((function(){e.show=!1})).catch((function(){})):K["a"].fail("请选择参数"):pt.confirm({title:"参数详情",message:"\n        ΔX：".concat(this.paramList[t][0].toFixed(4),"  \n         ΔY：").concat(this.paramList[t][1].toFixed(4),"\n         ΔZ：").concat(this.paramList[t][2].toFixed(4),"  \n         m：").concat(this.paramList[t][3].toFixed(4),"\n         εX：").concat(this.paramList[t][4].toFixed(6),"  \n         εY：").concat(this.paramList[t][5].toFixed(6),"\n         εZ：").concat(this.paramList[t][6].toFixed(6))}).then((function(){e.L=e.paramList[t].map((function(t){return[t]})),e.show=!1})).catch((function(){})):-1===t?this.L.length?pt.confirm({title:"参数详情",message:"\n         ΔX：".concat(this.L[0][0].toFixed(4),"  \n         ΔY：").concat(this.L[1][0].toFixed(4),"\n         m：").concat(this.L[2][0].toFixed(4),"  \n         α：").concat(this.L[3][0].toFixed(4),"\n         ")}).then((function(){e.show=!1})).catch((function(){})):K["a"].fail("请选择参数"):pt.confirm({title:"参数详情",message:"\n         ΔX：".concat(this.paramList[t][0],"  \n         ΔY：").concat(this.paramList[t][1],"\n         m：").concat(this.paramList[t][2],"  \n         α：").concat(this.paramList[t][3])}).then((function(){e.L=e.paramList[t].map((function(t){return[t]})),e.show=!1})).catch((function(){}))}}},bt=mt,gt=(n("5863"),n("2877")),yt=Object(gt["a"])(bt,S,j,!1,null,null,null),wt=yt.exports;L["a"].use(B),L["a"].use(w),L["a"].use(f);var xt={components:{Cal:wt},data:function(){return{radio:"seven"}},methods:{onClickLeft:function(){this.$router.go(-1)}},computed:r({},Object(_["b"])(["sevenParam","fourParam"]))},Tt=xt,kt=(n("3d67"),Object(gt["a"])(Tt,i,a,!1,null,null,null));e["default"]=kt.exports},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),o=n("df75"),s=n("d039"),r=s((function(){o(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return o(a(t))}})},dbb4:function(t,e,n){var i=n("23e7"),a=n("83ab"),o=n("56ef"),s=n("fc6a"),r=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,i=s(t),a=r.f,l=o(i),u={},h=0;while(l.length>h)n=a(i,e=l[h++]),void 0!==n&&c(u,e,n);return u}})},dc1b:function(t,e,n){},dde9:function(t,e,n){},e439:function(t,e,n){var i=n("23e7"),a=n("d039"),o=n("fc6a"),s=n("06cf").f,r=n("83ab"),c=a((function(){s(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return s(o(t),e)}})}}]);
//# sourceMappingURL=chunk-696cd582.87d16a5c.js.map