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

    <v-avatar tile size="100">
      <img src="../assets/logo.png">
    </v-avatar>

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
    <nuxt-link
      class="text-decoration-none grey--text text--darken-3 hidden-xs-only mr-4"
      active-class="grey--text text--darken-4 font-weight-bold"
      to="/services"
    >Services</nuxt-link>

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
.logo {
  font-family: 'Times New Roman', Times, serif !important;
}

.app-bar {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 10px;
}

.colorText {
  background: -webkit-linear-gradient(45deg, #ff4f98, #727aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>