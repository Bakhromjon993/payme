<template>
  <div class="bg-black-550 relative overflow-hidden">
    <div
      class="absolute -top-11 -left-52 w-0 h-0"
      style="border: 300px solid transparent; border-top: 0; border-bottom: 300px solid #2C2C2C; transform: rotate(-45deg)"
    />
    <div
      class="absolute -top-11 -right-48 w-0 h-0"
      style="border: 300px solid transparent; border-top: 0; border-bottom: 300px solid #2C2C2C; transform: rotate(45deg)"
    />
    <div
      class="absolute -bottom-11 -left-52 w-0 h-0"
      style="border: 300px solid transparent; border-top: 0; border-bottom: 300px solid #2C2C2C; transform: rotate(-135deg)"
    />
    <div
      class="absolute -bottom-11 -right-48 w-0 h-0"
      style="border: 300px solid transparent; border-top: 0; border-bottom: 300px solid #2C2C2C; transform: rotate(135deg)"
    />
    <div class="container flex items-center justify-center flex-col">
      <p
        class="font-semibold text-white-400 text-center mb-20"
        style="font-size: 65px; width: 767px; margin-top: 175px"
      >
        People who are <br>
        ready took these courses!
      </p>
      <vbutton
        color="white"
        style="margin-bottom: 182px"
      >
        Schedule demo
      </vbutton>
      <footer class="text-white-400 w-full">
        <div class="container py-5">
          <div class="row py-4 flex justify-between">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <a href="#">
                <img
                  src="../assets/icons/Payme.svg"
                  alt=""
                  width="180"
                  class="mb-3 cursor-pointer"
                >
              </a>
              <p class="font-italic text-muted">
                Crechterwoord K12 182 DK <br>
                Alknjkcb, All Rights Reserved
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a
                    class="font-medium text-md"
                    href="#"
                    target="_blank"
                    title="twitter"
                  ><i class="fa fa-twitter" /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="font-medium text-md"
                    href="#"
                    target="_blank"
                    title="facebook"
                  ><i class="fa fa-facebook" /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="font-medium text-md"
                    href="#"
                    target="_blank"
                    title="instagram"
                  ><i class="fa fa-instagram" /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="font-medium text-md"
                    href="#"
                    target="_blank"
                    title="pinterest"
                  ><i class="fa fa-pinterest" /></a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="font-medium text-md"
                    href="#"
                    target="_blank"
                    title="vimeo"
                  ><i class="fa fa-vimeo" /></a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col col-md-6 mb-4 mb-lg-0">
              <h6 class="uppercase font-bold mb-9">
                Links
              </h6>
              <ul>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Overons</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Social Media</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Counters</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col col-md-6 mb-4 mb-lg-0">
              <h6 class="uppercase font-bold mb-9">
                Company
              </h6>
              <ul>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Terms & Conditions</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Privacy Policy</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col col-md-6 mb-4 mb-lg-0">
              <h6 class="uppercase font-bold mb-9">
                Company
              </h6>
              <ul>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Get in touch</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >Crechterwoord K12 <br> 182 DK Alknjkcb</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >085-132567</a>
                </li>
                <li class="mb-7">
                  <a
                    class="font-medium text-md"
                    href="#"
                  >info@payme.net</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div class="text-center">
            <p class="mb-0 py-2">
              © 2021 Payme. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Vbutton from "./Vbutton.vue";
export default {
  name: "Foot",
  components: { Vbutton }
};
</script>

<style scoped>

</style>