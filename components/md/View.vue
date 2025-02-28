<template>
  <!-- 对搜索引擎可见但用户不可见的预渲染内容 -->
  <div class="hidden" v-html="renderedContent" data-seo="true"></div>

  <ClientOnly>
    <MdPreview
      v-model="content"
      editorId="editorId-preview"
      :mdHeadingId="mdHeadingId"
      :theme="theme"
      :previewTheme="previewTheme"
      codeTheme="atom"
      @onHtmlChanged="onHtmlChanged"
      :autoFoldThreshold="99"
    />
  </ClientOnly>
</template>

<script setup>
import { useMyThemeStore } from "~/store/theme";
import { marked } from "marked";

const content = defineModel("content", {
  type: String,
  required: true,
});

const props = defineProps({
  previewTheme: {
    type: String,
    default: "default",
  },
});

// 渲染 Markdown 为 HTML 用于 SEO
const renderedContent = computed(() => {
  try {
    if (!content.value) return "";
    return marked(content.value);
  } catch (error) {
    console.error("Markdown 渲染错误:", error);
    return content.value; // 如果渲染失败，至少返回原始文本
  }
});

const themeStore = useMyThemeStore();

const anchorIdList = ref([]);

const mdHeadingId = (text, level, index) => {
  const anchorId = `${index}`;
  anchorIdList.value.push(anchorId);
  return anchorId;
};

const anchors = ref([]);

const mdInit = () => {
  anchors.value = [];
  const hList = anchorIdList.value.map((id) => document.getElementById(id));
  anchors.value = Array.from(hList).map((el, index) => ({
    id: anchorIdList.value[index],
    title: el?.innerText || "",
    active: false,
  }));
};

const observerHList = () => {
  const hList = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");

  const myObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { id } = entry.target;
        if (entry.isIntersecting) {
          anchors.value.forEach((anchor) => {
            anchor.active = false;
          });
          const anchor = anchors.value.find((item) => item.id === id);
          if (anchor && !anchor.active) {
            anchor.active = true;
          }
        }
      });
    },
    {
      rootMargin: "0px 0px -99% 0px",
    }
  );

  hList.forEach((el) => {
    myObserver.observe(el);
  });
};

const onHtmlChanged = async () => {
  await nextTick();
  observerHList();
};

const theme = computed(() => themeStore.theme);

onMounted(async () => {
  await nextTick();
  mdInit();
});

defineExpose({
  anchors,
});
</script>

<style scoped>
/* 隐藏 SEO 内容，但确保爬虫可以读取 */
.hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
