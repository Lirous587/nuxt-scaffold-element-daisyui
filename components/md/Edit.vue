<template>
  <MdEditor
    v-model="content"
    editorId="editorId-edit"
    :previewTheme="codeTheme"
    :showToolbarName="true"
    :theme="themeStore.theme"
    noUploadImg
    ref="editorRef"
  >
  </MdEditor>
</template>

<script setup>
// 使用插件来做cdn 不需要导入
// import { MdEditor } from "md-editor-v3";
// import "md-editor-v3/lib/style.css";
import { useMyThemeStore } from "~/store/theme";

const toolbarsExclude = ["save", "preview", "htmlPreview", "github"];

const props = defineProps({
  height: {
    type: String,
    required: false,
    default: "700px",
  },
  codeTheme: {
    type: String,
    required: false,
    default: "default",
  },
});

const content = defineModel("content", {
  type: String,
  required: true,
  default: "",
});

const editorRef = ref(null);

const themeStore = useMyThemeStore();

defineExpose({
  editorRef,
});
</script>
