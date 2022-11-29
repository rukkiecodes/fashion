export const state = () => ({
  contactUsDialog: false,
  drawer: false,
  shopDialog: false,
  activeShop: '',
  quantity: 1,
  shops: [
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749229/fashion/WhatsApp_Image_2022-11-29_at_4.46.05_PM_2_cvczhc.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749228/fashion/WhatsApp_Image_2022-11-29_at_4.46.06_PM_1_x9xrkv.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749229/fashion/WhatsApp_Image_2022-11-29_at_4.46.07_PM_nyho5z.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749226/fashion/WhatsApp_Image_2022-11-29_at_4.46.04_PM_o4steu.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749226/fashion/WhatsApp_Image_2022-11-29_at_4.46.06_PM_qvi57p.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749227/fashion/WhatsApp_Image_2022-11-29_at_4.46.04_PM_1_kxewtg.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749224/fashion/WhatsApp_Image_2022-11-29_at_4.46.02_PM_1_i37fnk.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749224/fashion/WhatsApp_Image_2022-11-29_at_4.46.05_PM_jbzmbs.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749224/fashion/WhatsApp_Image_2022-11-29_at_4.46.03_PM_l9kugs.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749226/fashion/WhatsApp_Image_2022-11-29_at_4.46.05_PM_1_i4xxiq.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749224/fashion/WhatsApp_Image_2022-11-29_at_4.46.02_PM_2_ua0i6y.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749224/fashion/WhatsApp_Image_2022-11-29_at_4.46.03_PM_1_u5huig.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749223/fashion/WhatsApp_Image_2022-11-29_at_4.46.02_PM_fja33b.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749221/fashion/WhatsApp_Image_2022-11-29_at_4.46.01_PM_1_p68x3l.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749222/fashion/WhatsApp_Image_2022-11-29_at_4.46.00_PM_2_iiabab.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749221/fashion/WhatsApp_Image_2022-11-29_at_4.45.58_PM_2_rinfcx.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749222/fashion/WhatsApp_Image_2022-11-29_at_4.46.01_PM_3_mhnvum.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749220/fashion/WhatsApp_Image_2022-11-29_at_4.46.01_PM_2_n8hmjc.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749219/fashion/WhatsApp_Image_2022-11-29_at_4.45.58_PM_1_heccnb.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749220/fashion/WhatsApp_Image_2022-11-29_at_4.46.01_PM_xv4jhb.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749219/fashion/WhatsApp_Image_2022-11-29_at_4.45.59_PM_1_p0mgh2.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749218/fashion/WhatsApp_Image_2022-11-29_at_4.45.59_PM_u9uzym.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749219/fashion/WhatsApp_Image_2022-11-29_at_4.46.00_PM_1_swlqqh.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749216/fashion/WhatsApp_Image_2022-11-29_at_4.45.58_PM_tedvw8.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749218/fashion/WhatsApp_Image_2022-11-29_at_4.46.00_PM_nuvo4a.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749216/fashion/WhatsApp_Image_2022-11-29_at_4.45.56_PM_1_xvpzuk.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749215/fashion/WhatsApp_Image_2022-11-29_at_4.45.57_PM_wm41ri.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749215/fashion/WhatsApp_Image_2022-11-29_at_4.45.57_PM_1_rtmyu2.jpg',
    'https://res.cloudinary.com/rukkiecodes/image/upload/v1669749215/fashion/WhatsApp_Image_2022-11-29_at_4.45.56_PM_2_fdbrll.jpg'

  ],

  drawerNavigation: [
    {
      title: 'Home',
      to: '/',
      icon: 'mdi-home'
    },
    {
      title: 'About us',
      to: '/about',
      icon: 'mdi-comment-question'
    }
  ]
})

export const getters = {
  shops: state => state.shops,
  drawerNavigation: state => state.drawerNavigation
}

export const mutations = {
  toggleContactUsDialog: state => state.contactUsDialog = !state.contactUsDialog,
  toggleDrawer: state => state.drawer = !state.drawer,

  openDialog: (state, shop) => {
    state.activeShop = shop
    state.shopDialog = !state.shopDialog
  },

  decreasQuantity: state => {
    if (state.quantity > 0)
      state.quantity = state.quantity - 1
  },

  increasQuantity: state => {
    state.quantity = state.quantity + 1
  },
}
export const actions = {
  openDialog ({ commit }, shop) {
    commit('openDialog', shop)
  }
}

export const strict = false