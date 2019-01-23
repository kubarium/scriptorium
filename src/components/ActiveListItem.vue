<template>

  <v-list-tile-action>
    <v-btn
      icon
      ripple
    >
      <v-icon color="grey lighten-1">palette</v-icon>
    </v-btn>

    <v-btn
      icon
      ripple
      v-show="item.active"
    >
      <v-icon
        color="grey lighten-1"
        v-if="item.active"
      >check_box</v-icon>
      <v-icon
        color="grey lighten-1"
        v-else
      >check_box_outline_blank</v-icon>
    </v-btn>

    <v-btn
      icon
      ripple
    >
      <v-icon color="grey lighten-1">delete</v-icon>
    </v-btn>
  </v-list-tile-action>

</template>

<script>
export default {
  name: "active-list-item",
  props: { item: { type: Object } }
  /* props: { item: {type:Object} } */
};
</script>

<style>
</style>
