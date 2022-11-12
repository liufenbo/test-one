<template>
  <div>
    <p>hhhhhhhhhhhhh</p>
    <p @click="cancle">返回</p>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    cancle() {
        this.$router.push({
            name: 'homebhj'
        })
    }
  }
}
</script>

<style>
</style>
