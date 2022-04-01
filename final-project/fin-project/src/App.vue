<template>
  <v-app id="inspire">
    <v-app-bar app color="white--text" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link.id" :to="link.route">
          {{ link.title }}
        </v-tab>
      </v-tabs>
    <NavDrawer />
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <MainFooter />

  </v-app>
</template>

<script>
import NavDrawer from "./components/NavDrawer.vue";
import MainFooter from "./components/MainFooter.vue";


export default {
  data: () => ({
    links: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Blogs", icon: "mdi-note", route: "/blogs" },
      { title: "About", icon: "mdi-note", route: "/about" },
    ],
  }),
  methods: {},
  components: {
    NavDrawer,
    MainFooter
  },
};
</script>

<style scoped>
#navbar {
  margin-top: 200px;
}
</style>