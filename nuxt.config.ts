import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/md-editor-v3@5.3.2/lib/style.css",
        },
        // 添加预览样式
        {
          rel: "stylesheet",
          href: "https://unpkg.com/md-editor-v3@5.3.2/lib/preview.css",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/md-editor-v3@5.3.2/lib/umd/index.js",
          defer: true,
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    "@element-plus/nuxt",
  ],
  elementPlus: {
    importStyle: "css",
    // 如果需要暗黑模式可以添加
    themes: ["dark"],
    // 如果只想引入部分组件，可以在这里指定
    components: [],
    // 按需引入指令
    directives: [],
  },
});
