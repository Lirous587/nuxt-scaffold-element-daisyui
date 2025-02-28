export const useMyThemeStore = defineStore("myThemeStore", () => {
  const theme = ref("light");

  const initMode = () => {
    if (localStorage.theme === "dark") {
      darkMode();
    } else {
      lightMode();
    }
  };

  const darkMode = () => {
    // 设置 data-theme 为 dark
    document.documentElement.setAttribute("data-theme", "dark");
    // 添加 dark 类到 HTML 元素
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    theme.value = "dark";
  };

  const lightMode = () => {
    // 设置 data-theme 为 light
    document.documentElement.setAttribute("data-theme", "light");
    // 移除 dark 类
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    theme.value = "light";
  };

  const getMode = () => {
    return theme;
  };

  onMounted(() => {
    initMode();
  });

  return {
    theme,
    initMode,
    getMode,
    darkMode,
    lightMode,
  };
});
