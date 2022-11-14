<template>
  <v-row
    justify="center"
    align="center"
    class="mt-12"
  >
    <v-col
      cols="12"
      sm="6"
    >
      <v-card flat>
        <img
          style="width: 100%; height: 100%; object-fit: cover;"
          src="../../assets/imgs/img2.jpeg"
        />
        <v-card-text class="grey--text text--darken-4 mb-0 pb-0"> NEW GOLDEN GOOSE FOR YOUR GIFT LIST </v-card-text>
        <v-card-text class="mt-0 pt-0 grey--text text--darken-4"> Explore the latest star-patched sneaker silhouettes, including the retro-inspired Ball Star and the refreshed Super-Star Sabot </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-card
        flat
        class="text-center"
      >
        <v-card-title class="text-center text-h3 font-weight-bold"> DANCEFLOOR READY: <br> THE HOTTEST PARTY <br> SHOES</v-card-title>
        <v-card-text class="text-center text-body-1 grey--text text--darken-3 my-6">
          Statement boots, power platforms and trending mules — unbox this season's best styles
        </v-card-text>

        <ShopNowButton />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ShopNowButton from '../fragments/ShopNowButton.vue'
export default {
  name: 'IndexPage',
  components: {
    ShopNowButton
  }
}
</script>
