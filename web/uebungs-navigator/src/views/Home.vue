<template>
  <div class="home">
    <h1>All Topics</h1>
    <div>
      <div v-for="topic in topics" :key="topic.name" class="topics">
        <router-link
          :to="{ name: 'topicDetails', params: { name: topic.name } }"
        >
          <h2>{{ topic.name +": "+ topic.topic }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/uebungsdaten.js";
export default {
  name: "Home",
  data() {
    return {
      topics: data.topics
    };
  }
};
</script>

<style scoped>
a:link,
a:visited {
  background-color: #630f94;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  width: 20vw;
  min-width: 500px;
}

a:hover,
a:active {
  background-color: rgb(194, 188, 194);
  color: black;
}

.topics {
  display: inline-flex;
}
</style>
