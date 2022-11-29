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
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749229/fashion/WhatsApp_Image_2022-11-29_at_4.46.07_PM_nyho5z.jpg',
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749226/fashion/WhatsApp_Image_2022-11-29_at_4.46.04_PM_o4steu.jpg',
      'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749227/fashion/WhatsApp_Image_2022-11-29_at_4.46.04_PM_1_kxewtg.jpg'
    ],
  }),
}
</script>

<style>
</style>