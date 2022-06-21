<template>
  <div>
    <header>
      <el-page-header @back="goBack" v-loading="loading"></el-page-header>
      <h2>Creating Tag</h2>
    </header>
    <hr />
    <div class="all">
      <p class="title-1 title-2">Name :</p>
      <input type="text" v-model="name" />

      <p class="title-1 title-3">Type Id :</p>
      <input type="text" v-model="type_id" />
      <br /><br />
      <button class="button" @click="createTag">Create Tag</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      type_name: '',
    }
  },
  methods: {
    async createTag() {
      await this.$store.dispatch('createTag', {
        name: this.name,
        type_id: parseInt(this.type_id),
      })
      alert('Tag Created')
      this.$router.push('/tag')
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
h2 {
  text-align: center;
  margin-top: 10px;
}
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
input {
  width: 250px;
  padding: 10px;
  border: 2px solid #72b8fa;
  border-radius: 10px;
  background: whitesmoke;
}
input:hover {
  background: white;
}
.title-1 {
  font-weight: bold;
  margin-right: 160px;
  margin-bottom: 4px;
}
.title-2 {
  display: block;
  margin-right: 13rem;
}
.title-3 {
  display: block;
  margin-right: 11.2rem;
}
// input:active {
//   background: rgb(214, 196, 196);
//   color: #707271;
// }
// .button:hover,
// .button:active {
//   background: rgb(182, 180, 180);
//   color: #707271;
// }
.button:focus {
  outline: none;
}
</style>