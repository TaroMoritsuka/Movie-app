<template>
  <v-app>
    <v-navigation-drawer v-model="$store.state.drawer" app clipped>
      <v-list dense>
        <v-list-item>
            <v-list-item-title v-if="!($store.state.login_user)">
            <v-btn small color="warning" @click="login"><v-icon>mdi-account-circle</v-icon>Login with google</v-btn>
            </v-list-item-title>
          <!-- <v-btn v-if="!($store.state.login_user)" @click="login">Login with Google</v-btn> -->
          <v-list-item-avatar>
            <img v-if="photoURL" :src="photoURL" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ userName }}</v-list-item-title>
          </v-list-item-content>
          <v-btn color="primary" small v-if="photoURL" @click="logout">logout</v-btn>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.text" :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import firebase from 'firebase'
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true,
    this.items = this.$store.state.items,
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
      } else {
        this.deleteLoginUser()
      }
    })
  },
  computed: {
    ...mapGetters(["userName", "photoURL"])
  },
  methods: {
      ...mapActions( ['login','logout','deleteLoginUser','setLoginUser'])
  }
};
</script>
<style lang="scss">
// scopedを外す
</style>
