<template>
  <v-btn @click="fireReal">RealRimwDB</v-btn>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
// import Vue from "vue/dist/vue/vue.esm.js";

import firebase from 'firebase';

// import Mixin from '@/mixin/mixin.js';
// Vuexの使用を宣言
Vue.use(Vuex);

export default{
  data () {
    return{

    }
  },
  // created: function () {
  //   this.database = firebase.database()
  //   this.todoRef = this.database.ref('todos')

  //   var _this = this
  //   this.todoRef.on('value', function (snapshot) {
  //     _this.todos = snapshot.val()
  //   })
  // },
  methods:{
    
    fireReal:function(){
      console.clear;
      const database = firebase.database();

          let d2 = new Date();
          let y2 = d2.getFullYear();
          let m2 = d2.getMonth();
          let d3 = d2.getDate();
          let startD = new Date(y2,m2,d3,7,0,0);
          let endD = new Date(y2,m2,d3,23,59,59);
          let startTimestamp = String(Date.parse(startD));
          let endTimestamp = String(Date.parse(endD));
          let nowCount = 0;

          const esp = database.ref('NishioMachineCT/')
                      .orderByChild('endTime').startAt(startTimestamp).endAt(endTimestamp); 
          esp.once('value',(snapshot)=>{
            let data = snapshot.val(); 
            for(let i in data){
              nowCount ++;
              let person = data[i];
              let TgtDStrt=new Date(Number(person.endTime)); 
              let mon=TgtDStrt.getMonth(); 
              let dd=TgtDStrt.getDate();
              let HH=TgtDStrt.getHours();
              let MM=TgtDStrt.getMinutes();
              let SS=TgtDStrt.getSeconds();


              // console.log(person.machine);
              if(person.machine=="MC009"){
                // person.remove()
                // let id = person.child(id_value);
                console.log(person);
                console.log(`${nowCount}回目---${mon}月${dd}日${HH}時${MM}分${SS}秒`)
                        // Delete
                // const deleteDB = (thisId) => {
                //     person.ref(thisId).remove();
                // };
              };
              // console.log(machine.startTime);
            }
          });
    
    
        }
  }
}
</script>