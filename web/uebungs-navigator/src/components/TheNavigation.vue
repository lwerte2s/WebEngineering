<template>
  <nav id="nav" class="nav">
    <p id="logo" @click="toHome">Übungs-Navigator</p>
    <ul class="nav-links">
      <li class="links">
        <router-link :to="{name: 'Home'}">Home</router-link>
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
    
        <router-link class="user" :to="{name: 'user'}">
          Account  
        </router-link>

     
  </nav>
</template>

<script>
import data from "@/uebungsdaten.js";
export default {
  data() {
    return {
      topics: data.topics,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/")
  }
  },
  computed: {
    logedIn(){
      return data.user !== null;
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
  width: 100%;
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

.user {
  position: absolute;
  right: 10px;
}


#logo {
  font-size: 20px;
  color: #630f94;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .user {
    display: none;
  }
  .nav-links {
    display: none;
  }
}

</style>