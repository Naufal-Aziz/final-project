<template>
  <v-card id="navbar">
    <v-navigation-drawer permanent expand-on-hover>
      <div v-if="guest == false">
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                :src="
                  user.photo_profile
                    ? apiDomain + user.photo_profile
                    : 'https://picsum.photos/200/300'
                "
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <UserLogout />
          <v-list-item link to="/create">
            <v-icon>mdi-draw</v-icon>
            <span id="btn-text">Create Post</span>
          </v-list-item>
          <v-list-item link to="/blogs">
            <v-icon>mdi-note</v-icon>
            <span id="btn-text">Manage Post</span>
          </v-list-item>
        </v-list>
      </div>

      <v-list nav dense v-else-if="guest == true">
        <UserLogin />
        <UserRegister />
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import UserLogout from "./UserLogout.vue";
import UserLogin from "./UserLogin.vue";
import UserRegister from "./UserRegister.vue";

export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
  }),
  components: {
    UserLogout,
    UserLogin,
    UserRegister,
  },
  computed: mapState({
    guest: (state) => state.guest,
    user: (state) => state.user,
  }),
};
</script>

<style scoped>
#btn-text {
  margin-left: 30px;
}

#navbar {
  position: absolute;
}
</style>