<template>
  <v-row
    justify="space-between"
    align="start"
  >
    <v-col
      cols="12"
      md="6"
      order="1"
      order-sm="1"
      order-md="0"
      order-lg="0"
    >
      <v-card flat>
        <v-card-title class="times text-h3 text-lg-h1 font-weight-bold">More<br />than Fashion</v-card-title>
        <v-divider inset />
        <v-card-subtitle class="text-h6 font-weight-regular pb-0">WHO WE ARE</v-card-subtitle>
        <v-card-text class="text-body-2 grey--text text--darken-3 my-6 font-weight-regular pt-0">
          Duezina Signatures is a homegrown, Nigerian online platform created with the city dweller in mind—expediently connecting them with premium quality products and services. Our customers and their satisfaction is a beacon lighting the path forward in the decisions we make, most especially with the partners to whom we engage.
        </v-card-text>
        <v-divider inset />
        <v-card-subtitle class="text-h6 font-weight-regular pb-0">WHAT WE ARE</v-card-subtitle>
        <v-card-text class="text-body-2 grey--text text--darken-3 my-6 font-weight-regular pt-0">
          In our infancy, Duezina Signatures endeavors to effectually contribute to an ever-evolving e-commerce space in Nigeria, while empowering small businesses alike and most importantly, our people through job creation and development. We take pride in leveraging our diversified perspectives, but what also connects us is our team’s entrepreneurial approach and constant pursuit of an exceptional standard to meet our customers’ needs.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-card
        class="overflow-hidden pa-0 ma-0"
        flat
        color="transparent"
        width="600"
        rounded="xl"
      >
        <video
          width="100%"
          controls
        >
          <source
            src="../assets/vid.mp4"
            type="video/mp4"
          >
          Your browser does not support HTML video.
        </video>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Carousel from '../components/fragments/Carousel.vue'
export default {
  components: { Carousel }
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