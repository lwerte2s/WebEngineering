<template>
  <div id="menu">
    <ul>
      <li v-for="tab in tabs" class="btn-list" v-bind:key="tab">
        <button
            v-bind:class="['tab-button',{active: currentTab === tab}]"
            v-on:click="currentTab=tab"
        >{{tab}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
}
</script>

<style scoped>


</style>