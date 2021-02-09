<template>
  <div>
    <h1>Hallo {{ user }}</h1>

    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>

<script>
import data from "@/wwwdata.js";
export default {
  data() {
    return {
      user: data.user
    };
  },
  methods: {
    logOut() {
      data.user = null;
      this.$router.push("/");
    }
  }
};
</script>
