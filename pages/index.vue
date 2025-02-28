<template>
  <div class="container">
    <h1>Element Plus 按需引入示例</h1>
    <el-row class="mb-4">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>

    <el-card>
      <template #header> </template>
      呵呵哒
      <template #footer> </template>
    </el-card>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  region: "",
});
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
}
.mb-4 {
  margin-bottom: 16px;
}
</style>
