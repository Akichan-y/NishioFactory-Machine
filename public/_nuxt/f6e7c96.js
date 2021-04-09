(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{601:function(e,t,r){var content=r(653);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("1b7833da",content,!0,{sourceMap:!1})},652:function(e,t,r){"use strict";r(601)},653:function(e,t,r){var n=r(12)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);"]),n.push([e.i,'#kadouritsu{font-size:1.5em}#container{display:grid;grid-template-columns:300px 300px 1fr;grid-template-rows:300px 200px 1fr;grid-template-areas:"areaA areaA areaB" "areaC areaD areaB" "areaE areaD areaB";padding:10px}#test{grid-area:areaA;font-family:"Share Tech Mono",sans-serif;font-size:3em;background:#000;color:#f0f8ff;text-align:center;display:-webkit-flex;align-items:center;-webkit-align-items:center;justify-content:center;vertical-align:"middle";margin:10px}.keika{font-size:1em}#kadouJikan{grid-area:areaE;background:purple;color:#fff;border:4px solid brown}#clock{grid-area:areaA;background:#000;display:flex;margin:10px}#msg{grid-area:areaD;padding:0;margin:5px;background:pink;color:brown;border:3px solid brown}#grp{grid-area:areaB;padding:0;border:4px double red;background-color:rgba(100,200,200,.1)}#line{width:500px}#stts{background:#87ceeb;border:4px solid #00f;margin:5px;text-align:center;display:flex;align-items:center;justify-content:center;vertical-align:"middle"}#stts,.Unten{font-size:3em}.Unten{color:#00f}.Teishi2{color:green;font-size:3em;background-color:red}.time{font-size:1em}',""]),e.exports=n},677:function(e,t,r){"use strict";r.r(t);r(27),r(87),r(122),r(18),r(51),r(413),r(52),r(60);var n=r(4),o=r(2),c=r(90),m=r(563),l=r(554),d=r(553),h=r(215),k=r(583),S=r(584),f=r(597);o.a.use(c.a);var T={mixins:[f.a],components:{StopWatch:m.default,KadouJikan:l.default,compMachine:h.default,compMachine2:k.default,compDateMH:S.default},data:function(){return{excludeSetTime:[],timerId:0,KadouJikan:"稼働時間",KadouJikan_Byou_Test:0,GenzaiJikan:"現在時間",labels:["12am","3am","6am","9am","12pm","3pm","6pm","9pm"],classes:[["h1","Heading 1","6rem","300","-.015625em",-1],["h2","Heading 2","3.75rem","300","-.0083333333em",0],["h3","Heading 3","3rem","400","normal",1],["h4","Heading 4","2.125rem","400",".0073529412em",2],["h5","Heading 5","1.5rem","400","normal",2],["h6","Heading 6","1.25rem","500",".0125em",3],["subtitle-1","Subtitle 1","1rem","400",".009375em",4],["subtitle-2","Subtitle 2","0.875rem","500",".0071428571em",4],["body-1","Body 1","1rem","400",".03125em",4],["body-2","Body 2","0.875rem","400",".0178571429em",4],["button","Button","0.875rem","500",".0892857143em",4],["caption","Caption","0.75rem","400",".0333333333em",4],["overline","Overline","0.75rem","500",".1666666667em",4]],datacollection:null,dataOption:null,time:"00:00:00.000",counter:0,stoppedDuration:0,data_Kadou:[],data_Teishi:[],data_Teishi_Title:[],data_kadou_total:0,labelSample:["a","b","c"],TimeIncrease:[0,0],lastS:"",lastD:"",timeBegan:null,started:null,running:!1,dataCount:0,styleObject:{color:"yellow",backgroundColor:"blue",fontSize:30},sparkTest:{LN034:[0,1,2,3,4,5],MC027:[6,7,8,9]},sparkTest2:[6,7,8,9],sparkTest3:[0,1,2,3,4,5],sparkTest5:{LN034:100,MC027:[6,7,8,9]}}},mounted:function(){this.fillData()},computed:{getProgressSeconds:function(){return this.$store.getters["timeBank/getProgressSeconds"]},getNow:function(){new Date;return this.$store.getters.getNow},getGenzaiJikan:function(){return this.$store.getters["timeBank/getKeikaJikanByou"]},getCA:function(){return this.$store.getters["timeBank/getCycleArray2"]},getCA2:function(){return this.$store.getters["timeBank/getCycleArray"]},reverseItems:function(){return this.data_Teishi_Title.slice().reverse().splice(0,7)},RDS:function(){return this.data_sample},GetD:function(){return this.$store.getters["counter/counter"]},getKadouJikanVuex:function(){return this.$store.getters.getKadouJikan},getKeikaJikan:function(){return this.$store.getters["timeBank/getKeikaJikan"]},Kadouritst:function(){return"【マシン稼働率".concat(Math.round(this.$store.getters.getKadouJikan/this.$store.getters["timeBank/getKeikaJikanByou"]*1e3)/10,"％】")}},methods:{cycleTimeArrayUD:function(){this.$store.commit("timeBank/cycleTimeArrayUD",{machineCode:"LN034",timeDeff:345})},cyclesArrayUD:function(){this.$store.commit("timeBank/cyclesArrayUD","LN034")},statusArryUD:function(){this.$store.commit("timeBank/statusArryUD","LN034")},cycleCounterUD:function(){this.$store.commit("timeBank/cycleCounterUD","MC027")},Spark:function(){this.$store.commit("timeBank/sparkValueUD",{machineCode:"LN034",numIndex:0,nowVal:30})},test2:function(){for(var i=1;i<6;i++)console.log(i)},fillData:function(){this.fire(),this.dataOption={responsive:!0,scales:{yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"稼働ステップ時間",fontSize:8},ticks:{min:0,max:30,fontSize:8,stepSize:5}}],xAxes:[{display:!0,stacked:!0,barPercentage:.4,categoryPercentage:.4,scaleLabel:{display:!0,labelString:"秒",fontSize:10},ticks:{min:0,max:500,fontSize:8}}]},layout:{padding:{left:100,right:100,top:0,bottom:0}}}},getRandomInt:function(){return Math.floor(46*Math.random())+5},fireStoreAdd:function(e,t,r,n){d.a.firestore().collection("SeisanNippou").add({Date:e,Machine:t,Time:r,tantou:n}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))},fire:function(){var e=this;console.clear;var t=new Date,r=t.getFullYear(),o=t.getMonth(),c=t.getDate(),m=new Date(r,o,c,7,0,0),l=new Date(r,o,c,23,59,59),h=String(Date.parse(m)),k=String(Date.parse(l));console.log("日付セットスタート"+k),console.log("日付セットスタート"+m),console.log("日付セットスタート"+l);var S=d.a.database();d.a.firestore();S.ref("CurrentTarget/").on("value",(function(t){var r=t.val();for(var i in r){var n=r[i],o=n.zuban1+n.hinmei+"  "+String(n.kijunsu)+"ｹ";e.$store.commit("timeBank/CurrentTargetUD",{TgtMachine:n.machine,TgtValue:o})}})),S.ref("NishioMachineCT/").orderByChild("endTime").startAt(h).endAt(k).on("value",(function(t){for(var r=0,o=Object.keys(e.$store.getters["timeBank/getStopWatchArrayPrimitive"]);r<o.length;r++){var c=o[r];e.$store.commit("timeBank/cycleTimeArrayUD",c),e.$store.commit("timeBank/cycleCounterRst",c),e.$store.commit("timeBank/cycleCounterErrRst",c),e.$store.commit("timeBank/cycleCounterDDRRst",c),e.$store.commit("timeBank/cycleTimeArrayRst",c),e.$store.commit("timeBank/cycleTimeArrayErrRst",c),e.$store.commit("timeBank/cycleTimeArrayDDRRst",c),e.$store.commit("timeBank/cycleTimeArrayMaijiRst",c)}var m=e.$store.getters["timeBank/getStatusFull"];Object.keys(m).forEach((function(t){return e.$store.commit("timeBank/machineHourArryUD",{machineCode:t,machineHour:0})})),Object.keys(m).forEach((function(t){return e.$store.commit("timeBank/cycleCounterUD",{machineCode:t,first:!0})})),e.data_kadou=[],e.data_Teishi=[],e.data_kadou_total=123,e.data_Teishi_Title=[],e.labelSample=[],e.lastD=0,e.count=0,e.dataCount=0;var data=t.val();for(var i in data){var l=data[i],d=new Date,h=String(d.getFullYear())+String(d.getMonth()+1)+String(d.getDate()),k=String(d.getHours()),S=String(d.getMinutes()),f=String(d.getSeconds()),T=("".concat(e.zeroPadding(k,2),"時").concat(e.zeroPadding(S,2),"分").concat(e.zeroPadding(f,2),"秒 "),new Date(Number(l.endTime))),y=String(T.getFullYear()),D=String(T.getMonth()+1),x=String(T.getDate()),C=String(T.getHours()),v=String(T.getMinutes()),B=String(T.getSeconds()),M=y+D+x,U=("".concat(D," 月 \n                                      ").concat(e.zeroPadding(x,2),"日 \n                                      ").concat(e.zeroPadding(C,2),"時 \n                                      ").concat(e.zeroPadding(v,2),"分 \n                                      ").concat(e.zeroPadding(B,2),"秒 "),"".concat(e.zeroPadding(C,2),": \n                                      ").concat(e.zeroPadding(v,2),": \n                                      ").concat(e.zeroPadding(B,2)," ")),$="".concat(e.zeroPadding(C,2),"時").concat(e.zeroPadding(v,2),"分").concat(e.zeroPadding(B,2),"秒 ");if(h==M){var A=new Date(Number(l.startTime)),w=(String(A.getFullYear()),String(A.getMonth()+1),String(A.getDate()),String(A.getHours())),z=(String(A.getMinutes()),String(A.getSeconds()),(Number(l.endTime)-Number(l.startTime))/1e3),_=new Date(T-A),H=(e.zeroPadding(_.getUTCHours(),2),e.zeroPadding(_.getUTCMinutes(),2),_.getUTCSeconds(),e.zeroPadding(_.getUTCMilliseconds(),3),_.getUTCHours(),_.getUTCMinutes(),_.getUTCSeconds,l.machine);switch(e.TimeIncrease[Number(l.Status)-1]+=z,l.status){case"RUN1":z>2&&(e.dataCount++,e.$store.commit("timeBank/statusArryUD",{machineCode:H,statusBool:1}),e.$store.commit("timeBank/cycleCounterUD",{machineCode:H,first:!1}));break;case"RUN2":if(1==e.$store.getters["timeBank/getStatus"](H)){e.$store.commit("timeBank/statusArryUD",{machineCode:H,statusBool:0}),e.$store.commit("timeBank/cycleTimeArrayUD",{machineCode:H,timeDeff:z,UD:!0}),e.MaijiArrayVuexSet(w,C,A,T,H,z,0,"timeBank/cycleTimeArrayMaijiUD"),e.$store.commit("timeBank/machineHourArryUD",{machineCode:H,machineHour:z}),e.$store.commit("timeBank/sensingTimeArryUD",{machineCode:H,sensingTime:T}),e.$store.commit("timeBank/sensingTimeStArryUD",{machineCode:H,sensingTime:U}),e.data_Teishi.push(z),e.data_Teishi_Title[$]=z;var P=e.zeroPadding(Math.floor(z/60),2),J=e.zeroPadding(z%60,2),N="".concat(P,"分").concat(J,"秒"),R=$,j=Object(n.a)({},R,N);e.data_Teishi_Title.push(j)}break;case"DDR1":z>2&&(e.$store.commit("timeBank/statusArryUD",{machineCode:H,statusBool:3}),e.$store.commit("timeBank/cycleCounterDDRUD",H));break;case"DDR2":3==e.$store.getters["timeBank/getStatus"](H)&&(e.$store.commit("timeBank/statusArryUD",{machineCode:H,statusBool:0}),e.$store.commit("timeBank/cycleTimeArrayDDRUD",{machineCode:H,timeDeff:z}),e.MaijiArrayVuexSet(w,C,A,T,H,z,1,"timeBank/cycleTimeArrayMaijiUD"));break;case"ERR1":e.$store.commit("timeBank/statusArryUD",{machineCode:H,statusBool:2}),e.$store.commit("timeBank/cycleCounterErrUD",H);break;case"ERR2":2==e.$store.getters["timeBank/getStatus"](H)&&(e.$store.commit("timeBank/statusArryUD",{machineCode:H,statusBool:0}),e.$store.commit("timeBank/cycleTimeArrayErrUD",{machineCode:H,timeDeff:z}),e.MaijiArrayVuexSet(w,C,A,T,H,z,2,"timeBank/cycleTimeArrayMaijiUD"));break;default:console.log("switch,一致しない")}e.$store.commit("timeBank/sensingTimeArryUD",{machineCode:H,sensingTime:T}),e.$store.commit("timeBank/sensingTimeStArryUD",{machineCode:H,sensingTime:U});var K=y+D+x+"  "+C+"時"+v+"分"+B+"秒",E=l.status;e.lastS=E,e.lastD=K,e.datacollection={labels:e.labelSample,datasets:[{label:"運転時間",backgroundColor:"rgba(100, 130, 255, 0.5)",data:e.data_kadou},{label:"停止（段取・着脱）時間",backgroundColor:"rgba(150, 30, 255, 0.5)",data:e.data_Teishi}]}}else e.lastD="【本日はデータがありません】"}e.timeBegan=new Date,e.started=setInterval(e.keikaJikan,1e3)}))},MaijiArrayVuexSet:function(e,t,r,n,o,c,m,l){var d=[0,0,0,0,0,0,0,0,0,0,0];if(e==t)d[Number(e)-8]=c;else{var h=new Date(n);h.setHours(Number(e)+1),h.setMinutes(0),h.setSeconds(0);var k=new Date(h-r),S=60*k.getMinutes()+k.getSeconds();d[e-8]=S;for(var f=Number(t)-Number(e),i=1;i<f;i++)d[i+(Number(e)-8)]=3600;var T=new Date(n-h),y=60*T.getUTCMinutes(),D=T.getUTCSeconds();d[Number(e)-8+f]=y+D}this.$store.commit(l,{machineCode:o,start:e,end:t,elapsed:d,timeDeff:c,nowTgt:m})},keikaJikan:function(){var e=new Date,t=new Date;t.setHours(8,0,0);for(var i=0;i<14;i++)this.excludeSetTime[i]=new Date;switch(this.excludeSetTime[0].setHours(8,0,0),this.excludeSetTime[1].setHours(9,0,0),this.excludeSetTime[2].setHours(10,0,0),this.excludeSetTime[3].setHours(10,10,0),this.excludeSetTime[4].setHours(11,0,0),this.excludeSetTime[5].setHours(12,0,0),this.excludeSetTime[6].setHours(12,50,0),this.excludeSetTime[7].setHours(14,0,0),this.excludeSetTime[8].setHours(15,0,0),this.excludeSetTime[9].setHours(15,10,0),this.excludeSetTime[10].setHours(16,0,0),this.excludeSetTime[11].setHours(17,0,0),this.excludeSetTime[12].setHours(18,0,0),this.excludeSetTime[13].setHours(19,0,0),!0){case e<this.excludeSetTime[2]:this.excludedTime=[0,0,0];break;case e<this.excludeSetTime[3]:this.excludedTime=[new Date(e-this.excludeSetTime[2]).getMinutes(),0,0];break;case e<this.excludeSetTime[5]:this.excludedTime=[10,0,0];break;case e<this.excludeSetTime[6]:this.excludedTime=[10,new Date(e-this.excludeSetTime[3]).getMinutes(),0];break;case e<this.excludeSetTime[8]:this.excludedTime=[10,50,0];break;case e<this.excludeSetTime[9]:this.excludedTime=[10,50,new Date(e-this.excludeSetTime[5]).getMinutes()];break;case e<this.excludeSetTime[13]:case e>this.excludeSetTime[13]:this.excludedTime=[10,50,10]}var r=this.excludedTime[0]+this.excludedTime[1]+this.excludedTime[2],n=new Date(e-t);n.setMinutes(n.getMinutes()-r),this.$store.commit("timeBank/TB_Kadoujikan",n);var o=n.getUTCHours(),c=n.getUTCMinutes(),m=n.getUTCSeconds(),l=3600*o+60*c+m;this.$store.commit("timeBank/ProgressSecondsUD",l);this.KadouJikan="".concat(o,":").concat(String(c).padStart(2,"0"),":").concat(String(m).padStart(2,"0")),this.GenzaiJikan="".concat(String(e.getHours()).padStart(2,"0"),":").concat(String(e.getMinutes()).padStart(2,"0"),":").concat(String(e.getSeconds()).padStart(2,"0")),this.$store.commit("timeBank/genzaiJikanUD",this.GenzaiJikan);for(var d=0,h=Object.keys(this.$store.getters["timeBank/getStopWatchArrayPrimitive"]);d<h.length;d++){var k=h[d],S=k,f=this.$store.getters["timeBank/getSensingTime"](S),T=new Date(Date.now()-f),h1=T.getUTCHours(),y=T.getUTCMinutes(),D=60*T.getUTCHours()+y,x=T.getUTCSeconds(),h2=String(h1).padStart(2,"0"),C=String(y).padStart(2,"0"),v=String(D),B=String(x).padStart(2,"0"),M=("".concat(h2,":").concat(C,":").concat(B),"".concat(v,"分").concat(B,"秒")),U=3600*h1+60*C+x;this.$store.commit("timeBank/StopWatchArryUD",{machineCode:k,StopWatchTime:M,StopWatchSecondsTime:U})}},zeroPrefix:function(){for(var e="",i=0;i<digit;i++)e+="0";return(e+num).slice(-digit)},zeroPadding:function(e,t){return("00000000"+String(e)).slice(-t)}}},y=(r(652),r(31)),D=r(68),x=r.n(D),C=r(545),v=r(541),B=r(546),component=Object(y.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-row",[r("v-col",[r("p",[e._v(e._s(e.KadouJikan))])]),e._v(" "),r("v-col",[r("div",{staticClass:"my-0 indigo--text text-right text--lighten-2 font-weight-bold subtitle",attrs:{id:"GenzaiJikan"}},[e._v(e._s(e.GenzaiJikan))])])],1),e._v(" "),r("v-row",{staticClass:"my-0",staticStyle:{height:"600px"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"MC024"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"MC026"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"MC027"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"MC028"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"LN034"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"MC031"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine",{attrs:{name:"GH002"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[r("compMachine2",{attrs:{name:"MC027"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VCol:C.a,VContainer:v.a,VRow:B.a})}}]);