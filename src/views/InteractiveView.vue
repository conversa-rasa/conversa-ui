<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import ConversationChat from "../components/ConversationChat.vue";

export default defineComponent({
  components: {
    ConversationChat,
    NavBar,
  },
});
</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">Talk to your bot</h1>
            <p class="subtitle">Interactive Learning</p>
          </div>
        </div>
        <div class="columns box">
          <div class="column conversation">
            <ConversationChat :conversation="[]"></ConversationChat>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.conversation {
  border-left: 1px solid #dde2ef;
  border-right: 1px solid #dde2ef;
}
</style>
