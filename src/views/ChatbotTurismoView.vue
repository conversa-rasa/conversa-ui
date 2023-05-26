<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import '../assets/interaction.css'
import { interactiveService } from "../services/interactive.service";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
export default defineComponent({
  data() {
    return {
      USER_ID: "",
      message: "",
      elementoHTML: ''
    };
  },
  components: {  },
  mounted() {
    this.scrollChatToBottom();
  },
  methods: {
    generateIdMessage(){
      this.USER_ID = uuidv4();
    },
    sendMessage(){
      var elementHTML = '<div class="chat-message user-message"><div class="chat-bubble user-bubble">' + this.message+'</div></div>';
      this.addElement(elementHTML);
      interactiveService.postMessage(this.USER_ID,this.message).then((response) => {
      this.message = "";
        response.forEach((element:any) => {
          console.log(element);
          elementHTML = '<div class="chat-message bot-message"><div class="chat-bubble bot-bubble">' + element.text+'</div></div>';
          this.addElement(elementHTML);
          
        });
      });
      
    },
    addElement(newElement:String) {
      this.elementoHTML += newElement;
      this.scrollChatToBottom();
    },
    scrollChatToBottom() {
      this.$nextTick(() => {
        var chatDiv = this.$refs.chatDiv;
        chatDiv.scrollTop = chatDiv.scrollHeight;
      });
    }
    
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
          <div class="column chat-container">
            <div class="chat-messages" >
              <div v-html="elementoHTML" ref="chatDiv" class="chat" >
              </div>
            </div>
            <div class="chat-input">
              <input type="text" class="input" v-model="message" @keyup.enter="sendMessage">
            <button
                @click="sendMessage"
                class="button is-link"
              >
                Enviar
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
/*¡¡  height: 100vh;*/
  justify-content: flex-end;
  padding:0;
}
.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  font-size: 16px; /* Tamaño de letra en píxeles */

}
.box{
  padding: 0;
}
 .chat {
  overflow: auto;
  max-height: calc(100vh - 286px);
  display: flex;
}

.image {
  max-width: 320px;
  border-radius: 10px;
}
.button {
  flex-shrink: 0;
}
.input {
  flex-grow: 1;
  margin-right: 8px;
}
.chat::-webkit-scrollbar {
  width: 8px;
}

.chat::-webkit-scrollbar-track {
  background: #f2f2f2;
}

.chat::-webkit-scrollbar-thumb {
  background-color: #888888;
  border-radius: 4px;
}

.chat::-webkit-scrollbar-thumb:hover {
  background-color: #555555;
}
</style>
