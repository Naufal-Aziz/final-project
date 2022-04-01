<template>
  <div class="text-center">
    <v-dialog width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
          <span id="btn-text">Login</span>
        </v-list-item>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Login to Your Account
        </v-card-title>
        <div id="login-form">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submitForm"
            >
              Login
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>
          </v-form>
        </div>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data: () => ({
    valid: true,
    user: {},
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    Password: "",
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  computed: mapState({
    guest: (state) => state.guest,
  }),
  methods: {
    async submitForm() {
      let formData = new FormData();

      formData.append("email", this.email);
      formData.append("password", this.Password);

      const config = {
        method: "post",
        url: "https://demo-api-vue.sanbercloud.com/api/v2/auth/login",
        data: formData,
      };

      let token = "";
      try {
        let response = await axios(config);
        token = response.data.access_token;
        this.setToken(response.data.access_token);
        this.onInput(false);
      } catch (error) {
        alert("Wrong Credentials");
      }

      let config2 = {
        method: "post",
        url: "https://demo-api-vue.sanbercloud.com/api/v2/auth/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        let response = await axios(config2);
        this.setUser(response.data);
      } catch (error) {
        alert("Wrong Credentials");
      }
    },
    setUser(value) {
      this.$store.dispatch("setUser", value);
    },
    setToken(value) {
      this.$store.dispatch("setToken", value);
    },
    onInput(value) {
      this.$store.dispatch("setGuest", value);
    },
    reset() {
      this.$refs.form.reset();
    },
    password() {},
  },
};
</script>

<style scoped>
#btn-text {
  margin-left: 2em;
}
#login-form {
  padding: 2rem;
}
</style>