(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forget_pw-index"],{2166:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.commMixin=void 0;var e={props:{},data:function(){return{}},methods:{routerTo:function(t){console.log("url00000000000000000000",t),uni.navigateTo({url:t})},routerViewPage:function(t){uni.navigateTo({url:"./index?viewType=".concat(t)})},backToList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";uni.redirectTo({url:"./index".concat(t)})}}};i.commMixin=e},"29a3":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("2166"),a={mixins:[e.commMixin],data:function(){return{}},onLoad:function(){},methods:{}};i.default=a},"2a96":function(t,i,n){"use strict";n.r(i);var e=n("29a3"),a=n.n(e);for(var u in e)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(u);i["default"]=a.a},8907:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return u})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"}),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("重置密码")])],2),n("v-uni-view",{staticClass:"padding-xl",staticStyle:{"padding-top":"300rpx"}},[n("v-uni-view",{staticClass:"text-center text-xl"},[t._v("重置密码")])],1),n("v-uni-form",[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{width:"200rpx"}},[t._v("用户名")]),n("v-uni-input",{attrs:{placeholder:"请输入用户名"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{width:"200rpx"}},[t._v("手机号码")]),n("v-uni-input",{attrs:{placeholder:"请输入手机号码"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{width:"200rpx"}},[t._v("验证码")]),n("v-uni-input",{attrs:{placeholder:"请输入验证码"}}),n("v-uni-button",{staticClass:"cu-btn margin-tb-sm xs"},[t._v("验证码")])],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{width:"200rpx"}},[t._v("密码")]),n("v-uni-input",{attrs:{placeholder:"请输入密码"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{width:"200rpx"}},[t._v("确认密码")]),n("v-uni-input",{attrs:{placeholder:"请输入确认密码"}})],1)],1),n("v-uni-view",{staticClass:"padding-xs"},[n("v-uni-button",{staticClass:"cu-btn margin-tb-sm xs block bg-blue lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.routerTo("../login/index")}}},[t._v("重置")]),n("v-uni-view",{staticClass:"text-right"},[n("v-uni-text",{staticClass:"margin-lr-sm text-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.routerTo("../login/index")}}},[t._v("已有账号?")])],1)],1)],1)},u=[]},a52c:function(t,i,n){"use strict";n.r(i);var e=n("8907"),a=n("2a96");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(u);var s,c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"673b8fb0",null,!1,e["a"],s);i["default"]=r.exports}}]);