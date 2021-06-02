<template>
   <v-app>
     <header>
      <v-app-bar app>
        <!-- アプリケーションバー -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
         <v-toolbar-title v-text="title" />
          <v-spacer />
          <img src="~/assets/bishamon.png" width="15%">

      </v-app-bar>
      </header>
      
    <v-navigation-drawer
     temporary
     app 
     v-model="drawer">
      <v-list-item>
        <v-list-item-title class="title">
          Bishamon IoT
        </v-list-item-title>
        <v-btn icon @click="drawerFalse">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="(item,i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>



    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <!-- フッター -->
    </v-footer>
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
          title: '一覧表示',
          to: '/'
        },
        {
          icon: 'mdi-qrcode-scan',
          title: 'QR読取り',
          to: '/QRcode'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-camera',
          title: 'Gallery',
          to: '/Gallery'
        },
        {
          icon: 'mdi-file-powerpoint-box',
          title: 'HPライン',
          to: '/next_HP'
        },
        {
          icon: 'mdi-panda',
          title: '編集',
          to: '/CRUD'
        },
        // {
        //   icon: 'mdi-youtube',
        //   title: 'YouTube',
        //   to: '/youtube'
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "雅IoT-A.Yama"
    }
  },
  methods: {
    drawerFalse:function(){
      this.drawer = false;
    }
  }
  
}
</script>
