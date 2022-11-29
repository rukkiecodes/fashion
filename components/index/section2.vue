<template>
  <v-row
    justify="center"
    align="center"
    class="mt-12"
  >
    <v-col
      cols="12"
      sm="6"
      order="1"
      order-sm="0"
      order-md="0"
      order-lg="0"
    >
      <v-card flat>
        <img
          style="width: 100%; height: 100%; object-fit: cover;"
          src="https://res.cloudinary.com/rukkiecodes/image/upload/v1669749228/fashion/WhatsApp_Image_2022-11-29_at_4.46.06_PM_1_x9xrkv.jpg"
        />
        <v-card-text class="grey--text text--darken-4 mb-0 pb-0"> NEW GOLDEN GOOSE FOR YOUR GIFT LIST </v-card-text>
        <v-card-text class="mt-0 pt-0 grey--text text--darken-4"> Explore the latest star-patched sneaker silhouettes, including the retro-inspired Ball Star and the refreshed Super-Star Sabot </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-card flat>
        <v-card-title class="times text-h3 text-lg-h1 font-weight-bold">NEW<br />ARRIVALS</v-card-title>
        <v-divider inset />
        <v-card-text class="text-body-1 grey--text text--darken-3 my-6 font-weight-bold">
          Check out our latest collection
        </v-card-text>

        <v-card-text>
          <ShopNowButton />
        </v-card-text>
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

<style scoped>
.times {
  font-family: 'Times New Roman', Times, serif !important;
  background: -webkit-linear-gradient(45deg, #ff4f98, #727aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>