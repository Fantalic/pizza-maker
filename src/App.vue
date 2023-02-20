<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/make-pizza"> Pizza Maker</router-link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/"> Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/make-pizza"> make Pizza</router-link>
      </li>
    </ul>
  </div>
</nav>

<router-view/>

</template>
<script lang="ts">

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  }
}
</script>
<style>
/* .navbar{
  background-color: coral;
} */
</style>