(window.webpackJsonp=window.webpackJsonp||[]).push([[41,14],{553:function(t,e,r){(function(e){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=3)}([function(t,e,r){"use strict";function n(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(l||(l=new Promise((function(t){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return t(window.google.charts)},script.src=c,document.body.appendChild(script)}))),l)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n().then((function(r){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("Google Charts loader: settings must be an object");var n=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(h.has(n))return h.get(n);var c=new Promise((function(n){r.load(t,e),r.setOnLoadCallback((function(){return n(window.google)}))}));return h.set(n,c),c}))};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="https://www.gstatic.com/charts/loader.js",l=null,h=new Map},function(t,e,r){var n=r(5)(r(4),r(6),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,r){function n(){var d=Date.now()-h;d<e&&d>=0?o=setTimeout(n,e-d):(o=null,r||(f=t.apply(l,c),l=c=null))}var o,c,l,h,f;null==e&&(e=100);var d=function(){l=this,c=arguments,h=Date.now();var d=r&&!o;return o||(o=setTimeout(n,e)),d&&(f=t.apply(l,c),l=c=null),f};return d.clear=function(){o&&(clearTimeout(o),o=null)},d.flush=function(){o&&(f=t.apply(l,c),l=c=null,clearTimeout(o),o=null)},d}},function(t,r,n){"use strict";function o(t){t.component("GChart",h.a)}Object.defineProperty(r,"__esModule",{value:!0}),r.install=o;var c=n(0),l=n(1),h=n.n(l);n.d(r,"loadGoogleCharts",(function(){return c.a})),n.d(r,"GChart",(function(){return h.a}));var f={version:"0.3.3",install:o};r.default=f;var d=null;"undefined"!=typeof window?d=window.Vue:void 0!==e&&(d=e.Vue),d&&d.use(f)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(2),c=r.n(o),l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],r=!0,n=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);r=!0);}catch(t){n=!0,o=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw o}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;r.i(n.a)(this.version,this.settings).then((function(e){f=e;var r=t.createChartObject();t.$emit("ready",r,e),t.drawChart()})),this.resizeDebounce>0&&window.addEventListener("resize",c()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&"function"==typeof this.chartObject.clearChart&&this.chartObject.clearChart()},methods:{drawChart:function(){if(f&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof f.visualization.DataTable||this.data instanceof f.visualization.DataView?this.data:Array.isArray(this.data)?f.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===h(this.data)?new f.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,r){if(!r)throw new Error("please, provide chart type property");return new e.visualization[r](t)};return this.chartObject=t(this.$refs.chart,f,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach((function(e){var r=l(e,2),n=r[0],o=r[1];f.visualization.events.addListener(t.chartObject,n,o)}))}}}},function(t,e){t.exports=function(t,e,r,n){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var h="function"==typeof c?c.options:c;if(e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns),r&&(h._scopeId=r),n){var f=h.computed||(h.computed={});Object.keys(n).forEach((function(t){var e=n[t];f[t]=function(){return e}}))}return{esModule:o,exports:c,options:h}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,r(61))},554:function(t,e,r){"use strict";var n=r(553);r.o(n,"GChart")&&r.d(e,"GChart",(function(){return n.GChart}))},556:function(t,e,r){"use strict";r.r(e);var n=r(71),o={extends:n.c,mixins:[n.e.reactiveData],props:{data:null,options:null},mounted:function(){this.chartData=this.data},watch:{data:function(){this.chartData=this.data}}},c=r(29),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},717:function(t,e,r){"use strict";r.r(e);r(27),r(88),r(18);var n=r(3),o=r(555),c=r(556),l=r(554);function h(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}e.default={asyncData:function(t){},name:"App",components:{ObiChart:c.default,GChart:l.GChart},data:function(){var t;return{machineCode:"LN034",machineCodeArry:["LN034","MC031"],ObiArry:[],ObiArryStatus:[],Line_chartData:{labels:[],datasets:[Object(n.a)({label:"RUN",borderColor:"rgba(75,192,192,1)",backgroundColor:"limegreen",data:[]},"borderColor","green"),{label:"STOP",backgroundColor:"grey",data:[],borderColor:"red"}]},Line_options:{responsive:!0,legend:{display:!1,labels:{}},title:{display:!0,text:"マシン・サイクル・タイム"},scales:{xAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"時間（分）",fontColor:"grey",fontSize:12},gridLines:{color:"rgba(0, 0, 255, 0.2)"},ticks:{min:0,fontColor:"grey",fontSize:12}}],yAxes:[{stacked:!0,scaleLabel:(t={display:!1,labelString:"サイクル",fontFamily:"sans-serif",fontColor:"grey"},Object(n.a)(t,"fontFamily","sans-serif"),Object(n.a)(t,"fontSize",12),t),gridLines:{color:"rgba(0, 0, 255, 0.2)",zeroLineColor:"black"},ticks:{min:0,max:3600,stepSize:900,fontColor:"grey",fontSize:10}}]}},items:{LN034:"00:10:01",MC024:"00:00:02"},chartsLib:null,chartData:[],chartData2:[],colors2:["#808080","#FFBB00","#D9073D","limegreen"]}},methods:{test:function(){this.chartData.push(["President","STP",new Date(2021,3,8,15,50,30),new Date(2021,3,8,16,15,0)]),console.log(this.chartData)},initData:function(){console.log(this.machineCode),this.ObiArry=[],this.ObiArryStatus=[],this.Line_chartData.labels=[],this.Line_chartData.datasets[0].data=[],this.Line_chartData.datasets[1].data=[],this.chartData=[];for(var i=0;i<10;i++)this.ObiArry.push([]),this.ObiArryStatus.push([])},fire:function(){var t=this,e=new Date,r=e.getFullYear(),n=e.getMonth(),c=e.getDate(),l=new Date(r,n,c,7,45,0),f=new Date(r,n,c,23,59,59),d=String(Date.parse(l)),y=String(Date.parse(f)),m=Object.assign({},this.Line_chartData);o.a.database().ref("NishioMachineCT/").orderByChild("endTime").startAt(d).endAt(y).on("value",(function(e){t.initData();var data=e.val();for(var i in data){var r=data[i];if(r.machine==t.machineCode){var n=new Date(Number(r.startTime)),o=new Date(Number(r.startTime)),c=new Date(Number(r.startTime)),l=n.getHours(),f=n.getDate();c.setMinutes(0),c.setSeconds(0),o.setHours(l+1),o.setMinutes(0),o.setSeconds(0);var d=new Date(Number(r.endTime)),y=(d.getHours(),String(d.getHours())),m=String(d.getMinutes()),v=String(d.getSeconds()),w="\n                ".concat(t.zeroPadding(y,2),"時").concat(t.zeroPadding(m,2),"分").concat(t.zeroPadding(v,2),"秒 "),D=d.getDate(),S=new Date(Number(r.endTime));if(S.setMinutes(0),S.setSeconds(0),f!=D||"999"==r.startTime){var C=void 0;y>=8&&(console.log([f,D,r.startTime]),(C=d).setHours(8,0,0),t.chartData.push([t.machineCode,"STP",C,d]));for(var O=5;O>0;O--){switch(O){case 5:"KKT";break;case 4:"RUN";break;case 3:"STP";break;case 2:"DDR";break;case 1:"ERR"}C=new Date(d.setSeconds(v-O)),new Date(d.setSeconds(v-O+1));var j,A=h(machineCodeArry);try{for(A.s();!(j=A.n()).done;){var T=j.value;console.log("現在のマシンは、"+T)}}catch(t){A.e(t)}finally{A.f()}}}else{var L=void 0;L="RUN1"==r.status||"ERR1"==r.status||"DDR1"==r.status||"KKT1"==r.status?"STP":r.status.substr(0,3),t.ObiArryPush(l,L,d-n,n,d,w)}}}})),this.Line_chartData=m,console.log(this.ObiArry),console.log(this.ObiArryStatus)},ObiArryPush:function(t,e,r,n,o,c){var l=this.ByouMethod(r);this.ObiArry[t-7].push(l),this.ObiArryStatus[t-7].push(e),this.chartData.push([this.machineCode,e,new Date(n),new Date(o)]),"RUN"==e?this.graphUD(c,0,l):"STP"==e&&this.graphUD(c,1,l)},ByouMethod:function(t){var e=new Date(t);return 60*e.getMinutes()+e.getSeconds()},graphUD:function(t,e,r){var n=Object.assign({},this.Line_chartData);0===e&&n.labels.push(t),n.datasets[e].data.push(r/60),this.Line_chartData=n},onChartReady:function(t,e){this.chartsLib=e},zeroPadding:function(t,e){return("00000000"+String(t)).slice(-e)},testMethod:function(){}},computed:{testCom:function(){return this.items},getStopWatchArrayPrimitive:function(){return this.$store.getters["timeBank/getStopWatchArrayPrimitive"]},image_src:function(){},getStatusFull:function(){return this.$store.getters["timeBank/getStatusFull"]},chartOptions:function(){return{colors:this.colors2}}},mounted:function(){this.fire()}}}}]);