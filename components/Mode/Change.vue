<template>
  <label class="swap swap-rotate">
    <!-- 选中表示暗模式 -->
    <input type="checkbox" v-model="nowMode" />
    <SunIcon class="swap-off h-7 w-7 fill-current" />
    <MoonIcon class="swap-on h-7 w-7 fill-current" />
  </label>
</template>

<script lang="ts" setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { useMyThemeStore } from "~/store/theme";

const themeStore = useMyThemeStore();

// 将初始状态设置为当前是否为暗模式
const nowMode = ref(themeStore.theme === "dark");

// 监听 nowMode 变化，根据布尔值调用不同的主题切换函数
watch(nowMode, (newValue) => {
  if (newValue) {
    themeStore.darkMode();
  } else {
    themeStore.lightMode();
  }
});
</script>
