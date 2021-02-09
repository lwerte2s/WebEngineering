<template>
  <nav id="nav" class="nav" v-bind:class="{ none: vertical}" >
    <p id="logo" v-bind:class="{ none: vertical}" >Übungs-Navigator</p>
    <ul class="nav-links" v-bind:class="{ vertical: vertical }">
      <li
        v-for="topic in topics"
        :key="topic.name"
        class="links"
      >
        {{topic.name}}
      </li>
    </ul>

     
  </nav>
</template>

<script>
import data from "src/uebungsdaten.js";
export default {
  data() {
    return {
      topics: data.topics,
    };
  },
  props: {
        vertical: {
          type: Boolean,
          default: false
        }
      },
  
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
  padding: 15px 30px;
  list-style: none;
  background-color: rgb(90, 2, 112);
  color: white;
  font-weight: bold;
}

.links:hover {
  background-color: rgb(202, 202, 202);
  color: black;
}


#logo {
  font-size: 20px;
  color: #630f94;
  font-weight: bold;
  cursor: pointer;
}

.nav-links.vertical {
  display: inline-block;
}

#logo.none {
  display: none;
}

#nav.none {
  border-bottom: none;
}
</style>