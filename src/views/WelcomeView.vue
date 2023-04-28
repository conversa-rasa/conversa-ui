<script lang="ts">
import { defineComponent } from "vue";
import router from "../router/index";

export default defineComponent({
  methods: {
    initialSetup() {
      router.push("/setup");
    },
  },
});
</script>

<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <div class="is-flex is-horizontal-center">
              <figure class="image is-128x128">
                <img src="/img/logo-big.png" alt="" />
              </figure>
            </div>

            <h1 class="title is-2">
              Welcome to Conve<span style="color: #485fc7 !important">rsa</span>
            </h1>
            <h2 class="subtitle is-3">
              Please, choose the best option for you
            </h2>
            <button
              data-tts
              aria-label="Soon available"
              class="button is-large"
              disabled
            >
              Migrate from Rasa X
            </button>

            <button @click="initialSetup" class="button is-link is-large">
              Go with Conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
img {
  /* width: 22%; */
  margin: 1rem;
}
button {
  margin: 1rem;
}
.columns {
  min-height: 100vh;
}
h2 {
  margin: 1.5rem !important;
}
.is-horizontal-center {
  justify-content: center;
}
</style>
