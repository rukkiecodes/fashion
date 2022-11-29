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

    <div class="render__copies__section">
      <div
        class="render__copies__section__card"
        v-for="(shop, i) in shops"
        :key="i"
        @click="openDialog(shop)"
      >
        <img
          class="render__all__copies__flex__card__text__image"
          :src="shop"
        >
      </div>
    </div>
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

<style lang="scss" scoped>
@import '../../assets/style/gallery.scss';
</style>