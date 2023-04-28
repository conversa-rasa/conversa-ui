<script lang="ts">
import { defineComponent } from "vue";
import Message from "./messages/Message.vue";

export default defineComponent({
  props: ["conversation"],
  components: {
    Message,
  },
  updated() {
  },
});
</script>

<template>
  <div class="chat">
    <Message
      :message="JSON.parse(message[0])"
      v-for="message in conversation"
    ></Message>
  </div>
</template>
<style scoped>
.chat {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 286px);
}
</style>
