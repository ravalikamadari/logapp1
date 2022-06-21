<template>
  <div>
    <header>
      <el-page-header @back="goBack" v-loading="loading"></el-page-header>
      <h3>Creating User</h3>
    </header>
    <hr />
    <div class="all">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Email :</p>
      <input type="email" v-model="email" />

      <p class="title-1 title-4">Password :</p>
      <input type="password" v-model="password" />

      <div class="my-2 flex items-center text-sm">
        <p class="title-1 title-5">Is Superuser :</p>
        <el-radio-group v-model="radio2" class="ml-4">
          <el-radio label="1" :value="(isSuper = true)">Yes</el-radio>
          <el-radio label="2" :value="(isSuper = false)">No</el-radio>
        </el-radio-group>
      </div>
      <!-- <input type="radio" class="name1" @click="yes" /> Yes -->
      <!-- <input type="radio" class="name" @click="no" /> No <br /><br /> -->
      <!-- <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Sponsor"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item> -->
      <button class="button" @click="createUser">Create User</button>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      radio2: '',
      // isSuper: '',
      // isSuperuser: false,
    }
  },
  methods: {
    async createUser() {
      await this.$store.dispatch('createUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        is_superuser: false,
      })
      alert('User Created')
      this.$router.push('/user-management')
    },
    // async yes(){
    //   if(this.isSuperuser)
    //   {this.isSuperuser=false}else{this.isSuperuser=true}
    //   },
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
h3 {
  text-align: center;
  margin-top: 10px;
}
label {
  display: block;
  text-align: center;
}
input {
  width: 250px;
  padding: 10px;
  font-weight: 500;
  font-size: medium;
  border: 2px solid #72b8fa;
  border-radius: 10px;
  background: whitesmoke;
}
.title-1 {
  font-weight: bold;
  margin-right: 160px;
}
.title-2 {
  display: block;
  margin-right: 13rem;
  font-weight: bold;
  margin-bottom: 4px;
}
.title-3 {
  display: block;
  margin-right: 13rem;
  font-weight: bold;
  margin-bottom: 4px;
}
.title-4 {
  display: block;
  margin-right: 11.5rem;
  font-weight: bold;
  margin-bottom: 4px;
}
.title-5 {
  display: block;
  margin-right: 8rem;
  font-weight: bold;
  margin-bottom: 4px;
}
label {
  display: inline-block;
  //   margin-left: -30px;
  //   margin-right: -80px;
}
// .name {
//   margin-left: -80px;
//   margin-right: -100px;
// }
input:hover {
  background: rgb(252, 251, 251);
}
// input:active {
//   background: rgb(214, 196, 196);
//   color: #707271;
// }
.button {
  display: block;
  margin: auto;
  background: rgb(76, 136, 248);
  color: white;
  width: 280px;
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
// .button:hover,
// .button:active {
//   background: rgb(182, 180, 180);
//   color: #707271;
// }
.button:focus {
  outline: none;
}
</style>