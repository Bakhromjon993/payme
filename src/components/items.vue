<template>
  <div
    class="absolute w-full h-full overflow-hidden top-0"
    style="z-index: -1"
  >
    <div class="border-blue-400 border w-32 h-32 relative transform rotate-45 -top-2 -left-16" />
    <div class="w-12 h-12 bg-yellow-400 -right-4 -top-5 absolute rounded-full" />
    <div class="w-14 h-14 rounded-full top-60 left-1/3 absolute rounded-tl-2xl bg-yellow-400" />
    <div class="w-14 h-14 rounded-full bottom-28 left-20 absolute rounded-bl-2xl bg-green-300" />
    <div class="w-14 h-14 rounded-full bottom-48 right-56 absolute rounded-tl-2xl bg-brown-300" />
  </div>
</template>

<script>
export default {
  name: "Items"
};
</script>

<style scoped>

</style>