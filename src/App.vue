<template>
  <div>
    <h1>测试axios二次封装</h1>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import {onMounted} from "vue";


onMounted(() => {
  request({
    url: '/v3/simple/supported_vs_currencies',
    method: 'get',
    // params: {
    //   id: 1
    // }
  }).then(res => {
    console.log(res)
  })
})
</script>

<style scoped>

</style>