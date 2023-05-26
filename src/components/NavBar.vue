<script setup lang="ts"></script>

<template>
  <header>
    <nav class="navbar is-white has-shadow">
      <div class="navbar-brand">
        <span class="navbar-item">
          <img src="/img/logo-big.png" alt="" />
        </span>
        <div
          class="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/">
            <span class="icon">
              <i class="bi bi-house"></i>
            </span>
            <span> Home </span>
          </RouterLink>
          <RouterLink class="navbar-item" to="/interactive">
            <span class="icon">
              <i class="bi bi-robot"></i>
            </span>
            <span> Talk to your bot </span>
          </RouterLink>
          <RouterLink class="navbar-item" to="/conversations">
            <span class="icon">
              <i class="bi bi-chat"></i>
            </span>
            <span> Conversations </span>
          </RouterLink>
          <RouterLink class="navbar-item" to="/models">
            <span class="icon">
              <i class="bi bi-speedometer2"></i>
            </span>
            <span> Models </span>
          </RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-link" target="_blank" href="#">
                  <span class="icon">
                    <i class="bi bi-share"></i>
                  </span>
                  <RouterLink class="navbar-item" to="/chatbotturismo">
                    <span> Share </span>
                  </RouterLink>
                  
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.navbar-item img {
  max-height: 2.75rem !important;
}
</style>
