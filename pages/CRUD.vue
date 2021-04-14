<!-- FireStoreを使った、CRUD処理を実装 2021/4/12-->

<template>
  <dir>

  <v-app>
    <v-container>


  <v-data-table
    :headers="headers"
    :items="machines"
    :search="search"
    sort-by="calories"
    class="elevation-5"
    
  >


    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>機械の編集</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.machine"
                      label="機械番号"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.tantousha"
                      label="担当者"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.CTm"
                      label="CycleTime分"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.CTs"
                      label="CycleTime秒"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.bikou"
                      label="備考"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>

    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table> 

  </v-container>
  <v-container>
    <v-btn color="pink" @click="FireStoreSet">DB更新</v-btn>
  </v-container>
  
  </v-app>

  
  </dir>
</template>

<script>
import firebase from 'firebase'

const db = firebase.firestore();

  export default {
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '機械番号',
          align: 'start',
          sortable: false,
          value: 'machine',
        },
        { text: '担当者', value: 'tantousha' },
        { text: 'CycleTime（分）', value: 'CTm' },
        { text: 'CycleTime（秒）', value: 'CTs' },
        { text: '備考', value: 'bikou' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      machines: [],
      machinesRensou: {},
      editedIndex: -1,
      editedItem: {
        machine: '',
        tantousha: "",
        CTm: 0,
        CTs: 0,
        bikou: "",
      },
      defaultItem: {
        machine: '',
        tantousha: "",
        CTm: 0,
        CTs: 0,
        bikou: "",
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      // this.initialize()
      this.FireStoreGet()
    },

    methods: {
      initialize () {

      //   this.machines = [
      //     {
      //       machine: 'MC028',
      //       CTm: 4,
      //       CTs: 32,
      //       tantousha: "0489山崎",
      //       bikou: "ミスの無いよう頑張ります！",
      //     },
      //     {
      //       machine: 'MC031',
      //       CTm: 4,
      //       CTs: 22,
      //       tantousha: "0489山崎",
      //       bikou: "限界サイクルタイムで稼働中",
      //     },
      //     {
      //       machine: 'LN034',
      //       CTm: 2,
      //       CTs: 12,
      //       tantousha: "0489山崎",
      //       bikou: "プレッシャープレート",
      //     },
      //   ]
      },
      FireStoreGet(){
        this.machines=[];
        let machines2=[];
        db.collection("machines")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data().CTs}`);
              // この記述がわからずに、なかなか苦労した。以下を参考に解決
              // https://nekorokkekun.hatenablog.com/entry/2019/09/25/114448
              // console.log(doc.id);
              // console.log(doc.id.machine);
              this.machinesRensou[doc.id]=[doc.data()];
              this.machines.push(
                Object.assign({
                  machine:doc.id,
                },doc.data())
              );
              // this.$store.commit('crud/addUser', payload)

          });
          // console.log(this.machines);
          console.log(this.machinesRensou);
          console.log(this.machinesRensou["LN034"][0]["bikou"]);
        });
      
      },
      FireStoreSet(){
        let machineRef=db.collection("machines");

        for(const elem of this.machines){
          // console.log(elem);
          for(let key in elem){
            // console.log('key:' + key + ' value:' + elem[key])
            // console.log(elem['machine']);

            machineRef.doc(elem['machine']).set({
              tantousha:elem['tantousha'],
              CTm:elem['CTm'],
              CTs:elem['CTs'],
              bikou:elem['bikou'],

            })
          }
        }
      },
      editItem (item) {
        this.editedIndex = this.machines.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.machines.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.machines.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.machines[this.editedIndex], this.editedItem)
        } else {
          this.machines.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>