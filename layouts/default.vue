<template>
  <v-app dark>
    <AppBar />
    <Drawer />
    <v-main>
      <v-container>
        <transition
          name="fade"
          mode="out-in"
        >
          <Nuxt />
        </transition>
      </v-container>
    </v-main>
    <Footer />
    <ContactDialog />
    <ShopDialog />
  </v-app>
</template>

<script>
import Footer from '../components/fragments/Footer.vue'

import ContactDialog from '../components/fragments/ContactDialog.vue'
import Drawer from './Drawer.vue'
import AppBar from './AppBar.vue'
import ShopDialog from '../components/fragments/ShopDialog.vue'
export default {
  name: 'DefaultLayout',
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  }),

  components: {
    Footer,
    ContactDialog,
    Drawer,
    AppBar,
    ShopDialog
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.8s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>