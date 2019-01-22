<template>
  <v-container style="outline:1px solid red">
    <fog-list />
    <v-sheet v-show="displayColors">
      <compact v-model="colors" />
    </v-sheet>
  </v-container>
</template>
<script>
import FogList from "@/components/FogList";
import { Compact } from "vue-color";

export default {
  name: "App",
  components: {
    FogList,
    Compact
  },
  data() {
    return {
      displayColors: false,
      colors: { r: 244, g: 78, b: 59 }
    };
  }
};
</script>

<style lang="scss">
.vc-compact {
  box-sizing: content-box;
}
</style>
