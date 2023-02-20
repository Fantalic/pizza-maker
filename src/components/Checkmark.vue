<template>
<div class="checkmark-container">
  <ul>
    <li> <div class="checkmark"></div></li>
  </ul>
</div>
</template>
<script lang="ts">
    export default {}
</script>
<style scoped>
ul li:before {
  content: '\2713';
  display: inline-block;
  color: green;
  padding: 0 6px 0 0;
}

ul li {
  list-style-type: none;
  font-size: 3em;
}
</style>