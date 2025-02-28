<template>
  <div class="fixed inset-0 h-[60px] z-[10000]">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <Bars3Icon />
        </button>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <EllipsisHorizontalIcon />
        </button>
      </div>
      <div class="flex-none mx-3">
        <button class="btn btn-square btn-ghost">
          <ModeChange />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bars3Icon, EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";
</script>
