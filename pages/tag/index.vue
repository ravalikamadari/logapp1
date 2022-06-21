<template>
  <div>
    <h2 align="center">Tag List</h2>
    <div class="tag-list">
      <el-table :data="tags" style="width: 100%">
        <el-table-column label="Id" prop="id"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <!-- <el-table-column label="Type Id" prop="type_id"> </el-table-column> -->
        <el-table-column align="right">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="tagEdit(scope.$index, scope.row)"
              >Edit</el-button> -->

            <el-button
              size="mini"
              type="danger"
              @click="tagDelete(scope.$index, scope.row.id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      search: '',
    }
  },
  async mounted() {
    await this.$store.dispatch('getTags')
  },
  computed: {
    ...mapState(['tags']),
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    async tagDelete(index, id) {
      await this.$store.dispatch('deleteTag', id)
      this.$store.commit('deleteTag', index)
    },
  },
}
</script>
<style scoped>
.tag-list {
  width: 80%;
  margin: auto;
}
</style>