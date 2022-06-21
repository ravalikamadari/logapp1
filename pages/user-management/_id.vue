<template>
  <div class="main">
    <header>
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="setEditMode"
        v-if="!editMode"
      ></el-button>
      <el-button
        type="primary"
        icon="el-icon-check"
        v-if="editMode"
        @click="updateUser"
      ></el-button>
      <!-- <el-button type="primary" icon="el-icon-delete"></el-button> -->
    </header>
    <div class="nav">
      <el-page-header @back="goBack"></el-page-header>
    </div>
    <div class="tags">
      <div class="single-user">
        <p>
          Name : <span>{{ user.name }}</span>
        </p>
        <p>
          Email : <span>{{ user.email }}</span>
        </p>
        <p>
          Is Superuser :<span>{{ user.is_superuser }}</span>
        </p>
        <p>
          Status :<input v-model="superuser" v-if="editMode" />
          <span v-else>{{ user.status == 1 ? 'Active' : 'Deactive' }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      superuser: false,
      editMode: false,
      tags: '',
      checkbox: false,
      isVisible: false,
      options: [],
      value: '',
    }
  },
  methods: {
    goBack() {
      this.$router.push('/user-management')
    },
    setEditMode() {
      this.editMode = true
      this.superuser = this.user.is_superuser
    },
    updateUser() {
      this.editMode = false
      this.$store.dispatch('updateUser', {
        is_superuser: this.superuser,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
}
.main {
  margin-left: 25px;
}
.single-user {
  text-align: center;
}
header {
  display: block;
  text-align: right;
  // margin-top: -2rem;
  margin-right: 1rem;
}
.tags {
  background-color: white;
}
.nav {
  margin-top: -2rem;
}

label {
  display: block;
  text-align: center;
  padding: 1rem;
  font-weight: 700;
}
input {
  margin-top: 2rem;
}
</style>