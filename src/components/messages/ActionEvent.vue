<script lang="ts">
export default {
  props: ["message"],
};
</script>

<template>
  <!-- Action -->
  <div class="action">
    <span class="event-message">
      {{ message.name }}

      <span v-if="message.confidence"
        >({{ message.confidence.toFixed(1) }})</span
      >
    </span>
  </div>
</template>
<style scoped>
.action {
  box-sizing: border-box;
  min-width: 0px;
  font-size: 11px;
  line-height: 12px;
  display: block;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin: 0px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(151, 159, 180);
  padding: 8px 24px;
  width: 100%;
}
</style>
