<template>
  <div class="mt-7">
    <div
      class="cursor-pointer py-7 px-11 bg-white-400 rounded-2xl shadow-md"
      style="width: 706px"
      @click="faqCollapse"
    >
      <div class="items-center">
        <div
          class="mr-4 flex items-center"
        >
          <div
            :class="[{'animate-animation-own': collapse}]"
            class="mr-4"
          >
            <div
              :class="[collapse ? 'bg-blue-400': 'bg-black-400']"
              class=" h-1 w-7 rounded transform transition-all ease-in-out rotate-180"
            />
            <div
              :class="[collapse ? 'rotate-180 bg-blue-400' : 'rotate-90 bg-black-400']"
              class="h-1 w-7 rounded relative transform transition-all ease-in-out duration-500 -top-1 left-0"
            />
          </div>
          <p
            class="font-medium"
            style="font-size: 20px"
          >
            {{ title }}
          </p>
        </div>
      </div>
      <div
        ref="subtitle"
        class=""
      >
        <slot
          v-if="collapse"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    title: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      collapse: false
    };
  },
  methods: {
    faqCollapse() {
      this.collapse = !this.collapse;
      const { subtitle } = this.$refs;
      if (this.collapse) {
        subtitle.style.height = "0";
        subtitle.style.overflow = "hidden";
        this.$nextTick(() => {
          const height = subtitle.scrollHeight;
          subtitle.style.transition = "height 0.25s ease-in-out";
          subtitle.style.height = `${height}px`;
        });
      } else {
        subtitle.style.height = "0";
        subtitle.addEventListener("transitionend", () => {
          subtitle.style.overflow = "auto";
          subtitle.style.height = "auto";
        });
      }
    }
  }
};
</script>

<style scoped>

</style>