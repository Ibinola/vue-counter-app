<template>
  <div class="counter">
    <h1>Counting is Fun</h1>
    <p>How many times can you click the button? Only one way to find out!</p>
    <p>{{ counter.state.count }}</p>
    <div class="buttons">
      <button @click="counter.increment()">Increment</button>
      <button @click="counter.decrement()">Decrement</button>
      <button @click="counter.reset()">Reset</button>
      <input v-model="value" type="number" />
      <button @click="setValue">Set Value</button>
    </div>
    <nav>
      <router-link to="/" class="button">Back to Home</router-link>
    </nav>
  </div>
</template>

<style>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 1.5rem;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1.5rem;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #788b9e;
  cursor: pointer;
}

.back-link {
  margin-top: 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #2c3e50;
}

input {
  font-size: 1rem;
  padding: 0.2rem;
  margin: 0rem;
  border-radius: 0.5rem;
  text-align: center;
}

nav {
  margin-top: 2em;
}
</style>

<script>
import useCounter from "../composables/useCounter.js";

export default {
  setup() {
    const counter = useCounter();
    let value = counter.state.count;

    function setValue() {
      counter.setValue(value);
    }

    return {
      counter,
      value,
      setValue,
    };
  },
};
</script>
