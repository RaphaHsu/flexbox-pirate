(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c49ce8"],{"1a52":function(t,e,n){"use strict";var a=n("1eba"),i=n.n(a);i.a},"1eba":function(t,e,n){},"59ca":function(t,e,n){"use strict";function a(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}n("95c6");var i=a(n("c23d"));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.exports=i},"5d6b":function(t,e,n){var a=n("e53d").parseInt,i=n("a1ce").trim,r=n("e692"),s=/^[-+]?0[xX]/;t.exports=8!==a(r+"08")||22!==a(r+"0x16")?function(t,e){var n=i(String(t),3);return a(n,e>>>0||(s.test(n)?16:10))}:a},7445:function(t,e,n){var a=n("63b6"),i=n("5d6b");a(a.G+a.F*(parseInt!=i),{parseInt:i})},"7f7f":function(t,e,n){var a=n("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in i||n("9e1e")&&a(i,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"89a9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{domProps:{innerHTML:t._s(t.temp.resultStyle)}}),t.GameStatic.start?t._e():n("div",{staticClass:"start"},[n("div",{staticClass:"card content"},[n("h5",{staticClass:"card-header"},[t._v(t._s(t.userData.name)+" 你好，歡迎挑戰 Flexbox 海盜")]),t._m(0),n("div",{staticClass:"card-footer text-muted text-right"},[n("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.startGame(e)}}},[t._v("馬上開始")])])])]),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 col-lg-3 left-con"},[n("h2",{staticClass:"mt-5 h2"},[t._v("Flexbox 挑戰")]),n("hr"),n("div",{staticClass:"question mb-3 card"},[n("div",{staticClass:"card-body"},[n("p",{staticClass:"mb-1"},[t._v("題目")]),t._v("\n          "+t._s(t.game[t.levelVal].topic)+"\n          "),n("p",{staticClass:"notice",domProps:{innerHTML:t._s(t.game[t.levelVal].notice)}})])]),t._l(t.game[t.levelVal].prompt,function(e,a){return n("div",{key:a,staticClass:"codes"},[n("b",[t._v(t._s(e))]),t._v(" {\n          "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.temp.writeStyle[a],expression:"temp.writeStyle[index]"}],attrs:{id:"code"+a,rows:"6"},domProps:{value:t.temp.writeStyle[a]},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab"))return null;e.preventDefault()},input:function(e){e.target.composing||t.$set(t.temp.writeStyle,a,e.target.value)}}}),t._v("\n          }\n        ")])}),t.temp.wrongCode?n("div",{staticClass:"wrong mt-3 card border-danger"},[n("div",{staticClass:"card-body"},[t._v("\n            "+t._s(t.temp.wrongCode)+"\n          ")])]):t._e(),"發射"==t.GameStatic.nextBtn?n("button",{staticClass:"btn btn-danger mt-5",on:{click:t.checkAnswer}},[t._v("\n          "+t._s(t.GameStatic.nextBtn)+"\n        ")]):t._e(),"發射"!==t.GameStatic.nextBtn?n("button",{staticClass:"btn btn-warning mt-5",on:{click:t.nextPage}},[t._v("\n          下一關\n        ")]):t._e(),"發射"!==t.GameStatic.nextBtn?n("p",{staticClass:"text-warning mt-3 h3"},[t._v("\n          "+t._s(t.GameStatic.nextBtn)+"\n        ")]):t._e()],2),n("div",{staticClass:"col-8 col-lg-9 playground"},[n("nav",{staticClass:"playNav"},[n("p",{staticClass:"level"},[t._v("Level."+t._s(t.levelVal+1))])]),n("div",{staticClass:"flexbox",attrs:{id:"p"+t.levelVal}},[-1===t.temp.direction?n("h3",{staticClass:"main"},[t._v("主軸線")]):t._e(),-1===t.temp.direction?n("h3",{staticClass:"vice"},[t._v("交錯軸")]):t._e(),-1!==t.temp.direction?n("h3",{staticClass:"vice column"},[t._v("主軸線")]):t._e(),-1!==t.temp.direction?n("h3",{staticClass:"main column"},[t._v("交錯軸")]):t._e(),n("div",{domProps:{innerHTML:t._s(t.game[t.levelVal].html)}}),n("div",{staticClass:"flex-container"},[n("div",{staticClass:"grid-con"},[n("div",{class:{main:!0,column:-1!==t.temp.direction}}),n("div",{class:{vice:!0,column:-1!==t.temp.direction}}),t._l(36,function(t){return n("div",{key:t,staticClass:"grid"})})],2)])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("故事背景")]),n("p",{staticClass:"card-text"},[t._v("\n          有一天 FLEX 海盜集團襲擊了國王的領土，還偷走了皇冠。\n          "),n("br"),t._v("國王決定派出六角戰艦，欲將 FLEX 海盜集團殲滅並取出皇冠。\n          "),n("br"),t._v("FLEX 海盜集團的活動範圍被分為 30 層，想要拿到皇冠需要達到 FLEX 最深層才行。\n          "),n("br"),t._v("請將"),n("b",[t._v("座標圖上的準心瞄準到對應的海盜船上")]),t._v("，瞄準完成後按下紅色按鈕發射飛彈，一層一層將FLEX海盜集團攻破!\n        ")]),n("h5",{staticClass:"card-title mt-4"},[t._v("遊戲辦法")]),n("p",{staticClass:"card-text"},[t._v("\n          請將"),n("b",[t._v("座標圖上的準心瞄準到對應的海盜船上")]),t._v("，瞄準完成後按下紅色按鈕發射飛彈，一層一層將FLEX海盜集團攻破!\n        ")])])}],r=n("e814"),s=n.n(r),c=(n("7f7f"),n("55dd"),n("6b54"),n("a4bb")),o=n.n(c),l=(n("28a5"),n("ac6a"),n("7618")),d=(n("a481"),n("59ca")),u=n.n(d),m=n("44be"),v={name:"Play",props:["userData"],data:function(){return{levelVal:0,temp:{writeStyle:[],resultStyle:"",wrongCode:"",ansRight:!0,direction:-1},GameStatic:{start:!1,nextBtn:"發射",end:!1,second:0},game:m["a"]}},watch:{"temp.writeStyle":{handler:function(t){var e=this,n=e.resultCSS(t);e.temp.resultStyle="<style>".concat(n,"</style>"),e.temp.direction=n.replace(/\s+/g,"").indexOf("flex-direction:column")},deep:!0}},methods:{trimSemiColon:function(t){return";"===t.slice(-1)?t.slice(0,this.length-1):t},JsonCSS:function(t){var e=this;if("string"!==typeof t)return console.error("Need a CSS string but given ",Object(l["a"])(t),t),"Not a valid CSS..!";var n,a,i,r={},s=/\r\n|\r|\n|\u2028|\u2029/g;try{t.split("{").forEach(function(t){if(a=t.trim(),a)if(-1===a.indexOf("}"))r[a]={},n=a;else{a.substring(0,a.indexOf("}")).split(";").forEach(function(t){i=t.split(":"),i&&2===i.length&&(r[n][i[0].trim().replace(s,"")]=e.trimSemiColon(i[1].trim().replace(s,"")))});try{n=a.split("}")[1].trim(),n&&(r[n]={})}catch(c){}}})}catch(c){return"Not a valid CSS..!"}return r},resultCSS:function(t){for(var e=this,n="",a=0;a<t.length;a+=1)n+="\n          ".concat(e.game[e.levelVal].prompt[a],"{\n            ").concat(t[a],"\n          }\n        ");return n},checkAnswer:function(){for(var t=this,e=t.game[t.levelVal].ans,n=o()(e),a=!1,i=t.JsonCSS(t.resultCSS(t.temp.writeStyle)),r=0;r<n.length;r+=1){for(var s=n[r],c=i[s],l=o()(c),d=t.game[t.levelVal].ans[s],u=0;u<l.length;u+=1){var m=l[u],v=c[m];if(!e[s][m])return t.temp.wrongCode="不需要用到 ".concat(m),t.temp.ansRight=!1,!1;e[s][m]===v||(t.temp.wrongCode="".concat(m," 的值錯誤"),t.temp.ansRight=!1)}a=o()(d).sort().toString()===l.sort().toString()}return a&&t.temp.ansRight?t.GameStatic.nextBtn="擊中目標":t.temp.wrongCode&&a&&(t.temp.ansRight=!0,t.temp.wrongCode="沒有打中"),!1},nextPage:function(){var t=this;29===t.levelVal?t.endGame():(t.levelVal+=1,t.temp.writeStyle=[],t.temp.wrongCode="",t.GameStatic.nextBtn="發射")},startGame:function(){var t=this,e=new Date;t.GameStatic.start=!0,u.a.database().ref("notLogin/".concat(t.userData.id)).set({name:t.userData.name,startTime:String(e),endTime:"未完成"})},endGame:function(){var t=this,e=this,n=new Date,a="";e.GameStatic.end=!0,u.a.database().ref("notLogin/".concat(e.userData.id)).once("value").then(function(t){a=t.val().startTime}).then(function(){e.GameStatic.second=s()(n-new Date(a),10)/1e3}).then(function(){u.a.database().ref("notLogin/".concat(e.userData.id)).set({startTime:a,endTime:String(n),name:e.userData.name,sec:e.GameStatic.second}),t.$router.push("end")})}},created:function(){var t=this;t.userData.id||this.$router.push("start")}},p=v,f=(n("1a52"),n("2877")),g=Object(f["a"])(p,a,i,!1,null,"c1ed9ba4",null);e["default"]=g.exports},a1ce:function(t,e,n){var a=n("63b6"),i=n("25eb"),r=n("294c"),s=n("e692"),c="["+s+"]",o="​",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),u=function(t,e,n){var i={},c=r(function(){return!!s[t]()||o[t]()!=o}),l=i[t]=c?e(m):s[t];n&&(i[n]=l),a(a.P+a.F*c,"String",i)},m=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")}}]);
//# sourceMappingURL=chunk-71c49ce8.3d84dae0.js.map