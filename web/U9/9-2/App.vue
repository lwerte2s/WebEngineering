
<template>
  <div >
    <h2> Menu horizontal</h2>
    <Items tabs="tabs"></Items>

  </div>
</template>

<script>
//import Menu from "./menu";
import Items from "./Items";

export default {
  name: 'App',
  components: {
    Items
  },
  data() {
    return { tabs: ["hallo", "ich", "verzweifle"]}
  }
}
</script>

<style>

</style>
