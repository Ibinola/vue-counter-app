<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>Click the button below to go the counter page</p>
    <nav>
      <router-link to="/counter" class="button">Let's Count!</router-link>
    </nav>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 1.5rem;
}

.button {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #788b9e;
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "HomeView",
  components: {
    RouterLink,
  },
};
</script>
