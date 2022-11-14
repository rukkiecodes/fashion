<template>
  <v-row
    justify="space-between"
    align="center"
    class="mt-12"
  >
    <v-col cols="12" class="mb-4">
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
      <v-card flat>
        <v-img :src="shop.img" />

        <v-card-title class="mb-0 pb-0">{{shop.title}}</v-card-title>
        <v-card-text class="my-0 py-0">{{shop.subTitle}}</v-card-text>
        <v-card-text>{{shop.price}}</v-card-text>
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
  },

  data: () => ({
    shops: [
      {
        img: require('../../assets/imgs/1.jpg'),
        title: 'KHAITE',
        subTitle: 'The Luana belted leather skirt',
        price: '$2,283'
      },
      {
        img: require('../../assets/imgs/7.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/3.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/5.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/1.jpg'),
        title: 'KHAITE',
        subTitle: 'The Luana belted leather skirt',
        price: '$2,283'
      },
      {
        img: require('../../assets/imgs/7.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/3.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/5.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/1.jpg'),
        title: 'KHAITE',
        subTitle: 'The Luana belted leather skirt',
        price: '$2,283'
      },
      {
        img: require('../../assets/imgs/7.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/3.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/5.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/1.jpg'),
        title: 'KHAITE',
        subTitle: 'The Luana belted leather skirt',
        price: '$2,283'
      },
      {
        img: require('../../assets/imgs/7.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/3.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/5.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/1.jpg'),
        title: 'KHAITE',
        subTitle: 'The Luana belted leather skirt',
        price: '$2,283'
      },
      {
        img: require('../../assets/imgs/7.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/3.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
      {
        img: require('../../assets/imgs/5.jpg'),
        title: 'PRADA',
        subTitle: 'Rhinestone-embellished mesh minidress',
        price: '$8,470'
      },
    ]
  })
}
</script>
