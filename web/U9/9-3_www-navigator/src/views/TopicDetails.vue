<template>
  <div>
    <section class="topic">
      <h1>{{ topic.name }}</h1>
    </section>
    <section class="subtopics">
      <div class="cards" id="subtopic">
        <div
          v-for="subtopic in topic.subtopics"
          :key="subtopic.name"
          class="card"
        >
          <router-link
            :to="{
              name: 'subtopicDetails',
              params: { subtopicName: subtopic.name },
              hash: '#subtopic'
            }"
          >
            {{ subtopic.name }}
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/wwwdata.js";
export default {
  data() {
    return {};
  },
  computed: {
    topic() {
      return store.topics.find(topic => topic.name === this.name);
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.subtopics {
  padding: 40px 0;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}

.cards {
  display: flex;
  justify-content: center;
  padding: 0 0 10px 0;
  border-bottom: 2px solid gray;
}

.cards img {
  max-height: 200px;
}

.card {
  padding: 0 20px;
  position: relative;
}

a {
  font-size: 25px;
  font-weight: bold;
}

a:link,
a:visited {
  background-color: #630f94;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  min-width: 10vw;
}

a:hover,
a:active {
  background-color: rgb(194, 188, 194);
  color: black;
}
</style>
