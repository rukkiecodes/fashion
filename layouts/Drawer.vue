<template>
  <v-navigation-drawer
    v-model="_drawer"
app
    absolute
    temporary
  >
    <v-list dense>
      <v-list-item
        link
        to="/"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        to="/about"
      >
        <v-list-item-icon>
          <v-icon>mdi-comment-question</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>About us</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="my-5" />
    <ContactUsButton width="90%" />
  </v-navigation-drawer>
</template>

<script>
import ContactUsButton from '../components/fragments/ContactUsButton.vue'
import { mapState } from 'vuex';

export default {
  components: { ContactUsButton },

  computed: {
    ...mapState(['drawer']),

    _drawer: {
      get () {
        return this.$store.state.drawer;
      },
      set (new_value) {
        this.$store.state.drawer = new_value;
      }
    },
  }
}
</script>
