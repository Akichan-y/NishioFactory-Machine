<template>
  <dir>

    <v-btn @click="mapSam">mapSample</v-btn>
    <v-btn @click="map2">mapSample2</v-btn>
    <v-btn @click="map3">mapSample3</v-btn>
  </dir>
</template>
<script>


  export default {
    data() {
      return{
        items: []
      }
    },
    computed: {
      getmachineHourArry () {
        return this.$store.getters['timeBank/getmachineHourArry']
      }
    },
    methods: {
      mapSam:function(){
        let items =[1,2,3,4,5];
        let result = items.map(function(value){
          return value * 2;
      });
        console.log(result);
      },
      map2:function(){

        let items=[1,2,3,4,5,6,7,8,9];
        let result = items.map(function(value,index,array){
          //index番号が偶数の時だけ２倍にする
          if(index%2 ===0){
            return value *2;
          }else{
            return value *39812303;
          }
        })
        console.log(result);
      },
      map3:function(){
        // let foodList = {
        //   'オムライス': 450,
        //   '焼きそば': 500,
        //   'お好み焼き': 600,
        //   '焼き飯': 400
        // };
        // let order = ['焼き飯','お好み焼き'];
        // let result = order.map(function(value,index,array){
        //   return this[value];
        // },foodList)
        // console.log(result)

        // let MachineHours = {'MC026':250,'MC027':2340,'MC028':123400,'MC031':365}
        let MachineHours = this.getmachineHourArry;
        let obj=['MC027','MC028','MC031'];
        let rslt= obj.map(function(value,index,array){
          // return this[value] *2;
          return array;
        },MachineHours)
        console.log(rslt);
      }
    }
    
  }
</script>  