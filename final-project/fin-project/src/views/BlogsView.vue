<template>
  <v-main class="grey lighten-3">
    <v-container>
      <div class="container">
        <v-card
          id="card1"
          elevation="2"
          outlined
          shaped
          v-for="blog in blogs"
          :key="blog.id"
        >
          <h1>{{ blog.title }}</h1>
          <v-img
            :src="
              blog.photo
                ? apiDomain + blog.photo
                : 'https://picsum.photos/200/300'
            "
            class="white--text"
            height="200px"
          ></v-img>
          <h3>{{ blog.created_at }}</h3>
          <p>{{  blog.description }}</p>
        </v-card>
      </div>
      <v-pagination
        v-model="page"
        @input="go"
        :length="lengthPage"
        :total-visible="perPage"
      >
      </v-pagination>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    blogs: [],
    page: 0,
    lengthPage: 0,
    perPage: 0,
  }),
  components: {},
  methods: {
    async go() {
      const config = {
        method: "get",
        url: this.apiDomain + "/api/v2/blog?page=" + this.page,
      };

      try {
        const response = await axios(config);
        let { blogs } = response.data;
        this.blogs = blogs.data;
        this.page = blogs.current_page;
        this.lengthPage = blogs.last_page;
        this.perPage = blogs.per_pagew;
      } catch (error) {
        alert("server error");
      }
    },
  },
  created() {
    this.go();
  },
};
</script>

<style scoped>
#card1 {
  padding: 20px;
  margin-bottom: 1rem;
}
</style>