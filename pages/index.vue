<template>
  <div class="title">
    <h1>Log App</h1>
    <!-- <hr /> -->
    <div class="login-page">
      <form @submit.prevent="login">
        <p class="title-1">Email :</p>
        <input
          type="email"
          v-model="email"
          placeholder="Enter email"
          required
        /><br /><br />
        <p class="title-2">Password :</p>
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
          required
        />
        <br /><br />
        <button class="button" v-loading="loading" type="submit" @click="login">
          Login
        </button>
      </form>
    </div>
    <div class="backdrop" v-show="backdrop">
      <div class="modal">
        <h1 class="modal_title">Allow notifications</h1>
        <div class="modal_actions">
          <a href="#" class="modal_action">Allow</a>
          <button class="modal_action modal_action--negative" type="button">
            Block
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getMessaging, onMessage, getToken } from 'firebase/messaging'
import { messaging } from '@/plugins/firebase'
export default {
  mounted() {
    const messaging = getMessaging()
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
    })
  },
  data() {
    return {
      email: '',
      password: '',
      backdrop: false,
    }
  },

  methods: {
    async login() {
      await signInAnonymously(getAuth())
      this.activate()
    },
    async activate() {
      const token = await getToken(messaging, {
        vapidKey:
          'BKteeHypHt6jSedfXXqv6Nkfm2abBlt-8jp3xO96CAEGkkVIH-gvIRFW6l9kCJo41HYSzFxTUXL4nfC2yERAGOA',
      })
      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
        notification_token: token,
      })
      if (this.$store.state.ErrorMsg) {
        this.$router.push('/')
      } else {
        this.$router.push('/log')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  // background-color: whitesmoke;
}
.login-page {
  display: block;
  width: 25rem;
  margin: 1px auto;
}
form {
  display: block;
  padding: 35px;
  // width: 100%;
  border: 1px solid #d4fde9;
  box-shadow: #707271 0px 5px 17px;
}
h1 {
  padding: 10px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: xx-large;
  font-weight: bold;
  margin-left: 40px;
}

.title {
  text-align: center;
  font-size: large;
}
.title-1 {
  font-weight: bold;
  margin-right: 13rem;
  margin-bottom: -20px;
}
.title-2 {
  font-weight: bold;
  margin-right: 11rem;
  margin-bottom: -20px;
}
input {
  width: 250px;
  padding: 12px;
  font-weight: 500;
  font-size: medium;
  border: 2px solid #72b8fa;
  border-radius: 10px;
  background: whitesmoke;
}
input:hover {
  background: white;
}
// input:active {
//   background: rgb(214, 196, 196);
//   color: #707271;
// }
.button {
  background: rgb(76, 136, 248);
  color: white;
  width: 280px;
  margin-top: 18px;
  font: inherit;
  // margin-left:17px;
  border: 1px solid #fafcfb;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
}
// .button:hover,
// .button:active {
//   background: rgb(182, 180, 180);
//   color: #707271;
// }
.button:focus {
  outline: none;
}
.modal {
  position: fixed;
  // display: none;
  // opacity: 0;
  // transform: translateY(1rem);
  // transition: opacity 200ms ease-out, transform 500ms ease-out;
  // z-index: 200;
  top: 2%;
  right: 2%;
  width: 20%;
  background: whitesmoke;
  padding: 0.5rem;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 1px rgba(44, 44, 44, 0.5);
}

.modal_title {
  text-align: center;
  margin: 0 0 0.5rem 0;
  font-weight: 300;
}

// .modal_actions {
//   text-align: center;
// }

.modal_action {
  background: rgb(60, 87, 243);
  border-color: rgb(63, 63, 63);
  text-decoration: none;
  color: black;
  font: inherit;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.modal_action:hover,
.modal_action:active {
  background: white;
  border: 1px solid black;
  // border-color: #7573fa;
}

.modal_action--negative {
  background: #c6c6c7;
  border-color: rgb(63, 63, 63);
  border: 1px solid whitesmoke;
}

.modal_action--negative:hover,
.modal_action--negative:active {
  background: rgb(252, 250, 250);
  border-color: rgb(63, 63, 63);
}
</style>