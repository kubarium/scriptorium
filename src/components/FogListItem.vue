<template>
  <v-list-tile :key="item.title">

    <v-list-tile-content>
      <v-list-tile-title v-html="item.title"></v-list-tile-title>
      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action v-if="!item.locked">
      <v-btn
        icon
        ripple
      >
        <v-icon color="grey lighten-1">palette</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action v-if="!item.locked">
      <v-btn
        icon
        ripple
      >
        <v-icon color="grey lighten-1">delete</v-icon>
      </v-btn>

    </v-list-tile-action>
    <v-list-tile-action v-show="item.locked">
      <v-btn
        icon
        ripple
      >
        <v-icon color="grey lighten-1">lock</v-icon>
      </v-btn>

    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: "fog-list-item",
  props: { item: Object }
};
</script>

<style>
</style>
