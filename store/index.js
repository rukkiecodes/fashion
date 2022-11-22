export const state = () => ({
  authenticated: false,
  shops: [
    {
      img: require('../assets/imgs/1.jpg'),
      title: 'KHAITE',
      subTitle: 'The Luana belted leather skirt',
      price: '$2,283'
    },
    {
      img: require('../assets/imgs/7.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/3.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/5.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/1.jpg'),
      title: 'KHAITE',
      subTitle: 'The Luana belted leather skirt',
      price: '$2,283'
    },
    {
      img: require('../assets/imgs/7.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/3.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/5.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/1.jpg'),
      title: 'KHAITE',
      subTitle: 'The Luana belted leather skirt',
      price: '$2,283'
    },
    {
      img: require('../assets/imgs/7.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/3.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/5.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/1.jpg'),
      title: 'KHAITE',
      subTitle: 'The Luana belted leather skirt',
      price: '$2,283'
    },
    {
      img: require('../assets/imgs/7.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/3.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/5.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/1.jpg'),
      title: 'KHAITE',
      subTitle: 'The Luana belted leather skirt',
      price: '$2,283'
    },
    {
      img: require('../assets/imgs/7.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/3.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
    {
      img: require('../assets/imgs/5.jpg'),
      title: 'PRADA',
      subTitle: 'Rhinestone-embellished mesh minidress',
      price: '$8,470'
    },
  ]
})

export const getters = {
  shops: state => state.shops
}

export const mutations = {
  login (state) {
    state.authenticated = true
  },
}
export const actions = {
  login ({ commit }) {
    commit('login')
  }
}