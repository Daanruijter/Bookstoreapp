(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"108e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("BookStore",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"BookStore"}},[n("div",{staticClass:"inputContainer"},[n("img",{staticClass:"logo",attrs:{src:r("f4e2")}}),n("label",{attrs:{for:"inputField"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"search for a book",id:"inputField"},domProps:{value:e.message},on:{keyup:e.searchFunction,input:function(t){t.target.composing||(e.message=t.target.value)}}})]),n("hr"),e.bookDataFiltered.length>0&&0==this.pictureGalleryVisible?n("div",{staticClass:"container"},e._l(e.bookDataFiltered,(function(t,r){return n("div",{key:t.id,staticClass:"flip-box"},[n("div",{staticClass:"flip-box-inner"},[n("div",{staticClass:"flip-box-front"},[n("img",{attrs:{src:t.image}})]),n("div",{staticClass:"flip-box-back h4"},[n("br"),n("br"),n("span",[n("b",[e._v("title:")]),e._v(" "+e._s(t.title))]),n("br"),n("br"),n("span",[n("b",[e._v("description:")]),e._v(" "+e._s(t.description))]),n("br"),n("br"),n("span",[n("b",[e._v("language:")]),e._v(" "+e._s(t.language))]),n("br"),n("br"),n("span",[n("b",[e._v("author:")]),e._v(" "+e._s(t.author))]),n("br"),n("br"),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(){return e.setVisibility(r)}}},[e._v(" Click for a larger picture ")])])])])})),0):e._e(),e.bookDataFiltered.length>0&&1==this.pictureGalleryVisible?n("div",{staticClass:"picture-gallery"},[n("div",{staticClass:"left-panel"},[n("span",{on:{click:e.decreaseIndex}},[e._v("←")])]),n("div",[n("div",{staticClass:"close-gallery",on:{click:e.closePictureGallery}},[e._v("Close")]),e._l(e.bookData,(function(t,r){return n("div",{key:t.id},[r==e.indexNumber?n("img",{attrs:{src:t.image}}):e._e()])}))],2),n("div",{staticClass:"right-panel"},[n("span",{on:{click:e.increaseIndex}},[e._v("→")])])]):e._e(),0==e.bookDataFiltered.length?n("div",{staticClass:"no-books"},[e._v(" No books found ")]):e._e()])},s=[],c=(r("a4d3"),r("e01a"),r("caad"),r("d3b7"),r("2532"),r("96cf"),r("1da1")),l={name:"BookStore",props:{},data:function(){return{indexNumber:"",bookData:[],bookDataFiltered:[],message:"",pictureGalleryVisible:!1,bookURL:{bookURLrow:[]}}},created:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="",t="https://daanbookapp.herokuapp.com/books",e.next=5,fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return r.bookData=e,e})).catch((function(e){return console.log(e)}));case 5:this.bookDataFiltered=this.bookData;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{closePictureGallery:function(){this.pictureGalleryVisible=!1},increaseIndex:function(){this.indexNumber<this.bookData.length-1&&(this.indexNumber=this.indexNumber+1)},decreaseIndex:function(){this.indexNumber>0&&(this.indexNumber=this.indexNumber-1)},setVisibility:function(e){this.indexNumber=e,this.pictureGalleryVisible=!0},searchFunction:function(){var e,t=[],r=this.bookData;for(e=0;e<r.length;e++)(r[e].title.toUpperCase().includes(this.message.toUpperCase())||r[e].description.toUpperCase().includes(this.message.toUpperCase())||r[e].language.toUpperCase().includes(this.message.toUpperCase()))&&t.push(r[e]),""===this.message&&(this.bookDataFiltered=this.bookData);this.bookDataFiltered=t}}},u=l,p=(r("6de0"),r("2877")),d=Object(p["a"])(u,a,s,!1,null,"7df7f6eb",null),b=d.exports,f={name:"App",components:{BookStore:b}},h=f,v=(r("034f"),Object(p["a"])(h,i,o,!1,null,null,null)),g=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"6de0":function(e,t,r){"use strict";var n=r("108e"),i=r.n(n);i.a},"85ec":function(e,t,r){},f4e2:function(e,t,r){e.exports=r.p+"img/Ubiqumbookstorelogo.cb8ed5bb.png"}});
//# sourceMappingURL=app.cd007c97.js.map