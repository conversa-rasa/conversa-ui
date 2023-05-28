<script lang="ts">
import { VueElement, defineComponent } from "vue";

import ConversationWithBot from "../components/ConversationWithBot.vue";

export default defineComponent({
  components: {
    ConversationWithBot
  }
});
</script>

<template>

  <div class="main">
    <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title white">Chat-bot turismo Gandia</h1>
            <p class="subtitle white">En colaboración con el ayuntamiento de Gandia</p>
          </div>
        </div>
        <div class="columns box">
          <ConversationWithBot></ConversationWithBot>
        </div>
      </div>
  </div>
</template>

<style scoped>
.white{
  color: white; 
}
.main{
  background-image:  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('../assets/images/fondoGandia2.jfif');
  background-repeat: no-repeat;
  background-size: cover;
}

.container{
  height: 100vh;
  padding: 24px;
}
.box{
  
}
</style>
