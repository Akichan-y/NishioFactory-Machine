<template>
  <div>

            <v-text-field
            label="CODE10" v-model="code10" 
          ></v-text-field>
            <v-text-field
            label="zuban1" v-model="zuban1" 
          ></v-text-field>
            <v-text-field
            label="zuban2" v-model="zuban2" 
          ></v-text-field>
            <v-text-field
            label="hinmei" v-model="hinmei" 
          ></v-text-field>
            <v-text-field
            label="kijunsu" v-model="kijunsu" 
          ></v-text-field>
          <v-btn @click="fireSet">セット</v-btn>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  data(){
    return {
      code10:"8082063302",
      zuban1:"BM15M",
      zuban2:"10000001-01",
      hinmei:"ﾌｫｰｸｲﾔｰ",
      kijunsu:24,
      machine:"MC027",
      items:[1,2,3,4,5],
    }
  },
  methods:{
    fireSet:function(){
      this.writeUserData(this.code10,this.zuban1,this.zuban2,this.hinmei,this.kijunsu,this.machine);
    },
    writeUserData:function(code10,z1,z2,hin,ki,ma) {
      const database = firebase.database();
       //startTime は初期値９９９を代入していたので、初回が反応していなかったというミス endTimeにしたことで解決。
      const esp = database.ref('CurrentTarget/'+ma);
                   
      esp.set({
        code10: code10,
        zuban1: z1,
        zuban2: z2,
        hinmei : hin,
        kijunsu:ki,
        machine:ma
  });
}

  }
}
</script>