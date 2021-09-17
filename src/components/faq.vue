<template>
  <div
    class="container flex justify-center items-center flex-col mb-50"
    style="margin-top: 140px; margin-bottom: 140px"
  >
    <span class="text-2xl font-semibold text-blue-400 mb-16">FAQs</span>
    <collapse
      v-for="(data, index) in info"
      :key="index"
      :title="data.title"
    >
      <p
        class="mt-10"
      >
        {{ data.subtitle }}
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
      open: false,
      info: [
        {
          title: 'And excellence partiality estimating terminated day everything?',
          subtitle: 'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.'
        },
        {
          title: 'And excellence partiality estimating terminated day everything?',
          subtitle: 'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.'
        },
        {
          title: 'And excellence partiality estimating terminated day everything?',
          subtitle: 'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.'
        },
        {
          title: 'And excellence partiality estimating terminated day everything?',
          subtitle: 'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.'
        },
      ]
    }
  },

};
</script>

<style scoped>

</style>