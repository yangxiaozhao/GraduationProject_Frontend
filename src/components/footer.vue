<template>
  <!-- 底部功能区 -->
  <ul class="footer">
    <li v-on:click="index">
      <p>首页</p>
    </li>
    <li v-on:click="study">
      <p>学习</p>
    </li>
    <li v-on:click="account">
      <p>我的</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "App",
  components: {},
  methods: {
    index() {
      if (this.$router.currentRoute.path !== "/index") {
        this.$router.replace("/index");
      }
    },
    study() {
      if (this.$router.currentRoute.path !== "/study") {
        this.$router.replace("/study");
      }
    },
    account() {
      if (this.$router.currentRoute.path !== "/account") {
        this.$router.replace("/account");
      }
    },
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 14vw;
  border-top: 1pt solid #ddd;
  /* 定位到页面最下方 */
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3vw;
}
.footer li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer li p {
  font-size: 4vw;
}
.footer li i {
  font-size: 5vw;
}
.footer li p a {
  text-decoration: none;
  color: inherit;
}
</style>
