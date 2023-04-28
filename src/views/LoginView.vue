<script lang="ts">
import { defineComponent } from "vue";

import { authService } from "../services/auth.service";
import router from "../router/index";

export default defineComponent({
  data() {
    return {
      authMessage: "",
      password: "",
    };
  },
  methods: {
    login() {
      authService.login(this.password).then((response) => {
        if (response.auth) {
          authService.authenticate(true);
          router.push("/");
        } else {
          this.authMessage = "Wrong password";
        }
      });
    },
  },
});
</script>
<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half is-offset-one-quarter has-text-centered">
            <h1 class="title is-2">Welcome!</h1>
            <h2 class="subtitle is-3">Sign in to start managing your bot</h2>
            <div class="box">
              <figure class="avatar">
                <img src="/img/logo.png" />
              </figure>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
              </div>
              <button
                @click="login"
                class="button is-block is-link is-large is-fullwidth"
              >
                Sign in
              </button>
              <p class="auth-message">{{ authMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
.auth-message {
  color: #f14668;
  font-weight: 700;
  margin-top: 1rem;
}
.field {
  padding-bottom: 10px;
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
