<template>
  <section class="main">
    <div class="container">
      <h1>Search with filters</h1>
      <el-form :inline="true" label-position="top" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="Price(Min-max)">
          <el-col :span="11">
            <el-input v-model="form.name"/>
          </el-col>
          <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
          <el-col :span="11">
            <el-input v-model="form.name"/>
          </el-col>

        </el-form-item>
        <el-form-item label="Bedrooms">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="Bathrooms">
            <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="Storeys">
            <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="Garages">
            <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item class="submit_buttons">
          <el-button type="primary" @click="onSubmit">Search</el-button>
          <el-button type="danger" @click="onSubmit">Clear</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="price" label="Price" width="180"/>
        <el-table-column prop="bedrooms" label="Bedrooms" width="180"/>
        <el-table-column prop="bathrooms" label="Bathrooms" width="180"/>
        <el-table-column prop="storeys" label="Storeys" width="180"/>
        <el-table-column prop="garages" label="Garages" width="180"/>
      </el-table>
    </div>
  </section>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: "search",
  data() {
    return {
      form: reactive({
        name: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        storeys: '',
        garages: []
      }),
      tableData: [

      ],
      loading: false,

    }
  },
  created() {
    this.getHouses()
  },
  methods: {
    onSubmit() {
      alert('submit!')
    },
    getHouses(params = {}) {
      this.$api.houses.get(params).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 40px;
}
.el-form--inline .el-form-item.submit_buttons{
  width: 100%;
}
.main {
  text-align: center;
  padding-top: 40px;
  --el-text-color-regular: #FFFFFF;
}
.el-input{
  --el-input-text-color: #000000 ;
}
.el-table{
  //--el-fill-color-blank: transparent;
  --el-table-text-color: #000;
}
.container {
  max-width: 1191.9px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  color: #FFFFFF;
}

</style>