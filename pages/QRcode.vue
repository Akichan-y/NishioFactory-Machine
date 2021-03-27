<template>
  <div>
    <div>
      <p class="error">{{ error }}</p>
      <p class="decode-result">
        Last result: <b>{{ result }}</b>
      </p>
      <v-container>
        <v-row>
          <v-col cols="12" lg="4" md="3">
            <span class="qr">
              <qrcode-stream @decode="onDecode" @init="onInit" />
            </span>
          </v-col>
          <v-col>

            <v-text-field label="machineName" v-model="machineName" ></v-text-field>
            <v-text-field label="machineNo" v-model="machineNo"></v-text-field>
            <v-text-field label="CODE10" v-model="code10"></v-text-field>
            <v-text-field label="zuban1" v-model="zuban1"></v-text-field>
            <!-- <v-text-field label="zuban2" v-model="zuban2"></v-text-field> -->
            <v-text-field label="hinmei" v-model="hinmei"></v-text-field>
            <v-text-field label="kijunsu" v-model="kijunsu"></v-text-field>
            <!-- <v-text-field label="QRinput" v-model="QRResult" @change="QR_test"></v-text-field> -->
            <v-btn @click="ReSet">リセット</v-btn>
            <v-btn @click="fireSet">Set</v-btn>
          </v-col>
        </v-row>
    </v-container>
    </div>
  </div>
</template>

<style scoped>
.qr {
  width: "300px";
  height: "300px";
}
</style>
<script>
import firebase from "firebase";

export default {
  layout: "client/simple",
  data() {
    return {
      machineName:"",
      machineNo:"",
      code10: "",
      zuban1: "",
      zuban2: "",
      hinmei: "",
      kijunsu: 0,
      machine: "",
      QRResult:"",
      tmpGM01:{GM0101:"",GM0102:"",GM0103:"",kijunsu:0},
      
      items: [1, 2, 3, 4, 5],

      result: "",
      error: ""
    };
  },
  methods: {
    //QRコードは２会同じモノは読まないみたい
    QR_test: function(){
      console.log("QRコードを読みました");
      // alert("changeだよ")
      // for(let i= 0;i<3;I++){
        //   this.tmpGM01.push(this.)
      // }
      this.tmpGM01.GM0101=this.QRResult.substr(0,10);
      this.tmpGM01.GM0102=this.QRResult.substr(10,20);
      this.tmpGM01.GM0103=this.QRResult.substr(30,15);
      this.tmpGM01.kijunsu=Number(this.QRResult.substr(45,4));
      console.log(this.tmpGM01.GM0101);
      console.log(this.tmpGM01.GM0102);
      console.log(this.tmpGM01.GM0103);
      console.log(this.tmpGM01.kijunsu);
      this.writeUserData(this.tmpGM01.GM0101,this.tmpGM01.GM0103,"",this.tmpGM01.GM0102,this.tmpGM01.kijunsu,"MC027")
      console.log("QRコードを読みました");
    },
    ReSet:function(){
      this.QRResult="";
      this.result="";
    },
    onDecode(result) {
      this.result = result;
      this.machineName=this.result.substr(10,3).trim();
      this.machineNo=this.result.substr(13,3).trim();
      this.machine=this.result.substr(10,3).trim()+this.result.substr(13,3).trim()
      this.code10=result.substr(0,10);
      this.zuban1=result.substr(59,100).substr(0,result.substr(59,100).length-1).trim();
      this.hinmei=result.substr(22,10);
      this.kijunsu=Number(result.substr(16,4));
      this.fireSet();
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    },
    fireSet: function() {
      this.writeUserData(
        this.code10,
        this.zuban1,
        // this.zuban2,
        this.hinmei,
        this.kijunsu,
        this.machine
      );
    },
    writeUserData: function(code10, z1, hin, ki, ma) {
      const database = firebase.database();
      //startTime は初期値９９９を代入していたので、初回が反応していなかったというミス endTimeにしたことで解決。
      const esp = database.ref("CurrentTarget/" + ma);

      esp.set({
        code10: code10,
        zuban1: z1,
        // zuban2: z2,
        hinmei: hin,
        kijunsu: ki,
        machine: ma
      });
    }
  }
};
</script>
