<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="6"
      >
        <v-card flat>
          <v-card-title class="times text-h3 text-lg-h1 font-weight-bold">Duezina<br />Signatures</v-card-title>
          <v-divider inset />
          <v-card-text class="text-body-1 grey--text text--darken-3 my-6 font-weight-bold">
            Make a power statement. Let your style do the talking. Get your selection of traditional men`s outfits deliverd right to your doorstep!
          </v-card-text>

          <v-card-text>
            <ShopNowButton />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <Carousel />
      </v-col>
    </v-row>

    <section2 />
    <section3 />
  </v-container>
</template>

<script>
import section2 from '../components/index/section2.vue'
import section3 from '../components/index/section3.vue'
import ShopNowButton from '../components/fragments/ShopNowButton.vue'
import Carousel from '../components/fragments/Carousel.vue'
export default {
  name: 'IndexPage',

  components: {
    section2,
    section3,
    ShopNowButton,
    Carousel
  }
}
</script>

<style scoped>
.times {
  font-family: 'Times New Roman', Times, serif !important;
  background: -webkit-linear-gradient(45deg, #FF4F98, #727AFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
