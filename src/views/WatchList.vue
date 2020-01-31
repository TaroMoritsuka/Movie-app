<template>
  <!-- <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12> <h1>Now Showing</h1> </v-flex>
      <v-flex>
        <div v-for="movie in info.data.results" :key="movie.id">
          <span>
            <img :src="'https:image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.poster_path">
          </span> 
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  <div> -->
  <b-container>
      <h1>Watch List</h1>
    <b-row>
      <b-col cols="3" v-for="movie in wantMovies" :key="movie.id">
        <b-card>
            <b-button class="addButton" pill variant="outline-danger" @click="addButton(movie)">add Watch List</b-button>
          <b-card-img :src="'https:image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.movie.poster_path">
          </b-card-img>
          <!-- title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        > -->
        <span>
          <b-card-text>
            {{ movie.movie.overview }}
          </b-card-text>
        </span>
          <template v-slot:footer>
            <small class="text-muted">{{ movie.movie.title }}</small>
          </template>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  created(){
      this.wantMovies = this.$store.state.wantMovies
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      wantMovies: []
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: white;
}
p{
  color: black;
}
div{
  overflow: hidden;
}
p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
.addButton{
  margin-bottom: 17px;
}
</style>
