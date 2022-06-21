<template>
  <div>
    <header>
      <el-page-header @back="goBack"></el-page-header>
      <h3>Update User</h3>
    </header>
    <hr />
    <div class="all">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Email :</p>
      <input type="email" id="email" v-model="email" />

      <p class="title-1 title-4">Current Password :</p>
      <input type="password" id="Current password" v-model="currentPassword" />

      <p class="title-1 title-5">New Password :</p>
      <input type="password" id="New password" v-model="newPassword" />

      <p class="title-6">Status : {{ }}</p>
      <!-- <input type="status" v-model="status" /> -->
      <br /><br />
      <button class="button" @click="updateUser">Update User</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      status: '',
  }
  },
  methods:{
    async updateUser(){
      await this.$store.dispatch('updateUser')
      alert('User Updated')
      this.$router.push('/allUsers')
    },
   goBack() {
      this.$router.push('/log')
    },
    // backFunction() {
    //   this.$router.push('/logs')
    // },
  },
}
</script>

<style scoped>
body {
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: whitesmoke;
}
.all {
  background-color: white;
  display: block;
  text-align: center;
  width: 25rem;
  margin: 1px auto;
  margin-top: 30px;
  border: 1px solid #d4fde9;
  border-radius: 10px;
  box-shadow: #707271 0px 5px 17px;
  /* height: 100%; */
}
h3{
    text-align: center;
    margin-top: 10px;
}
label {
  display: block;
  text-align: center;
}
input {
  width: 250px;
  padding: 12px;
  font-weight: 500;
  font-size: medium;
  border: 2px solid #72b8fa;;
  border-radius: 10px;
  background: whitesmoke;
}
.title-1 {
  font-weight: bold;
  margin-right: 160px;
  margin-bottom: 4px;
}
.title-2 {
  display: block;
  margin-right: 12.5rem;
}
.title-3 {
  display: block;
  margin-right: 12.5rem;
}
.title-4{
    display: block;
    margin-right: 7.5rem;
}
.title-5{
    display: block;
    margin-right: 8.8rem;
}
.title-6 {
  display: block;
  margin-right: 12rem;
  font-weight: bold;
  /* margin-right: 160px; */
  margin-bottom: 4px;
}
#name {
  margin-left: -80px;
  margin-right: -100px;
}
input:hover {
  background: white;
}
/* input:active {
  background: rgb(214, 196, 196);
  color: #707271;
} */
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 270px;
  margin-top: 18px;
  margin-bottom: 30px;
  font: inherit;
  /* // margin-left:17px; */
  border: 1px solid #fafcfb;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
}
/* .button:hover, */
/* .button:active {
  background: rgb(182, 180, 180);
  color: #707271;
} */
.button:focus {
  outline: none;
}
</style>