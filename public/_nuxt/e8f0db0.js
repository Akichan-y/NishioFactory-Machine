(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{544:function(t,e,n){var content=n(553);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("60b4ebe8",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n(544)},553:function(t,e,n){var o=n(12)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);"]),o.push([t.i,'body,html{padding:0;margin:0;width:100%;height:100%}section{background-color:#000;font-family:"Share Tech Mono",sans-serif;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:stretch;align-items:center}#clock{order:0;flex:0 1 auto;align-self:center;color:#c8c8c8}#clock .time{font-size:6.5em}#clock .text{margin-top:30px;font-size:1em;color:hsla(0,0%,78.4%,.15);text-align:center}#clock .text a{text-decoration:none;color:inherit;transition:color .1s ease-out}#clock .text a:hover{color:#c8c8c8}#clock .btn-container{display:flex;margin-top:15px}#clock .btn-container a{text-align:center;font-family:"Share Tech Mono",sans-serif;background:transparent;border:none;color:#c8c8c8;padding:10px 15px;margin:0 10px;text-transform:uppercase;font-size:2em;cursor:pointer;flex-grow:1;transition:color .1s ease-out}#clock .btn-container a:hover{color:#fff}',""]),t.exports=o},558:function(t,e,n){"use strict";n.r(e);n(87),n(59);var o={data:function(){return{el:"#clock",time:"00:00:00.000",counter:0,lapArray:[],timeBegan:null,timeStopped:null,stoppedDuration:0,started:null,running:!1}},methods:{start:function(){this.running||(null===this.timeBegan&&(this.reset(),this.timeBegan=new Date),null!==this.timeStopped&&(this.stoppedDuration+=new Date-this.timeStopped),this.started=setInterval(this.clockRunning,10),this.running=!0)},stop:function(){this.running||start(),this.lapArray.push(this.time),this.timeBegan=new Date,this.time="00:00:00.000",this.counter++},reset:function(){console.log("resetに来てますよ"),this.running=!1,clearInterval(this.started),this.stoppedDuration=0,this.timeBegan=null,this.timeStopped=null,this.time="00:00:00.000",this.counter=0,this.lapArray.length=0},clockRunning:function(){var t=new Date,e=new Date(t-this.timeBegan-this.stoppedDuration),n=this.zeroPadding(e.getUTCHours(),2),o=this.zeroPadding(e.getUTCMinutes(),2),r=e.getUTCSeconds(),c=this.zeroPadding(e.getUTCMilliseconds(),3);this.time=n+":"+o+":"+this.zeroPadding(r,2)+"."+c},zeroPrefix:function(){for(var t="",i=0;i<digit;i++)t+="0";return(t+num).slice(-digit)},zeroPadding:function(t,e){return("00000000"+String(t)).slice(-e)}}},r=(n(552),n(31)),c=n(67),l=n.n(c),h=n(407),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("title",[t._v("Stop Watch Sample")]),t._v(" "),n("div",{attrs:{id:"clock"}},[n("span",{staticClass:"time"},[t._v(t._s(t.time))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"time"},[t._v("Count : "+t._s(t.counter))]),t._v(" "),n("br"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.start}},[t._v("Start")]),t._v(" "),n("v-btn",{attrs:{color:"secondary"},on:{click:t.stop}},[t._v("Count")]),t._v(" "),n("v-btn",{attrs:{color:"pink lighten-4"},on:{click:t.reset}},[t._v("Reset")]),t._v(" "),t._l(t.lapArray,(function(e,o){return n("div",{key:e},[n("span",[t._v(t._s(o+1)+" : "+t._s(e))])])})),t._v(" "),t._m(0)],2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"https://codepen.io/raphael_octau",target:"_blank"}},[t._v("@raphael_octau")])])}],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:h.a})}}]);