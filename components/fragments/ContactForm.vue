<template>
  <v-card-text>
    <v-card-actions class="d-flex flex-column justify-start align-start">
      <v-text-field
        label="Your name"
        placeholder="Your name"
        style="width: 100%"
      />
      <v-text-field
        label="Email"
        placeholder="Email"
        style="width: 100%"
      />
      <v-textarea
        no-resize
        label="Message"
        placeholder="Please tell us what you want"
        style="width: 100%"
        dense
        rows="4"
      />
    </v-card-actions>
    <v-card-actions>
      <v-spacer />
      <v-btn
        dark
        depressed
        tile
        class="text-capitalize"
      >Send</v-btn>
    </v-card-actions>
  </v-card-text>
</template>
