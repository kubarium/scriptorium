<template>
  <div class="about">
    <compact v-model="colors" />

  </div>
</template>
<script>
import Card from "@/components/Card";
import { Compact } from "vue-color";

export default {
  name: "App",
  components: {
    Card,
    Compact
  },
  data() {
    return { colors: { r: 244, g: 78, b: 59 } };
  }
};
</script>

<style lang="scss">
.vc-compact {
  box-sizing: content-box;
}
/* .vc-compact-colors {
  width: 40%;
  height: inherit;
}
.vc-compact-color-item {
  width: inherit;
  height: inherit;
  margin-right: 5px;
} */
</style>
