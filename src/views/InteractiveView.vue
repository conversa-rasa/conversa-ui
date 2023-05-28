<script lang="ts">
import { VueElement, defineComponent } from "vue";

import ConversationWithBot from "../components/ConversationWithBot.vue";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  components: {
    ConversationWithBot,
    NavBar
  }
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
          <ConversationWithBot></ConversationWithBot>
        </div>
      </div>
      </section>
      </main>

</template>

