<template>
  <div class="contrainer">
    <div class="chatroom">
      <div class="chatroom__messages">
        <div class="chatroom__message">
          <div class="chatroom__message__username">
            <ul>
              <li>name of user</li>
              <li>name of user</li>
              <li>name of user</li>
              <li>name of user</li>
              <li>name of user</li>
              <li>name of user</li>
              <li>name of user</li>
              <li>name of user</li>
            </ul>
          </div>
          <div class="chatroom__message__content">
            <ul>
              <Message v-for="message in messages" :key="message.timestamp" :message="message" />
            </ul>
          </div>
        </div>
      </div>
      <div class="chatroom__input">
        <input type="text" placeholder="Enter your message..." />
        <button>Send</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import Message from "../components/Message.vue";
export default {
  name: "_chatroom",
  components: {
    Message,
  },
  data() {
    return {
      messages: [{
        username: "username1",
        text: "message1",
        timestamp: "12:00, 1/2/2567",
      }, {
        username: "username2",
        text: "message2",
        timestamp: "13:00, 1/2/2567",
      }],
    };
  },
};
</script>

<style scoped>
.contrainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .chatroom {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 600px;
    border: 1px solid #333;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0.5, 0.5);

    .chatroom__messages {
      flex: 1;
      overflow-y: auto;
      border-bottom: 1px solid #333;

      .chatroom__message__username {
        width: 100%;
        overflow-y: auto;
        gap: 10px;
        ul {
          list-style: none;
          display: flex;
          gap: 30px;
          overflow-x: scroll;
          padding: 5px;
          margin-bottom: 10px;
          li {
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: bold;
          }
        }
      }
      .chatroom__message__content {
        width: 100%;
        overflow-y: auto;
        height: 100%;
        gap: 5px;
        ul {
          display: flex;
          flex-direction: column;
          gap: 5px !important;
        }

        ul {
          list-style: none;
          display: flex;
          gap: 30px;
          padding: 5px;
          margin-bottom: 10px;
          li {
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: bold;
          }
        }
      }
    }
    .chatroom__input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;

      input {
        flex: 1;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #333;
        margin-right: 10px;
      }
      button {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #333;
        background-color: #333;
        color: #fff;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s;
        cursor: pointer;

        &:hover {
          background-color: #555;
        }
      }
    }
  }
}
</style>
