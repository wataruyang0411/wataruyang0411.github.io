(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{524:function(t,i,s){},571:function(t,i,s){"use strict";s(524)},580:function(t,i,s){"use strict";s.r(i);s(83);var e={props:{images:{type:Array,default:function(){return[]}}},data:function(){return{transitionName:"right-in",isLoading:!1,showImg:-1,boxSize:{width:600,height:400}}},methods:{setShowImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch(!0){case 1===t&&this.showImg===this.images.length-1:this.showImg=0;break;case-1===t&&0===this.showImg:this.showImg=this.images.length-1;break;default:this.showImg=this.showImg+t}},setShowImgTo:function(t){this.showImg=t}},updated:function(){var t=this,i=setTimeout((function(){t.boxSize.height=t.$refs["img_".concat(t.showImg)][0].clientHeight,t.boxSize.width=t.$refs["img_".concat(t.showImg)][0].clientWidth,t.isLoading=!1,clearTimeout(i)}),500)},watch:{showImg:{handler:function(t,i){this.transitionName=t>i?"right-in":"left-in",this.isLoading=!0}}},mounted:function(){var t=this;setTimeout((function(){t.showImg=t.showImg+1}),1e3)}},n=(s(571),s(17)),o=Object(n.a)(e,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"slides"},[s("transition-group",{staticClass:"img-boxex",style:{width:t.boxSize.width+"px",height:t.boxSize.height+"px"},attrs:{tag:"div",name:t.transitionName}},t._l(t.images,(function(i,e){return s("div",{directives:[{name:"show",rawName:"v-show",value:e===t.showImg,expression:"idx === showImg"}],key:e,staticClass:"img-box"},[s("img",{ref:"img_"+e,refInFor:!0,attrs:{src:i}})])})),0),t._v(" "),s("div",{staticClass:"btn-group"},t._l(t.images.length,(function(i){return s("button",{key:i-1,staticClass:"pagin",class:i-1===t.showImg?"selected":"",on:{click:function(s){return t.setShowImgTo(i-1)}}})})),0)],1)}),[],!1,null,"624f54e6",null);i.default=o.exports}}]);