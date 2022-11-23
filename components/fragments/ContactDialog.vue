<template>
  <v-dialog
    v-model="contactUsDialog"
    width="400"
    persistent
  >
    <v-card>
      <v-toolbar
        flat
        class="grey--text text--darken-3"
      >
        <v-toolbar-title>Contact us</v-toolbar-title>

        <v-spacer />

        <v-btn
          icon
          @click="toggleContactUsDialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <ContactForm />
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import ContactForm from './ContactForm.vue'
export default {
  components: { ContactForm },

  methods: {
    ...mapMutations(['toggleContactUsDialog'])
  },

  computed: {
    ...mapState(['contactUsDialog'])
  }
}
</script>
