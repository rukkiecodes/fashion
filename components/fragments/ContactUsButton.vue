<template>
  <v-dialog
    v-model="dialog"
    width="400"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        depressed
        outlined
        tile
        class="text-capitalize ml-4"
      >
        Contact us
      </v-btn>
    </template>

    <v-card>
      <v-toolbar
        flat
        class="grey--text text--darken-3"
      >
        <v-toolbar-title>Contact us</v-toolbar-title>

        <v-spacer />

        <v-btn
          icon
          @click="dialog = !dialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <ContactForm />
    </v-card>
  </v-dialog>
</template>

<script>
import ContactForm from './ContactForm.vue';
export default {
  components: { ContactForm },
  data: () => ({
    dialog: false,
  })
}
</script>

<style>
</style>