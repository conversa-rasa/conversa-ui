<script lang="ts">
import { defineComponent } from "vue";

import ActionEvent from "./ActionEvent.vue";
import SessionStartedEvent from "./SessionStartedEvent.vue";
import TextMessage from "./TextMessage.vue";

export default defineComponent({
  props: ["message"],
  components: {
    ActionEvent,
    SessionStartedEvent,
    TextMessage,
  },
});
</script>

<template>
  <!-- If the message is an action / utter, render it -->
  <ActionEvent
    v-if="message.event == 'action'"
    :message="message"
  ></ActionEvent>

  <!-- If the message is a session started event, render it -->
  <SessionStartedEvent
    v-if="message.event == 'session_started'"
    :message="message"
  ></SessionStartedEvent>

  <!-- If the message is text (optional media included), render it -->
  <TextMessage
    v-if="message.event == 'bot' || message.event == 'user'"
    :message="message"
  ></TextMessage>
</template>
<style scoped></style>
