<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <main>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">Overview</h1>
            <p class="subtitle">See current status</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="box">
              <h5 class="title is-5">
                <span class="icon">
                  <i class="bi bi-chat-square-text"></i>
                </span>
                Conversational server
              </h5>
              <span class="tag is-success">Online</span>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h5 class="title is-5">
                <span class="icon">
                  <i class="bi bi-code"></i>
                </span>
                Action server
              </h5>
              <span class="tag is-danger">Offline</span>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h5 class="title is-5">
                <span class="icon"> <i class="bi bi-speedometer2"></i> </span>
                Active model
              </h5>
              <span class="tag is-light is-rounded">20220318-120244</span>

              <RouterLink style="float: right" to="/models">
                See more
                <span
                  style="vertical-align: middle"
                  class="icon bi bi-arrow-right"
                ></span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section light-section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">Statistics</h1>
            <p class="subtitle">See latest stats</p>
            <p><strong>[To be implemented]</strong></p>
          </div>
        </div>
        <div class="columns"></div>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
