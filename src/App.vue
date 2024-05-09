<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import axios from "axios";
import { createApp } from "vue";
const app = createApp({});
</script>

<style>
* {
  /* 内外间距设为0 */
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  /* 去除列表中的样式：黑点 */
  list-style: none;
}
</style>
