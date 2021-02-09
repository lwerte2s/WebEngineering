<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" id="username" />
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input" id="password"/>
      <button @click="login" class="btn">Login</button>
    </div>
    <p>
      No account jet?
      <router-link :to="{ name: 'register' }"> Sign up now.</router-link>
    </p>
  </div>
</template>

<script>
import data from "@/wwwdata.js";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      //Authenticate User
      data.user = this.username;

      //this.$router.push("/");
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
