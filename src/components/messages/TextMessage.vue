<script lang="ts">
export default {
  props: ["message"],
};
</script>

<template>
  <!-- User text message -->
  <div v-if="message && message.parse_data" class="chat-message user-message">
    <!-- Text message -->
    <div class="chat-bubble user-bubble">
      {{ message.text }}
    </div>

    <!-- Intent name & confidence -->
    <div class="intent">
      <!-- Intent name -->
      <span class="">
        {{ message.parse_data.intent.name }}
      </span>

      <!-- Entities -->
      <span v-if="message.parse_data.entities">
        <span v-for="entity in message.parse_data.entities">
          {"{{ entity.entity }}":"{{ entity.value }}"}
        </span>
      </span>

      <!-- Confidence -->
      <span
        v-if="
          message && message.parse_data && message.parse_data.intent.confidence
        "
        >({{ message.parse_data.intent.confidence.toFixed(2) }})</span
      >

      <span class="bot-float" v-if="message.data">
        <img class="image" :src="message.data.image" />
      </span>
    </div>
  </div>

  <!-- Bot text message -->
  <div
    v-if="message && message.metadata.utter_action"
    class="chat-message bot-message"
  >
    <div class="chat-bubble bot-bubble">
      {{ message.text }}
    </div>
  </div>

  <!-- Image -->
  <span v-if="message.data && message.data.image">
    <img class="image" :src="message.data.image" />
  </span>
</template>
<style scoped>
.chat-message {
  box-sizing: border-box;
  padding: 8px 24px;
}

.chat-bubble {
  margin: 0px;
  min-width: 0px;
  padding: 10px 20px;
  letter-spacing: 0.6px;
  line-height: 20px;
  overflow-wrap: break-word;
  align-self: flex-end;
  max-width: 408px;
  font-size: 13px;
}

.user-message {
  float: right;
}

.bot-message {
  float: left;
}

.user-bubble {
  background-color: #485fc7;
  color: rgb(255, 255, 255);
  border-radius: 20px 4px 20px 20px;
}

.bot-bubble {
  background-color: rgb(236, 239, 247);
  color: rgb(37, 45, 64);
  border-radius: 4px 20px 20px;
}

.intent {
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

.image {
  max-width: 320px;
  border-radius: 10px;
}
</style>
