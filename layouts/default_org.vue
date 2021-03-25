<template>
  <v-app dark>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temprary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      height="50"
    >
        <!-- ここから追加 -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <!-- ここまで追加 -->
      <v-toolbar-title v-text="title" />
       
      <v-spacer />
      <img src="~/assets/bishamon.png" width="15%">
    </v-app-bar>


    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-qrcode',
          title: 'QR読取り',
          to: '/QRcode'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '雅Team-IoTSystem by A.Yamazaki.js'
    }
  },
  
}
</script>
