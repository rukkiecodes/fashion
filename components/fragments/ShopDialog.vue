<template>
  <v-dialog
    v-model="_shopDialog"
    scrollable
    width="500"
  >
    <v-card>
      <v-toolbar
        flat
        dense
        class="grey--text text--darken-3"
      >
        <v-spacer />

        <v-btn
          icon
          @click="_shopDialog = !_shopDialog"
        >
          <v-icon color="grey darken-4">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text style="max-height: 600px;">
        <v-img :src="activeShop" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    toggleNumber: false
  }),

  methods: {
    ...mapMutations(['decreasQuantity', 'increasQuantity'])
  },

  computed: {
    ...mapState(['shopDialog', 'activeShop', 'quantity']),

    _shopDialog: {
      get () {
        return this.$store.state.shopDialog;
      },
      set (new_value) {
        this.$store.state.shopDialog = new_value;
      }
    },
  }
}
</script>
