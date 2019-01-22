<template>
  <span v-html="nbsp"></span>
</template>

<script>
export default {
  name: "v-nbsp",
  props: {
    count: {
      type: Number,
      default: 1,
      validator: function(value) {
        // The value must be higher than 0 match one of these strings
        return value >= 1;
      }
    }
  },
  data() {
    return {
      nbsp: "&nbsp;".repeat(this.count)
    };
  }
};
</script>