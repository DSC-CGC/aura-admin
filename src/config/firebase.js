import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCGp99hgjpJ_zKModv1glDqicXLeC7m5IM",
  authDomain: "dsc-cgc-aace0.firebaseapp.com",
  databaseURL: "https://dsc-cgc-aace0.firebaseio.com",
  projectId: "dsc-cgc-aace0",
  storageBucket: "dsc-cgc-aace0.appspot.com",
  messagingSenderId: "236543744948",
  appId: "1:236543744948:web:e8dc40d6c1d6b8bf41b0e1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore:firebase.firestore(),
  auth:firebase.auth(),
  authw:firebase.auth,
  storage:firebase.storage(),
  functions: firebase.functions()
};