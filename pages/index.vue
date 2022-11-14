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
      <v-col
        cols="12"
        sm="6"
      >
        <v-card flat>
          <img
            style="width: 100%; height: 100%; object-fit: cover;"
            src="../assets/imgs/img1.webp"
          />
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
  components: {
    section2,
    section3,
    ShopNowButton
  }
}
</script>
