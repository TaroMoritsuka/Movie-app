<template>
  <v-app>
    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu" />
        <v-icon class="mx-4">mdi-video-image</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Movie App</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        />
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
    <SideNav />
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import { mapActions } from "vuex";
import firebase from "firebase";
export default {
  name: "App",
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "addButton",
      "setLoginUser",
      "login",
      "deleteLoginUser",
      "fetchMovies"
    ])
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchMovies();
        if (this.$router.currentRoute.name === "home") {
          this.$router.push({ name: "nowShowing" }, () => {});
        }
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "home" });
      }
    });
  }
};
</script>
<style lang="scss">
// scopedを外す
</style>
