export default {
  methods: {
    jumpTo (destination) {
      this.$router.push({ name: destination })
    }
  }
}
