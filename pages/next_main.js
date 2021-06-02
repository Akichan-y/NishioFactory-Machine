
import firebase from 'firebase';
import ObiChart from '@/components/ObiChart.vue'
import { GChart } from 'vue-google-charts'


export default {
  
  asyncData (context) {
      //asyncDataは先頭に記述する必要があるみたい。
      //これによって、ページ遷移で変数を受け取ることが出来る
      console.log("❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏");
      console.log(context.query.pageName)
      return {
        machineCode:context.query.pageName,
      };

    },
    name: 'App',
    components: {
      ObiChart,
      GChart
    },
    data:function(){
      return{
          // image_src:require("~/assets/img/HPT_1.png"),
          machineCode:"",   //asyncData で当該マシンコードがレンダリング前に格納される。
          ObiArry:[],       //initDataメソッドにて生成する。帯グラフの数値の配列。
          ObiArryStatus:[], //initDataメソッドにて生成する。帯グラフのステータスの配列。

    //時間毎　横棒グラフ**********************************
    Line_chartData: {
        labels: [],
        // labels: ["7am","8am","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
        // データ詳細
        datasets: [
          {
            label: "RUN",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
            backgroundColor:'limegreen',
            data: [],
            borderColor: "green" // 線の色

          },
          {
            label: "STOP",
            backgroundColor: 'grey',
            data: [],
            borderColor: "red"

          },

        ]
        },
Line_options: {
      responsive: true,
      // type:{horizontalBar},
      legend: {
        // position: 'right',
        display: false,
        labels : {
          // fontSize: 28,
        }
      },
      title:{
        display: true,
        text:'マシン・サイクル・タイム'
      },
      scales: {                          // 軸設定
        xAxes: [                           // Ｘ軸設定
            {
                stacked: true,                //積み重ねは、X,Yそれぞれにtrue
                scaleLabel: {                 // 軸ラベル
                    display: true,                // 表示設定
                    labelString: '時間（分）',    // ラベル
                    fontColor: "grey",             // 文字の色
                    fontSize: 12                  // フォントサイズ
                },
                gridLines: {                   // 補助線
                    // color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                    color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                },
                ticks: {                      // 目盛り
                    min: 0,                        // 最小値
                    // max: 3600,                       // 最大値
                    // stepSize: 900,                   // 軸間隔
                    fontColor: "grey",             // 目盛りの色
                    fontSize: 12                  // フォントサイズ
                }
            }
        ],
        yAxes: [                           // Ｙ軸設定
            {
                // stacked:true,
                stacked: true,
                scaleLabel: {                  // 軸ラベル
                    display: false,                 // 表示の有無
                    labelString: 'サイクル',     // ラベル
                    fontFamily: "sans-serif",
                    fontColor: "grey",             // 文字の色
                    fontFamily: "sans-serif",
                    fontSize: 12                   // フォントサイズ
                },
                gridLines: {                   // 補助線
                    color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                    zeroLineColor: "black"         // y=0（Ｘ軸の色）
                },
                ticks: {                       // 目盛り
                    min: 0,                        // 最小値
                    max: 3600,                       // 最大値
                    stepSize: 900,                   // 軸間隔
                    fontColor: "grey",             // 目盛りの色
                    fontSize: 10                   // フォントサイズ
                }
            }
        ]
        }
      },


      // items: [
      //   // { message: 'Foo' ,message2: 'aka' },
      //   // { message: 'Bar' ,message2: 'shiro' },
      //   // { message: 'aki' ,message2: 'kiiro' },
      //   { LN034: '00:00:01'},
      //   { MC024: '00:00:02'},
      // ],
      items: { LN034: '00:10:01', MC024: '00:00:02'},
     
      chartsLib: null, 
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
                // [
                //   { type: 'string', id: 'Position' },
                //   { type: 'string', id: 'Name' },
                //   { type: 'date', id: 'Start' },
                //   { type: 'date', id: 'End' }
                // ],
                // [ 'President', 'STP', new Date(2021, 3, 8,8,50,30), new Date(2021, 3, 8,9,15,0) ],
                // [ 'President', 'RUN', new Date(2021, 3, 8,10,50,30), new Date(2021, 3, 8,11,15,0) ],
                // ['President', 'STP', new Date(2021, 3, 8,15,50,30), new Date(2021, 3, 8,16,15,0)]
                // [ 'President', 'RUN', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
                // [ 'President', 'ERR', new Date(1801, 2, 4), new Date(1805, 2, 4) ],
                // [ 'President', 'DRR', new Date(1805, 2, 4), new Date(1809, 2, 4) ],

      ],
      chartData2:[],
      colors2:['#808080','#FFBB00', '#D9073D',"#F9C1CF",'limegreen']
      }
    },
  methods:{

    test: function(){
      //二次元配列のセットがなかなか上手くいかなかったが、
      //結局よくわからんけどできた。
      //わからんくなったらスモールモデルで確認だね！やっぱり。

      // console.log(this.ObiArry);

      // this.ObiArry[2].push(27);
      // this.ObiArry[2].push(1971);

      // console.log(this.ObiArry);
      // console.log(this.ObiArry[2][1]);
      // console.log(this.ObiArryStatus);

      // this.chartData.push("President","RUN",new Date(2021, 3, 8,14,50,30),new Date(2021, 3, 816,50,30));
      // this.chartData2.push('President', 'STP', new Date(2021, 3, 8,15,50,30), new Date(2021, 3, 8,16,15,0));
      this.chartData.push(["President", "STP", new Date(2021, 3, 8,15,50,30), new Date(2021, 3, 8,16,15,0)]);
      // console.log(this.chartData2);
      console.log(this.chartData);
    },
        
    initData:function() {
      console.log(this.machineCode);

      this.ObiArry=[];
      this.ObiArryStatus=[];
      this.Line_chartData.labels=[];
      this.Line_chartData.datasets[0].data=[];
      this.Line_chartData.datasets[1].data=[];
      this.chartData=[];//ガントチャート用データ配列
      for(let i=0; i<10; i++){
        this.ObiArry.push([]);
        this.ObiArryStatus.push([]);

      }
    },

    fire:function(){
      
      //firebaseの日付範囲指定ゾーン（本日だけに限定）============================
      let d2 = new Date();
      let y2 = d2.getFullYear();
      let m2 = d2.getMonth();
      let d3 = d2.getDate();
      let startD = new Date(y2,m2,d3,7,0,0);  // 夜中とか早朝とかのデータを除外 朝は暖機運転等を省く為に、７時４５分からカウント開始
      // ❐❐❐ここで４５分までとしていたことで、ガントチャートの色指定があやふやになってしまっていたのでで、７時００分に変更
      let endD = new Date(y2,m2,d3,23,59,59);
      let startTimestamp = String(Date.parse(startD)); //orderByChildで範囲指定
      let endTimestamp = String(Date.parse(endD));     //orderByChildで範囲指定
      // ========================================================================
      const Line_newChartData = Object.assign({}, this.Line_chartData)

      const database = firebase.database();
      const esp = database.ref('NishioMachineCT/')
                  .orderByChild('endTime').startAt(startTimestamp).endAt(endTimestamp); 

      // esp.once('value',(snapshot)=>{  当初は、詳細画面は一回開くだけで良いと思い、onceを採用していたが、やっぱり自動更新されないと面白くないのでonに変更
      esp.on('value',(snapshot)=>{
        this.initData();
        let data = snapshot.val();  

          for(let i in data){
            let person = data[i];
            
            if(person.machine==this.machineCode){ //対象機械のみ

                //スタート時間の取得と、時＋１：０：０の生成
                let TgtDStart= new Date(Number(person.startTime));
                let TgtDStartPlusZero= new Date(Number(person.startTime));
                let TgtDStartZero= new Date(Number(person.startTime));
                let TgtDStartH = TgtDStart.getHours();//時刻(Hoursのみ)の取得
                let TgtDStartD = TgtDStart.getDate(); //日付の取得

                TgtDStartZero.setMinutes(0);            //基準時刻の分をゼロにセット
                TgtDStartZero.setSeconds(0);            //基準時刻の分をゼロにセット

                TgtDStartPlusZero.setHours(TgtDStartH+1);    //基準時刻の時を＋１の時刻にセット
                TgtDStartPlusZero.setMinutes(0);            //基準時刻の分をゼロにセット
                TgtDStartPlusZero.setSeconds(0);            //基準時刻の分をゼロにセット
                
                //エンド時間の取得と、時：０：０の生成
                let TgtDEnd= new Date(Number(person.endTime));
                let TgtDEndH= TgtDEnd.getHours();     //時刻(Hoursのみ)の取得

                let TgtH=String(TgtDEnd.getHours());
                let TgtM=String(TgtDEnd.getMinutes());
                let TgtS=String(TgtDEnd.getSeconds());

                let Graphtitle= 
                `
                ${this.zeroPadding(TgtH,2)}時${this.zeroPadding(TgtM,2)}分${this.zeroPadding(TgtS,2)}秒 `;

                let TgtDEndD= TgtDEnd.getDate();      //日付の取得
                let TgtDEndZero= new Date(Number(person.endTime));
                TgtDEndZero.setMinutes(0);            //基準時刻の分をゼロにセット
                TgtDEndZero.setSeconds(0);            //基準時刻の分をゼロにセット
                
                //コンソールで確認
                // console.log("startTimeは"+person.startTime);
                // console.log("startTimeZeroは"+TgtDStartPlusZero);
                // console.log("endTimeは"+person.endTime);
                // console.log("TgtDEndZeroは"+TgtDEndZero);

                //startTime が前日である場合 または、ダミー値999である場合は、
                //endTime-TgtStartZeroを、S時にpush

                
                if(TgtDStartD != TgtDEndD || person.startTime=="999"){
                  // console.log("あ〜、ここに入っちゃっているんだね〜"+ person.startTime)
                  //日付が違う場合または、スタート時刻が999の場合ー＞マイコン起動初回
                  //  this.ObiArryPush(TgtDEndH,person.status,TgtDEnd-TgtDEndZero,TgtDStart,TgtDEnd);
                  
                  //初回の終了時刻が８時前の場合は、８時起点としてSTPを登録する->８時からの空白時間が明らかになる。
                  //TgtDEndの時刻を強制的に8:0:0にセットして、ガントチャート色補正の処理につなげる。

                  let forStart; //このあとのforの為につくった変数を使う。
                  let forEnd;
                  
                  if(TgtH>=8){
                    // console.log([TgtDStartD,TgtDEndD,person.startTime]);
                    forStart=TgtDEnd;
                    forStart.setHours(8,0,0);
                    this.chartData.push([this.machineCode,"STP",forStart,TgtDEnd]);
                  }

                  
                  //ガントチャート用データの色が正しく表示されるようにダミー値をpush==========================
                  //(googleガントチャートは、出現の順序で色が決まってしまうので)
                  //4秒前から3秒前をRUN
                  //3秒前から2秒前をSTP
                  //2秒前から1秒前をDDR
                  //2秒前から1秒前をERR
                  let nowForStatus;
                  for(let i=4;i>=0;i--){
                    switch(i){
                      case 4: nowForStatus="RUN";
                              break;
                      case 3: nowForStatus="STP";
                              break;
                      case 2: nowForStatus="DDR";
                              break;
                      case 1: nowForStatus="ERR";
                              break;
                      case 0: nowForStatus="KKT";
                              break;
                    };
                    forStart=new Date(TgtDEnd);
                    forStart.setSeconds(forStart.getSeconds()-i); //TgtDEndの時間からi秒を引く（初回は4秒）
                    forEnd=new Date(TgtDEnd);
                    forEnd.setSeconds(forEnd.getSeconds()-i+1);//TgtDEndの時間からi秒を引いて１秒を足す（初回は3秒）
                    // console.log([this.machineCode,nowForStatus,forStart,forEnd]);
                    this.chartData.push([this.machineCode,nowForStatus,forStart,forEnd]);
                  }
                 // この処理によって、ガントチャートが正しく色分けされるようになった！
                 //============================================================================================
                  // }else if(TgtDStartH==TgtDEndH){
                }else{
                    
                  //person.status(exmp:RUN1を三文字でかつ単純化)
                  let nowStatus;
                  if(person.status=="RUN1" ||person.status=="ERR1"||person.status=="DDR1"){
                  // if(person.status=="RUN1" ||person.status=="ERR1"||person.status=="DDR1"){
                    nowStatus ="STP"
                  }else{
                    nowStatus =person.status.substr(0,3);
                  };
                  //Startの時と、Endの時が同じ場合->最も単純な引き算結果をプッシュ
                  this.ObiArryPush(TgtDStartH,nowStatus,TgtDEnd-TgtDStart,TgtDStart,TgtDEnd,Graphtitle);
              // }else{
              //     // 時刻をまたいでいる場合はスタート時、中間の時、エンドの時、それぞれに分解してpush
              //     this.ObiArryPush(TgtDStartH,person.status,TgtDStartPlusZero-TgtDStart);
              //     for(let t=0;i<(TgtDEndH-TgtDStartH)-1;i++){
              //         //時の差が１しかない場合は、処理い入らない。２以上では、１時間である3600をpush
              //         this.ObiArryPush(TgtDStartH+1,person.status,3600);
              //     }
              //     this.ObiArryPush(TgtDEndH,person.status,TgtDEnd-TgtDEndZero);
              };

            };
            }
      })
      this.Line_chartData = Line_newChartData;
      console.log(this.ObiArry);
      console.log(this.ObiArryStatus);
    },
    ObiArryPush:function(h,nowStatus,nowSeconds,TgtDStart,TgtDEnd,GraphTitle){
      //帯グラフ用の配列（値とステータス）に追加するモジュール
      let nowSecondsGenerate = this.ByouMethod(nowSeconds);
      this.ObiArry[h-7].push(nowSecondsGenerate);
      this.ObiArryStatus[h-7].push(nowStatus);

      // this.chartData.push(this.machineCode,nowStatus,TgtDStart,TgtDEnd)
      // this.chartData.push("President",nowStatus,TgtDStart,TgtDEnd)
      //ガントチャート用データをpush
      this.chartData.push([this.machineCode,nowStatus,new Date(TgtDStart),new Date(TgtDEnd)]);
      // console.log(this.chartData);

      if(nowStatus=='RUN'){
        // this.Line_chartData.labels.push(GraphTitle);
        // this.Line_chartData.datasets[0].data.push(nowSeconds);
        this.graphUD(GraphTitle,0,nowSecondsGenerate)
      }else if(nowStatus=='STP'){
        // this.Line_chartData.datasets[0].data.push(nowSeconds);
        this.graphUD(GraphTitle,1,nowSecondsGenerate)
      };
    },

    ByouMethod:function(TgtTime){
      //数値を、秒に生成するメソッド
      let nowDeff = new Date(TgtTime);
      let ByouHenkanMin = nowDeff.getMinutes()*60;
      let ByouHenkanSec = nowDeff.getSeconds();
      let ByouHenkan =  ByouHenkanMin + ByouHenkanSec;
      return ByouHenkan;
    },
    graphUD:function(GraphTitle,nowState,nowSeconds){
      // console.log("graphUD test"+this.ObiArry.length)
      // console.log("graphUD test"+this.ObiArry[0].length)
      //折れ線グラフのデータを生成する->積み重ね棒グラフに変更======================================
      const Line_newChartData = Object.assign({}, this.Line_chartData)
      // const Line_ChartData = Object.assign({}, this.Line_chartData)
      if(nowState ===0){
        Line_newChartData.labels.push(GraphTitle);
      };
        // console.log(GraphTitle,nowState,nowSeconds);
        Line_newChartData.datasets[nowState].data.push(nowSeconds/60);
        // console.log(Line_newChartData.datasets);
      
  
      //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
      //2021/2/29 sun 22:07 index.vueで存在しないprops(MC030)を与えたことにより、
      //Line_unten.lengthがundefinedになった。解決に数時間を要した！
      //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
      
      //毎時の機械ごとの運転時間合計の毎時配列データ
      // let Line_unten=this.$store.getters["timeBank/getcycleTimeMaijiArray"](this.nameAB);
      // let Line_DDR=this.$store.getters["timeBank/getcycleTimeMaijiArrayDDR"](this.nameAB);
      // let Line_ERR=this.$store.getters["timeBank/getcycleTimeMaijiArrayERR"](this.nameAB);
      // console.log("☆☆☆☆"+this.nameAB);
      // console.log("★★★★★★★★★★★"+Line_unten);
      // let len = Line_unten.length;
      // console.log("Lengthは、" + Line_unten.length);
      // for(let i=0;i<this.ObiArry.length;i++){
      //   for(let i2=0;i2<this.ObiArry[i].length;i2++){


        // Line_newChartData.datasets.push([]);
      // };
      // console.log("For "+i+" 回目"+Line_newChartData.datasets[0].data[i]);
      // Line_newChartData.datasets[0].data[i] = this.ObiArry[i2];
      // console.log("graphUD test"+this.ObiArry[i].length)
      // console.log("graphUD datasets"+Line_newChartData.datasets)
      
        // Line_newChartData.datasets.push[i];(this.ObiArry[i2]);
        // Line_newChartData.datasets[1].data[i] = this.ObiArry[i2];
        // Line_newChartData.datasets[2].data[i] = this.ObiArry[i2];
        // Line_newChartData.datasets[3].data[i] = this.ObiArry[i2];

        // console.log("graphUD test"+[i][i2])
        // Line_newChartData.datasets[0].data[i] = Line_STP[i];
        // Line_newChartData.datasets[1].data[i] = Line_RUN[i];
        // Line_newChartData.datasets[2].data[i] = Line_ERR[i];
        // Line_newChartData.datasets[2].data[i] = Line_DDR[i];
      // };
      this.Line_chartData = Line_newChartData
    },
    
    onChartReady (chart, google) {
      this.chartsLib = google
    },
    zeroPadding:function(num,length){
      return ('00000000' + String(num)).slice(-length);
    },
    testMethod:function(){
      // console.log(this.testCom("LN034"));
      // console.log(this.testCom["LN034"]);
      console.log(this.items[LN034]);
    }
},
computed: {
  testCom:function(){
    return this.items;
  },
  getStopWatchArrayPrimitive(){
    return this.$store.getters["timeBank/getStopWatchArrayPrimitive"]
  },
  image_src(){
    return require("~/assets/img/"+this.machineCode+".jpg");
  },
  getStatusFull(){
    return this.$store.getters["timeBank/getStatusFull"]
  },
  chartOptions () {
    // if (!this.chartsLib) return null
    // return this.chartsLib.charts.Bar.convertOptions({
      return{
        // bars: 'horizontal', // Required for Material Bar Charts.
        // hAxis: { format: 'decimal' },
        // height: 400,
        // chart: {
        //   title: 'Company Performance',
        //   subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        // },
        colors: this.colors2
      }
    // })
  },
},
mounted:function(){
  // this.initData();
  this.fire();
  // console.log(this.ObiArry);
},



}