(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-index"],{"0c0f":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a("2958"),e={a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:""},n={mixins:[s.viewMixin],props:{},data:function(){return{formData:Object.assign({},e)}},created:function(){this.init()},methods:{init:function(){"add"==this.viewType?this.formData=Object.assign({},e):this.formData={a1:"123443545778575",a2:"xxxx",a3:"xxxx",a4:"xxxx",a5:"xxxx",a6:"xxxx",a7:"xxxx"}}}};i.default=n},"0faa":function(t,i,a){"use strict";a.r(i);var s=a("0c0f"),e=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},"201d":function(t,i,a){"use strict";a.r(i);var s=a("97a2"),e=a("0faa");for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);var u,v=a("f0c5"),c=Object(v["a"])(e["default"],s["b"],s["c"],!1,null,"408c5388",null,!1,s["a"],u);i["default"]=c.exports},2166:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.commMixin=void 0;var s={props:{},data:function(){return{}},methods:{routerTo:function(t){console.log("url00000000000000000000",t),uni.navigateTo({url:t})},routerViewPage:function(t){uni.navigateTo({url:"./index?viewType=".concat(t)})},backToList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";uni.redirectTo({url:"./index".concat(t)})}}};i.commMixin=s},2958:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.viewMixin=void 0;var s=a("2166"),e={mixins:[s.commMixin],props:{viewType:{type:String,default:""},pageQuery:{type:Object}},data:function(){return{formData:{}}},methods:{save:function(){var t=this;uni.showToast({title:"保存成功",success:function(){setTimeout((function(){t.backToList()}),600)}})}}};i.viewMixin=e},"92fb":function(t,i,a){"use strict";a.r(i);var s=a("e010"),e=a("efe0");for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);var u,v=a("f0c5"),c=Object(v["a"])(e["default"],s["b"],s["c"],!1,null,"11f62c80",null,!1,s["a"],u);i["default"]=c.exports},"960c":function(t,i,a){"use strict";var s=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a("fd95"),n=s(a("201d")),u={mixins:[e.listMixin],components:{viewCom:n.default},data:function(){return{titleObj:{list:"预告事项",view:"预告事项详情",edit:"编辑预告事项",add:"添加预告事项"}}},onLoad:function(t){},methods:{}};i.default=u},"97a2":function(t,i,a){"use strict";var s;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",["view"==t.viewType?a("v-uni-view",[a("v-uni-view",{staticClass:"bg-white margin-top-xs"},[a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),a("v-uni-text",[t._v("详情")])],1),a("v-uni-button",{staticClass:"cu-btn margin-tb-sm xs margin-right bg-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.routerViewPage("edit")}}},[a("v-uni-text",{staticClass:"cuIcon-edit"}),t._v("编辑")],1)],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("设备识别码")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a1))])],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("事项类型")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a2))])],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("消防管理区域")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a3))])],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("开始时间")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a4))])],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("结束时间")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a4))])],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("推送时间")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a4))])],1),a("v-uni-view",{staticClass:"flex flex-wrap solid-bottom"},[a("v-uni-view",{staticClass:"basis-sm padding-sm"},[t._v("注意事项")]),a("v-uni-view",{staticClass:"basis-lg padding-sm"},[t._v(t._s(t.formData.a7))])],1)],1)],1):t._e(),"edit"==t.viewType||"add"==t.viewType?a("v-uni-view",[a("v-uni-form",[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("设备识别码(IMEI)")]),"edit"==t.viewType?a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a1,disabled:!0}}):t._e(),"add"==t.viewType?a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a1}}):t._e(),"add"==t.viewType?a("v-uni-text",{staticClass:"cuIcon-scan"}):t._e()],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("事项类型")]),a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a2}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("消防管理区域")]),a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a3}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("开始时间")]),a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a4}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("结束时间")]),a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a4}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("推送时间")]),a("v-uni-input",{staticClass:"text-right",attrs:{value:t.formData.a4}})],1),a("v-uni-view",{staticClass:"cu-form-group align-start"},[a("v-uni-view",{staticClass:"title"},[t._v("注意事项")]),a("v-uni-textarea",{attrs:{maxlength:"-1",placeholder:"多行文本输入框"}})],1),a("v-uni-view",{staticClass:"padding bg-white"},[a("v-uni-button",{staticClass:"cu-btn margin-tb-sm xs block line-grey lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1):t._e()],1)},n=[]},e010:function(t,i,a){"use strict";var s;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"}),a("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.pageTitle))])],2),"list"==t.viewType?a("v-uni-view",[a("v-uni-view",{staticClass:"cu-bar search bg-white solid-bottom"},[a("v-uni-view",{staticClass:"text-center margin-left-sm"},[a("v-uni-text",{staticClass:"cuIcon-scan text-lg"})],1),a("v-uni-view",{staticClass:"search-form"},[a("v-uni-text",{staticClass:"cuIcon-search"}),a("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:"搜索设备识别码","confirm-type":"search"},on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.InputFocus.apply(void 0,arguments)},blur:function(i){arguments[0]=i=t.$handleEvent(i),t.InputBlur.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn margin-tb-sm xs cu-btn bg-grey shadow"},[t._v("搜索")])],1)],1),a("v-uni-view",{staticClass:"bg-white margin-top-xs"},[a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-orange"}),a("v-uni-text",[t._v("预告事项列表")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn margin-tb-sm xs bg-grey",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.routerViewPage("add")}}},[a("v-uni-text",{staticClass:"cuIcon-add"}),t._v("添加")],1)],1)],1),a("v-uni-view",{staticClass:"cu-list menu"},t._l(3,(function(i){return a("v-uni-view",{staticClass:"cu-item padding-tb-sm",staticStyle:{"min-height":"220rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.routerViewPage("view")}}},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[t._v("事项类型：消防演习")]),a("v-uni-view",{staticClass:"text-grey"},[t._v("设备识别码(IMEI)：123242342432")]),a("v-uni-view",{staticClass:"text-gray"},[t._v("开始时间：2020-07-17 16:59:59")]),a("v-uni-view",{staticClass:"text-gray"},[t._v("结束时间：2020-07-17 16:59:59")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1)})),1)],1)],1):t._e(),"list"!==t.viewType?a("viewCom",{attrs:{viewType:t.viewType,pageQuery:t.pageQuery}}):t._e()],1)},n=[]},efe0:function(t,i,a){"use strict";a.r(i);var s=a("960c"),e=a.n(s);for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},fd95:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.listMixin=void 0;var s=a("2166"),e={mixins:[s.commMixin],data:function(){return{viewType:"list",pageTitle:"列表",titleObj:{list:"列表",view:"详情",edit:"编辑",add:"添加"},pageQuery:{}}},onLoad:function(t){this.initPageTitle(t)},methods:{initPageTitle:function(t){var i=t.viewType;this.titleObj.hasOwnProperty(i)||(i="list"),this.viewType=i,this.pageTitle=this.titleObj[i],this.pageQuery=t,console.log(this.viewType,"dddddddddddddd")}}};i.listMixin=e}}]);