(window.webpackJsonp=window.webpackJsonp||[]).push([[25,7],{531:function(t,e,n){(function(e){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(l||(l=new Promise((function(t){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return t(window.google.charts)},script.src=c,document.body.appendChild(script)}))),l)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r().then((function(n){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("Google Charts loader: settings must be an object");var r=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(h.has(r))return h.get(r);var c=new Promise((function(r){n.load(t,e),n.setOnLoadCallback((function(){return r(window.google)}))}));return h.set(r,c),c}))};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="https://www.gstatic.com/charts/loader.js",l=null,h=new Map},function(t,e,n){var r=n(5)(n(4),n(6),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n){function r(){var f=Date.now()-h;f<e&&f>=0?o=setTimeout(r,e-f):(o=null,n||(d=t.apply(l,c),l=c=null))}var o,c,l,h,d;null==e&&(e=100);var f=function(){l=this,c=arguments,h=Date.now();var f=n&&!o;return o||(o=setTimeout(r,e)),f&&(d=t.apply(l,c),l=c=null),d};return f.clear=function(){o&&(clearTimeout(o),o=null)},f.flush=function(){o&&(d=t.apply(l,c),l=c=null,clearTimeout(o),o=null)},f}},function(t,n,r){"use strict";function o(t){t.component("GChart",h.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=o;var c=r(0),l=r(1),h=r.n(l);r.d(n,"loadGoogleCharts",(function(){return c.a})),r.d(n,"GChart",(function(){return h.a}));var d={version:"0.3.3",install:o};n.default=d;var f=null;"undefined"!=typeof window?f=window.Vue:void 0!==e&&(f=e.Vue),f&&f.use(d)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(2),c=n.n(o),l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],n=!0,r=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;n.i(r.a)(this.version,this.settings).then((function(e){d=e;var n=t.createChartObject();t.$emit("ready",n,e),t.drawChart()})),this.resizeDebounce>0&&window.addEventListener("resize",c()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&"function"==typeof this.chartObject.clearChart&&this.chartObject.clearChart()},methods:{drawChart:function(){if(d&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof d.visualization.DataTable||this.data instanceof d.visualization.DataView?this.data:Array.isArray(this.data)?d.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===h(this.data)?new d.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,n){if(!n)throw new Error("please, provide chart type property");return new e.visualization[n](t)};return this.chartObject=t(this.$refs.chart,d,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach((function(e){var n=l(e,2),r=n[0],o=n[1];d.visualization.events.addListener(t.chartObject,r,o)}))}}}},function(t,e){t.exports=function(t,e,n,r){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var h="function"==typeof c?c.options:c;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns),n&&(h._scopeId=n),r){var d=h.computed||(h.computed={});Object.keys(r).forEach((function(t){var e=r[t];d[t]=function(){return e}}))}return{esModule:o,exports:c,options:h}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,n(58))},534:function(t,e,n){"use strict";var r=n(531);n.o(r,"GChart")&&n.d(e,"GChart",(function(){return r.GChart}))},545:function(t,e,n){"use strict";n.r(e);var r=n(87),o={extends:r.c,mixins:[r.e.reactiveData],props:{data:null,options:null},mounted:function(){this.chartData=this.data},watch:{data:function(){this.chartData=this.data}}},c=n(38),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},553:function(t,e,n){var map={"./Dai1.jpg":554,"./Dai2.jpg":555,"./GT999.jpg":556,"./LN034.jpg":557,"./MC024.jpg":558,"./MC026.jpg":559,"./MC027.jpg":560,"./MC028.jpg":561,"./MC031.jpg":562};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=553},554:function(t,e,n){t.exports=n.p+"img/Dai1.981657f.jpg"},555:function(t,e,n){t.exports=n.p+"img/Dai2.d68ace6.jpg"},556:function(t,e,n){t.exports=n.p+"img/GT999.25b236b.jpg"},557:function(t,e,n){t.exports=n.p+"img/LN034.5cd650b.jpg"},558:function(t,e,n){t.exports=n.p+"img/MC024.9523497.jpg"},559:function(t,e,n){t.exports=n.p+"img/MC026.75ddead.jpg"},560:function(t,e,n){t.exports=n.p+"img/MC027.58932b3.jpg"},561:function(t,e,n){t.exports=n.p+"img/MC028.b945e8f.jpg"},562:function(t,e,n){t.exports=n.p+"img/MC031.9c865cb.jpg"},569:function(t,e,n){var content=n(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0f8090f6",content,!0,{sourceMap:!1})},580:function(t,e,n){"use strict";n(569)},581:function(t,e,n){var r=n(14)(!1);r.push([t.i,"#aaa[data-v-012181e0]{color:#0ff;background-color:red}.flex[data-v-012181e0]{display:flex;align-items:flex-start}",""]),t.exports=r},604:function(t,e,n){"use strict";n.r(e);n(26),n(86),n(18);var r=n(4),o=n(540),c=n(545),l=n(534),h={asyncData:function(t){return console.log("❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏"),console.log(t.query.pageName),{machineCode:t.query.pageName}},name:"App",components:{ObiChart:c.default,GChart:l.GChart},data:function(){var t;return{machineCode:"",ObiArry:[],ObiArryStatus:[],Line_chartData:{labels:[],datasets:[Object(r.a)({label:"RUN",borderColor:"rgba(75,192,192,1)",backgroundColor:"limegreen",data:[]},"borderColor","green"),{label:"STOP",backgroundColor:"grey",data:[],borderColor:"red"}]},Line_options:{responsive:!0,legend:{display:!1,labels:{}},title:{display:!0,text:"マシン・サイクル・タイム"},scales:{xAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"時間（秒）",fontColor:"grey",fontSize:12},gridLines:{color:"rgba(0, 0, 255, 0.2)"},ticks:{min:0,fontColor:"grey",fontSize:12}}],yAxes:[{stacked:!0,scaleLabel:(t={display:!1,labelString:"サイクル",fontFamily:"sans-serif",fontColor:"grey"},Object(r.a)(t,"fontFamily","sans-serif"),Object(r.a)(t,"fontSize",12),t),gridLines:{color:"rgba(0, 0, 255, 0.2)",zeroLineColor:"black"},ticks:{min:0,max:3600,stepSize:900,fontColor:"grey",fontSize:10}}]}},items:[{message:"Foo",message2:"aka"},{message:"Bar",message2:"shiro"},{message:"aki",message2:"kiiro"}],chartsLib:null,chartData:[],chartData2:[],colors2:["#808080","#FFBB00","#D9073D","limegreen"]}},methods:{test:function(){this.chartData.push(["President","STP",new Date(2021,3,8,15,50,30),new Date(2021,3,8,16,15,0)]),console.log(this.chartData)},initData:function(){console.log(this.machineCode),this.ObiArry=[],this.ObiArryStatus=[],this.Line_chartData.labels=[],this.Line_chartData.datasets[0].data=[],this.Line_chartData.datasets[1].data=[],this.chartData=[];for(var i=0;i<10;i++)this.ObiArry.push([]),this.ObiArryStatus.push([])},fire:function(){var t=this,e=new Date,n=e.getFullYear(),r=e.getMonth(),c=e.getDate(),l=new Date(n,r,c,7,45,0),h=new Date(n,r,c,23,59,59),d=String(Date.parse(l)),f=String(Date.parse(h)),y=Object.assign({},this.Line_chartData);o.a.database().ref("NishioMachineCT/").orderByChild("endTime").startAt(d).endAt(f).on("value",(function(e){t.initData();var data=e.val();for(var i in data){var n=data[i];if(n.machine==t.machineCode){var r=new Date(Number(n.startTime)),o=new Date(Number(n.startTime)),c=new Date(Number(n.startTime)),l=r.getHours(),h=r.getDate();c.setMinutes(0),c.setSeconds(0),o.setHours(l+1),o.setMinutes(0),o.setSeconds(0);var d=new Date(Number(n.endTime)),f=(d.getHours(),String(d.getHours())),y=String(d.getMinutes()),m=String(d.getSeconds()),v="\n                ".concat(t.zeroPadding(f,2),"時").concat(t.zeroPadding(y,2),"分").concat(t.zeroPadding(m,2),"秒 "),w=d.getDate(),C=new Date(Number(n.endTime));if(C.setMinutes(0),C.setSeconds(0),h!=w||"999"==n.startTime){console.log("あ〜、ここに入っちゃっているんだね〜"+n.startTime);var D=void 0,j=void 0;f>=8&&(console.log([h,w,n.startTime]),(D=d).setHours(8,0,0),t.chartData.push([t.machineCode,"STP",D,d]));for(var x=void 0,O=4;O>0;O--){switch(O){case 4:x="RUN";break;case 3:x="STP";break;case 2:x="DDR";break;case 1:x="ERR"}D=new Date(d.setSeconds(m-O)),j=new Date(d.setSeconds(m-O+1)),console.log([t.machineCode,x,D,j]),t.chartData.push([t.machineCode,x,D,j])}}else{var S=void 0;S="RUN1"==n.status||"ERR1"==n.status||"DDR1"==n.status?"STP":n.status.substr(0,3),t.ObiArryPush(l,S,d-r,r,d,v)}}}})),this.Line_chartData=y,console.log(this.ObiArry),console.log(this.ObiArryStatus)},ObiArryPush:function(t,e,n,r,o,c){var l=this.ByouMethod(n);this.ObiArry[t-7].push(l),this.ObiArryStatus[t-7].push(e),this.chartData.push([this.machineCode,e,new Date(r),new Date(o)]),"RUN"==e?this.graphUD(c,0,l):"STP"==e&&this.graphUD(c,1,l)},ByouMethod:function(t){var e=new Date(t);return 60*e.getMinutes()+e.getSeconds()},graphUD:function(t,e,n){var r=Object.assign({},this.Line_chartData);0===e&&r.labels.push(t),r.datasets[e].data.push(n),this.Line_chartData=r},onChartReady:function(t,e){this.chartsLib=e},zeroPadding:function(t,e){return("00000000"+String(t)).slice(-e)}},computed:{image_src:function(){return n(553)("./"+this.machineCode+".jpg")},getStatusFull:function(){return this.$store.getters["timeBank/getStatusFull"]},chartOptions:function(){return{colors:this.colors2}}},mounted:function(){this.fire()}},d=(n(580),n(38)),f=n(80),y=n.n(f),m=n(515),v=n(526),w=n(523),C=(n(187),n(230)),D=Object(C.a)("layout"),j=n(527),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:"/"}},[t._v("戻る")]),t._v(" "),n("v-container",{staticClass:"my-0 pa-0 grey lighten-3"},[n("v-row",{staticClass:"ma-2 pa-0",attrs:{cols:"12"}},[n("v-col",[n("v-card",{attrs:{elevation:"12",sm:"6",md:"4",lg:"4",xl:"2"}},[n("ul",{attrs:{id:"example-1"}},t._l(this.getStatusFull,(function(e,r){return n("li",{key:e.message},[t._v("\n              "+t._s(r)+"\n              "),0==e?n("span",{staticClass:"grey darken-2  white--text text-center text--lighten-2 font-weight-bold subtitle width--50%"},[t._v("\n                停止中\n              ")]):1==e?n("span",{staticClass:"green darken-2 white--text text-center text--lighten-2 font-weight-bold subtitle"},[t._v("\n                運転中\n              ")]):2==e?n("span",{staticClass:"red white--text text-center text--lighten-2 font-weight-bold subtitle"},[t._v("\n                異常発生中\n              ")]):3==e?n("span",{staticClass:"yellow black--text text-center text--lighten-2 font-weight-bold subtitle"},[t._v("\n                段取中\n              ")]):t._e()])})),0)]),t._v(" "),n("v-card",{staticClass:"mt-2 py-2",attrs:{elevation:"12"}},[n("v-layout",{staticClass:"flex",attrs:{"justify-center":""}},[n("div",{attrs:{width:"100px",height:"100px"}},[n("img",{attrs:{src:t.image_src,width:"100%",height:"100%"}})])])],1)],1),t._v(" "),n("v-col",[n("compMachine",{attrs:{"ma-2":"","pa-2":"",name:t.$route.query.pageName}})],1),t._v(" "),n("v-col",[n("v-card",{attrs:{"pa-0":"",height:"420px",elevation:"12"}},[n("ObiChart",{attrs:{data:t.Line_chartData,options:t.Line_options,height:420}})],1)],1)],1),t._v(" "),n("GChart",{attrs:{settings:{packages:["timeline"]},type:"Timeline",data:t.chartData,options:t.chartOptions},on:{ready:t.onChartReady}})],1)],1)}),[],!1,null,"012181e0",null);e.default=component.exports;y()(component,{ObiChart:n(545).default}),y()(component,{VCard:m.a,VCol:v.a,VContainer:w.a,VLayout:D,VRow:j.a})}}]);