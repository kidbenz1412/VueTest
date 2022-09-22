export default {
    data() {
      return { count: 0 }
    },
    template: `<button @click="count++">Add 1</button> <div>count is {{ count }}</div>`
  }