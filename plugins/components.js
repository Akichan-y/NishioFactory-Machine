import Vue from 'vue'

//componentsファイルにあるグローバルにしたいコンポーネントをimport
import compMachine from '~/components/compMachine';
import ObiGraph from '~/components/ObiGraph';
//それを今回は'Button'というコンポーネント名で設定。
Vue.component('compMachine', compMachine);
Vue.component('ObiGraph', ObiGraph);