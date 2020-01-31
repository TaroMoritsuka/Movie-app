import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
Vue.config.productionTip = false
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCqba_RFvUbtWym5_MD7y7XJjFhwCUK8Mk",
    authDomain: "movie-app-13f0d.firebaseapp.com",
    databaseURL: "https://movie-app-13f0d.firebaseio.com",
    projectId: "movie-app-13f0d",
    storageBucket: "movie-app-13f0d.appspot.com",
    messagingSenderId: "44608105395",
    appId: "1:44608105395:web:6e37af4d02cf1a106e39c6",
    measurementId: "G-3E7LF88ZEP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
