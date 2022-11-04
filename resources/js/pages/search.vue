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
            <el-input v-model="form.min_price"/>
          </el-col>
          <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
          <el-col :span="11">
            <el-input v-model="form.max_price"/>
          </el-col>

        </el-form-item>
        <el-form-item label="Bedrooms">
          <el-input v-model="form.bedrooms"/>
        </el-form-item>
        <el-form-item label="Bathrooms">
            <el-input v-model="form.bathrooms"/>
        </el-form-item>
        <el-form-item label="Storeys">
            <el-input v-model="form.storeys"/>
        </el-form-item>
        <el-form-item label="Garages">
            <el-input v-model="form.garages"/>
        </el-form-item>
        <el-form-item class="submit_buttons">
          <el-button type="primary" :disabled="loading" @click="onSubmit">Search</el-button>
          <el-button type="danger" :disabled="loading" @click="clear">Clear</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" v-loading="loading" empty-text="Nothing was found for your query" style="width: 100%">
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
      initialState: {
        name: '',
        min_price: '',
        max_price: '',
        bedrooms: '',
        bathrooms: '',
        storeys: '',
        garages: []
      },
      form: reactive({...this.initialState}),
      tableData: [],
      loading: false,
    }
  },
  created() {
    this.getHouses()
  },
  methods: {
    clear(){
      Object.assign(this.form, this.initialState);
      this.onSubmit()
    },
    onSubmit() {
      this.getHouses(this.form)
    },
    getHouses(params = {}) {
      this.loading = true;
      this.$api.houses.get(params).then(res => {
        this.loading = false;
        this.tableData = res.data
      }).catch(() => {
        this.loading = false;
      });
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