<template>
  <div>
    <v-list id="list1"  v-for="blog in randomBlogs" :key="blog.id">
      <v-card id="card1" class="mx-auto" max-width="344">
        <v-img
          :src="
            blog.photo
              ? apiDomain + blog.photo
              : 'https://picsum.photos/200/300'
          "
          height="200px"
        ></v-img>

        <v-card-title> {{ blog.title }} </v-card-title>

        <v-card-subtitle> {{ blog.created_at }} </v-card-subtitle>

        <v-card-actions>
          <v-btn color="black lighten-2" text> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ blog.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "RandomBlogs",
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    show: false,
  }),
  methods: {
    ...mapActions(["fetchRandomBlogs"]),
  },
  computed: mapGetters(["randomBlogs"]),
  created() {
    this.fetchRandomBlogs();
  },
  components: {},
};
</script>

<style scoped>
#card1 {
  margin: 0rem 1rem 1rem 1rem;
}

#list1 {
  margin: 0;
  padding: 0;
  background: none;
}
</style>