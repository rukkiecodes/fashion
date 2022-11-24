<template>
  <v-navigation-drawer
    app
    temporary
    v-model="_drawer"
  >
    <v-list dense>
      <v-list-item
        v-for="(route, i) in routes"
        :key="i"
        link
        :to="route.to"
      >
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
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
  data: () => ({
    routes: [
      {
        to: '/',
        title: 'Home',
        icon: 'mdi-home'
      },
      {
        to: '/about',
        title: 'About us',
        icon: 'mdi-comment-question'
      },
      {
        to: '/services',
        title: 'Our services',
        icon: 'mdi-room-service'
      },
    ]
  }),

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
