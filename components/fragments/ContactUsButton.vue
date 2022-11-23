<template>
  <v-btn
    depressed
    outlined
    tile
    class="text-capitalize ml-4"
    @click="toggleContactUsDialog"
    :width="width"
  >
    Contact us
  </v-btn>
</template>

<script>
import { mapMutations } from 'vuex';
import ContactForm from './ContactForm.vue';
export default {
  props: {
    width: String
  },

  components: { ContactForm },

  methods: {
    ...mapMutations(['toggleContactUsDialog'])
  }
}
</script>
