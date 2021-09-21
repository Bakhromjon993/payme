<template>
  <button
    :class="myClass"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Vbutton",
  props: {
    solid: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'bg-blue-400'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    myClass:  function() {
      return {
        btn: !this.solid,
        'btn-solid': this.solid,
        [`btn-${this.color}`]: true
      }
    }
  }
};
</script>

<style>
.btn{
  @apply text-blue-400 font-semibold border py-4 px-10 hover:bg-blue-400 hover:text-white-400
}
.btn-solid{
  @apply py-4 px-10 bg-blue-400 text-white-400 mr-5 hover:bg-white-400 hover:text-blue-400 hover:border-blue-400 border hover:border-opacity-100
}
.btn-white{
  @apply border border-white-400 py-4 px-10 text-white-400 hover:bg-white-400 hover:text-black-400
}
</style>