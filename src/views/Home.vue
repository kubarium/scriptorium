<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Enter the Scriptorium
        </h1>
        <!-- <p class="subheading font-weight-regular">
          Head to <router-link to="/fog-of-war">Fog of War</router-link> to organize your tactical warfare
        </p> -->
      </v-flex>

      <v-flex
        xs12
        mb-5
      >

        <h2 class="headline font-weight-bold mb-3">Fog of War</h2>

        <v-layout justify-center>
          Head to
          <vnbsp />
          <router-link to="/fog-of-war">Fog of War</router-link>
          <vnbsp />
          to organize your tactical warfare
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Tome of Magic</h2>

        <v-layout justify-center>
          Need spells? Peruse
          <vnbsp />
          <router-link to="/tome-of-magic">Tome of Magic</router-link>
          <vnbsp />
          to print a list of them
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">There Be Monsters</h2>

        <v-layout justify-center>
          Watch out!
          <vnbsp />
          <router-link to="/there-be-monsters">There Be Monsters</router-link>
          <vnbsp />
          from here on.
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import vnbsp from "@/components/vnbsp";
export default {
  components: { vnbsp }
};
</script>

<style>
</style>
