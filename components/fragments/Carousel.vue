<template>
  <v-carousel
    cycle
    interval="10000"
    :height="height || 700"
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
</template>

<script>
export default {
  props: {
    height: String
  },

  data: () => ({
    slides: [
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669240412/shedrack-salami-Ba1eGcAFj5w-unsplash_ue0e6s.jpg',
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669240412/prince-akachi-s6tVlDVKz38-unsplash_spcliy.jpg',
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669240411/shedrack-salami-gPT2JJdMnag-unsplash_fsfbsi.jpg'
    ],
  }),
}
</script>

<style>
</style>