<template>
  <div class="overlay">
    <div class="wrapper">
      <div class="title">
        <img
          src="@/assets/ncep.png"
          style="width: 60px; height: 45px; filter: contrast(150%)"
        />
        <h2>&nbsp;华电跆拳道课务系统</h2>
      </div>
      <div class="person">
        <h1>{{ person.name[0] }}您好！</h1>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { getSession } from "../util.js";
import Footer from "../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      person: "",
    };
  },
  created() {
    // this.init();
    let person = JSON.parse(getSession("token"));
    // alert(person);
    this.person = person;
  },
  methods: {
    init() {
      let person = getSession("token");
      alert(person);
      this.person = person;
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  filter: brightness(80%); /**亮度 */
  opacity: 0.85; /**透明度 */
  filter: hue-rotate(1deg); /**色调 */
  filter: contrast(80%); /** 对比度 */
}

.overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.5
  ); /* 白色蒙版，这里设置了半透明度为 0.5 */
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
}

.title {
  padding-top: 18px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.person {
  font-size: 14px;
  font-family: "KaiTi";
  color: rgb(17, 10, 40);
  padding-left: 20px;
}
</style>
