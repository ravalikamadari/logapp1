<template>
  <div>
    <header>
      <el-page-header @back="goBack" v-loading="loading"></el-page-header>
      <h2>Profile</h2>
    </header>
    <hr />
    <div class="all">
      <p>Name : {{ name }}</p>
      <p>Email : {{ email }}</p>
      <br />
      <button class="button" @click="moveToLogin">Log out</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['name', 'email']),
  },
  data() {
    return {
      // name:'',
      // email:'',
    }
  },
  methods: {
    moveToLogin() {
      this.$router.push('/loginpage')
    },
    goBack() {
      this.$router.push('/log')
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: whitesmoke;
}
h2 {
  text-align: center;
  margin-top: 10px;
}
.all {
  background-color: white;
  display: block;
  text-align: center;
  width: 25rem;
  margin: 1px auto;
  margin-top: 30px;
  /* margin-bottom: 100px; */
  border: 1px solid #d4fde9;
  border-radius: 10px;
  box-shadow: #707271 0px 5px 17px;
}
p {
  font-weight: 600;
  font-size: 1.2rem;
  margin-right: 10rem;
}
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 150px;
  margin-bottom: 50px;
  font: inherit;
  border: 1px solid #fafcfb;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
}
.button:hover,
.button:active {
  background: rgb(182, 180, 180);
  color: #707271;
}
.button:focus {
  outline: none;
}
</style>