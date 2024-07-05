<template>
  <div class="home">
    <div class="container">
      <h1>Welcome to the Chat Room!</h1>
      <p>This is the homepage of the chat room application.</p>
      <form @submit.prevent="joinChat">
        <div class="input-field">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" v-model="username" required />
        </div>
        <button type="submit">Join Chat</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "_Home",
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    const username = this.getCookie("username");
    if (username) {
      this.username = username;
    }
  },
  methods: {
    joinChat() {
      if (this.username) {
        alert("Joining chat as " + this.username);
        // this.$router.push({ name: "Chat", params: { username: this.username } });
      } else {
        alert("Please enter a username to join the chat.");
      }
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #333;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0.5, 0.5);
  }
}
form {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
label {
  margin-right: 10px;

  &:after {
    content: ":";
  }
}
input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #333;
  outline: none;
}
button {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
}
.input-field {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
