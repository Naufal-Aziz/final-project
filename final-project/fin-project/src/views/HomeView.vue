<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <h2>LATEST RELEASE</h2>
          <LatestRelease />
        </v-col>

        <v-col cols="12" sm="8">
          <v-parallax dark src="../assets/pic1.jpg">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="text-h4 font-weight-thin mb-4">Lorem Ipsum</h1>
                <h4 class="subheading">
                  Dolor sit amet consectetur adipisicing elit.
                </h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-col>

        <v-col cols="12" sm="2">
          <RandomBlogs />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import RandomBlogs from "../components/RandomBlogs.vue";
import LatestRelease from "../components/LatestRelease.vue";

export default {
  name: "HomeView",
  components: {
    RandomBlogs,
    LatestRelease,
  },
};
</script>

<style scoped>
h2 {
  margin-left: 1rem;
  padding-left: 2rem;
  border-left: solid 5px #292929;
}
</style>
