(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11],{560:function(t,e,r){"use strict";r.r(e);var n=r(88),o={extends:n.c,mixins:[n.e.reactiveData],props:{data:null,options:null},mounted:function(){this.chartData=this.data},watch:{data:function(){this.chartData=this.data}}},c=r(31),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports},580:function(t,e,r){"use strict";r.r(e);r(50),r(191),r(51),r(21),r(77),r(408),r(60),r(59);var n=r(4),o=r(560),c=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],h={props:["name"],data:function(){var t;return{isRed:!1,isTgt:!1,nameAB:this.name,chokuzenSW:"",width:2,radius:10,padding:8,lineCap:"round",gradient:c[5],defferenceTime:0,KeikaJikanTime:"00:00:00",gradientDirection:"top",gradients:c,fill:!1,type:"trend",autoLineWidth:!1,Bar_chartData:{labels:[],datasets:[{label:["MachineHour"],backgroundColor:"limegreen",data:[]}]},Bar_options:{responsive:!0,legend:{display:!1,labels:{}},scales:{xAxes:[{stacked:!1,scaleLabel:{display:!1,labelString:"横軸ラベル",fontColor:"grey",fontSize:12},gridLines:{color:"rgba(0, 0, 255, 0.2)"},ticks:{fontColor:"grey",fontSize:12}}],yAxes:[{stacked:!1,scaleLabel:(t={display:!1,labelString:"縦軸ラベル",fontFamily:"sans-serif",fontColor:"grey"},Object(n.a)(t,"fontFamily","sans-serif"),Object(n.a)(t,"fontSize",12),t),gridLines:{color:"rgba(0, 0, 255, 0.2)",zeroLineColor:"black"},ticks:{min:0,max:3600,stepSize:900,fontColor:"grey",fontSize:10}}]}},addFlag:!1}},components:{BarChart:o.default},computed:{getCurrentTarget:function(){return this.$store.getters["timeBank/getCurrentTarget"](this.nameAB)},getCycleArray:function(){return this.$store.getters["timeBank/ getCycleArray"](this.nameAB)},getProgressSeconds:function(){return this.$store.getters["timeBank/getProgressSeconds"]},getSensingStTime:function(){return this.$store.getters["timeBank/getSensingStTime"](this.nameAB)},getStopWatchArray:function(){return 0==this.getCountData?"0分00秒":this.$store.getters["timeBank/getStopWatchArray"](this.nameAB)},getStopWatchSecondsArray:function(){return this.$store.getters["timeBank/getStopWatchSecondsArray"](this.nameAB)},value3:function(){return this.$store.getters["timeBank/getSpark"](this.nameAB)},getStatusData:function(){return this.$store.getters["timeBank/getStatus"](this.nameAB)},getStatusFull:function(){return this.$store.getters["timeBank/getStatusFull"]},getTimeData:function(){var t=0;return t=1==this.$store.getters["timeBank/getStatus"](this.nameAB)?this.$store.getters["timeBank/getStopWatchSecondsArray"](this.nameAB):0,this.$store.getters["timeBank/getCycleArray"](this.nameAB)+t},getTimeDataMS:function(){return Math.floor(this.getTimeData/60)+"分"+(this.getTimeData%60).toString().padStart(2,"0")+"秒"},calcMachineRate:function(){return(this.getTimeData/this.$store.getters["timeBank/getProgressSeconds"]*1e4/100).toFixed(1)},calcMachineRateDDR:function(){return(this.$store.getters["timeBank/getCycleArrayDDR"](this.nameAB)/this.$store.getters["timeBank/getProgressSeconds"]*1e4/100).toFixed(1)},getTimeDataErr_generateMS:function(){return Math.floor(this.$store.getters["timeBank/getCycleArrayErr"](this.nameAB)/60)+"分"+(this.$store.getters["timeBank/getCycleArrayErr"](this.nameAB)%60).toString().padStart(2,"0")+"秒"},getTimeDataDDR_generateMS:function(){return Math.floor(this.$store.getters["timeBank/getCycleArrayDDR"](this.nameAB)/60)+"分"+(this.$store.getters["timeBank/getCycleArrayDDR"](this.nameAB)%60).toString().padStart(2,"0")+"秒"},getCountData:function(){return this.$store.getters["timeBank/getCycleCounterData"](this.nameAB)},getCountErrData:function(){return this.$store.getters["timeBank/getCycleCounterDataErr"](this.nameAB)},getCycleCounterDataDDR:function(){return this.$store.getters["timeBank/getCycleCounterDataDDR"](this.nameAB)},getSensingTime:function(){}},watch:{getCurrentTarget:function(t,e){this.isTgt=!0},getStatusData:function(t,e){switch(this.graphUD(),this.chokuzenSW=this.getStopWatchArray,e){case 0:switch(t){case 0:break;case 1:this.chokuzenSW="停止"+this.getStopWatchArray+"後に起動！";break;case 2:this.chokuzenSW="停止"+this.getStopWatchArray+"後に異常発生！";break;case 3:this.chokuzenSW="停止"+this.getStopWatchArray+"後から段取中！"}break;case 1:this.chokuzenSW="直前の運転は"+this.getStopWatchArray+"でした";break;case 2:switch(t){case 0:this.chokuzenSW="異常停止"+this.getStopWatchArray+"から復旧！";break;case 1:this.chokuzenSW="運転中に異常発生！";break;case 2:break;case 3:this.chokuzenSW="段取りからの、異常発生！？"}break;case 3:this.chokuzenSW="段取り時間は"+this.getStopWatchArray+"でした"}}},mounted:function(){this.initialize(),this.graphUD()},methods:{initialize:function(){var t=this;this.Bar_chartData.labels=[],this.Bar_chartData.datasets[0].data=[];var e=this.$store.getters["timeBank/getStatusFull"];Object.keys(e).forEach((function(e){return t.Bar_chartData.labels.push(e)})),console.log(this.Bar_chartData.labels)},sleep:function(t,e){var r=0,n=setTimeout((function o(){++r>=t?e&&e():(clearTimeout(n),n=setTimeout(o,1e3))}),1e3)},redirect:function(){this.$router.push("/next?pageName="+this.name)},graphUD:function(){var t=this;this.Bar_chartData.datasets[0].data=[];var e=Object.assign({},this.Bar_chartData),r=this.$store.getters["timeBank/getmachineHourArry"];Object.keys(r).forEach((function(t){return e.datasets[0].data.push(r[t])})),console.log("h基準2"),console.log(e.datasets[0].data),this.Bar_chartDatahartData=e,setTimeout((function(){t.graphUD()}),5e3)},graphUD_Keika:function(){var t=this.$store.getters["timeBank/getStatus"](this.nameAB);1==t?this.$store.commit("timeBank/cycleTimeArrayUD",{machineCode:this.nameAB,timeDeff:5,UD:!1}):2==t&&(err+=5)}}},l=r(31),m=r(67),d=r.n(m),f=r(524),B=r(540),component=Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dir",[r("v-card",[t._v("\n\n  日付の設定と、マシンアワー比較グラフを表示\n  "),t._v(" "),r("v-row",{staticClass:"mb-0 pa-0",attrs:{"no-gutters":""}},[r("span",{attrs:{width:"250px"}},[r("BarChart",{attrs:{data:t.Bar_chartData,options:t.Bar_options,height:200,width:200}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{BarChart:r(149).default}),d()(component,{VCard:f.a,VRow:B.a})}}]);