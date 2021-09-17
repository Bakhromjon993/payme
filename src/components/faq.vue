<template>
  <div
    class="container flex justify-center items-center flex-col"
    style="margin-top: 140px; margin-bottom: 140px"
  >
    <span class="text-2xl font-semibold text-blue-400 mb-20">FAQs</span>
    <collapse
      title="And excellence partiality estimating terminated day everything?"
    >
      <p
        class="mt-10"
      >
        Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
      </p>
    </collapse>
  </div>
</template>

<script>
import Collapse from "./collapse.vue";
export default {
  name: "Faq",
  components: { Collapse },
  data () {
    return {
      open: false
    }
  },

};
</script>

<style scoped>

</style>