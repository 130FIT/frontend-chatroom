<template>
  <li class="li-message">
    <div class="info-message">
      <span class="timestamp">{{ message.timestamp }}</span>
      <span>{{ message.username }}</span>
    </div>
    <div class="content-message">
      <p>{{ message.text }}</p>
    </div>
  </li>
</template>
<script>
export default {
  name: "_Message",
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.li-message {
  width: 100%;
  p {
    font-size: 1rem;
    color: #333;
  }
  .info-message {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;

    .timestamp {
      font-size: 12px;
      color: #333;
    }
  }
  .content-message {
    display: flex;
    justify-content: end;
    width: 100%;
  }
}
</style>
