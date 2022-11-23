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
          <v-card-title class="times text-h3 text-lg-h1 font-weight-bold">Men`s<br />Fashion</v-card-title>
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
        <v-card flat>
          <v-carousel
            cycle
            interval="10000"
            height="600"
            hide-delimiters
            :show-arrows="false"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :src="slide"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
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
export default {
  name: 'IndexPage',

  data: () => ({
    slides: [
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669240412/shedrack-salami-Ba1eGcAFj5w-unsplash_ue0e6s.jpg',
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669240412/prince-akachi-s6tVlDVKz38-unsplash_spcliy.jpg',
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669240411/shedrack-salami-gPT2JJdMnag-unsplash_fsfbsi.jpg'
    ],
  }),

  components: {
    section2,
    section3,
    ShopNowButton
  }
}
</script>

<style scoped>
.times {
  font-family: 'Times New Roman', Times, serif !important;
}
</style>