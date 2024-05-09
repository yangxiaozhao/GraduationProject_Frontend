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

      <div class="videoArea">
        <input class="videochoose" type="file" @change="handleFileUpload" />
        <button class="uploadVideo" @click="uploadVideo">上传视频</button>
        <div v-if="videoUrl">
          <video :src="videoUrl" controls></video>
        </div>
        <div v-if="uploadProgress !== null">
          <p>上传进度: {{ uploadProgress }}%</p>
        </div>
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
      uploadProgress: null,
      uploadResult: null,
      selectedFile: null,
      videoFile: null,
      videoUrl: "",
      uploadProgress: 0, // 用于跟踪上传进度的变量
      uploadMessage: "", // 用于显示后端返回信息的变量
    };
  },
  created() {
    let person = JSON.parse(getSession("token"));
    this.person = person;
  },
  methods: {
    handleFileUpload(event) {
      this.videoFile = event.target.files[0];
    },
    async uploadVideo() {
      try {
        const formData = new FormData();
        formData.append("video", this.videoFile);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://82.156.245.74:5000/upload_video");

        // 监听上传进度
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            this.uploadProgress = Math.round(
              (event.loaded / event.total) * 100
            );
          }
        });

        // 监听上传完成事件
        xhr.addEventListener("load", () => {
          if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);
            this.videoUrl = responseData.videoUrl;
            alert(responseData.message);
          } else {
            throw new Error("Failed to upload video");
          }
        });

        // 发送请求
        xhr.send(formData);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
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
  filter: brightness(80%) contrast(80%) hue-rotate(1deg); /** 合并多个滤镜效果 */
  opacity: 0.85; /**透明度 */
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
    0.4
  ); /* 白色蒙版，这里设置了半透明度为 0.5 */
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
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

.videoArea {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 4vw, 0;
  height: 30vw;
  width: 100%;
}

.videochoose {
  width: 70%;
  font-size: 5vw;
}
</style>
