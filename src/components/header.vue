<template>
  <div
    class="container flex justify-between mt-10 mb-3 z-20"
  >
    <ul class="flex flex-row -ml-6 items-center cursor-pointer">
      <li class="text-blue-400 font-extrabold font-medium">
        <a
          class="p-6 text-xl"
          href="#"
        >Payme</a>
      </li>
      <li class="hover:text-blue-400">
        <a
          class="p-6 text-l font-medium"
          href="#"
        >Home</a>
      </li>
      <li class="hover:text-blue-400">
        <a
          class="p-6 text-l font-medium"
          href="#"
        >About</a>
      </li>
      <li class="hover:text-blue-400">
        <a
          class="p-6 text-l font-medium"
          href="#"
        >Testimonials</a>
      </li>
      <li class="hover:text-blue-400">
        <a
          class="p-6 text-l font-medium"
          href="#"
        >Contact</a>
      </li>
    </ul>
    <div>
      <button class="py-6 px-4 font-medium text-l hover:text-blue-400">
        Sign in
      </button>
      <button class="px-9 py-2 border border-blue-400 text-blue-400 font-medium hover:bg-blue-400 hover:text-white-400">
        Sign up
      </button>
    </div>
  </div>
  <div class="container flex relative">
    <div class="flex flex-col justify-center">
      <div class="flex justify-start items-center mb-8">
        <div class="text-2xl ">
          <p class="max-w-md font-thin">
            Providing Best
          </p>
          <p class="text-blue-400 font-semibold">
            WEB Services
          </p>
        </div>
      </div>
      <div
        class="mb-10 font-medium "
        style="max-width: 426px"
      >
        Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.
      </div>
      <div>
        <Vbutton
          class="mr-4"
          solid
        >
          Get Started
        </Vbutton>
        <Vbutton>
          Explore
        </Vbutton>
      </div>
    </div>
    <div class="flex-grow ml-3">
      <img
        class="absolute right-16 left-0 top-36 m-auto"
        src="../assets/images/arrow.svg"
        alt=""
      >
      <img
        class="bg-cover bg-no-repeat bg-center"
        src="../assets/images/girl1.jpg"
        alt=""
        style="z-index: -10;"
      >
    </div>
  </div>
</template>

<script>
import Vbutton from "./Vbutton.vue";
export default {
  name: "Header",
  components: { Vbutton }
};
</script>

<style scoped>

</style>