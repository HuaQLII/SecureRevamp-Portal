<template>
  <div>

  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {reqLogin} from "@/api/user";

onMounted(async () => {
  const res = await reqLogin({username: 'admin', password: 'admin'})
  console.log(res)
})

</script>

<style scoped>

</style>