(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed35319e"],{"1e4b":function(t,e,i){"use strict";i.r(e);var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"calZB",on:{click:t.toCal}},[t._v("计算坐标")]),i("van-tabs",{attrs:{animated:"",background:"#e2e2e2"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{title:"七参数"}},[i("seven",{staticStyle:{"margin-top":"20px"}})],1),i("van-tab",{attrs:{title:"四参数"}},[i("four",{staticStyle:{"margin-top":"20px"}})],1)],1)],1)},s=[],o=(i("68ef"),i("9d70"),i("ae9e"),i("b807"),i("d282")),a=i("ea8e"),l=i("a142"),c=i("4598"),u=i("a8c1");function h(t,e,i){Object(c["a"])(n);var r=0,s=t.scrollLeft,o=0===i?1:Math.round(1e3*i/16);function a(){t.scrollLeft+=(e-s)/o,++r<o&&(n=Object(c["b"])(a))}a()}function f(t,e,i,n){var r=Object(u["c"])(t),s=r<e,o=0===i?1:Math.round(1e3*i/16),a=(e-r)/o;function l(){r+=a,(s&&r>e||!s&&r<e)&&(r=e),Object(u["h"])(t,r),s&&r<e||!s&&r>e?Object(c["b"])(l):n&&Object(c["b"])(n)}l()}var d=i("48f4");function v(t){var e=window.getComputedStyle(t),i="none"===e.display,n=null===t.offsetParent&&"fixed"!==e.position;return i||n}var p=i("1325"),m=i("b1d2");function b(t){var e=t.interceptor,i=t.args,n=t.done;if(e){var r=e.apply(void 0,i);Object(l["f"])(r)?r.then((function(t){t&&n()})).catch(l["h"]):r&&n()}else n()}var g=i("9884"),x=i("5fbe"),y=i("6f2f"),T=Object(o["a"])("tab"),_=T[0],C=T[1],k=_({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String},computed:{style:function(){var t={},e=this.color,i=this.isActive,n="card"===this.type;e&&n&&(t.borderColor=e,this.disabled||(i?t.backgroundColor=e:t.color=e));var r=i?this.activeColor:this.inactiveColor;return r&&(t.color=r),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,e=t("span",{class:C("text",{ellipsis:!this.scrollable})},[this.slots()||this.title]);return this.dot||Object(l["c"])(this.info)&&""!==this.info?t("span",{class:C("text-wrapper")},[e,t(y["a"],{attrs:{dot:this.dot,info:this.info}})]):e}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[C({active:this.isActive,disabled:this.disabled})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),N=Object(o["a"])("sticky"),S=N[0],$=N[1],X=S({mixins:[Object(x["a"])((function(t,e){if(this.scroller||(this.scroller=Object(u["d"])(this.$el)),this.observer){var i=e?"observe":"unobserve";this.observer[i](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{offsetTopPx:function(){return Object(a["b"])(this.offsetTop)},style:function(){if(this.fixed){var t={};return Object(l["c"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTopPx&&this.fixed&&(t.top=this.offsetTopPx+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},created:function(){var t=this;!l["g"]&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!v(this.$el)){this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTopPx,n=Object(u["c"])(window),r=Object(u["a"])(this.$el),s=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var o=r+e.offsetHeight;if(n+i+this.height>o){var a=this.height+n-o;return a<this.height?(this.fixed=!0,this.transform=-(a+i)):this.fixed=!1,void s()}}n+i>r?(this.fixed=!0,this.transform=0):this.fixed=!1,s()}}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:$({fixed:e}),style:this.style},[this.slots()])])}}),O=i("c31d"),Y=i("3875"),w=Object(o["a"])("tabs"),I=w[0],j=w[1],M=50,Z=I({mixins:[Y["a"]],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,e=this.deltaX,i=this.currentIndex;"horizontal"===t&&this.offsetX>=M&&(e>0&&0!==i?this.$emit("change",i-1):e<0&&i!==this.count-1&&this.$emit("change",i+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:j("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:j("content",{animated:this.animated}),on:Object(O["a"])({},this.listeners)},[this.genChildren()])}}),P=Object(o["a"])("tabs"),B=P[0],z=P[1],F=B({mixins:[Object(g["b"])("vanTabs"),Object(x["a"])((function(t){this.scroller||(this.scroller=Object(u["d"])(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],model:{prop:"active"},props:{color:String,border:Boolean,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:5}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},offsetTopPx:function(){return Object(a["b"])(this.offsetTop)},scrollOffset:function(){return this.sticky?this.offsetTopPx+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&Object(u["g"])(Math.ceil(Object(u["a"])(this.$el)-this.offsetTopPx))},scrollspy:function(t){t?Object(p["b"])(this.scroller,"scroll",this.onScroll,!0):Object(p["a"])(this.scroller,"scroll",this.onScroll)}},mounted:function(){this.init()},activated:function(){this.init(),this.setLine()},methods:{resize:function(){this.setLine()},init:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=Object(u["e"])(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,e=this.inited;this.$nextTick((function(){var i=t.$refs.titles;if(i&&i[t.currentIndex]&&"line"===t.type&&!v(t.$el)){var n=i[t.currentIndex].$el,r=t.lineWidth,s=t.lineHeight,o=n.offsetLeft+n.offsetWidth/2,c={width:Object(a["a"])(r),backgroundColor:t.color,transform:"translateX("+o+"px) translateX(-50%)"};if(e&&(c.transitionDuration=t.duration+"s"),Object(l["c"])(s)){var u=Object(a["a"])(s);c.height=u,c.borderRadius=u}t.lineStyle=c}}))},setCurrentIndexByName:function(t){var e=this.children.filter((function(e){return e.computedName===t})),i=(this.children[0]||{}).index||0;this.setCurrentIndex(e.length?e[0].index:i)},setCurrentIndex:function(t){var e=this.findAvailableTab(t);if(Object(l["c"])(e)){var i=this.children[e],n=i.computedName,r=null!==this.currentIndex;this.currentIndex=e,n!==this.active&&(this.$emit("input",n),r&&this.$emit("change",n,i.title))}},findAvailableTab:function(t){var e=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=e}},onClick:function(t,e){var i=this,n=this.children[e],r=n.title,s=n.disabled,o=n.computedName;s?this.$emit("disabled",o,r):(b({interceptor:this.beforeChange,args:[o],done:function(){i.setCurrentIndex(e),i.scrollToCurrentContent()}}),this.$emit("click",o,r),Object(d["b"])(t.$router,t))},scrollIntoView:function(t){var e=this.$refs.titles;if(this.scrollable&&e&&e[this.currentIndex]){var i=this.$refs.nav,n=e[this.currentIndex].$el,r=n.offsetLeft-(i.offsetWidth-n.offsetWidth)/2;h(i,r,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollTo:function(t){var e=this;this.$nextTick((function(){e.setCurrentIndexByName(t),e.scrollToCurrentContent(!0)}))},scrollToCurrentContent:function(t){var e=this;if(void 0===t&&(t=!1),this.scrollspy){var i=this.children[this.currentIndex],n=null==i?void 0:i.$el;if(n){var r=Object(u["a"])(n,this.scroller)-this.scrollOffset;this.lockScroll=!0,f(this.scroller,r,t?0:+this.duration,(function(){e.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,e=0;e<t.length;e++){var i=Object(u["f"])(t[e].$el);if(i>this.scrollOffset)return 0===e?0:e-1}return t.length-1}},render:function(){var t,e=this,i=arguments[0],n=this.type,r=this.animated,s=this.scrollable,o=this.children.map((function(t,r){var o;return i(k,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:null!=(o=t.badge)?o:t.info,title:t.title,color:e.color,isActive:r===e.currentIndex,disabled:t.disabled,scrollable:s,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor},style:t.titleStyle,class:t.titleClass,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){e.onClick(t,r)}}})})),a=i("div",{ref:"wrap",class:[z("wrap",{scrollable:s}),(t={},t[m["e"]]="line"===n&&this.border,t)]},[i("div",{ref:"nav",attrs:{role:"tablist"},class:z("nav",[n,{complete:this.scrollable}]),style:this.navStyle},[this.slots("nav-left"),o,"line"===n&&i("div",{class:z("line"),style:this.lineStyle}),this.slots("nav-right")])]);return i("div",{class:z([n])},[this.sticky?i(X,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[a]):a,i(Z,{attrs:{count:this.children.length,animated:r,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}}),A=(i("f319"),Object(o["a"])("tab")),E=A[0],L=A[1],q=E({mixins:[Object(g["a"])("vanTabs")],props:Object(O["a"])({},d["c"],{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,titleClass:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){var t;return null!=(t=this.name)?t:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine(),this.parent.scrollIntoView()},inited:function(t){var e=this;this.parent.lazyRender&&t&&this.$nextTick((function(){e.parent.$emit("rendered",e.computedName,e.title)}))}},render:function(t){var e=this.slots,i=this.parent,n=this.isActive,r=e();if(r||i.animated){var s=i.scrollspy||n,o=this.inited||i.scrollspy||!i.lazyRender,a=o?r:t();return i.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:L("pane-wrapper",{inactive:!n})},[t("div",{class:L("pane")},[a])]):t("div",{directives:[{name:"show",value:s}],attrs:{role:"tabpanel"},class:L("pane")},[a])}}}),H=i("2b0e"),R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"seven"},[i("div",{staticClass:"dangqian"},[i("div",[t._v(" 当前坐标系坐标 "),i("div",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),t._m(0),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[i("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(i){return t.delPoint(e)}}})]},proxy:!0}],null,!0)},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.X[e-1],callback:function(i){t.$set(t.X,e-1,i)},expression:"X[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Y[e-1],callback:function(i){t.$set(t.Y,e-1,i)},expression:"Y[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Z[e-1],callback:function(i){t.$set(t.Z,e-1,i)},expression:"Z[i - 1]"}})],1)])],1)})),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.addPoint}},[t._v("添加点位")])],2),i("div",{staticClass:"mubiao"},[i("div",[t._v("目标坐标系坐标")]),t._m(1),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TX[e-1],callback:function(i){t.$set(t.TX,e-1,i)},expression:"TX[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TY[e-1],callback:function(i){t.$set(t.TY,e-1,i)},expression:"TY[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TZ[e-1],callback:function(i){t.$set(t.TZ,e-1,i)},expression:"TZ[i - 1]"}})],1)])}))],2),i("div",{staticClass:"param"},[i("div",[i("div",[t._v("ΔX:"+t._s(t.ΔX))]),i("div",[t._v("ΔY:"+t._s(t.ΔY))]),i("div",[t._v("ΔΖ:"+t._s(t.ΔZ))])]),i("div",[i("div",[t._v("m:"+t._s(t.m))]),i("div",[t._v("εX:"+t._s(t.εX))]),i("div",[t._v("εY:"+t._s(t.εY))]),i("div",[t._v("εZ:"+t._s(t.εZ))])])]),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.calParam}},[t._v("计算参数")])],1)},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")]),i("div",[t._v("Z")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")]),i("div",[t._v("Z")])])}],W=(i("4de4"),i("d81d"),i("45fc"),i("a9e3"),i("b680"),i("d3b7"),i("25f0"),i("be7f"),i("565f")),D=(i("66b9"),i("b650")),J=(i("4467"),i("c36e")),G=(i("e7e5"),i("d399"));i("27c7");H["a"].use(G["a"]),H["a"].use(J["a"]),H["a"].use(D["a"]),H["a"].use(W["a"]);var K={data:function(){return{pointNum:3,X:[100,150,200],Y:[80,100,70],Z:[60,40,50],TX:[176.6503,237.7859,298.2639],TY:[115.6671,126.1854,121.3026],TZ:[111.3935,87.9545,167.1516],"ΔX":null,"ΔY":null,"ΔZ":null,m:null,"εX":null,"εY":null,"εZ":null}},methods:{clear:function(){this.X=[],this.Y=[],this.Z=[],this.TX=[],this.TY=[],this.TZ=[]},delPoint:function(t){this.pointNum>3?(this.X=this.X.filter((function(e,i){return i!==t-1})),this.Y=this.Y.filter((function(e,i){return i!==t-1})),this.Z=this.Z.filter((function(e,i){return i!==t-1})),this.TX=this.TX.filter((function(e,i){return i!==t-1})),this.TY=this.TY.filter((function(e,i){return i!==t-1})),this.TZ=this.TZ.filter((function(e,i){return i!==t-1})),this.pointNum--,G["a"].success("删除成功")):G["a"].fail("至少需要三个点")},addPoint:function(){this.pointNum++},calParam:function(){var t=this.X.map((function(t){return Number(t)})),e=this.Y.map((function(t){return Number(t)})),i=this.Z.map((function(t){return Number(t)})),n=this.TX.map((function(t){return Number(t)})),r=this.TY.map((function(t){return Number(t)})),s=this.TZ.map((function(t){return Number(t)})),o=t.length;if(t.length<3||o!==e.length||o!==i.length||o!==n.length||o!==r.length||o!==s.length)G["a"].fail("请输入正确的坐标数据");else{for(var a=[],l=0;l<3*this.pointNum;l++)l%3===0?a[l]=[1,0,0,t[Math.floor(l/3)],0,-i[Math.floor(l/3)],e[Math.floor(l/3)]]:l%3===1?a[l]=[0,1,0,e[Math.floor(l/3)],i[Math.floor(l/3)],0,-t[Math.floor(l/3)]]:l%3===2&&(a[l]=[0,0,1,i[Math.floor(l/3)],-e[Math.floor(l/3)],t[Math.floor(l/3)],0]);for(var c=[],u=0;u<3*this.pointNum;u++)u%3===0?c[u]=[n[Math.floor(u/3)]]:u%3===1?c[u]=[r[Math.floor(u/3)]]:u%3===2&&(c[u]=[s[Math.floor(u/3)]]);for(var h=a.Transpose().MatrixMultiply(a).Inversion(),f=a.Transpose().MatrixMultiply(c),d=h.MatrixMultiply(f),v=[],p=0;p<d.length;p++)p<=3?v.push(Number(d[p][0].toFixed(4))):v.push(Number((d[p][0]/v[3]).toFixed(6)));this.ΔX=v[0],this.ΔY=v[1],this.ΔZ=v[2],this.m=v[3],this.εX=v[4],this.εY=v[5],this.εZ=v[6],this.$store.state.sevenParam.some((function(t){return t.toString()===v.toString()}))?G["a"].fail("参数已存在"):this.$store.commit("setSParam",v)}}}},Q=K,U=(i("a075"),i("2877")),tt=Object(U["a"])(Q,R,V,!1,null,null,null),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"four"},[i("div",{staticClass:"dangqian"},[i("div",[t._v(" 当前坐标系坐标 "),i("div",{staticClass:"clear",on:{click:t.clear}},[t._v("清空")])]),t._m(0),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[i("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(i){return t.delPoint(e)}}})]},proxy:!0}],null,!0)},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.X[e-1],callback:function(i){t.$set(t.X,e-1,i)},expression:"X[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.Y[e-1],callback:function(i){t.$set(t.Y,e-1,i)},expression:"Y[i - 1]"}})],1)])],1)})),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.addPoint}},[t._v("添加点位")])],2),i("div",{staticClass:"mubiao"},[i("div",[t._v("目标坐标系坐标")]),t._m(1),t._l(t.pointNum,(function(e){return i("div",{key:e},[i("div",{staticClass:"point"},[i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TX[e-1],callback:function(i){t.$set(t.TX,e-1,i)},expression:"TX[i - 1]"}}),i("van-field",{attrs:{"input-align":"center",type:"number"},model:{value:t.TY[e-1],callback:function(i){t.$set(t.TY,e-1,i)},expression:"TY[i - 1]"}})],1)])}))],2),i("div",{staticClass:"param"},[i("div",[i("div",[t._v("ΔX:"+t._s(t.ΔX))]),i("div",[t._v("ΔY:"+t._s(t.ΔY))])]),i("div",[i("div",[t._v("m:"+t._s(t.m))]),i("div",[t._v("α:"+t._s(t.α))])])]),i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.calParam}},[t._v("计算参数")])],1)},nt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zuobiao"},[i("div",[t._v("X")]),i("div",[t._v("Y")])])}];H["a"].use(G["a"]),H["a"].use(J["a"]),H["a"].use(D["a"]),H["a"].use(W["a"]);var rt={data:function(){return{pointNum:2,X:[100,150],Y:[80,100],TX:[176.6503,237.7859],TY:[115.6671,126.1854],"ΔX":null,"ΔY":null,m:null,"α":null}},methods:{clear:function(){this.X=[],this.Y=[],this.TX=[],this.TY=[]},delPoint:function(t){this.pointNum>2?(this.X=this.X.filter((function(e,i){return i!==t-1})),this.Y=this.Y.filter((function(e,i){return i!==t-1})),this.TX=this.TX.filter((function(e,i){return i!==t-1})),this.TY=this.TY.filter((function(e,i){return i!==t-1})),this.pointNum--,G["a"].success("删除成功")):G["a"].fail("至少需要两个点")},addPoint:function(){this.pointNum++},calParam:function(){var t=this.X.map((function(t){return Number(t)})),e=this.Y.map((function(t){return Number(t)})),i=this.TX.map((function(t){return Number(t)})),n=this.TY.map((function(t){return Number(t)})),r=t.length;if(t.length<2||r!==e.length||r!==i.length||r!==n.length)G["a"].fail("请输入正确的坐标数据");else{for(var s=[],o=0;o<2*this.pointNum;o++)o%2===0?s[o]=[1,0,t[Math.floor(o/2)],-e[Math.floor(o/2)]]:o%2===1&&(s[o]=[0,1,e[Math.floor(o/2)],t[Math.floor(o/2)]]);for(var a=[],l=0;l<2*this.pointNum;l++)l%2===0?a[l]=[i[Math.floor(l/2)]]:l%2===1&&(a[l]=[n[Math.floor(l/2)]]);for(var c=s.Transpose().MatrixMultiply(s).Inversion(),u=s.Transpose().MatrixMultiply(a),h=c.MatrixMultiply(u),f=[],d=0;d<h.length;d++)d<2&&f.push(Number(h[d][0].toFixed(4)));var v=Math.pow(h[2][0],2)+Math.pow(h[3][0],2);f[2]=Number(Math.sqrt(v).toFixed(6)),f[3]=Number(Math.acos(h[2][0]/f[2]).toFixed(6))*(h[3]>0?1:-1),this.ΔX=f[0],this.ΔY=f[1],this.m=f[2],this.α=f[3],this.$store.state.fourParam.some((function(t){return t.toString()===f.toString()}))?G["a"].fail("参数已存在"):this.$store.commit("setFParam",f)}}}},st=rt,ot=(i("fdef"),Object(U["a"])(st,it,nt,!1,null,null,null)),at=ot.exports;H["a"].use(q),H["a"].use(F);var lt={components:{seven:et,Four:at},data:function(){return{active:0}},methods:{toCal:function(){this.$router.push("/cal")}}},ct=lt,ut=(i("5434"),Object(U["a"])(ct,r,s,!1,null,"0461db4f",null));e["default"]=ut.exports},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return u}));var n=i("a142"),r=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-r)),n=setTimeout(t,i);return r=e+i,n}var o=n["g"]?t:window,a=o.requestAnimationFrame||s,l=o.cancelAnimationFrame||o.clearTimeout;function c(t){return a.call(o,t)}function u(t){l.call(o,t)}}).call(this,i("c8ba"))},"45fc":function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").some,s=i("a640"),o=i("ae40"),a=s("some"),l=o("some");n({target:"Array",proto:!0,forced:!a||!l},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4bdc":function(t,e,i){},5434:function(t,e,i){"use strict";i("4bdc")},a075:function(t,e,i){"use strict";i("ce27")},ae9e:function(t,e,i){},b807:function(t,e,i){},ce27:function(t,e,i){},df62:function(t,e,i){},f319:function(t,e,i){},fdef:function(t,e,i){"use strict";i("df62")}}]);
//# sourceMappingURL=chunk-ed35319e.4866249e.js.map