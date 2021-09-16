<template>
  <div class="bg-grey-400 py-20 flex justify-center items-center flex-col">
    <div class="container">
      <div class="mb-20">
        <div class="text-2xl text-center mb-7">
          <span class="font-thin">Our</span> <span class="font-semibold text-blue-400">Features</span>
        </div>
        <div
          class="text-center m-auto"
          style="max-width: 620px"
        >
          Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up
          as.
        </div>
      </div>
      <div class="flex" />
      <div class="splide mb-20">
        <div class="splide__track">
          <div class="splide__list">
            <div
              class="splide__slide active:bg-white-400 hover:bg-white-400 hover:text-blue-400 hover:shadow-sm hover:border-opacity-0 border border-grey-450 flex justify-center items-center flex-col py-12 px-5"
            >
              <p class="active:text-blue-400 font-semibold text-xl">
                Work Load
              </p>
              <p
                class="text-center mt-6 mb-10 text-black-400 font-regular"
                style="max-width: 284px"
              >
                Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression
                is. Yet preference connection unpleasant yet melancholy but end appearance.
              </p>
              <button class="underline">
                Learn more
              </button>
            </div>
            <div
              class="splide__slide active:bg-white-400 hover:bg-white-400 hover:text-blue-400 hover:shadow-sm hover:border-opacity-0 border border-grey-450 flex justify-center items-center flex-col py-12 px-5"
            >
              <p class="active:text-blue-400 font-semibold text-xl">
                Work Load
              </p>
              <p
                class="text-center mt-6 mb-10 text-black-400 font-regular"
                style="max-width: 284px"
              >
                Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression
                is. Yet preference connection unpleasant yet melancholy but end appearance.
              </p>
              <button class="underline">
                Learn more
              </button>
            </div>
            <div
              class="splide__slide active:bg-white-400 hover:bg-white-400 hover:text-blue-400 hover:shadow-sm hover:border-opacity-0 border border-grey-450 flex justify-center items-center flex-col py-12 px-5"
            >
              <p class="active:text-blue-400 font-semibold text-xl">
                Work Load
              </p>
              <p
                class="text-center mt-6 mb-10 text-black-400 font-regular"
                style="max-width: 284px"
              >
                Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression
                is. Yet preference connection unpleasant yet melancholy but end appearance.
              </p>
              <button class="underline">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="flex m-auto border border-blue-400 py-4 px-16 text-blue-400 hover:text-white-400 hover:bg-blue-400">
        Explore All
      </button>
    </div>
  </div>
</template>

<script>
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Splide from "@splidejs/splide";

export default {
  name: "Features",
  data() {
    return {};
  },
  mounted() {
    new Splide(".splide", {
      perPage: 3,
      arrows: false,
      autoplay: false,
      pagination: false,
      interval: 1200,
      rewind: true,
      speed: 1000,
      gap: '2em'
    }).mount();
  }
};
</script>

<style scoped>

</style>