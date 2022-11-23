<template>
  <v-row
    justify="space-between"
    align="center"
    class="mt-12"
    id="shop"
  >
    <v-col
      cols="12"
      class="mb-4"
    >
      <v-toolbar flat>
        <v-toolbar-title>New in: handpicked daily from the world's best brands and boutiques</v-toolbar-title>
        <v-spacer />
        <ShopNowButton />
      </v-toolbar>
    </v-col>

    <v-col
      v-for="(shop, i) in shops"
      :key="i"
      cols="12"
      sm="6"
      md="3"
    >
      <v-card
        flat
        @click="openDialog(shop)"
      >
        <v-img :src="shop.img[0]" />

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{shop.title}}</v-list-item-title>
            <v-list-item-subtitle>{{shop.price}}</v-list-item-subtitle>
            <v-list-item-subtitle>Sold by <span class="font-weight-bold">{{shop.soldBy}}</span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ShopNowButton from '../fragments/ShopNowButton.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  components: {
    ShopNowButton
  },

  methods: {
    ...mapActions(['openDialog'])
  },

  computed: {
    ...mapGetters(['shops'])
  }
}
</script>
