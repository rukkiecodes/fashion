<template>
  <v-app-bar
    app
    flat
    fixed
    color="transparent"
    class="app-bar"
  >
    <v-app-bar-nav-icon
      @click="toggleDrawer"
      class="hidden-sm-and-up"
    ></v-app-bar-nav-icon>

    <v-app-bar-title class="logo mr-5">Walainjo merch</v-app-bar-title>

    <v-spacer />

    <nuxt-link
      class="text-decoration-none grey--text text--darken-3 hidden-xs-only"
      active-class="grey--text text--darken-4 font-weight-bold"
      to="/"
    >Home</nuxt-link>
    <nuxt-link
      class="text-decoration-none grey--text text--darken-3 hidden-xs-only mx-4"
      active-class="grey--text text--darken-4 font-weight-bold"
      to="/about"
    >About us</nuxt-link>

    <ContactUsButton />
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';
import ContactUsButton from '../components/fragments/ContactUsButton.vue'
export default {
  components: { ContactUsButton },

  methods: {
    ...mapMutations(['toggleDrawer'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.logo {
  font-family: 'Pacifico', cursive !important;
}

.app-bar {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 10px;
}
</style>