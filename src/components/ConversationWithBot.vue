<script lang="ts">
import { VueElement, defineComponent } from "vue";
import SimpleConversation from "./messages/SimpleConversation.vue";

import '../assets/interaction.css'
import { interactiveService } from "../services/interactive.service";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
export default defineComponent({
  data() {
    return {
      USER_ID: "",
      message: "",
      elementoHTML: '',
      listaMensajes: [
          {
            isBot:1,
            text:"Hola! Soy TurisBot ¿que te apetece hacer hoy?",
            buttons:[
              {payload:"Quiero alquilar",title:"Quiero alquilar un vehiculo"},
              {payload:"ruta senderismo",title:"Ruta senderismo"}
              ]
          }
        ],
      dev:true
    };
  },
  components: {
    SimpleConversation
  },
  mounted() {
    this.scrollChatToBottom();
    this.generateIdMessage()
  },
  methods: {
    generateIdMessage(){
      this.USER_ID = uuidv4();
    },
    sendMessage(textoMensaje:string){

      this.listaMensajes.push({isBot:0,text:textoMensaje,buttons:null})

      interactiveService.postMessage(this.USER_ID,textoMensaje).then((response) => {
      this.message = "";
        response.forEach((element:any) => {
          console.log(element);
          var buttons = null;

          if(element.buttons !=null){
            buttons = element.buttons;
          }

          this.listaMensajes.push({isBot:1,text:element.text,buttons:buttons})
          this.scrollChatToBottom()
        });
      });
      
    },
    sendMessageFromInput(){
      this.sendMessage(this.message);
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


          <div class="column chat-container">
            <div class="chat-messages" >
              <div ref="chatDiv" class="chat">
                <SimpleConversation :miFuncion="sendMessage" :miMensaje="miMensaje" v-for="miMensaje in listaMensajes">
                </SimpleConversation>
              </div>
            </div>
            <div class="chat-input">
              <input type="text" class="input" v-model="message" @keyup.enter="sendMessageFromInput">
            <button
                @click="sendMessageFromInput"
                class="button is-link"
              >
                Enviar
              </button>

            </div>

          </div>
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
  height: 100vh;
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
