<template>
  <div>
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
    <nav>
      <router-link to="/counter">Counter</router-link>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: {
    RouterLink,
  },
};
</script>
