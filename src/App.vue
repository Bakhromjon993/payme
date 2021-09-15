<script>
import Header from "./components/header.vue";
import Items from "./components/items.vue";
import Partners from "./components/partners.vue";
import Servises from "./components/servises.vue";
import Feautures from "./components/feautures.vue";
export default {
  components: { Feautures, Servises, Partners, Items, Header }
};
</script>

<template>
  <items />
  <Header />
  <partners />
  <servises />
  <feautures />
</template>