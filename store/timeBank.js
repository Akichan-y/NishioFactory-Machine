//現時点では、対象機械を変更または追加する場合、すべての配列の機械コードを入力する必要がある。
//本来であれば、顧問的な配列ひとつだけを変更することで、プログラムで配列をgeneratする仕様にすべきと考える。
//設計が甘かったというか、知見が浅いというか・・・


export const state = () => ({
  genzaiJikan:"",
  // keikajikan:null,
  ProgressSeconds:0,  //経過時間の秒数

  //machineごとの現在のステータスを格納する
 statusArry:{LN034:0,MC024:0,MC026:0,MC027:0,MC028:0,MC031:0,GT999:0},   

   //machineごとのサイクル回数の合算を格納する
 cycleCounter:{LN034:0,MC024:0,MC026:0,MC027:0,MC028:0,MC031:0,GT999:0}, 
   
   //machineごとのERR回数の合算を格納する
 cycleCounterErr:{LN034:1,MC024:2,MC026:3,MC027:4,MC028:5,MC031:0,GT999:0}, 
   
   //machineごとのDDR回数の合算を格納する
 cycleCounterDDR:{LN034:0,MC024:0,MC026:0,MC027:0,MC028:0,MC031:0,GT999:0}, 
  
   //machineごとのサイクルタイムの合算を格納する
 cycleTimeArray:{LN034:2400,MC024:0,MC026:0,MC027:10,MC028:0,MC031:0,GT999:0},   
   
  //machineごとのエラー時間の合算を格納する
 cycleTimeArrayErr:{LN034:0,MC024:0,MC026:0,MC027:50,MC028:0,MC031:0,GT999:0},   

 //machineごとの段取り時間の合算を格納する
 cycleTimeArrayDDR:{LN034:0,MC024:0,MC026:0,MC027:50,MC028:0,MC031:0,GT999:0},   

  //machineごとの時間あたりのサイクルタイムの合算を格納する（８時台から１８時台まで１１時間）
  cycleTimeMaijiArray:{
        LN034:[0,0,0,0,0,0,0,0,0,0,0],
        MC024:[0,0,0,0,0,0,0,0,0,0,0],
        MC026:[0,0,0,0,0,0,0,0,0,0,0],
        MC027:[0,0,0,0,0,0,0,0,0,0,0],
        MC028:[0,0,0,0,0,0,0,0,0,0,0],
        MC031:[0,0,0,0,0,0,0,0,0,0,0],
        GT999:[0,0,0,0,0,0,0,0,0,0,0],
      },      
  //machineごとの時間あたりの段取り時間の合算を格納する（８時台から１８時台まで１１時間）
  cycleTimeMaijiArrayDDR:{
        LN034:[0,0,0,0,0,0,0,0,0,0,0],
        MC024:[0,0,0,0,0,0,0,0,0,0,0],
        MC026:[0,0,0,0,0,0,0,0,0,0,0],
        MC027:[0,0,0,0,0,0,0,0,0,0,0],
        MC028:[0,0,0,0,0,0,0,0,0,0,0],
        MC031:[0,0,0,0,0,0,0,0,0,0,0],
        GT999:[0,0,0,0,0,0,0,0,0,0,0],
      },      
  //machineごとの時間あたりの異常時間の合算を格納する（８時台から１８時台まで１１時間）
  cycleTimeMaijiArrayERR:{
        LN034:[0,0,0,0,0,0,0,0,0,0,0],
        MC024:[0,0,0,0,0,0,0,0,0,0,0],
        MC026:[0,0,0,0,0,0,0,0,0,0,0],
        MC027:[0,0,0,0,0,0,0,0,0,0,0],
        MC028:[0,0,0,0,0,0,0,0,0,0,0],
        MC031:[0,0,0,0,0,0,0,0,0,0,0],
        GT999:[0,0,0,0,0,0,0,0,0,0,0],
      },      


  //センサー反応時間数値形式（SWの起点となる）
  sensingTimeArry:{LN034:1613695834000,MC024:1613695834000,MC026:1613695834000,MC027:1613695834000,MC028:1613695834000,MC031:1613695834000,GT999:1613695834000},

  //センサー反応時間テキスト形式（SWの起点となる）
  sensingTimeStArry:{LN034:'00:00:00',MC024:'00:00:00',MC026:'00:00:00',MC027:'00:00:00',MC028:'00:00:00',MC031:'00:00:00',GT999:'00:00:00'},
  
  //machineごとの最終センシングからの経過時間テキスト
  StopWatchArry:{LN034:'00:00:00',MC024:'00:00:00',MC026:'00:00:00',MC027:'00:00:00',MC028:'00:00:00',MC031:'00:00:00',GT999:'00:00:00'},  

  //machineごとの最終センシングからの経過時間数値秒
  StopWatchSecondsArry:{LN034:0,MC024:0,MC026:0,MC027:0,MC028:0,MC031:0,GT999:0},  


  // sparkValue:{
  //             LN034:[0, 1, 2, 3, 7, 10, 3, 2, 0, 8],
  //             MC027:[1, 2, 4, 6, 7, 11, 13, 20, 30, 58]
  //            },
})

export const actions = {
  addUser({ commit }, payload) {
    const user = {
      id: uuidv4(),
      name: payload.user.name,
      age: payload.user.age,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    }

    return new Promise((resolve, reject) => {
      usersRef.add(user)
      .then(ref => {
        resolve(true)
      })
      .catch(error => {
        console.error('An error occurred in addUser(): ', error)
        reject(error)
      })
    })
  },
  fetchUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      usersRef.where('id', '==', payload.id).get()
      .then(res => {
        res.forEach((doc) => {
          commit('addUser', doc.data())
          resolve(true)
        })
      })
      .catch(error => {
        console.error('An error occurred in fetchUsers(): ', error)
        reject(error)
      })
    })
  },
  fetchUsers({ commit }) {
    commit('initUsers')

    return new Promise((resolve, reject) => {
      usersRef.orderBy('created_at', 'desc').get()
      .then(res => {
        res.forEach((doc) => {
          commit('addUsers', doc.data())
          resolve(true)
        })
      })
      .catch(error => {
        console.error('An error occurred in fetchUsers(): ', error)
        reject(error)
      })
    })
  },
  editUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      usersRef.where('id', '==', payload.user.id).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const user = {
            id: uuidv4(),
            name: payload.user.name,
            age: payload.user.age,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
          }

          usersRef.doc(doc.id).update(user)
          .then(ref => {
            resolve(true)
          })
          .catch(error => {
            console.error('An error occurred in editUser(): ', error)
            resolve(error)
          })
        })
      })
    })
  },
  deleteUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      usersRef.where('id', '==', payload.id).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          usersRef.doc(doc.id).delete()
          .then(ref => {
            resolve(true)
          })
          .catch(error => {
            console.error('An error occurred in deleteUser(): ', error)
            reject(error)
          })
        })
      })
    })
  }
}

import Vue from 'vue';

export const mutations = {
  //センシング反応時間からの時間経過を計算・・・コンポーネントから参照
  StopWatchArryUD(state,{machineCode,StopWatchTime,StopWatchSecondsTime}){
    Vue.set(state.StopWatchArry,machineCode,StopWatchTime)
    Vue.set(state.StopWatchSecondsArry,machineCode,StopWatchSecondsTime)

  },
  //センサー反応時間からの時間経過をリセットする
  getStopWatchArrayRst(state,machineCode){
    Vue.set(state.StopWatchArry,machineCode,"00:00:00")
  },
  //機械毎サイクルタイム合計時間
  sensingTimeArryUD(state,{machineCode,sensingTime}){
    Vue.set(state.sensingTimeArry,machineCode,sensingTime)
  },
  //サイクルタイムの機械ごとの時間あたり合計時間
  sensingTimeArryUD(state,{machineCode,sensingTime}){
    Vue.set(state.sensingTimeArry,machineCode,sensingTime)
  },
  
  //CDSセンサー反応スタート時間テキスト形式
  sensingTimeStArryUD(state,{machineCode,sensingTime}){
    Vue.set(state.sensingTimeStArry,machineCode,sensingTime)
  },


  genzaiJikanUD(state,NowTime){
    state.genzaiJikan=NowTime;
  },
  
  //コンポーネントで使用するsparklineデータをアップデートするモジュール=====================
sparkValueUD(state,{machineCode,numIndex,nowVal}){
  //これでようやく成功Vue.set(Obj,key,value)
  let  num = 0;
  for(const element of state.sparkValue[machineCode]){
    // Vue.set(state.sparkValue[machineCode],[element],0); 
    
    state.sparkValue[machineCode][num]=0;
    num ++;
    console.log(element)
    // Vue.set(state.sparkValue[machineCode][key],0);
  };
  console.log(state.sparkValue[machineCode]);

  let randamNum = Math.floor(Math.random()*9);

  Vue.set(state.sparkValue[machineCode],[randamNum],nowVal); 
  randamNum = Math.floor(Math.random()*9);
  Vue.set(state.sparkValue[machineCode],[randamNum],nowVal); 
  randamNum = Math.floor(Math.random()*9);
  Vue.set(state.sparkValue[machineCode],[randamNum],nowVal); 
  //以下では、値の変更は出来るものの、リアクティブ更新は出来ない。 
  // state.sparkValue[machineCode][0]=nowVal;               
},

//コンポーネントで使用する、サイクル回数をアップデートするモジュール========================
cycleCounterUD(state,machineCode){
  let nowValue= 0;
  //Vue.setの第三引数として、変数で予め数値を繰り上げておく。
  nowValue = state.cycleCounter[machineCode]; 
  nowValue ++;
  Vue.set(state.cycleCounter,machineCode,nowValue);
},
//コンポーネントの、エラー回数をアップデートするモジュール========================
cycleCounterErrUD(state,machineCode){
  let nowValue= 0;
  //Vue.setの第三引数として、変数で予め数値を繰り上げておく。
  nowValue = state.cycleCounterErr[machineCode]; 
  nowValue ++;
  Vue.set(state.cycleCounterErr,machineCode,nowValue);
},

//コンポーネントの、 段取り回数をアップデートするモジュール========================
cycleCounterDDRUD(state,machineCode){
  let nowValue= 0;
  //Vue.setの第三引数として、変数で予め数値を繰り上げておく。
  nowValue = state.cycleCounterDDR[machineCode]; 
  nowValue ++;
  Vue.set(state.cycleCounterDDR,machineCode,nowValue);
},



//コンポーネントで使用する、サイクル回数をリセット========================
cycleCounterRst(state,machineCode){
  Vue.set(state.cycleCounter,machineCode,0);
},

//コンポーネントで使用する、エラー回数をリセット========================
cycleCounterErrRst(state,machineCode){
  Vue.set(state.cycleCounterErr,machineCode,0);
},
//コンポーネントで使用する、段取り回数をリセット========================
cycleCounterDDRRst(state,machineCode){
  Vue.set(state.cycleCounterDDR,machineCode,0);
},

//コンポーネントで使用する、ステータス運転状況をアップデートする============================
statusArryUD(state,{machineCode,statusBool}){
    Vue.set(state.statusArry,machineCode,statusBool);
},
  
//機械ごとの運転時間をアップデートする===============================================================
cycleTimeArrayUD(state,{machineCode,timeDeff,UD}){
  let nowValue=0;
  // let nowValue = state.cycleTimeArray[machineCode]; 
  if(UD){
    nowValue = state.cycleTimeArray[machineCode];
    //UDがTrue ->一定時間ごとの書き換えアップデート
    nowValue += timeDeff;
  }else{
    //UDがFalse -> 時間経過での毎秒の足し込み
    nowValue = state.cycleTimeArray[machineCode];
    // nowValue ++;
    nowValue += timeDeff;
    console.log(machineCode+"❐❐❐❐❐❐"+nowValue)
  }
  Vue.set(state.cycleTimeArray,machineCode,nowValue);
},

//エラー時間をアップデートする===============================================================
cycleTimeArrayErrUD(state,{machineCode,timeDeff}){
  // let nowValue = state.cycleTimeArray["LN034"]; 
  
  let nowValue = state.cycleTimeArrayErr[machineCode]; 
  nowValue += timeDeff;
  Vue.set(state.cycleTimeArrayErr,machineCode,nowValue);

},
//段取り時間をアップデートする===============================================================
cycleTimeArrayDDRUD(state,{machineCode,timeDeff}){
  // let nowValue = state.cycleTimeArray["LN034"]; 
  
  let nowValue = state.cycleTimeArrayDDR[machineCode]; 
  nowValue += timeDeff;
  Vue.set(state.cycleTimeArrayDDR,machineCode,nowValue);

},

//機械ごと時間あたりの運転時間を足し込みアップデートする==========
cycleTimeArrayMaijiUD(state,{machineCode,start,end,elapsed,timeDeff,nowTgt}){
  
  let  i = 0;
  for(const element of state.cycleTimeMaijiArray[machineCode]){
    switch(nowTgt){
      case 0:
        state.cycleTimeMaijiArray[machineCode][i]+=elapsed[i];
        // console.log("マシンの値配列"+state.cycleTimeMaijiArray[machineCode][i]);
        break;
      case 1:
        state.cycleTimeMaijiArrayDDR[machineCode][i]+=elapsed[i];
        // console.log("段取りの値配列"+state.cycleTimeMaijiArrayDDR[machineCode][i]);
        break;
        case 2:
          state.cycleTimeMaijiArrayERR[machineCode][i]+=elapsed[i];
          // console.log("異常の値配列"+state.cycleTimeMaijiArrayDDR[machineCode][i]);
        break;
    };
    i ++;
  };

},
//機械ごと時間あたりの運転、段取り、エラーの時間をリセットする==========
cycleTimeArrayMaijiRst(state){
  
  for(const element of Object.keys(state.cycleTimeMaijiArray)){
    // for(let i=0;1<=10;i++){
    for (let i = 0; i < 11; i++) {
      state.cycleTimeMaijiArray[element][i]=0;
      state.cycleTimeMaijiArrayDDR[element][i]=0;
      state.cycleTimeMaijiArrayERR[element][i]=0;
      // console.log(element+"リセット出来ているかな？"+state.cycleTimeMaijiArray[element]);
    }
  };
  
},






//運転時間をリセットする=============================================
cycleTimeArrayRst(state,machineCode){
  Vue.set(state.cycleTimeArray,machineCode,0);
},
//エラー時間をリセットする=============================================
cycleTimeArrayErrRst(state,machineCode){
  Vue.set(state.cycleTimeArrayErr,machineCode,0);
},
//段取り時間をリセットする=============================================
cycleTimeArrayDDRRst(state,machineCode){
  Vue.set(state.cycleTimeArrayDDR,machineCode,0);
},

  TB_Kadoujikan(state,TgtValue){
    // console.log(TgtValue);
    let nowD=new Date(TgtValue);
    state.keikajikan=nowD;
  },
  //８時からの経過時間の秒数 秒数がうまくレンダリングされず丸一日苦労した。21/2/24
  //変数名を変更することで解決した。
  //似たような変数が複数あったか、変数が入れ物として壊れていた？か。
  ProgressSecondsUD(state,TgtV){
    state.ProgressSeconds=TgtV;
  },

  fireStoreA(state){
    db.collection('LineCycleTime').onSnapshot((querySnapshot)=>{
      console.log('commit test');
        state.hairetsu ++;
        state.counter ++;
    
      })

    }

}


export const getters = {


  getcycleTimeMaijiArray:(state)=>(tgtMachine)=>{
    return state.cycleTimeMaijiArray[(tgtMachine)]
  },
  getcycleTimeMaijiArrayDDR:(state)=>(tgtMachine)=>{
    return state.cycleTimeMaijiArrayDDR[(tgtMachine)]
  },
  getcycleTimeMaijiArrayERR:(state)=>(tgtMachine)=>{
    return state.cycleTimeMaijiArrayERR[(tgtMachine)]
  },

  getStopWatchArray:(state)=>(tgtMachine)=>{
    return state.StopWatchArry[(tgtMachine)]
  },
  getStopWatchSecondsArray:(state)=>(tgtMachine)=>{
    return state.StopWatchSecondsArry[(tgtMachine)]
  },

  getStopWatchArrayPrimitive:(state)=>{
    return state.StopWatchArry
  },
  // 使用していないと思われる ->間違い。使っていた〜〜
  getSensingTime:(state)=>(tgtMachine)=>{
    return state.sensingTimeArry[tgtMachine]
  },
  //センサー反応した最終時刻（運転中08:52:12〜などと表示）
  getSensingStTime:(state)=>(tgtMachine)=>{
    return state.sensingTimeStArry[tgtMachine]
  },
  getSensingTimePrimitive:(state)=>{
    return state.sensingTimeArry
  },
  getGenzaiJikan:(state)=>{
    return state.genzaiJikan;
  },
  //８時からの稼働時間の経過秒数（稼働率で使用）
  getProgressSeconds:(state)=>{
    return state.ProgressSeconds;
  },

  getSpark:(state)=>(tgtMachine)=>{
    return state.sparkValue[(tgtMachine)]
  },
  // getSpark:(state)=>(getMachine)=>{
  //   return state.sparkValue[getMachine]
  // },
  getStatus:(state)=>(tgtMachine)=>{
    return state.statusArry[tgtMachine]
  },
  getStatusFull:(state)=>{
    return state.statusArry
  },
  //サイクルカウンター
  getCycleCounterData:(state)=>(tgtMachine)=>{
    return state.cycleCounter[tgtMachine]
  },
  //サイクルタイムサイクルカウンター
  getCycleCounterDataDDR:(state)=>(tgtMachine)=>{
    return state.cycleCounterDDR[tgtMachine]
  },
  //サイクルタイムサイクルカウンター
  getCycleCounterDataErr:(state)=>(tgtMachine)=>{
    return state.cycleCounterErr[tgtMachine]
  },
  //サイクルタイム合算
  getCycleArray:(state)=>(tgtMachine)=>{
    return state.cycleTimeArray[tgtMachine]
  },
  //Errサイクルタイム合算
  getCycleArrayErr:(state)=>(tgtMachine)=>{
    return state.cycleTimeArrayErr[tgtMachine]
  },
  //DRRサイクルタイム合算
  getCycleArrayDDR:(state)=>(tgtMachine)=>{
    return state.cycleTimeArrayDDR[tgtMachine]
  },

  // },
  // getTest(state){
  //   return state.testData;
  // },
  // getKeikaJikan(state){
  //   return state.KeikaJikan;
  // },
  // getUsers(state) {
  //   return state.users
  // },
  // getUser(state) {
  //   return state.user
  // },
  // getCounter(state){
  //   return state.counter
  // }
}

