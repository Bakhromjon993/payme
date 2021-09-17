<script>
import Header from "./components/header.vue";
import Items from "./components/items.vue";
import Partners from "./components/partners.vue";
import Services from "./components/services.vue";
import Features from "./components/features.vue";
import Clients from "./components/clients.vue";
import Pricing from "./components/pricing.vue";
import Faq from "./components/faq.vue";
export default {
  components: { Faq, Pricing, Clients, Features, Services, Partners, Items, Header }
};
</script>

<template>
  <items />
  <Header />
  <partners />
  <services />
  <features />
  <clients />
  <pricing />
  <faq />
</template>