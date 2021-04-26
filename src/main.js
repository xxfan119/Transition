import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


window.useRem  =  true;
const  baseSize  =  22;
(function (doc,  win)  {  
    setRem();  
    let  resizeEvt  =       "orientationchange"  in  window  ?  "orientationchange"  :  "resize",
            recalc  =   function ()  {       setRem();     };  
    if  (!doc.addEventListener)  return;  
    win.addEventListener(resizeEvt,  recalc,  false);
})(document,  window);

function  setRem()  {   // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
      
    const  scale  =  document.documentElement.scrollHeight /  1080;   // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
      
    document.documentElement.style.fontSize  =     baseSize  *  Math.min(scale,  5)  +  "px";
}