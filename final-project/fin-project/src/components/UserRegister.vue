<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on">
          <v-icon>mdi-account-plus</v-icon>
          <span id="btn-text">Register</span>
        </v-list-item>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Create an Account
        </v-card-title>

        <v-form ref="form" id="regist-form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

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

          <input type="file" ref="photo_profile" />

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submitForm"
          >
            Register
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-form>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
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

  methods: {
    async submitForm() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.Password);
      formData.append("photo_profile", this.$refs.photo_profile.files[0]);

      const config = {
        method: "post",
        url: "https://demo-api-vue.sanbercloud.com/api/v2/auth/register",
        data: formData,
      };
      try {
        let response = await axios(config);
        console.log(response);
        this.dialog = false;
      } catch (error) {
        // alert('Sukses')
      }
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

#regist-form {
  padding: 2rem;
}
</style>
