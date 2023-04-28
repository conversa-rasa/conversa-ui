<script lang="ts">
import { defineComponent } from "vue";
import { conversaService } from "../services/conversa.service";
import router from "../router/index";

export default defineComponent({
  data() {
    return {
      rasaPath: "",
      password: "",
      port: 55081,
      setupStatus: false,
    };
  },
  methods: {
    back() {
      router.push("/welcome");
    },
    finishSetup() {
      // Form control
      if (this.password.length <= 0) {
        alert("Please, fill admin password to continue.");
        return;
      }

      if (this.rasaPath.length <= 0) {
        alert("Please, fill Rasa installation path to continue.");
        return;
      }

      if (this.port <= 0) {
        alert("Please, fill server port to continue.");
        return;
      }

      // Check rasa installation path
      conversaService.checkInstallation(this.rasaPath).then((response) => {
        if (!response.install) {
          alert(
            "Rasa installation folder not valid. Please check that the specified absolute path contains a valid Rasa installation."
          );
          return;
        } else {
          conversaService.install(this.password).then((response) => {
            if (!response.install) {
              alert("Error while installing");
            } else {
              console.log("installed!");
              this.setupStatus = true;
              //router.push("/login")
            }
          });
        }
      });
    },
  },
});
</script>

<template>
  <main>
    <section class="section">
      <div v-if="!setupStatus" class="container">
        <div class="columns is-vcentered">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="title is-2">Initial setup</h1>

            <div class="field">
              <label class="label">Set admin password</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
            </div>

            <div class="field">
              <label class="label"
                >Rasa installation folder (absolute path)</label
              >
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="/home/user/my_rasa_chatbot"
                  v-model="rasaPath"
                />
              </div>
            </div>

            <!-- <div class="field">
              <label class="label">Conversa web server port</label>
              <div class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="8080"
                  v-model="port"
                />
              </div>
            </div> -->
            <button @click="back" class="button is-medium">
              <span class="icon">
                <i class="bi bi-arrow-left"></i>
              </span>
              <span> Back </span>
            </button>

            <button
              @click="finishSetup"
              class="button is-link right-button is-medium"
            >
              <span class="icon">
                <i class="bi bi-check"></i>
              </span>
              <span> Finish setup </span>
            </button>
          </div>
        </div>
      </div>

      <div v-if="setupStatus" class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="title is-2">Success!</h1>
            <h2 class="subtitle is-3">Conversa is now ready to be used</h2>
            
            <RouterLink class="button is-link is-large" to="/login">
              <span class="icon">
                <i class="bi bi-robot"></i>
              </span>
              <span> Start managing my bot </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.right-button {
  float: right !important;
}
button {
  margin-top: 1rem;
}
.columns {
  min-height: 100vh;
}
</style>
