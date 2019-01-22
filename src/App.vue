<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
          to="/"
          class="toolbar-title"
        >Scriptorium</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-and-down">
        <v-btn
          flat
          to="/fog-of-war"
        >Fog Of War</v-btn>
        <v-btn
          flat
          to="/tome-of-magic"
        >Tome of Magic</v-btn>
        <v-btn
          flat
          to="/there-be-monsters"
        >There Be Monsters</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>



<style lang="scss">
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>

