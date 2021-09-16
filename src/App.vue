<script>
import Header from "./components/header.vue";
import Items from "./components/items.vue";
import Partners from "./components/partners.vue";
export default {
  components: {Partners, Items, Header }
};
</script>

<template>
  <items />
  <Header />
  <partners />
</template>