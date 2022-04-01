<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on">
          <v-icon>mdi-lock</v-icon>
          <span id="btn-text">Logout</span> 
        </v-list-item>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Successfully Logout
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onInput(true), dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    onInput (value) {
      this.$store.dispatch('setGuest', value)
    }
  }
};
</script>

<style scoped>
#btn-text {
    margin-left: 2em;
}
</style>