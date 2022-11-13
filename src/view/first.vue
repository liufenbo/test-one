<template>
  <div>
    <p>六分波啦啦啦啦啦啦</p>
    <p @click="next">继续</p>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    next() {
        this.$router.push({
            name: 'home'
        })
    }
  }
}
</script>

<style>
</style>
