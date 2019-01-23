<template>
  <v-layout row>
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>
        <v-toolbar
          color="cyan"
          dark
        >
          <!-- <v-toolbar-side-icon /> -->

          <v-toolbar-title>Foggy Bits</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>fullscreen</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>touch_app</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in items">

            <v-divider
              v-if="item.divider"
              :key="index"
            />
            <fog-list-item
              :key="`item-${index}`"
              :item="item"
              v-else
            />

          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import FogListItem from "@/components/FogListItem";
export default {
  name: "fog-list",
  components: { FogListItem },
  data() {
    return {
      items: [
        { title: "Batch Edit" },
        { divider: true },
        { title: "Suck", active: true },
        { divider: true },
        { title: "Duck", active: false },
        { divider: true },
        { title: "Yuck", locked: true }
      ]
    };
  }
};
</script>

<style>
</style>
