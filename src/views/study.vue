<template>
  <div class="wrapper">
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* 设置页面背景色 */
  background-image: url("../assets/4.jpg"); /* 设置背景图片 */
  background-size: cover;
  background-position: center;
  filter: brightness(80%); /**亮度 */
  opacity: 0.95; /**透明度 */
  filter: hue-rotate(1deg); /**色调 */
  filter: contrast(80%); /** 对比度 */
}
</style>
