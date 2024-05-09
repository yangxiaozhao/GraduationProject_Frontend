<template>
  <div class="wrapper">
    <div class="mainland">
      <div class="title">
        <h2>跆拳道在线评分系统</h2>
      </div>
      <input type="text" v-model="name" placeholder="请输入姓名" />
      <input type="text" v-model="account" placeholder="请输入账号" />
      <input type="password" v-model="password" placeholder="请输入密码" />
      <input
        type="password"
        v-model="repeatPassword"
        placeholder="请再次输入密码"
      />
      <div class="rolechoose">
        <label for="role">选择角色：</label>
        <select id="role" name="role" v-model="role">
          <option value="" disabled selected>选择</option>
          <option value="student">学生</option>
          <option value="teacher">老师</option>
        </select>
      </div>
      <button @click="register">注册</button>
      <button @click="back">返回登录</button>
    </div>

    <!-- 弹窗 -->
    <div v-if="showErrorModal" class="modal" style="display: block">
      <div class="modal-content">
        <p>{{ errorMessage }}</p>
        <span class="close" @click="closeModal">&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    axios.get("ENDPOINT").then((response) => console.log(response));
  },
  data() {
    return {
      account: "", //用户名
      password: "", //密码
      repeatPassword: "", // 添加repeatPassword属性
      role: "",
      name: "",
      showErrorModal: false, // 控制是否显示错误弹窗
      errorMessage: "", // 错误消息
    };
  },
  methods: {
    register() {
      const url = "http://82.156.245.74:5000/register";
      const data = {
        account: this.account,
        password: this.password,
        repeatPassword: this.repeatPassword,
        role: this.role,
        name: this.name,
      };
      if (this.account === "" || this.password === "") {
        console.log("tttttt"); // alert('yhm');
        this.errorMessage = "账号和密码不能为空";
        this.showErrorModal = true;
        return; // 中断登录流程
      }
      if (this.password !== this.repeatPassword) {
        this.errorMessage = "两次密码不一致";
        this.showErrorModal = true;
        return; // 中断登录流程
      }
      if (this.name === "") {
        console.log("tttttt"); // alert('yhm');
        this.errorMessage = "请输入姓名";
        this.showErrorModal = true;
        return; // 中断登录流程
      }
      console.log(this.role, this.account.length);
      if (this.role === "") {
        this.errorMessage = "请选择角色";
        this.showErrorModal = true;
        return; // 中断登录流程
      }
      if (
        (this.role === "student" && this.account.length !== 12) ||
        (this.role === "teacher" && this.account.length !== 8)
      ) {
        this.errorMessage = "账号不符合要求";
        this.showErrorModal = true;
        return; // 中断登录流程
      }

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status === "success") {
            // 处理登录成功的逻辑
            console.log(data);
            this.$router.push("/login");
          } else {
            // 处理登录失败的逻辑
            this.showErrorModal = true;
            this.errorMessage = data.message;
          }
        })
        .catch((error) => {
          // 处理登录失败的逻辑，例如显示错误信息
          this.showErrorModal = true;
          this.errorMessage = error.message;
        });
    },
    closeModal() {
      // 关闭弹窗
      this.showErrorModal = false;
    },
    back() {
      this.$router.push("/login");
    },
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

.mainland {
  justify-content: center;
  text-align: center;
  width: 80%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}

.title {
  margin-bottom: 12px;
}

input {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
}

.rolechoose {
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

#role {
  width: 23%;
  height: 25px;
}

label {
  text-align: center;
  font-family: "Helvetica";
  font-weight: bold;
  font-size: 16px;
  padding-left: 10px;
  margin-right: 40px; /* 调整选择角色文字与下拉框之间的间距 */
}
button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* 弹窗样式 */
.modal {
  display: none;
  flex-direction: row;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* 将模态框居中 */
  width: 60%;
  max-width: 400px;
  border-radius: 8px; /* 设置边角弧度 */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  font-family: "宋体", "Microsoft YaHei", sans-serif;
  background-color: #fefefe;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100px; /* 设置高度为300px，你可以根据需要调整 */
  display: flex;
  flex-direction: row;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
}

.close {
  color: #aaa;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s; /* 添加过渡效果 */
  margin-left: 10px; /* 设置关闭按钮与文本之间的水平间距 */
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
}
</style>
