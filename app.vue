<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script lang="ts" setup>
const someFunc = (a: number) => {
  if (a === 1) {
    return 1
  }
}

const a = someFunc(1);
const b = a + 1;
console.log(b)
</script>
