<template>
  <div>
    <svg-icon name="favicon" height="100px" width="100px"/>
  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {reqLogin} from "@/api/user";

onMounted(async () => {
  const res = await reqLogin({mobile: 'admin', password: 'admin'})
  console.log(res)
})



</script>

<style scoped>

</style>