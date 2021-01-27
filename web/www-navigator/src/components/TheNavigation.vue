<template>
  <nav id="nav" class="nav">
    <p id="logo" @click="toHome">WWW-Navigator</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        v-for="topic in topics"
        :key="topic.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'topicDetails',
            params: { name: topic.name },
          }"
        >
          {{ topic.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import data from "@/wwwdata.js";
export default {
  data() {
    return {
      topics: data.topics,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/")
  },
  }
};
</script>

<style scoped>

#nav {
  display: flex;
  align-items: center;
  position: sticky;
  position:-webkit-sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid gray;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #630f94;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

#logo {
  font-size: 20px;
  color: #630f94;
  font-weight: bold;
  cursor: pointer;
}
</style>