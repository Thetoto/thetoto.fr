<template>
  <span
    class="btn-floating waves-effect waves-light red tooltipped"
    :class="pulse ? 'pulse ' + class_other : class_other"
    data-position="bottom"
    :data-tooltip="tooltip"
    ref="tooltip"
  >
    <i :class="icon"></i>
  </span>
</template>

<script>
import M from "materialize-css/dist/js/materialize"

export default {
  name: "TooltipButton",
  props: {
    icon: String,
    tooltip: String,
    pulse: Boolean,
    class_other: String
  },
  mounted() {
    M.Tooltip.init(this.$refs.tooltip);
  },
  beforeDestroy() {
    var tooltip = M.Tooltip.getInstance(this.$refs.tooltip);
    tooltip.close();
    setTimeout(() => { tooltip.destroy() }, 400);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
