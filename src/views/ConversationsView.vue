<script lang="ts">
import NavBar from "../components/NavBar.vue";
import ConversationButton from "../components/ConversationButton.vue";
import ConversationChat from "../components/ConversationChat.vue";
import { defineComponent } from "vue";

import { conversaService } from "../services/conversa.service";

export default defineComponent({
  components: {
    ConversationButton,
    ConversationChat,
    NavBar,
  },
  created() {
    this.fetchConversations();
  },
  data() {
    return {
      activeConversationId: '',
      conversationsError: false,
      conversationError: false,
      conversationsLoading: true,
      conversationLoading: true,
      conversations: [],
      conversation: null,
    };
  },
  methods: {
    fetchConversations() {
      conversaService.getConversations().then((data) => {
        console.log(data)

        if (data.error) {
          this.conversationsLoading = false;
          this.conversationsError = true;
          this.conversations = [];
          return;
        } else {
          this.conversationsError = false;
          this.conversationsLoading = false;
        }

        if (data.length > 0) {
          this.conversations = data;
          console.log(this.conversations)
          this.fetchConversation(this.conversations[0][0]);
        } else {
          this.conversations = [];
        }
      });
    },
    fetchConversation(id: string) {
      conversaService.getConversation(id).then((data) => {
        if (data.error) {
          this.conversationLoading = false;
          this.conversationError = true;
          return;
        }
        this.conversationLoading = false;
        this.conversation = data;
        console.log(data);
        this.activeConversationId = id;
      });
    },
  },
});
</script>

<template>
  <!-- Navbar -->
  <NavBar></NavBar>
  <main>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <h1 class="title">Conversations</h1>
            <p v-if="conversations" class="subtitle">
              {{ conversations.length }} in total
            </p>
          </div>
        </div>
        <div
          v-if="!conversationsLoading && !conversationsError && conversations"
          class="columns box"
        >
          <div class="column is-one-fifth">
            <div class="conversations-container">
              <ConversationButton
                @click="fetchConversation(conversation[0])"
                :conversation="conversation"
                :class="{ active: conversation[0] == activeConversationId }"
                v-for="conversation in conversations"
              ></ConversationButton>
            </div>
          </div>
          <div class="column conversation">
            <ConversationChat :conversation="conversation"></ConversationChat>
          </div>
          <div class="column is-one-fifth has-text-centered">
            <h5 class="title is-5">
              Conversation between<br />
              your bot and {{ activeConversationId }}
            </h5>
            <p class="subtitle">rest</p>
          </div>
        </div>
        <div
          v-if="conversationsLoading || conversationsError"
          class="columns box is-vcentered"
        >
          <div class="column is-half is-offset-one-quarter has-text-centered">
            <progress class="progress is-small is-link" max="100">15%</progress>
            <p v-if="conversationsError">Error fetching conversations</p>
          </div>
        </div>
        <div
          v-if="!conversations && !conversationsError"
          class="columns box is-vcentered"
        >
          <div class="column is-half is-offset-one-quarter has-text-centered">
            <p>You have no conversations yet!</p>
            <br />
            <RouterLink to="/interactive" class="button is-link is-medium">
              <span class="icon">
                <i class="bi bi-robot"></i>
              </span>
              <span> Start chatting </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.conversations-container {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 286px);
}
.conversation {
  border-left: 1px solid #dde2ef;
  border-right: 1px solid #dde2ef;
}
.active {
  background-color: #f6f7fb;
}
.box {
  min-height: calc(100vh - 200px);
}
</style>
