<template>
  <section class="main">
      <div class="content">
        <h1>Laravel + Vue3</h1>
        <div class="panel" >
          <h2>Developer Test</h2>
          <p>
            This is a permanent application created in php (Laravel). It used such technologies and frameworks:
          </p>
          <ul>
            <li>View 3</li>
            <li>Ajax</li>
            <li>UI element</li>
          </ul>
          <router-link :to="{name: 'search'}">
            <el-button class="bottom_button" type="success">Start the app!
            </el-button>
          </router-link>
        </div>
      </div>

  </section>
</template>

<script>
export default {
  name: "welcome"
}
</script>

<style scoped lang="scss">
  h1{
    color: #EE3B2E;
  }
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .panel{
    background-color: #2D3749;
    max-width: 700px;
    width: 100%;
    color: #FFFFFF;
    padding: 10px 10px 15px;
  }
  .content{
    margin: 0 auto;
    width: fit-content;
  }
  .bottom_button{
    min-width: 70px;
  }
</style>