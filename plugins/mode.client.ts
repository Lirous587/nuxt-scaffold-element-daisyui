import { useMyThemeStore } from "~/store/theme";

export default defineNuxtPlugin((nuxtApp) => {
  const themeStore = useMyThemeStore();
  themeStore.initMode();
});
