<template>
  <div>
    <header>
      <el-page-header @back="goBack" v-loading="loading"></el-page-header>
      <h2>All Users</h2>
      <div id="logs">
        <input
          type="search"
          class="search-bar"
          v-model="queryParams.title"
          placeholder="Search"
          @change="getUsers"
        />
      </div>
    </header>
    <hr />
    <div class="user-table">
      <el-table :data="users" style="width: 100%" @row-click="rowClick">
        <el-table-column type="index"> </el-table-column>
        <el-table-column property="name" label="Name"> </el-table-column>
        <el-table-column property="email" label="Email"> </el-table-column>
        <el-table-column
          :formatter="cellValueRenderer"
          property="is_superuser"
          label="Is Superuser"
        >
        </el-table-column>
        <el-table-column
          :formatter="cellValueRenderer2"
          property="status"
          label="Status"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      queryParams: {
        page: 1,
        limit: 20,
        title: '',
      },
    }
  },
  computed: {
    ...mapState(['users']),
  },
  mounted() {
    this.$store.dispatch('getAllUsers', this.queryParams)
  },

  methods: {
    rowClick(row, column, event) {
      this.$store.dispatch('userGetById', row.id)
      this.$router.push('/user-management/' + row.id)
    },
    goBack() {
      this.$router.push('/log')
    },
    async getUsers() {
      await this.$store.dispatch('getAllUsers', this.queryParams)
    },
    cellValueRenderer(row, column, cellValue, index) {
      let value = cellValue
      if (typeof row[column.property] === 'boolean') {
        value = String(cellValue)
      }
      return value
    },
    cellValueRenderer2(row, column, cellValue, index) {
      let value = cellValue
      if (value == 1) {
        return 'Active'
      } else return 'Deactive'
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
input {
  display: block;
  margin: 1px auto;
  padding: 8px;
  width: 250px;
  border: 1px solid #4c4d4c;
  border-radius: 10px;
  text-align: left;
  font-size: medium;
}
section {
  background-color: white;
}
.user-table {
  margin: auto;
  width: 60%;
}
</style>