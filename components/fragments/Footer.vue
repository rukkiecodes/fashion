<template>
  <v-footer
    dark
    color="#222222"
  >
    <v-container>
      <v-row
        justify="space-between"
        align="start"
      >
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            flat
            color="transparent"
          >
            <v-card-title>WALINJO MERCH</v-card-title>
            <v-card-text>Walainjo merch for IOS and Androind</v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            flat
            color="transparent"
          >
            <v-card-title>FOLLOW US</v-card-title>
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-snapchat</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
          lg="4"
        >
          <v-card
            flat
            color="transparent"
          >
            <v-card-title class="pl-0">CONTACT US</v-card-title>
            <ContactForm />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import ContactForm from './ContactForm.vue'
export default {
  components: { ContactForm }
}
</script>
