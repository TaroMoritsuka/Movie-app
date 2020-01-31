<template>
  <v-container text-center justify-center >
    <v-layout row wrap mt-12>
      <v-flex xs12>
        <div >
        <h1>Movie App</h1>
        <p>Please login to use Movie App</p>
        </div>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color='warning' @click="login">Login with Google</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions( ['login'] )
  }
}
</script>
<style>
</style>
