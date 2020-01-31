<template>
 
  <b-container>
      <h1>Popular Movies</h1>
    <b-row>
      <b-col cols="3" v-for="movie in info.data.results" :key="movie.id">
        <b-card>
            <b-button class="addButton" pill variant="outline-danger" @click="addWantMovies(movie)">add Watch List</b-button>
          <b-card-img :src="'https:image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.poster_path">
          </b-card-img>
         
        <span>
          <b-card-text>
            {{ movie.overview }}
          </b-card-text>
        </span>
          <template v-slot:footer>
            <small class="text-muted">{{ movie.title }}</small>
          </template>
        </b-card>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import axios from "axios";
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  methods: {
    addWantMovies(movie){
      alert(movie.title + 'added')
      this.addMovies(movie)
    },
    ...mapActions( ['addMovies'])
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=5bc7264d96f74655a6be76925d076556&language=en-US&page=1"
      )
      .then(response => {
        this.info = response;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
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
