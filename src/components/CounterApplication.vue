<template>
  <div>
    <router-link to="/">Home</router-link>
    <p>Count: {{ counter.state.count }}</p>
    <button @click="counter.increment()">Increment</button>
    <button @click="counter.decrement()">Decrement</button>
    <button @click="counter.reset()">Reset</button>
    <input v-model="value" type="number" />
    <button @click="setValue">Set Value</button>
  </div>
</template>

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
