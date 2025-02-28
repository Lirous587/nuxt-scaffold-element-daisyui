<template>
  <el-select v-model="theme" placeholder="选择代码主题">
    <el-option
      v-for="item in themeOptions"
      :label="item.name"
      :value="item.value"
    />
  </el-select>
</template>

<script setup>
const theme = defineModel("theme", {
  type: String,
  required: true,
  default: "default",
});

const themeOptions = [
  { label: "default", value: "default" },
  { label: "github", value: "github" },
  { label: "vuepress", value: "vuepress" },
  { label: "mk-cute", value: "mk-cute" },
  { label: "smart-blue", value: "smart-blue" },

  { label: "cyanosis", value: "cyanosis" },
  { label: "arknights", value: "arknights" },
];
</script>
