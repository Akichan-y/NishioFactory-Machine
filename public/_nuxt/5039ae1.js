(window.webpackJsonp=window.webpackJsonp||[]).push([[40,14],{553:function(t,e,n){(function(e){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(l||(l=new Promise((function(t){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return t(window.google.charts)},script.src=c,document.body.appendChild(script)}))),l)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r().then((function(n){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("Google Charts loader: settings must be an object");var r=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(h.has(r))return h.get(r);var c=new Promise((function(r){n.load(t,e),n.setOnLoadCallback((function(){return r(window.google)}))}));return h.set(r,c),c}))};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="https://www.gstatic.com/charts/loader.js",l=null,h=new Map},function(t,e,n){var r=n(5)(n(4),n(6),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n){function r(){var d=Date.now()-h;d<e&&d>=0?o=setTimeout(r,e-d):(o=null,n||(f=t.apply(l,c),l=c=null))}var o,c,l,h,f;null==e&&(e=100);var d=function(){l=this,c=arguments,h=Date.now();var d=n&&!o;return o||(o=setTimeout(r,e)),d&&(f=t.apply(l,c),l=c=null),f};return d.clear=function(){o&&(clearTimeout(o),o=null)},d.flush=function(){o&&(f=t.apply(l,c),l=c=null,clearTimeout(o),o=null)},d}},function(t,n,r){"use strict";function o(t){t.component("GChart",h.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=o;var c=r(0),l=r(1),h=r.n(l);r.d(n,"loadGoogleCharts",(function(){return c.a})),r.d(n,"GChart",(function(){return h.a}));var f={version:"0.3.3",install:o};n.default=f;var d=null;"undefined"!=typeof window?d=window.Vue:void 0!==e&&(d=e.Vue),d&&d.use(f)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(2),c=n.n(o),l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],n=!0,r=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;n.i(r.a)(this.version,this.settings).then((function(e){f=e;var n=t.createChartObject();t.$emit("ready",n,e),t.drawChart()})),this.resizeDebounce>0&&window.addEventListener("resize",c()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&"function"==typeof this.chartObject.clearChart&&this.chartObject.clearChart()},methods:{drawChart:function(){if(f&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof f.visualization.DataTable||this.data instanceof f.visualization.DataView?this.data:Array.isArray(this.data)?f.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===h(this.data)?new f.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,n){if(!n)throw new Error("please, provide chart type property");return new e.visualization[n](t)};return this.chartObject=t(this.$refs.chart,f,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach((function(e){var n=l(e,2),r=n[0],o=n[1];f.visualization.events.addListener(t.chartObject,r,o)}))}}}},function(t,e){t.exports=function(t,e,n,r){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var h="function"==typeof c?c.options:c;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns),n&&(h._scopeId=n),r){var f=h.computed||(h.computed={});Object.keys(r).forEach((function(t){var e=r[t];f[t]=function(){return e}}))}return{esModule:o,exports:c,options:h}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,n(61))},554:function(t,e,n){"use strict";var r=n(553);n.o(r,"GChart")&&n.d(e,"GChart",(function(){return r.GChart}))},556:function(t,e,n){"use strict";n.r(e);var r=n(71),o={extends:r.c,mixins:[r.e.reactiveData],props:{data:null,options:null},mounted:function(){this.chartData=this.data},watch:{data:function(){this.chartData=this.data}}},c=n(29),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},623:function(t,e,n){var content=n(672);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("ed24430c",content,!0,{sourceMap:!1})},671:function(t,e,n){"use strict";n(623)},672:function(t,e,n){var r=n(12)(!1);r.push([t.i,"#aaa[data-v-5f944403]{color:#0ff;background-color:red}.flex[data-v-5f944403]{display:flex;align-items:flex-start}",""]),t.exports=r},735:function(t,e,n){"use strict";n.r(e);n(27),n(88),n(18);var r=n(3),o=n(555),c=n(556),l=n(554);function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={asyncData:function(t){},name:"App",components:{ObiChart:c.default,GChart:l.GChart},data:function(){var t;return{machineCode:"LN034",machineCodeArry:["LN034","MC031"],ObiArry:[],ObiArryStatus:[],Line_chartData:{labels:[],datasets:[Object(r.a)({label:"RUN",borderColor:"rgba(75,192,192,1)",backgroundColor:"limegreen",data:[]},"borderColor","green"),{label:"STOP",backgroundColor:"grey",data:[],borderColor:"red"}]},Line_options:{responsive:!0,legend:{display:!1,labels:{}},title:{display:!0,text:"マシン・サイクル・タイム"},scales:{xAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"時間（分）",fontColor:"grey",fontSize:12},gridLines:{color:"rgba(0, 0, 255, 0.2)"},ticks:{min:0,fontColor:"grey",fontSize:12}}],yAxes:[{stacked:!0,scaleLabel:(t={display:!1,labelString:"サイクル",fontFamily:"sans-serif",fontColor:"grey"},Object(r.a)(t,"fontFamily","sans-serif"),Object(r.a)(t,"fontSize",12),t),gridLines:{color:"rgba(0, 0, 255, 0.2)",zeroLineColor:"black"},ticks:{min:0,max:3600,stepSize:900,fontColor:"grey",fontSize:10}}]}},items:{LN034:"00:10:01",MC024:"00:00:02"},chartsLib:null,chartData:[],chartData2:[],colors2:["#808080","#FFBB00","#D9073D","limegreen"]}},methods:{test:function(){this.chartData.push(["President","STP",new Date(2021,3,8,15,50,30),new Date(2021,3,8,16,15,0)]),console.log(this.chartData)},initData:function(){console.log(this.machineCode),this.ObiArry=[],this.ObiArryStatus=[],this.Line_chartData.labels=[],this.Line_chartData.datasets[0].data=[],this.Line_chartData.datasets[1].data=[],this.chartData=[];for(var i=0;i<10;i++)this.ObiArry.push([]),this.ObiArryStatus.push([])},fire:function(){var t=this,e=new Date,n=e.getFullYear(),r=e.getMonth(),c=e.getDate(),l=new Date(n,r,c,7,45,0),f=new Date(n,r,c,23,59,59),d=String(Date.parse(l)),y=String(Date.parse(f)),v=Object.assign({},this.Line_chartData);o.a.database().ref("NishioMachineCT/").orderByChild("endTime").startAt(d).endAt(y).on("value",(function(e){t.initData();var data=e.val();for(var i in data){var n=data[i];if(n.machine==t.machineCode){var r=new Date(Number(n.startTime)),o=new Date(Number(n.startTime)),c=new Date(Number(n.startTime)),l=r.getHours(),f=r.getDate();c.setMinutes(0),c.setSeconds(0),o.setHours(l+1),o.setMinutes(0),o.setSeconds(0);var d=new Date(Number(n.endTime)),y=(d.getHours(),String(d.getHours())),v=String(d.getMinutes()),m=String(d.getSeconds()),w="\n                ".concat(t.zeroPadding(y,2),"時").concat(t.zeroPadding(v,2),"分").concat(t.zeroPadding(m,2),"秒 "),C=d.getDate(),D=new Date(Number(n.endTime));if(D.setMinutes(0),D.setSeconds(0),f!=C||"999"==n.startTime){var S=void 0;y>=8&&(console.log([f,C,n.startTime]),(S=d).setHours(8,0,0),t.chartData.push([t.machineCode,"STP",S,d]));for(var O=5;O>0;O--){switch(O){case 5:"KKT";break;case 4:"RUN";break;case 3:"STP";break;case 2:"DDR";break;case 1:"ERR"}S=new Date(d.setSeconds(m-O)),new Date(d.setSeconds(m-O+1));var x,_=h(machineCodeArry);try{for(_.s();!(x=_.n()).done;){var j=x.value;console.log("現在のマシンは、"+j)}}catch(t){_.e(t)}finally{_.f()}}}else{var A=void 0;A="RUN1"==n.status||"ERR1"==n.status||"DDR1"==n.status||"KKT1"==n.status?"STP":n.status.substr(0,3),t.ObiArryPush(l,A,d-r,r,d,w)}}}})),this.Line_chartData=v,console.log(this.ObiArry),console.log(this.ObiArryStatus)},ObiArryPush:function(t,e,n,r,o,c){var l=this.ByouMethod(n);this.ObiArry[t-7].push(l),this.ObiArryStatus[t-7].push(e),this.chartData.push([this.machineCode,e,new Date(r),new Date(o)]),"RUN"==e?this.graphUD(c,0,l):"STP"==e&&this.graphUD(c,1,l)},ByouMethod:function(t){var e=new Date(t);return 60*e.getMinutes()+e.getSeconds()},graphUD:function(t,e,n){var r=Object.assign({},this.Line_chartData);0===e&&r.labels.push(t),r.datasets[e].data.push(n/60),this.Line_chartData=r},onChartReady:function(t,e){this.chartsLib=e},zeroPadding:function(t,e){return("00000000"+String(t)).slice(-e)},testMethod:function(){}},computed:{testCom:function(){return this.items},getStopWatchArrayPrimitive:function(){return this.$store.getters["timeBank/getStopWatchArrayPrimitive"]},image_src:function(){},getStatusFull:function(){return this.$store.getters["timeBank/getStatusFull"]},chartOptions:function(){return{colors:this.colors2}}},mounted:function(){this.fire()}},y=(n(671),n(29)),v=n(68),m=n.n(v),w=n(534),C=n(550),D=n(545),S=n(551),component=Object(y.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:"/"}},[t._v("戻る")]),t._v(" "),n("v-container",{staticClass:"my-0 pa-0 grey lighten-3"},[n("v-row",{staticClass:"ma-2 pa-0",attrs:{cols:"12"}},[n("v-col",[n("compMachine",{attrs:{name:"LN034"}})],1),t._v(" "),n("v-col",[n("compMachine",{attrs:{name:"MC031"}})],1),t._v(" "),n("v-col",[n("v-card",{attrs:{elevation:"12",sm:"6",md:"4",lg:"4",xl:"2"}},[n("p",{staticClass:"ml-2 indigo--text display-subtitle"},[t._v("稼働状況一覧")]),t._v(" "),n("ul",{attrs:{id:"example-1"}},t._l(this.getStatusFull,(function(e,r){return n("li",{key:e.message},[t._v("\n              "+t._s(r)+"...\n              "),0==e?n("span",{staticClass:"grey darken-2  white--text text-center text--lighten-2 font-weight-bold subtitle width--50%"},[t._v("\n                停止中\n              ")]):1==e?n("span",{staticClass:"green darken-2 white--text text-center text--lighten-2 font-weight-bold subtitle"},[t._v("\n                運転中\n              ")]):2==e?n("span",{staticClass:"red white--text text-center text--lighten-2 font-weight-bold subtitle"},[t._v("\n                異常発生中\n              ")]):3==e?n("span",{staticClass:"yellow black--text text-center text--lighten-2 font-weight-bold subtitle"},[t._v("\n                段取中\n              ")]):4==e?n("span",{staticClass:"pink lighten-4 green--text text-center text--darken-2 font-weight-bold subtitle"},[t._v("\n                計画停止中\n              ")]):t._e(),t._v(" "),n("span",[t._v(t._s("......"+t.getStopWatchArrayPrimitive[r]))])])})),0)])],1),t._v(" "),n("v-col",[n("GChart",{attrs:{settings:{packages:["timeline"]},type:"Timeline",data:t.chartData,options:t.chartOptions},on:{ready:t.onChartReady}}),t._v(" "),n("v-card",{attrs:{"pa-0":"",height:"420px",elevation:"12"}},[n("ObiChart",{attrs:{data:t.Line_chartData,options:t.Line_options,height:420}})],1)],1)],1)],1)],1)}),[],!1,null,"5f944403",null);e.default=component.exports;m()(component,{ObiChart:n(556).default}),m()(component,{VCard:w.a,VCol:C.a,VContainer:D.a,VRow:S.a})}}]);