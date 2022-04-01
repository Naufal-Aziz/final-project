<template>
  <div id="app">
    <v-list id="left-col" v-for="blog in blogs" :key="blog.id">
      <v-list-item link>
        <h3>{{ blog.title }}</h3>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    blogs: [],
  }),
  components: {},
  created() {
    const config = {
      method: "get",
      url: this.apiDomain + "/api/v2/blog/random/6",
    };
    axios(config)
      .then((response) => {
        let { blogs } = response.data;
        this.blogs = blogs;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>

#left-col {
  background: none;
  padding: 1rem;
}

</style>