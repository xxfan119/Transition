(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3f4c50a"],{"1e4b":function(t,e,i){"use strict";i.r(e);var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-tabs",{attrs:{animated:"",background:"#e2e2e2"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"七参数"}},[i("seven",{staticStyle:{"margin-top":"20px"}})],1),i("van-tab",{attrs:{title:"四参数"}},[i("four",{staticStyle:{"margin-top":"20px"}})],1)],1)],1)},r=[],a=(i("68ef"),i("9d70"),i("ae9e"),i("b807"),i("d282")),o=i("ea8e"),l=i("a142"),c=i("4598"),u=i("a8c1");function h(t,e,i){Object(c["a"])(n);var s=0,r=t.scrollLeft,a=0===i?1:Math.round(1e3*i/16);function o(){t.scrollLeft+=(e-r)/a,++s<a&&(n=Object(c["b"])(o))}o()}function d(t,e,i,n){var s=Object(u["c"])(t),r=s<e,a=0===i?1:Math.round(1e3*i/16),o=(e-s)/a;function l(){s+=o,(r&&s>e||!r&&s<e)&&(s=e),Object(u["h"])(t,s),r&&s<e||!r&&s>e?Object(c["b"])(l):n&&Object(c["b"])(n)}l()}var f=i("48f4");function v(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}var p=i("1325"),m=i("b1d2");function b(t){var e=t.interceptor,i=t.args,n=t.done;if(e){var s=e.apply(void 0,i);Object(l["f"])(s)?s.then((function(t){t&&n()})).catch(l["h"]):s&&n()}else n()}var x=i("9884"),g=i("5fbe"),y=i("6f2f"),C=Object(a["a"])("tab"),S=C[0],T=C[1],_=S({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var s=i?this.activeColor:this.inactiveColor;return s&&(t.color=s),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,e=t("span",{class:T("text",{ellipsis:!this.scrollable})},[this.slots()||this.title]);return this.dot||Object(l["c"])(this.info)&&""!==this.info?t("span",{class:T("text-wrapper")},[e,t(y["a"],{attrs:{dot:this.dot,info:this.info}})]):e}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[T({active:this.isActive,disabled:this.disabled})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),k=Object(a["a"])("sticky"),w=k[0],N=k[1],X=w({mixins:[Object(g["a"])((function(t,e){if(this.scroller||(this.scroller=Object(u["d"])(this.$el)),this.observer){var i=e?"observe":"unobserve";this.observer[i](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{offsetTopPx:function(){return Object(o["b"])(this.offsetTop)},style:function(){if(this.fixed){var t={};return Object(l["c"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTopPx&&this.fixed&&(t.top=this.offsetTopPx+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},created:function(){var t=this;!l["g"]&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!v(this.$el)){this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTopPx,n=Object(u["c"])(window),s=Object(u["a"])(this.$el),r=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var a=s+e.offsetHeight;if(n+i+this.height>a){var o=this.height+n-a;return o<this.height?(this.fixed=!0,this.transform=-(o+i)):this.fixed=!1,void r()}}n+i>s?(this.fixed=!0,this.transform=0):this.fixed=!1,r()}}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:N({fixed:e}),style:this.style},[this.slots()])])}}),$=i("c31d"),Y=i("3875"),O=Object(a["a"])("tabs"),I=O[0],j=O[1],B=50,M=I({mixins:[Y["a"]],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=B&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:j("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:j("content",{animated:this.animated}),on:Object($["a"])({},this.listeners)},[this.genChildren()])}}),Z=Object(a["a"])("tabs"),z=Z[0],L=Z[1],P=z({mixins:[Object(x["b"])("vanTabs"),Object(g["a"])((function(t){this.scroller||(this.scroller=Object(u["d"])(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],model:{prop:"active"},props:{color:String,border:Boolean,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:5}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},offsetTopPx:function(){return Object(o["b"])(this.offsetTop)},scrollOffset:function(){return this.sticky?this.offsetTopPx+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(u["g"])(Math.ceil(Object(u["a"])(this.$el)-this.offsetTopPx))},scrollspy:function(t){t?Object(p["b"])(this.scroller,"scroll",this.onScroll,!0):Object(p["a"])(this.scroller,"scroll",this.onScroll)}},mounted:function(){this.init()},activated:function(){this.init(),this.setLine()},methods:{resize:function(){this.setLine()},init:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=Object(u["e"])(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!v(t.$el)){var n=i[t.currentIndex].$el,s=t.lineWidth,r=t.lineHeight,a=n.offsetLeft+n.offsetWidth/2,c={width:Object(o["a"])(s),backgroundColor:t.color,transform:"translateX("+a+"px) translateX(-50%)"};if(e&&(c.transitionDuration=t.duration+"s"),Object(l["c"])(r)){var u=Object(o["a"])(r);c.height=u,c.borderRadius=u}t.lineStyle=c}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){var e=this.findAvailableTab(t);if(Object(l["c"])(e)){var i=this.children[e],n=i.computedName,s=null!==this.currentIndex;this.currentIndex=e,n!==this.active&&(this.$emit("input",n),s&&this.$emit("change",n,i.title))}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t,e){var i=this,n=this.children[e],s=n.title,r=n.disabled,a=n.computedName;r?this.$emit("disabled",a,s):(b({interceptor:this.beforeChange,args:[a],done:function(){i.setCurrentIndex(e),i.scrollToCurrentContent()}}),this.$emit("click",a,s),Object(f["b"])(t.$router,t))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,n=e[this.currentIndex].$el,s=n.offsetLeft-(i.offsetWidth-n.offsetWidth)/2;h(i,s,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollTo:function(t){var e=this;this.$nextTick((function(){e.setCurrentIndexByName(t),e.scrollToCurrentContent(!0)}))},scrollToCurrentContent:function(t){var e=this;if(void 0===t&&(t=!1),this.scrollspy){var i=this.children[this.currentIndex],n=null==i?void 0:i.$el;if(n){var s=Object(u["a"])(n,this.scroller)-this.scrollOffset;this.lockScroll=!0,d(this.scroller,s,t?0:+this.duration,(function(){e.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){var i=Object(u["f"])(t[e].$el);if(i>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,i=arguments[0],n=this.type,s=this.animated,r=this.scrollable,a=this.children.map((function(t,s){var a;return i(_,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:null!=(a=t.badge)?a:t.info,title:t.title,color:e.color,isActive:s===e.currentIndex,disabled:t.disabled,scrollable:r,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor},style:t.titleStyle,class:t.titleClass,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(t,s)}}})})),o=i("div",{ref:"wrap",class:[L("wrap",{scrollable:r}),(t={},t[m["e"]]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:L("nav",[n,{complete:this.scrollable}]),style:this.navStyle},[this.slots("nav-left"),a,"line"===n&&i("div",{class:L("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:L([n])},[this.sticky?i(X,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[o]):o,i(M,{attrs:{count:this.children.length,animated:s,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}}),A=(i("f319"),Object(a["a"])("tab")),F=A[0],H=A[1],E=F({mixins:[Object(x["a"])("vanTabs")],props:Object($["a"])({},f["c"],{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,titleClass:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){var t;return null!=(t=this.name)?t:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine(),this.parent.scrollIntoView()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick((function(){e.parent.$emit("rendered",e.computedName,e.title)}))}},render:function(t){var e=this.slots,i=this.parent,n=this.isActive,s=e();if(s||i.animated){var r=i.scrollspy||n,a=this.inited||i.scrollspy||!i.lazyRender,o=a?s:t();return i.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:H("pane-wrapper",{inactive:!n})},[t("div",{class:H("pane")},[o])]):t("div",{directives:[{name:"show",value:r}],attrs:{role:"tabpanel"},class:H("pane")},[o])}}}),R=(i("3743"),i("8a0b"),i("ad06")),q=Object(a["a"])("nav-bar"),V=q[0],W=q[1],D=V({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(R["a"],{class:W("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:W("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:W("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[W({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[m["a"]]=this.border,t)]},[e("div",{class:W("content")},[this.hasLeft()&&e("div",{class:W("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[W("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:W("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:W("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}}),G=i("2b0e"),J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"seven"},[i("div",{staticClass:"dangqian"},[i("div",[t._v(" 当前坐标系坐标 "),i("div",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),i("van-radio-group",{staticClass:"zuobiao",attrs:{direction:"horizontal"},model:{value:t.thisCS,callback:function(e){t.thisCS=e},expression:"thisCS"}},[i("van-radio",{attrs:{name:"xyh"}},[t._v("x,y,h")]),i("van-radio",{attrs:{name:"XYZ"}},[t._v("X,Y,Z")]),i("van-radio",{attrs:{name:"BLH"}},[t._v("B,L,H")])],1),i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:"xyh"===t.thisCS,expression:"thisCS === 'xyh'"}],staticClass:"zuobiao"},[i("div",[t._v("x")]),i("div",[t._v("y")]),i("div",[t._v("h")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"XYZ"===t.thisCS,expression:"thisCS === 'XYZ'"}],staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")]),i("div",[t._v("Z")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"BLH"===t.thisCS,expression:"thisCS === 'BLH'"}],staticClass:"zuobiao"},[i("div",[t._v("B")]),i("div",[t._v("L")]),i("div",[t._v("H")])])]),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[i("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(i){return t.delPoint(e)}}})]},proxy:!0}],null,!0)},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.X[e-1],callback:function(i){t.$set(t.X,e-1,i)},expression:"X[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Y[e-1],callback:function(i){t.$set(t.Y,e-1,i)},expression:"Y[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Z[e-1],callback:function(i){t.$set(t.Z,e-1,i)},expression:"Z[i - 1]"}})],1)])],1)})),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.addPoint}},[t._v("添加公共点")])],2),i("div",{staticClass:"mubiao"},[i("div",[t._v("目标坐标系坐标")]),i("van-dropdown-menu",[i("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),i("van-radio-group",{staticClass:"zuobiao",attrs:{direction:"horizontal"},model:{value:t.thatCS,callback:function(e){t.thatCS=e},expression:"thatCS"}},[i("van-radio",{attrs:{name:"xyh"}},[t._v("x,y,h")]),i("van-radio",{attrs:{name:"XYZ"}},[t._v("X,Y,Z")]),i("van-radio",{attrs:{name:"BLH"}},[t._v("B,L,H")])],1),i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:"xyh"===t.thatCS,expression:"thatCS === 'xyh'"}],staticClass:"zuobiao"},[i("div",[t._v("x")]),i("div",[t._v("y")]),i("div",[t._v("h")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"XYZ"===t.thatCS,expression:"thatCS === 'XYZ'"}],staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")]),i("div",[t._v("Z")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"BLH"===t.thatCS,expression:"thatCS === 'BLH'"}],staticClass:"zuobiao"},[i("div",[t._v("B")]),i("div",[t._v("L")]),i("div",[t._v("H")])])]),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TX[e-1],callback:function(i){t.$set(t.TX,e-1,i)},expression:"TX[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TY[e-1],callback:function(i){t.$set(t.TY,e-1,i)},expression:"TY[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TZ[e-1],callback:function(i){t.$set(t.TZ,e-1,i)},expression:"TZ[i - 1]"}})],1)])}))],2),i("div",{staticClass:"param"},[i("div",[i("div",[t._v("ΔX:"+t._s(t.ΔX))]),i("div",[t._v("ΔY:"+t._s(t.ΔY))]),i("div",[t._v("ΔΖ:"+t._s(t.ΔZ))])]),i("div",[i("div",[t._v("m:"+t._s(t.m))]),i("div",[t._v("εX:"+t._s(t.εX))]),i("div",[t._v("εY:"+t._s(t.εY))]),i("div",[t._v("εZ:"+t._s(t.εZ))])])]),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.calParam}},[t._v("计算参数")])],1)},K=[],Q=(i("4de4"),i("d81d"),i("45fc"),i("a9e3"),i("b680"),i("d3b7"),i("25f0"),i("be7f"),i("565f")),U=(i("66b9"),i("b650")),tt=(i("4467"),i("c36e")),et=(i("e7e5"),i("d399")),it=(i("a44c"),i("e27c")),nt=(i("4ddd"),i("9f14")),st=(i("61ae"),i("d314")),rt=(i("09d3"),i("2d6d")),at=i("27c7");G["a"].use(rt["a"]),G["a"].use(st["a"]),G["a"].use(nt["a"]),G["a"].use(it["a"]),G["a"].use(et["a"]),G["a"].use(tt["a"]),G["a"].use(U["a"]),G["a"].use(Q["a"]);var ot={data:function(){return{value1:0,value2:0,option1:[{text:"请选择坐标系统",value:0},{text:"北京54",value:1},{text:"西安80",value:2},{text:"CGCS2000",value:3}],option2:[{text:"请选择坐标系统",value:0},{text:"北京54",value:1},{text:"西安80",value:2},{text:"CGCS2000",value:3}],thisCS:"xyh",thatCS:"xyh",pointNum:3,X:[100,150,200],Y:[80,100,70],Z:[60,40,50],TX:[176.6503,237.7859,298.2639],TY:[115.6671,126.1854,121.3026],TZ:[111.3935,87.9545,167.1516],"ΔX":null,"ΔY":null,"ΔZ":null,m:null,"εX":null,"εY":null,"εZ":null}},methods:{clear:function(){this.X=[],this.Y=[],this.Z=[],this.TX=[],this.TY=[],this.TZ=[]},delPoint:function(t){this.pointNum>3?(this.X=this.X.filter((function(e,i){return i!==t-1})),this.Y=this.Y.filter((function(e,i){return i!==t-1})),this.Z=this.Z.filter((function(e,i){return i!==t-1})),this.TX=this.TX.filter((function(e,i){return i!==t-1})),this.TY=this.TY.filter((function(e,i){return i!==t-1})),this.TZ=this.TZ.filter((function(e,i){return i!==t-1})),this.pointNum--,et["a"].success("删除成功")):et["a"].fail("至少需要三个点")},addPoint:function(){this.pointNum++},calParam:function(){var t=this.X.map((function(t){return Number(t)})),e=this.Y.map((function(t){return Number(t)})),i=this.Z.map((function(t){return Number(t)})),n=this.TX.map((function(t){return Number(t)})),s=this.TY.map((function(t){return Number(t)})),r=this.TZ.map((function(t){return Number(t)})),a=t.length;if(t.length<3||a!==e.length||a!==i.length||a!==n.length||a!==s.length||a!==r.length)et["a"].fail("请输入正确的坐标数据");else if(0!==this.value1&&0!==this.value2)if(this.value1!==this.value2){if("xyh"!==this.thisCS)if("XYZ"===this.thisCS)for(var o=0;o<a;o++){var l=Object(at["b"])(t[o],e[o],i[o],at["a"][this.value1-1]),c=Object(at["e"])(l[0],l[1],l[2],at["a"][this.value1-1]);t[o]=c[0],e[o]=c[1],i[o]=c[2]}else for(var u=0;u<a;u++){var h=Object(at["e"])(t[u],e[u],i[u],at["a"][this.value1-1]);t[u]=h[0],e[u]=h[1],i[u]=h[2]}if("xyh"!==this.thatCS)if("XYZ"===this.thatCS)for(var d=0;d<a;d++){var f=Object(at["b"])(n[d],s[d],r[d],at["a"][this.value1-1]),v=Object(at["e"])(f[0],f[1],f[2],at["a"][this.value1-1]);n[d]=v[0],s[d]=v[1],r[d]=v[2]}else for(var p=0;p<a;p++){var m=Object(at["e"])(n[p],s[p],r[p],at["a"][this.value1-1]);n[p]=m[0],s[p]=m[1],r[p]=m[2]}this.cal(t,e,i,n,s,r)}else et["a"].fail("坐标系统相同");else et["a"].fail("请选择坐标系统")},cal:function(t,e,i,n,s,r){for(var a=[],o=0;o<3*this.pointNum;o++)o%3===0?a[o]=[1,0,0,t[Math.floor(o/3)],0,-i[Math.floor(o/3)],e[Math.floor(o/3)]]:o%3===1?a[o]=[0,1,0,e[Math.floor(o/3)],i[Math.floor(o/3)],0,-t[Math.floor(o/3)]]:o%3===2&&(a[o]=[0,0,1,i[Math.floor(o/3)],-e[Math.floor(o/3)],t[Math.floor(o/3)],0]);for(var l=[],c=0;c<3*this.pointNum;c++)c%3===0?l[c]=[n[Math.floor(c/3)]]:c%3===1?l[c]=[s[Math.floor(c/3)]]:c%3===2&&(l[c]=[r[Math.floor(c/3)]]);for(var u=a.Transpose().MatrixMultiply(a).Inversion(),h=a.Transpose().MatrixMultiply(l),d=u.MatrixMultiply(h),f=[],v=0;v<d.length;v++)v<=3?f.push(Number(d[v][0])):f.push(Number(d[v][0]/f[3]));this.ΔX=f[0].toFixed(4),this.ΔY=f[1].toFixed(4),this.ΔZ=f[2].toFixed(4),this.m=f[3].toFixed(4),this.εX=f[4].toFixed(6),this.εY=f[5].toFixed(6),this.εZ=f[6].toFixed(6),this.$store.state.sevenParam.some((function(t){return t.toString()===f.toString()}))?et["a"].fail("参数已存在"):this.$store.commit("setSParam",f)}}},lt=ot,ct=(i("a075"),i("2877")),ut=Object(ct["a"])(lt,J,K,!1,null,null,null),ht=ut.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"four"},[i("div",{staticClass:"dangqian"},[i("div",[t._v(" 当前坐标系坐标 "),i("div",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),t._m(0),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[i("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(i){return t.delPoint(e)}}})]},proxy:!0}],null,!0)},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.X[e-1],callback:function(i){t.$set(t.X,e-1,i)},expression:"X[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Y[e-1],callback:function(i){t.$set(t.Y,e-1,i)},expression:"Y[i - 1]"}})],1)])],1)})),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.addPoint}},[t._v("添加公共点")])],2),i("div",{staticClass:"mubiao"},[i("div",[t._v("目标坐标系坐标")]),t._m(1),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TX[e-1],callback:function(i){t.$set(t.TX,e-1,i)},expression:"TX[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TY[e-1],callback:function(i){t.$set(t.TY,e-1,i)},expression:"TY[i - 1]"}})],1)])}))],2),i("div",{staticClass:"param"},[i("div",[i("div",[t._v("ΔX:"+t._s(t.ΔX))]),i("div",[t._v("ΔY:"+t._s(t.ΔY))])]),i("div",[i("div",[t._v("m:"+t._s(t.m))]),i("div",[t._v("α:"+t._s(t.α))])])]),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.calParam}},[t._v("计算参数")])],1)},ft=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")])])}];G["a"].use(et["a"]),G["a"].use(tt["a"]),G["a"].use(U["a"]),G["a"].use(Q["a"]);var vt={data:function(){return{pointNum:2,X:[93901.7328,91789.1944,90245.3942],Y:[5490.2931,4928.0485,3121.8608],TX:[93901.0625,91788.5262,90244.732],TY:[5372.2391,4809.9948,3003.808],"ΔX":null,"ΔY":null,m:null,"α":null}},methods:{clear:function(){this.X=[],this.Y=[],this.TX=[],this.TY=[]},delPoint:function(t){this.pointNum>2?(this.X=this.X.filter((function(e,i){return i!==t-1})),this.Y=this.Y.filter((function(e,i){return i!==t-1})),this.TX=this.TX.filter((function(e,i){return i!==t-1})),this.TY=this.TY.filter((function(e,i){return i!==t-1})),this.pointNum--,et["a"].success("删除成功")):et["a"].fail("至少需要两个点")},addPoint:function(){this.pointNum++},calParam:function(){var t=this.X.map((function(t){return Number(t)})),e=this.Y.map((function(t){return Number(t)})),i=this.TX.map((function(t){return Number(t)})),n=this.TY.map((function(t){return Number(t)})),s=t.length;if(t.length<2||s!==e.length||s!==i.length||s!==n.length)et["a"].fail("请输入正确的坐标数据");else{for(var r=[],a=0;a<2*this.pointNum;a++)a%2===0?r[a]=[1,0,t[Math.floor(a/2)],-e[Math.floor(a/2)]]:a%2===1&&(r[a]=[0,1,e[Math.floor(a/2)],t[Math.floor(a/2)]]);for(var o=[],l=0;l<2*this.pointNum;l++)l%2===0?o[l]=[i[Math.floor(l/2)]]:l%2===1&&(o[l]=[n[Math.floor(l/2)]]);for(var c=r.Transpose().MatrixMultiply(r).Inversion(),u=r.Transpose().MatrixMultiply(o),h=c.MatrixMultiply(u),d=[],f=0;f<h.length;f++)f<2&&d.push(Number(h[f][0].toFixed(4)));var v=Math.pow(h[2][0],2)+Math.pow(h[3][0],2);d[2]=Number(Math.sqrt(v).toFixed(6)),d[3]=Math.atan(h[3][0]/h[2][0]),this.ΔX=d[0],this.ΔY=d[1],this.m=d[2],this.α=d[3],this.$store.state.fourParam.some((function(t){return t.toString()===d.toString()}))?et["a"].fail("参数已存在"):this.$store.commit("setFParam",d)}}}},pt=vt,mt=(i("fdef"),Object(ct["a"])(pt,dt,ft,!1,null,null,null)),bt=mt.exports;G["a"].use(D),G["a"].use(E),G["a"].use(P);var xt={components:{seven:ht,Four:bt},data:function(){return{active:0}},methods:{onClickLeft:function(){this.$router.go(-1)}}},gt=xt,yt=(i("3e0c"),Object(ct["a"])(gt,s,r,!1,null,null,null));e["default"]=yt.exports},"2e11":function(t,e,i){},"3e0c":function(t,e,i){"use strict";i("2e11")},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return u}));var n=i("a142"),s=Date.now();function r(t){var e=Date.now(),i=Math.max(0,16-(e-s)),n=setTimeout(t,i);return s=e+i,n}var a=n["g"]?t:window,o=a.requestAnimationFrame||r,l=a.cancelAnimationFrame||a.clearTimeout;function c(t){return o.call(a,t)}function u(t){l.call(a,t)}}).call(this,i("c8ba"))},"45fc":function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").some,r=i("a640"),a=i("ae40"),o=r("some"),l=a("some");n({target:"Array",proto:!0,forced:!o||!l},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"8a0b":function(t,e,i){},a075:function(t,e,i){"use strict";i("ce27")},ae9e:function(t,e,i){},b807:function(t,e,i){},ce27:function(t,e,i){},df62:function(t,e,i){},f319:function(t,e,i){},fdef:function(t,e,i){"use strict";i("df62")}}]);
//# sourceMappingURL=chunk-e3f4c50a.03182d6b.js.map