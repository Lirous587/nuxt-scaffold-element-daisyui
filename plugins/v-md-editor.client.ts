import { defineNuxtPlugin } from "#app";
import { MdEditor, MdPreview } from "md-editor-v3";
// import "md-editor-v3/lib/style.css";
// import "md-editor-v3/lib/preview.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MdEditor", MdEditor);
  nuxtApp.vueApp.component("MdPreview", MdPreview);
});
