import { reactive } from 'vue'

export default function useCounter(initialValue = 0) {
    const state = reactive({
        count: initialValue,
    })

    function increment() {
        state.count++
    }

    function decrement() {
        state.count--
    }

    function reset() {
        state.count = initialValue
    }

    function setValue(value) {
        state.count = value
    }

    return {
        state,
        increment,
        decrement,
        reset,
        setValue,
    }
}
