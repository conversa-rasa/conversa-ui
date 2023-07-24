<script lang="ts">
import { dateTime } from "../../utils/Datetime";

export default {
  props: ["message"],
  setup() {
    return { dateTime };
  },
};
</script>

<template>
  <!-- Session Started -->
  <div class="session-started">
    <span>
      Conversation session started on
      {{ dateTime.timestampToDate(message.timestamp) }}
    </span>
  </div>
</template>
<style scoped>
.session-started {
  color: rgb(151, 159, 180);
  font-size: 11px;
  line-height: 12px;
  box-sizing: border-box;
  min-width: 0px;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  margin: 0px;
  padding: 40px 24px;
  display: flex;
}

.session-started::before {
  background-color: rgb(221, 226, 239);
  content: " ";
  height: 1px;
  display: block;
  flex: 1 1 auto;
}

.session-started::after {
  background-color: rgb(221, 226, 239);
  content: " ";
  height: 1px;
  display: block;
  flex: 1 1 auto;
}

.session-started span {
  padding-left: 12px;
  padding-right: 12px;
}
</style>
