<template>

  <v-layout
    column
    justify-center
    align-center
  >
    <v-btn @click="FS_Add">FireStoreAdd</v-btn>
    <v-btn @click="MachineInit">init</v-btn>
    <v-btn @click="dbGet">dbGet</v-btn>
    <v-btn @click="FS_add2">FS_add2</v-btn>
    <v-btn @click="FS_add3">FS_add_cities</v-btn>
    <v-btn @click="get_city" class="pink lighten-4">get_city</v-btn>

    <v-card v-if="users">
      <v-card-title>
        <!-- ユーザー一覧 -->
          <span class="headline">{{ formTitle }}</span>
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="検索"
          sigle-line
        />
      </v-card-title>
      <!-- <template v-slot:activator="{ on }"> -->
          <v-btn fab dark small class="mb-2 ml-2"
            @click="add"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        <!-- </template> -->
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >

        <!-- ペンとゴミ箱のアイコンをクリックした時の挙動 -->
        <!-- v-modelが出現のトリガーとなっている。 -->
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">ユーザー編集</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field v-model="user.machine" label="機械番号" />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="user.Tantousha" label="担当者" />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="user.CycleTime" label="CycleTime" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="close">閉じる</v-btn>
                <v-btn v-if="isPersistedUser" class="primary" @click="update">更新する</v-btn>
                <v-btn v-else class="primary" @click="create">追加する</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <!-- ここまで ペンとゴミ箱のアイコンをクリックした時の挙動 -->
        
        <!-- 右端のペンマークとゴミ箱アイコン -->
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="edit(item)"
          >
            mdi-pencil
          </v-icon>

          <v-icon
            small
            @click="remove(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <!-- ここまでが右端のペンマークとゴミ箱アイコン -->

      </v-data-table>
      <v-btn @click="FireStoreSet">FB更新</v-btn>
      <v-btn @click="FireStoreGet">FB読み取り</v-btn>
    </v-card>

  </v-layout>
</template>

<script>
import firebase from 'firebase'

const db = firebase.firestore();

export default {
  data () {
    return {
      dialog: false,
      search: '',
      headers: [
        { text: '機械番号', value: 'machine' },
        { text: '担当者code', value: 'shain' },
        { text: 'CycleTime(分)', value: 'CycleTime' },
        { text: '操作', value: 'actions' }
      ],
      user: {},
      machines:[],
    }
  },

  methods: {
    MachineInit(){
      console.log("オケー");
      // const db = firebase.firestore();
      const dbCollection = db.collection('users');
      // const dbCollection = db.collection('MachineInit');
      console.log(dbCollection);
      // db.collection('MachineInit').get().then((querySnapshot)=>{
      //   querySnapshot.forEach((doc)=>{
      //     // console.log(`${doc.id} =>${doc.data("ShainName")}`)
      //     console.log(`${doc.id}`)
      //   })
      // })
    },
    get_city(){
      var docRef = db.collection("cities").doc("SF");

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    },
    //     dbGet(){
    //   db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    //   });

    // },
    FireStoreGet(){
      this.machines=[];
      let machines2=[];
      // let machineRef=db.collection("machines");
      // let machineRef=db.collection("cities");
      // console.log(machineRef);
      db.collection("machines").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().CycleTime}`);
            // this.machines.push(doc);
            // this.machines.push(
            // machines2.push(
            // この記述がわからずに、なかなか苦労した。以下を参考に解決
            // https://nekorokkekun.hatenablog.com/entry/2019/09/25/114448
            this.machines.push(
              Object.assign({
                machine:doc.id,
              },doc.data())
            );
            this.$store.commit('crud/addUser', payload)

              // {
            //   // machine=doc.id,
            //   // shain = doc.data().tantousha,
            //   // CycleTime = doc.data().CycleTime
              // id = doc.id
              // {
              // id = doc.id,
              // }
              // shain = doc.data().tantousha,
              // sss = "nnn"
              // }


        });
        console.log(this.machines);
      // this.machines=[];
      // machineRef.get().then((doc) => {
        
          // if (doc.exists) {
          //     console.log("Document data:", doc.data());
          // } else {
          //     // doc.data() will be undefined in this case
          //     console.log("No such document!");
          // }
      // }).catch((error) => {
      //     console.log("Error getting document:", error);
      });
    
    },
    FireStoreSet(){
      let machineRef=db.collection("machines");

      for(const elem of this.machines){
        console.log(elem);
        for(let key in elem){
          // console.log('key:' + key + ' value:' + elem[key])
          // console.log(elem['machine']);
          machineRef.doc(elem['machine']).set({
            Tantousha:elem['shain'],
            CycleTime:elem['CycleTime']
          })
        }
      }
    },
    FS_add3(){
      var citiesRef = db.collection("cities");

      citiesRef.doc("SF").set({
          name: "San Francisco", state: "CA", country: "USA",
          capital: false, population: 860000,
          regions: ["west_coast", "norcal"] });
      citiesRef.doc("LA").set({
          name: "Los Angeles", state: "CA", country: "USA",
          capital: false, population: 3900000,
          regions: ["west_coast", "socal"] });
      citiesRef.doc("DC").set({
          name: "Washington, D.C.", state: null, country: "USA",
          capital: true, population: 680000,
          regions: ["east_coast"] });
      citiesRef.doc("TOK").set({
          name: "Tokyo", state: null, country: "Japan",
          capital: true, population: 9000000,
          regions: ["kanto", "honshu"] });
      citiesRef.doc("BJ").set({
          name: "Beijing", state: null, country: "China",
          capital: true, population: 21500000,
          regions: ["jingjinji", "hebei"] });
    },
    FS_add2(){
      var docData = {
          stringExample: "Hello world!",
          booleanExample: true,
          numberExample: 3.14159265,
          dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
          arrayExample: [5, true, "hello"],
          nullExample: null,
          objectExample: {
              a: 5,
              b: {
                  nested: "foo"
              }
          }
      };
      db.collection("data").doc("one").set(docData).then(() => {
          console.log("Document successfully written!");
      });
    },
    FS_Add(){
      // Add a new document in collection "cities"
      db.collection("cities").doc("LA").set({
          name: "Los Angeles",
          state: "CA",
          country: "USA"
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      // db.collection("users").add({
      //     first: "Alan",
      //     middle: "Mathison",
      //     last: "Turing",
      //     born: 1912
      // })
      // .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      // })
      // .catch((error) => {
      //     console.error("Error adding document: ", error);
      // });
    },
    dbGet(){
      db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
      });

    },
    add (user) {
      this.user = {}
      this.dialog = true
    },
    create () {
      const payload = { user: this.user }
      this.$store.commit('crud/addUser', payload)
      this.close()
    },
    edit (user) {
      this.user = Object.assign({}, user)
      this.dialog = true
    },
    // edit (user) {
    //   this.user = Object.assign({}, user)
    //   this.dialog = true
    // },
    update () {
      const payload = { user: this.user }
      this.$store.commit('crud/updateUser', payload)
      this.close()
    },
    remove (user) {
      const payload = { user: user }
      this.$store.commit('crud/removeUser', payload)
    },
    close () {
      this.dialog = false
      this.user = {}
    },
  },
  mounted:function(){
    this.FireStoreGet();
  },
    computed: {
    users () {
      return this.$store.getters['crud/getUsers']
    },
    isPersistedUser () {
      return !!this.user.id
    },
    formTitle () {
      return this.isPersistedUser ? 'ユーザー編集' : 'ユーザー追加'
    }
  }
}
</script>