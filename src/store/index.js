import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    wantMovies: [],
    login_user: null,
    items: [
      { icon: "mdi-filmstrip", text: "Now Showing", link: "nowShowing" },
      { icon: "mdi-crown", text: "Popular Movies", link: "popular" },
      { icon: "mdi-eye-plus", text: "Watch List", link: "watchList"}
    ],
  },
  getters: {
    getMovies(state){
      return state.wantMovies
    },
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
  },
  mutations: {
    toggleSideMenu ( state ){
      state.drawer = !state.drawer
    },
    addMovies(state,movie){
      state.wantMovies.push(movie)
    },
    setLoginUser(state,user){
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    }
  },
  actions: {
    toggleSideMenu( { commit } ){
      commit( 'toggleSideMenu')
    },
    addButton( { commit }, movie ){
      commit('addMovies', movie)
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    fetchMovies( { getters, commit }){
      firebase.firestore().collection(`users/${getters.uid}/movies`).get().then(snapshot => {
        snapshot.forEach( doc => commit( 'addMovies',{ id: doc.id, movie: doc.data()}))
      })
    },
    addMovies( { getters, commit }, movie) {
      if( getters.uid) {
        console.log('hello!')
          firebase.firestore().collection(`users/${getters.uid}/movies`).add(movie).then(doc => {
            commit('addMovies', {id: doc.id,movie: movie})
          })
      }
    },
    setLoginUser( {commit}, user){
      commit( 'setLoginUser',user)
    },
    logout () {
      firebase.auth().signOut()
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    }
  },
  modules: {
  }
})
