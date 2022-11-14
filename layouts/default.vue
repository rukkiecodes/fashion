<template>
  <v-app dark>
    <v-app-bar
      app
      flat
      dense
      fixed
      color="transparent"
      class="app-bar"
    >
      <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <v-app-bar-title class="logo mr-5">Dasy's fashion house</v-app-bar-title>

      <nuxt-link
        to="/"
        class="text-decoration-none grey--text text--darken-4 hidden-sm-and-down"
        active-class="black--text font-weight-bold"
      >Women</nuxt-link>
      <nuxt-link
        to="/men"
        class="text-decoration-none grey--text text--darken-4 mx-4 hidden-sm-and-down"
        active-class="black--text font-weight-bold"
      >Men</nuxt-link>
      <nuxt-link
        to="/kids"
        class="text-decoration-none grey--text text--darken-4 hidden-sm-and-down"
        active-class="black--text font-weight-bold"
      >Kids</nuxt-link>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          align-with-title
          class="ml-1 hidden-sm-and-down"
        >
          <v-menu
            offset-y
            open-on-hover
            v-for="(link, i) in links"
            :key="i"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                depressed
                v-on="on"
                v-bind="attrs"
                color="transparent"
                class="text-capitalize text-body-2"
                :class="link.color || 'grey--text text--darken-4'"
              >
                {{link.title}}
              </v-btn>
            </template>

            <v-card
              min-width="100"
              max-width="100%"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="3"
                  v-for="(subItem, i) in link.sublinks"
                  :key="i"
                >
                  <v-list>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="mb-4">{{subItem.title}}</v-list-item-title>
                        <v-list-item-subtitle
                          v-for="(childLink, i) in subItem.sublinks"
                          :key="i"
                          class="mt-3"
                        >
                          <nuxt-link
                            class="text-decoration-none grey--text text--darken-3"
                            :to="childLink.to"
                          >{{ childLink.title }}</nuxt-link>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-tabs>

        <v-spacer />
        <v-text-field
          placeholder="Search"
          hide-details
          outlined
          dense
          append-icon="mdi-magnify"
          class="hidden-sm-and-down"
        />
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import links from './links'
export default {
  name: 'DefaultLayout',
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    links
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.logo {
  font-family: 'Pacifico', cursive !important;
}

.app-bar {
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>