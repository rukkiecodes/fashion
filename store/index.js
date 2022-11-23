export const state = () => ({
  contactUsDialog: false,
  drawer: false,
  shopDialog: false,
  activeShop: {},
  quantity: 1,
  shops: [
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/N/198971_1647941458.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/Z/198971_1647941485.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/E/198971_1647941514.jpg',
      ],
      title: "Men's Traditional Wear - Sky Blue",
      soldBy: "Kenability",
      soldByLink: 'https://www.konga.com/merchant/kenability',
      color: 'Blue',
      sizes: ['S', 'M', 'L', 'XXL'],
      price: '₦13,000'
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/e/Men-s-Traditional-Dansiki-Wear---Black-6637938.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/e/Men-s-Traditional-Dansiki-Wear---Black-6637939.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/e/Men-s-Traditional-Dansiki-Wear---Black-6637940.jpg',
      ],
      title: "Men's Traditional Dansiki Wear - Black",
      soldBy: "KIMBERLY STORES",
      soldByLink: 'https://www.konga.com/merchant/kimberly-stores',
      color: 'Black',
      sizes: ['XL', 'XXL', 'S/M'],
      price: '₦19,000'
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/N/51448_1628846588.jpg'
      ],
      title: "Agbada For Men",
      soldBy: "House Of Greg",
      soldByLink: 'https://www.konga.com/merchant/house-of-greg',
      color: 'Multicolour',
      sizes: ['M', 'XL'],
      price: '₦40,000'
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/V/140925_1666255942.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/V/140925_1666255942.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/V/140925_1666255942.jpg'
      ],
      title: "Men's Senator Plain Wear - Royal Blue",
      soldBy: "T-Gold Stitches",
      soldByLink: 'https://www.konga.com/merchant/t-gold-stitches',
      color: 'Not Applicable',
      sizes: ['M'],
      price: '₦15,000'
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/L/93408_1535483420.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/R/93408_1535483459.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/M/93408_1535483489.jpg'
      ],
      title: "Adot Men's Traditional Native Wear - White",
      price: '₦14,999',
      color: 'White',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      soldBy: "MAESTRO MAKEOVER",
      soldByLink: 'https://www.konga.com/merchant/maestro-makeover',
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/G/53294_1648835600.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/L/53294_1648839065.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/R/53294_1648839092.jpg'
      ],
      title: "Blue Native African Wear With Colorful/lace Up Detail",
      price: '₦12,000',
      color: 'Blue',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      soldBy: "SynGeTters",
      soldByLink: 'https://www.konga.com/merchant/syngetters',
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/L/194125_1646955398.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/O/194125_1646955391.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/Q/194125_1646955404.jpg'
      ],
      title: "Men's Striped Outfit - Blue",
      price: '₦25,000',
      color: 'Blue',
      sizes: ['Free Size'],
      soldBy: "King Kaftan",
      soldByLink: 'https://www.konga.com/merchant/king-kaftan',
    },
    {
      img: [
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/X/198971_1647938138.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/U/198971_1647938177.jpg',
        'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/G/198971_1647938214.jpg'
      ],
      title: "Mens Grey Traditional Senator Attire",
      price: '₦13,000',
      color: 'Grey',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      soldBy: "Kenability",
      soldByLink: 'https://www.konga.com/merchant/kenability',
    },
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