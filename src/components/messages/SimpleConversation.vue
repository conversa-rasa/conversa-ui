<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["miMensaje","miFuncion"],
  data() {
    return {
      showButtons: true
    };
  },
  methods:{
    handleButton (value:string){
      this.miFuncion(value);
      this.showButtons=false;
    }
  }
});
</script>

<template>
<div class="container-buttons-message">

  <div class= "chat-message" :class="{'user-message': miMensaje.isBot == 0,'bot-message': miMensaje.isBot == 1}">
    <div  v-html="miMensaje.text" class="chat-bubble" :class="{'user-bubble':miMensaje.isBot == 0, 'bot-bubble': miMensaje.isBot == 1}"></div>
  </div>
  
  <div class="container-buttons" >
    <button class="button" v-if="miMensaje.buttons!=null && showButtons" v-for="button in miMensaje.buttons" @click="handleButton(button.payload)" :value="button.payload">{{ button.title }}</button>
  </div>

</div>
  
</template>
<style scoped>
.container-buttons-message {
  display: flex;
  flex-direction: column;
}

.container-buttons {
  display: flex;
  flex-direction: row;
  margin: 2px 24px;
}

.button{
  margin: 5px;
}

.button:hover{
  background-color:#485fc7;
  color: white;
}
</style>