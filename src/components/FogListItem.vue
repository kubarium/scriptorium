<template>
  <v-list-tile :key="item.title">

    <v-list-tile-content>
      <v-list-tile-title
        class="cyan"
        v-html="item.title"
      ></v-list-tile-title>
      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
    </v-list-tile-content>

    <static-list-item v-if="item.locked" />
    <active-list-item
      v-else
      :item="item"
    />
  </v-list-tile>
</template>

<script>
import StaticListItem from "@/components/StaticListItem";
import ActiveListItem from "@/components/ActiveListItem";

export default {
  name: "fog-list-item",
  components: { ActiveListItem, StaticListItem },
  props: { item: { type: Object } },
  created() {
    console.log(this.item.locked);
  }
};
</script>

<style>
</style>
