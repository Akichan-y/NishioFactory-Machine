<template>
<div>
  ara?
  <v-layout
    column
    justify-center
    align-center
  >
    <v-card v-if="users">
      <v-card-title>
        ユーザー一覧
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="検索"
          sigle-line
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        :search="search"
        sort-by="id"
        :sort-desc="true"
        class="elevation-1"
      >

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
                      <v-text-field v-model="user.email" label="メールアドレス" />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field v-model="user.name" label="名前" />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="user.memo" label="メモ" />
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

        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="dark" class="mb-2"
            @click="add"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>

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


      </v-data-table>
    </v-card>
  </v-layout>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'メールアドレス', value: 'email' },
        { text: '名前', value: 'name' },
        { text: 'メモ', value: 'memo' },
        { text: '操作', value: 'actions'}
      ],
    }
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
  },
  methods: {
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
  }
}
</script>
