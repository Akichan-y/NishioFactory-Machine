import firebase from 'firebase/app'
// import 'firebase/auth'

import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
// import firebase from 'firebase';
// import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // apiKey: "AIzaSyBlUkcBYUeZSYBeLLNePZMqNbguHrUu_W0",
    // authDomain: "ay-vue.firebaseapp.com",
    // databaseURL: "https://ay-vue.firebaseio.com",
    // projectId: "ay-vue",
    // storageBucket: "ay-vue.appspot.com",
    // messagingSenderId: "312074200731",
    // appId: "1:312074200731:web:eaeaf1a9436245fb37483e",
    // measurementId: "G-60NTK74TJM"
    
    // apiKey: "AIzaSyBo__fvW-s0PtHC4HcVfVqDT_8ORM-kXto",
    // authDomain: "mypjt20190805.firebaseapp.com",
    // databaseURL: "https://mypjt20190805.firebaseio.com",
    // projectId: "mypjt20190805",
    // storageBucket: "mypjt20190805.appspot.com",
    // messagingSenderId: "590788475807",
    // appId: "1:590788475807:web:df299730df764f23"
    
    // apiKey: "AIzaSyAVb2TNCteueBW2If8lAB6XsvbTxpWTC8U",
    // authDomain: "bishamonn1-46718.firebaseapp.com",
    // databaseURL: "https://bishamonn1-46718.firebaseio.com",
    // projectId: "bishamonn1-46718",
    // storageBucket: "bishamonn1-46718.appspot.com",
    // messagingSenderId: "733184870604",
    // appId: "1:733184870604:web:74541db5365e63dd7b1a69",
    // measurementId: "G-1Q67YXB4JM",
    
    // apiKey: "AIzaSyD7D7mmCNgBCcknk_-2hEAuK2cvj-1hN-E",
    // authDomain: "n-iot-a25db.firebaseapp.com",
    // databaseURL: "https://n-iot-a25db.firebaseio.com",
    // projectId: "n-iot-a25db",
    // storageBucket: "n-iot-a25db.appspot.com",
    // messagingSenderId: "388091233660",
    // appId: "1:388091233660:web:c2e12d842aa8756a9c90f9",
    // measurementId: "G-MH94XVPMD3",

    apiKey: "AIzaSyBlUkcBYUeZSYBeLLNePZMqNbguHrUu_W0",
    authDomain: "ay-vue.firebaseapp.com",
    databaseURL: "https://ay-vue.firebaseio.com",
    projectId: "ay-vue",
    storageBucket: "ay-vue.appspot.com",
    messagingSenderId: "312074200731",
    appId: "1:312074200731:web:eaeaf1a9436245fb37483e",
    measurementId: "G-60NTK74TJM"

    // apiKey: "AIzaSyD7D7mmCNgBCcknk_-2hEAuK2cvj-1hN-E",
    // authDomain: "n-iot-a25db.firebaseapp.com",
    // databaseURL: "https://n-iot-a25db.firebaseio.com",
    // projectId: "n-iot-a25db",
    // storageBucket: "n-iot-a25db.appspot.com",
    // messagingSenderId: "388091233660",
    // appId: "1:388091233660:web:c2e12d842aa8756a9c90f9",
    // measurementId: "G-MH94XVPMD3"

    

  })
}
  
export default firebase
// const dbfs = firebase.firestore();
// const storage = firebase.storage();//これは新しく追加した
// export {
//  firebase,
//  dbfs,
//  storage//=========================これも追加
// }
// フレームライン
// const firebaseConfig = {
//   apiKey: "AIzaSyBo__fvW-s0PtHC4HcVfVqDT_8ORM-kXto",
//   authDomain: "mypjt20190805.firebaseapp.com",
//   databaseURL: "https://mypjt20190805.firebaseio.com",
//   projectId: "mypjt20190805",
//   storageBucket: "mypjt20190805.appspot.com",
//   messagingSenderId: "590788475807",
//   appId: "1:590788475807:web:df299730df764f23"
// };
