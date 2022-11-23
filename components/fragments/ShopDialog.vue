<template>
  <v-dialog
    v-model="_shopDialog"
    scrollable
    fullscreen
    hide-overlay
  >
    <v-card>
      <v-toolbar
        flat
        dense
        class="grey--text text--darken-3"
      >
        <v-toolbar-title class="grey--text text--darken-4 font-weight-bold">{{activeShop.title}}</v-toolbar-title>

        <v-spacer />

        <v-btn
          dark
          tile
          depressed
          class="text-capitalize"
          @click="_shopDialog = !_shopDialog"
        >
          Close
        </v-btn>
      </v-toolbar>

      <v-sheet
        height="93vh"
        class="px-4 mt-5"
      >
        <v-row
          justify="space-between"
          align="start"
          no-gutters
        >
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in activeShop.img"
                :key="i"
                :src="item"
              ></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="8"
          >
            <v-card
              flat
              width="500"
              class="float-right"
            >
              <v-card-title class="text-h5 pb-0 grey--text text--darken-4 font-weight-bold">{{activeShop.title}}</v-card-title>
              <v-card-title class="text-h6 pt-0 grey--text text--darken-4 font-weight-bold">{{activeShop.price}}</v-card-title>

              <v-divider />

              <v-row
                justify="start"
                align="start"
                class="mt-2"
              >
                <v-col cols="12">
                  <v-row
                    justify="start"
                    align="start"
                  >
                    <v-col cols="2">
                      <span>Colour: </span>
                    </v-col>
                    <v-col cols="10">
                      <span class="font-weight-bold">{{activeShop.color}}</span>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row
                    justify="start"
                    align="start"
                  >
                    <v-col cols="2">
                      <span>Size: </span>
                    </v-col>
                    <v-col cols="10">
                      <v-btn
                        v-for="(btn, i) in activeShop.sizes"
                        :key="i"
                        depressed
                        outlined
                        tile
                        small
                        class="mr-2"
                      >
                        {{btn}}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row
                    justify="start"
                    align="start"
                  >
                    <v-col cols="2">
                      <span>Quantity: </span>
                    </v-col>
                    <v-col cols="10">
                      <v-btn
                        depressed
                        outlined
                        tile
                        small
                        class="mx-0 rounded-l-lg"
                        @click="decreasQuantity"
                        :disabled="quantity <= 0 ? true : false"
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <v-btn
                        depressed
                        text
                        small
                        class="mx-0"
                      >
                        {{quantity}}
                      </v-btn>
                      <v-btn
                        depressed
                        outlined
                        tile
                        small
                        class="mx-0 rounded-r-lg"
                        @click="increasQuantity"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <p class="text-body-2 grey--text text--darken-2 font-weight-regular mb-0 pb-0">Call us for bulk purchases:</p>
                  <p
                    @click="toggleNumber = !toggleNumber"
                    class="text-body-2 grey--text text--darken-2 font-weight-bold mt-0 pt-0"
                    style="cursor: pointer;"
                  >{{toggleNumber ? '+234 816 519 4182' : 'Click here to show number'}}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data: () => ({
    toggleNumber: false
  }),

  methods: {
    ...mapMutations(['decreasQuantity', 'increasQuantity'])
  },

  computed: {
    ...mapState(['shopDialog', 'activeShop', 'quantity']),

    _shopDialog: {
      get () {
        return this.$store.state.shopDialog;
      },
      set (new_value) {
        this.$store.state.shopDialog = new_value;
      }
    },
  }
}
</script>
