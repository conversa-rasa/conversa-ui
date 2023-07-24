<script lang="ts">
import { dateTime } from "../utils/Datetime";

export default {
  props: ["conversation"],
  setup() {
    return { dateTime };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-7">
            {{ dateTime.timestampToString(conversation[1]) }}
          </p>
          <p class="subtitle is-7">{{ conversation[2] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius: 50%;
}
.card {
  box-shadow: none;
}
.media-content {
  overflow: hidden;
  cursor: pointer;
}
.card-content {
  padding: 1rem;
}
</style>
