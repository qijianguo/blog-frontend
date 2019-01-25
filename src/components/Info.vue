<template>
  <div>
    info
    <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
import store from '@/store/store.js';
export default {
  name: 'info',
  store,
  methods: {
    add () {
      console.log('test')
      store.commit('increase')
    }
  }
}
</script>

<style scoped>
</style>
